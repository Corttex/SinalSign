# 03. MOTOR SCRAPER B2B POR TEMAS (DF) & AUTOMAÇÃO WHATSAPP
**Projeto:** Sinal Sign Lead Hunter & WhatsApp Proposal Dispatcher  
**Stack:** Python 3.11+ (FastAPI + Playwright Stealth) + Integração Next.js API + Evolution API v2 (WhatsApp).  
**Objetivo:** Captar empresas reais de Brasília e Entorno segmentadas por tema/nicho, extrair dados de contato, validar WhatsApp e enviar abordagens personalizadas ou links diretos de propostas (`/p/[token]`).

---

## 1. ARQUITETURA DO SCRAPER DE CLIENTES POR TEMAS (`/admin/scraper`)

Na comunicação visual B2B, os melhores clientes estão agrupados por nicho e região geográfica. O painel permite criar campanhas de extração combinando **Tema (Nicho)** + **Região Administrativa do DF**.

### 1.1. Matriz de Temas de Alta Conversão Pré-Configurados no Painel
O operador pode digitar qualquer tema livre ou selecionar os **Temas Campeões de Comunicação Visual**:
1. **Saúde & Beleza:** *Clínicas Odontológicas, Clínicas de Estética, Salões de Beleza, Barbearias, Consultórios Médicos, Academias e Studios de Pilates* (Alta demanda por Fachada ACM, Letra Caixa Iluminada e Adesivo Jateado).
2. **Jurídico & Corporativo:** *Escritórios de Advocacia, Contabilidade, Imobiliárias, Seguradoras, Coworkings* (Alta demanda por Logomarca em Acrílico Espelhado na recepção — igual ao case *Resende Advocacia* — e Placas com Prolongadores — igual ao case *Invest Flat*).
3. **Gastronomia & Varejo:** *Restaurantes, Hamburguerias, Cafeterias, Padarias, Lojas de Roupas, Óticas, Pet Shops, Supermercados* (Alta demanda por Luminosos, Lonas, Banners, Adesivos de Vitrine e Impressão UV/DTF).
4. **Construção & Condomínios:** *Construtoras, Incorporadoras, Administradoras de Condomínios, Arquitetos e Engenheiros* (Alta demanda por Totens — igual ao *Carlton Tower* —, Sinalização Predial — igual ao *Vila das Flores* — e Placas de Obra).

### 1.2. Regiões do DF e Entorno Pré-Mapeadas
* Asa Sul, Asa Norte, Sudoeste, Noroeste, Lago Sul, Lago Norte, SIA, SOF Sul/Norte, Taguatinga, Águas Claras, Guará I e II, Vicente Pires, Ceilândia, Samambaia, Gama, Santa Maria, Sobradinho, Planaltina, Valparaíso de Goiás, Águas Lindas e Luziânia.

### 1.3. Pipeline de Extração (Python Playwright + BrasilAPI)
Quando o usuário clica em **"Iniciar Extração por Tema"**, o microserviço Python executa 4 etapas:

1. **Busca Estruturada no Google Maps (`Playwright Chromium Headless`):**
   * Acessa a busca geolocalizada: `"{temaKeyword} em {regionDf}"`.
   * Faz o *infinite scroll* controlado no painel lateral de resultados do Maps até atingir o limite configurado (ex: 50 a 200 empresas por bateria).
   * Para cada estabelecimento, extrai:
     * `tradeName` (Nome da empresa)
     * `niche` (Categoria principal)
     * `address` (Endereço completo e bairro)
     * `phoneRaw` (Telefone fixo ou celular)
     * `website` e `instagram` (quando listados no perfil)
     * `googleRating` e `googleReviews` (excelente filtro: empresas com poucas avaliações geralmente são recém-abertas e precisam urgente de fachada/placa!).
