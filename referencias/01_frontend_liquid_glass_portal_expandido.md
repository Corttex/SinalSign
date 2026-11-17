# 01. ARQUITETURA FRONTEND & DESIGN SYSTEM: "LIQUID GLASS & ORGANIC MESH"
**Projeto:** Sinal Sign Comunicação Visual — Portal Institucional Expandido & Simulador B2B  
**Referência Visual Direta:** Monopo Saigon (`monopo.vn`) — Organic Liquid Mesh, Film Grain, Chromatic Glass Refraction & Editorial Typography.  
**Regra de Ouro (Anti-AI Design):** PROIBIDO usar layouts genéricos de SaaS, gradientes roxo/azul neon clichês, sombras pesadas preguiçosas ou caixas brancas chapadas. Tudo deve parecer um estúdio de arquitetura e engenharia visual de alto padrão.

---

## 1. DIREÇÃO DE ARTE & TOKENS VISUAIS (MONOPO-INSPIRED)

### 1.1. Background: Fluid Mesh Gradient + Film Grain + Esfera de Refração
O fundo nunca é estático. Ele é composto por 3 camadas sobrepostas em `position: fixed` (`z-index: -1`):
1. **Camada 1 (Base Escura Profunda):** `#08090B` (Obsidian Ink).
2. **Camada 2 (Organic Fluid Shader / Canvas WebGL ou CSS Houdini Mesh):** Bolhas orgânicas de luz difusa que se movem lentamente reagindo à posição do cursor (`lerp` suave de `0.04`).
   * **Paleta do Gradiente Orgânico (inspirada nos metais, acrílicos dourados e CMYK profundo da Sinal Sign):**
     * *Warm Amber / Gold Acrylic:* `#8C6239` $\rightarrow$ `#D4AF37` (opacidade `35%`)
     * *Deep Petrol / Cyan Ink:* `#0D3B4C` $\rightarrow$ `#16697A` (opacidade `40%`)
     * *Smoky Olive / Bronze:* `#2B3024` (opacidade `45%`)
     * *Subtle Crimson / Magenta Ink:* `#4A1525` (opacidade `20%`)
3. **Camada 3 (Analog Film Grain Overlay):** Textura SVG `feTurbulence` em tela cheia com `opacity: 0.055` e `mix-blend-mode: overlay`, eliminando qualquer aspecto plástico digital.
4. **Elemento Hero Central (Liquid Glass Orb):** Uma lente esférica translúcida no canto direito/central (via Three.js / React Three Fiber `MeshTransmissionMaterial` ou CSS avançado com `backdrop-filter` + `radial-gradient` + `inset box-shadow` cromático) que refrata o gradiente de fundo conforme o usuário rola a página.