2. **Deep-Crawl no Site/Bio do Lead (Enriquecimento Opcional):**
   * Se o lead possui site próprio ou link na bio listado no Maps, o worker faz uma requisição HTTP leve (`httpx` + `BeautifulSoup`) na página inicial procurando links `wa.me/`, `api.whatsapp.com`, `@instagram` e números de `CNPJ` no rodapé.
3. **Consulta Pública de CNPJ (`BrasilAPI`):**
   * Caso encontre o CNPJ, consulta gratuitamente `https://brasilapi.com.br/api/cnpj/v1/{cnpj}` para preencher a Razão Social oficial, nome dos sócios e data de abertura da empresa.
4. **Higienização e Validação de WhatsApp:**
   * Converte todos os números para o padrão brasileiro com DDD 61/62 (`55619XXXXXXXX` ou WhatsApp Business fixo `55613XXXXXXX`).
   * Verifica na **Evolution API** (`POST /chat/whatsappNumbers/{instance}`) se o número possui conta ativa no WhatsApp antes de marcar `whatsappValid = true`.
   * Faz `upsert` no PostgreSQL (evitando duplicados pelo campo `whatsapp`).

---

## 2. ESTRUTURA DO WORKER PYTHON (`scraper_service/main.py`)

```python
# Especificação funcional para implementação no Antigravity IDE
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
import asyncio
import re
from playwright.async_api import async_playwright

app = FastAPI(title="Sinal Sign Lead Scraper Worker")

class ScrapeRequest(BaseModel):
    campaignId: str
    themeKeyword: str
    regionDf: str
    maxResults: int = 50

def normalize_br_phone(raw_phone: str) -> str | None:
    digits = re.sub(r"\D", "", raw_phone or "")
    if not digits:
        return None
    if digits.startswith("0"):
        digits = digits[1:]
    if len(digits) in (10, 11) and not digits.startswith("55"):
        digits = f"55{digits}"
    return digits if len(digits) in (12, 13) else None

async def run_maps_scraper(payload: ScrapeRequest):
    query = f"{payload.themeKeyword} em {payload.regionDf}"
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            locale="pt-BR",
            viewport={"width": 1440, "height": 900},
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        )
        page = await context.new_page()
        await page.goto(f"https://www.google.com/maps/search/{query}", timeout=60000)
        await page.wait_for_selector('div[role="feed"]', timeout=30000)

        # Scroll progressivo na lista lateral
        feed = page.locator('div[role="feed"]')
        for _ in range(8):
            await feed.evaluate("el => el.scrollBy(0, 2500)")
            await asyncio.sleep(1.5)

        cards = await page.locator('div[role="feed"] > div > div[jsaction]').all()
        extracted_leads = []

        for card in cards[:payload.maxResults]:
            try:
                await card.click()
                await asyncio.sleep(1.2)
                name = await page.locator("h1.DUwDvf").text_content() or ""
                phone_el = page.locator('button[data-item-id^="phone:tel:"]')
                raw_phone = await phone_el.get_attribute("data-item-id") if await phone_el.count() > 0 else ""
                whatsapp = normalize_br_phone(raw_phone)

                if name and whatsapp:
                    extracted_leads.append({
                        "tradeName": name.strip(),
                        "whatsapp": whatsapp,
                        "niche": payload.themeKeyword,
                        "cityRegion": payload.regionDf,
                        "source": "SCRAPER_GOOGLE_MAPS"
                    })
            except Exception:
                continue

        await browser.close()
        # Envia lote extraído para o endpoint interno do Next.js (/api/internal/scraper/ingest)
        return extracted_leads

@app.post("/scrape/start")
async def start_scrape(req: ScrapeRequest, background_tasks: BackgroundTasks):
    background_tasks.add_task(run_maps_scraper, req)
    return {"status": "STARTED", "campaignId": req.campaignId}
```

---

## 3. INTEGRAÇÃO WHATSAPP: ENVIO DE PROPOSTA E PROSPECÇÃO POR NICHO

O módulo de WhatsApp opera em **duas camadas** (Automática via API + Link Direto Instantâneo):