### 1.2. Superfícies "Liquid Glass" (Vidro Líquido com Aberração Cromática Sutil)
Em vez de glassmorphism comum, os cards e painéis simulam placas de **Acrílico Cristal de 10mm** polido na laser:
```css
.liquid-glass {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.07) 0%,
    rgba(255, 255, 255, 0.015) 50%,
    rgba(212, 175, 55, 0.04) 100%
  );
  backdrop-filter: blur(28px) saturate(160%) contrast(105%);
  -webkit-backdrop-filter: blur(28px) saturate(160%) contrast(105%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 24px 60px -15px rgba(0, 0, 0, 0.65),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.28),
    inset 0 -1px 2px 0 rgba(0, 229, 255, 0.08),
    inset 1px 0 2px 0 rgba(255, 180, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### 1.3. Tipografia Editorial Híbrida (Contraste Sans + Italic Serif)
Exatamente como no título *"Creative studio"* da referência `monopo.vn`, os títulos principais misturam letras em **Sans-Serif limpa** com vogais ou palavras-chave em **Serif Itálico fino**:
* **Fonte Principal (Display/Títulos):** `Plus Jakarta Sans` ou `Syne` (Pesos 400, 500, 700).
* **Fonte de Contraste (Destaques em Itálico nos Títulos):** `Instrument Serif` (Italic) ou `Cormorant Garamond` (Italic 400/600).
  * *Exemplo de renderização:* `Comun<em>i</em>cação V<em>i</em>sual de Alta Engenhar<em>i</em>a em Brasíl<em>i</em>a`
* **Fonte Técnica (Medidas, Preços, Metragens $m^2$):** `JetBrains Mono` (para dar precisão de projeto arquitetônico/industrial).

### 1.4. Microinterações Obrigatórias
* **Smooth Scroll:** Lenis (`@studio-freight/lenis`) configurado com `lerp: 0.08`.
* **Cursor Magnético Customizado:** Ponto sólido branco (`8px`) acompanhado de um anel de vidro (`42px`) que expande ao passar sobre projetos do portfólio exibindo a tag `"VER PROJETO"` ou `"ORÇAR MEDIDA"`.
* **Selo Rotativo Scroll Down:** No canto inferior esquerdo da Hero (idêntico à referência Monopo), um anel de texto SVG girando continuamente: `"• SINAL SIGN BRASÍLIA • FABRICAÇÃO PRÓPRIA • DESLIZE PARA EXPLORAR"`.

---

## 2. ESTRUTURA COMPLETA DO PORTAL (12 SEÇÕES EXPANDIDAS)

O site atual é curto, repetitivo e superficial. A nova arquitetura terá **mais que o dobro de extensão**, cobrindo todo o catálogo industrial da Sinal Sign em Brasília e Entorno.

### Seção 01: Header Minimalista Editorial & Menu Lateral/Topo
* **Esquerda:** Logo `SINAL SIGN` tipográfica limpa com micro-prisma CMYK luminoso ao lado + tag `BRASÍLIA • DF`.
* **Centro/Direita:** Indicador de atendimento em tempo real (`"Fábrica Operando • (61) 98485-3485"`) + Navegação vertical/horizontal estilo Monopo (`SOLUÇÕES`, `MATERIAIS`, `PORTFÓLIO`, `SIMULADOR M²`, `PROCESSO`, `CONTATO`).

### Seção 02: Hero Section "Liquid Vision"
* **Layout:** Assimétrico com a esfera líquida refrativa ao fundo e tipografia monumental no centro/esquerda.
* **Headline:** *"Arquitetura V*i*sual & Fachadas que Dominam Brasíl*i*a."*
* **Subheadline:** *"Fabricação 100% própria em ACM, Letras Caixa em Aço e Acrílico, Impressão UV, DTF e Projetos Especiais. Do corte a laser à instalação em todo o Distrito Federal e Entorno."*
* **CTAs em Vidro Líquido:**
  1. Botão Primário (Pílula de Vidro Iluminada): `"Simular Orçamento Online"` (rola para o Simulador ou abre Drawer).
  2. Botão Secundário (Direto WhatsApp): `"Falar com Especialista • (61) 98485-3485"` (link direto com UTM e mensagem pré-pronta).
* **Rodapé da Hero:** Selo circular giratório à esquerda + Mini-preview flutuante em vidro à direita mostrando 3 obras reais (*Send Beauty*, *Carlton Tower*, *Resende Advocacia*).

### Seção 03: Manifesto Industrial & Autoridade em Números (Marquee + Bento Glass)
* Faixa de especificações técnicas correndo suavemente: `CORTE LASER CNC • ROUTER DE PRECISÃO • IMPRESSÃO UV ALTA DEFINIÇÃO • ESTRUTURA METÁLICA TRATADA • ILUMINAÇÃO LED IP68 • INSTALAÇÃO PRÓPRIA NO DF`.
* **4 Indicadores em Cards Liquid Glass:**
  * `100% Fabricação Própria` (Sem intermediários em Brasília e Entorno).
  * `+1.500 Projetos Instalados` (Lojas, clínicas, condomínios, escritórios e frotas).
  * `Garantia Real de Material` (ACM e Vinil com proteção UV contra o sol intenso do DF).
  * `Atendimento Ágil no WhatsApp` (Orçamentos técnicos com cálculo de $m^2$ rápido).

### Seção 04: Engenharia de Fachadas em ACM (Deep-Dive Técnico)
* **Objetivo:** Explicar por que uma fachada da Sinal Sign dura anos sem desbotar ou empenar.
* **Apresentação Interativa:** Imagem em alta resolução da fachada **Send Beauty** e **R Salon / Biodanza** com *hotspots* (pontos pulsantes sobre a foto que abrem tooltips de vidro):
  * *Hotspot 1:* Revestimento em ACM (Alumínio Composto) 3mm e 4mm — opções Polietileno, PVDF, Alto Brilho, Fosco e Textura Amadeirada.
  * *Hotspot 2:* Estrutura interna em Metalon galvanizado com solda MIG e pintura anticorrosiva.
  * *Hotspot 3:* Acabamento em dobra tupia com vedação estrutural em PU.
* Botão direto na seção: `"Orçar Fachada em ACM pelo WhatsApp"`.

### Seção 05: Laboratório de Letras Caixa & Logomarcas 3D (Seletor de Acabamento)
* O usuário clica nas abas de vidro para alternar o material e ver o acabamento real (usando as fotos reais do portfólio: *Resende Advocacia*, *Carlton Tower*, *Lib*, *Send Beauty*):
  1. **Acrílico Espelhado & Cristal (Corte Laser):** Dourado espelhado, prata, rosé ou colorido aplicado sobre painel ripado ou parede (Case destaque: *Resende Advocacia e Consultoria*).
  2. **Aço Inox & Galvanizado:** Escovado ou polido espelhado, pintura automotiva PU de alta resistência para áreas externas.
  3. **PVC Expandido:** Leveza, versatilidade de espessuras (10mm a 25mm) e excelente custo-benefício para ambientes internos e externos.
  4. **Projetos Iluminados em LED:** Face iluminada em acrílico leitoso difusor ou efeito *Halo / Backlight* (luz indireta projetada na parede).

### Seção 06: Impressão Digital de Alta Definição, UV, DTF & Adesivação
* **Grid Assimétrico de 6 Soluções (Muito mais completo que o site atual):**
  1. **Impressão UV Rígida e Flexível:** Cura imediata em LED UV, altíssima resistência ao sol e chuva, impressão direta em placas, acrílicos e lonas especiais.
  2. **Impressão DTF (Têxtil e UV DTF):** Personalização de altíssima aderência para uniformes corporativos, brindes rígidos, copos, metais e vidros sem fundo.
  3. **Adesivos em Vinil (Brilho, Fosco, Blackout e Recorte Eletrônico):** Envelopamento de vitrines, paredes decorativas, sinalização de portas de vidro e frotas.
  4. **Adesivo Jateado & Perfurado:** Privacidade elegante para divisórias de escritórios, clínicas e consultórios no DF.
  5. **Lonas & Banners (Frontlight e Backlight):** Lonas 440g com solda eletrônica reforçada, ilhós inoxidável ou bastão com ponteira.
  6. **Placas de Sinalização, Totens e Condomínios:** Placas em vidro temperado/acrílico com prolongadores de inox (Case: *Invest Flat Imobiliária*), sinalização de edifícios residenciais (*Residencial Vila das Flores*) e totens monumentais (*Carlton Tower*).

### Seção 07: Soluções Completas por Segmento Empresarial (Kits B2B)
* Carrossel horizontal em vidro onde o empresário se identifica imediatamente:
  * **Advocacia, Contabilidade & Clínicas:** Logo em acrílico espelhado na recepção + adesivo jateado nas salas + placa de porta em inox.
  * **Salões de Beleza, Estética & Barbearias:** Fachada em ACM + Letra caixa iluminada em LED + vitrine adesivada.
  * **Imobiliárias, Construtoras & Condomínios:** Totens de entrada + numeração de blocos em relevo + placas de obra e venda em lona/chapa galvanizada.
  * **Varejo, Restaurantes & Supermercados:** Luminosos, cardápios em backlight, banners promocionais e adesivação de balcões.

### Seção 08: Simulador Interativo de Pré-Orçamento ($m^2$)
* Um painel **Liquid Glass** central onde o visitante monta seu pedido em 30 segundos:
  1. **Escolha a Categoria:** `Fachada em ACM` | `Letra Caixa / Logo Acrílico` | `Lona / Banner` | `Adesivo Vinil` | `Placa / Totem` | `Impressão UV / DTF`.
  2. **Informe as Medidas Aproximadas:** Inputs numéricos para `Largura (m)` $\times$ `Altura (m)` + `Quantidade`. O sistema já exibe em tempo real a área calculada: $\text{Área Total} = L \times A \times Q \text{ m}^2$.
  3. **Acabamento / Instalação:** Checkbox para `"Preciso de Instalação em Brasília/DF"`, `"Incluir Iluminação LED"`, `"Já possuo a arte vetorizada"`.
  4. **Dados Rápidos:** Nome, Empresa/Segmento e WhatsApp.
  5. **Ação Dupla ao Clicar em "Gerar Pré-Orçamento":**
     * Salva o Lead e o rascunho de orçamento diretamente no **CRM Interno (`POST /api/public/lead-quote`)**.
     * Redireciona imediatamente para o WhatsApp `(61) 98485-3485` com a mensagem técnica formatada (ex.: *"Olá Sinal Sign! Simulei no site uma Fachada em ACM de 4.50m x 1.20m (5.40m²) com instalação no DF. Meu nome é..."*).

### Seção 09: Galeria & Portfólio Expandido com Ficha Técnica (Cases Reais)
* Filtro por categoria: `Todos` | `Fachadas ACM` | `Letras Caixa & Acrílico` | `Totens & Condomínios` | `Placas & Recepção`.
* Cards grandes com efeito de refração líquida no hover e **Modal de Detalhes Técnicos** para cada projeto real da Sinal Sign:
  * **Case 01:** *R Salon & Biodanza* — Fachada dupla em ACM branco e azul royal + Caixa luminosa redonda + Letras em relevo.
  * **Case 02:** *Send Beauty* — Fachada arquitetônica em ACM cinza chumbo fosco + Moldura cápsula + Letras caixa com face espelhada + Blade sign lateral.
  * **Case 03:** *Carlton Tower* — Totem horizontal estruturado em jardim com letras caixa monumentais em relevo branco e contorno escuro.
  * **Case 04:** *Resende Advocacia e Consultoria* — Logomarca e tipografia em Acrílico Espelhado Dourado corte laser instaladas sobre painel ripado de madeira.
  * **Case 05:** *Residencial Vila das Flores* — Letras caixa em acabamento bronze/escuro escovado aplicadas sobre revestimento em porcelanato marmorizado.
  * **Case 06:** *Invest Flat Imobiliária* — Placa de recepção em acrílico cristal com letras em relevo 3D azul e cinza + fixação com prolongadores em aço inox.
  * **Case 07:** *Projeto Lib* — Instalação externa em altura de letras caixa brancas iluminadas com módulos de LED de alto brilho sobre fachada perfurada.

### Seção 10: Linha do Tempo da Produção (Como Trabalhamos)
* 4 cards conectados por uma linha luminosa líquida que preenche conforme o scroll:
  * `01. Atendimento & Medição Técnica in-loco no DF`
  * `02. Layout Digital & Simulação na sua Fachada/Parede`
  * `03. Produção Industrial (Router, Laser, Solda, UV e Pintura)`
  * `04. Instalação Limpa, Rápida e Segura com Equipe Própria`

### Seção 11: Guia de Fechamento de Arquivos & Perguntas Frequentes (FAQ)
* Acordeões em vidro respondendo às maiores dúvidas de clientes de gráfica/comunicação visual:
  * *Quais formatos de arquivo vocês aceitam?* (CorelDRAW `.cdr` convertido em curvas, PDF/X-1a, Illustrator `.ai`, `.eps` ou criação de arte pela equipe Sinal Sign).
  * *Vocês fazem apenas a fabricação ou também instalam em todo o DF?*
  * *Qual a durabilidade de uma fachada em ACM ou letra em acrílico no clima de Brasília?*
  * *Qual o prazo médio de produção e instalação?*

### Seção 12: Cobertura Regional DF + Formulário Inteligente + Footer Monumental
* Tags clicáveis de SEO Local: `Plano Piloto (Asa Sul e Asa Norte)`, `Taguatinga`, `Águas Claras`, `Guará`, `SIA / SOF`, `Ceilândia`, `Samambaia`, `Gama`, `Sobradinho`, `Lago Sul / Lago Norte`, `Vicente Pires` e `Entorno do DF`.
* Formulário completo integrado ao CRM + Botão flutuante de WhatsApp líquido sempre acessível.

---

## 3. PÁGINA PÚBLICA DA PROPOSTA COMERCIAL (`/p/[token]`)

Quando o vendedor envia um orçamento pelo WhatsApp, o cliente recebe um link exclusivo (`sinalsignimpressao.com/p/8f92a...`) que segue o **mesmo design Liquid Glass**:
* Cabeçalho personalizado: *"Proposta Comercial Exclusiva preparada para **[Nome da Empresa Cliente]**"*.
* Tabela detalhada com itens, dimensões ($L \times A$), área em $m^2$, material especificado, acabamentos, valor unitário e total.
* Galeria anexa mostrando fotos de projetos similares da Sinal Sign (ex.: se o orçamento é de Acrílico Dourado, exibe automaticamente a foto da *Resende Advocacia*).
* Condições de pagamento (PIX com desconto, Cartão em até $X\times$, Boleto PJ), prazo de entrega e validade da proposta.
* **Botão "Aprovar Proposta Agora":** Registra aceite digital (IP + Timestamp), muda o status no Kanban para `APPROVED` e dispara alerta imediato no WhatsApp comercial da Sinal Sign.