### 3.1. Envio Direto de Proposta Comercial (Com Link `/p/[token]`)
Assim que um orçamento fica pronto no sistema:
1. O sistema gera a mensagem estruturada com variáveis dinâmicas:
   > *"Olá, *{client.name}*! Tudo bem? 👋*  
   > *Aqui é da **Sinal Sign Comunicação Visual (Brasília - DF)**.*  
   >  
   > *Preparamos a sua proposta comercial detalhada para **{proposal.title}**.*  
   >  
   > *📐 **Resumo do Projeto:***  
   > *{lista_itens_com_medidas}*  
   > *💰 **Investimento Total:** R$ {proposal.total}*  
   > *⏱️ **Prazo estimado:** {proposal.deliveryDays} dias úteis*  
   >  
   > *🔗 **Acesse sua proposta interativa com fotos de referência e aprove online clicando no link abaixo:***  
   > *https://sinalsignimpressao.com/p/{proposal.token}*  
   >  
   > *Qualquer dúvida sobre materiais ou medidas, estou à disposição por aqui!"*
2. **Disparo Híbrido:**
   * Se a instância da **Evolution API** estiver conectada, envia em background com preview do link e opcionalmente anexa o PDF timbrado ou uma foto de projeto similar.
   * Simultaneamente, disponibiliza o botão **"Abrir Conversa Direta no WhatsApp"** (`https://wa.me/{client.whatsapp}?text={encodedMessage}`) para o vendedor enviar do próprio aparelho/WhatsApp Web em 1 clique caso prefira atendimento humano imediato.

### 3.2. Disparo de Prospecção Ativa por Tema (Com Imagem do Portfólio)
Para os clientes extraídos pelo Scraper no módulo de Temas:
* O sistema seleciona automaticamente a **foto de case real correspondente ao tema extraído**:
  * Se o tema é **Advocacia / Contabilidade** $\rightarrow$ Anexa o post gerado da *Resende Advocacia* (Acrílico Espelhado Dourado).
  * Se o tema é **Salão / Estética / Clínica** $\rightarrow$ Anexa o post da *Send Beauty* ou *R Salon* (Fachada em ACM + Letra Caixa).
  * Se o tema é **Imobiliária / Condomínio** $\rightarrow$ Anexa o post da *Invest Flat* ou *Carlton Tower*.
* **Regras Anti-Bloqueio (Cadência Segura):**
  * Fila com delay randômico entre `45s` e `110s` por mensagem.
  * Variação automática de saudação (*Spintax*: *"Olá, bom dia"* / *"Tudo bem?"* / *"Olá equipe da {tradeName}"*) para que nenhuma mensagem seja idêntica à anterior.
  * Limite diário configurável no painel e botão de abertura individual via link direto (`wa.me`) na tabela de Leads para prospecção semi-automática ultra segura.

---

## 4. ORDEM DE EXECUÇÃO NO ANTIGRAVITY IDE

Para construir tudo de forma limpa e modular sem quebrar dependências:
1. **Passo 1:** Rodar o `01_FRONTEND_LIQUID_GLASS_PORTAL.md` para criar toda a interface pública da **Sinal Sign** com o shader **Liquid Glass / Monopo**, as 12 seções completas sem erros de português, o **Simulador de Medidas ($m^2$)** e a página pública da proposta `/p/[token]`.
2. **Passo 2:** Rodar o `02_BACKEND_CRM_QUOTES_SOCIAL_STUDIO.md` para subir o banco Prisma, o painel `/admin` em Liquid Glass, o **Motor de Orçamentos**, o cadastro de clientes e o **Social Media Studio** (gerador de posts/stories).
3. **Passo 3:** Rodar o `03_SCRAPER_WORKER_WHATSAPP_ENGINE.md` para acoplar o extrator de leads por tema/região do DF e os gatilhos de envio de propostas e portfólio via WhatsApp.