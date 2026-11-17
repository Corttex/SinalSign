# 02. BACKEND, CRM, MOTOR DE ORÇAMENTOS ($m^2$) & SOCIAL MEDIA STUDIO
**Projeto:** Sinal Sign OS — Sistema Interno de Gestão, Orçamentos e Criação de Conteúdo  
**Stack:** Next.js 15 (App Router) + TypeScript + Prisma ORM + PostgreSQL + Sharp / HTML5 Canvas / Satori + API de IA Generativa.  
**Interface do Painel (`/admin`):** Mesmo Design System **Dark Liquid Glass**, garantindo que o sistema interno tenha visual futurista, limpo e rápido.

---

## 1. MODELAGEM COMPLETA DO BANCO DE DADOS (`schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum PersonType {
  PF
  PJ
}

enum LeadSource {
  SITE_SIMULATOR
  SITE_FORM
  SCRAPER_GOOGLE_MAPS
  SCRAPER_CNPJ
  SCRAPER_INSTAGRAM
  WHATSAPP_DIRECT
  MANUAL
}

enum FunnelStage {
  CAPTURED_LEAD      // Extraído pelo Scraper ou entrou pelo site
  WHATSAPP_CONTACTED // 1ª Abordagem enviada no WhatsApp
  QUOTING            // Em levantamento de medidas / orçamento
  PROPOSAL_SENT      // Link /p/[token] enviado no WhatsApp
  PROPOSAL_VIEWED    // Cliente abriu o link da proposta
  APPROVED_PRODUCTION// Orçamento aprovado -> Em fabricação
  INSTALLED_FINISHED // Entregue / Instalado (pronto para virar post!)
  LOST               // Perdido / Sem retorno
}

enum PricingUnit {
  SQUARE_METER // Cálculo por m² (Largura x Altura)
  LINEAR_METER // Cálculo por metro linear (ex: dobra, fita LED, estrutura)
  UNIT         // Cálculo por unidade/peça (ex: letra caixa avulsa, prolongador)
}

enum ProposalStatus {
  DRAFT
  SENT
  VIEWED
  APPROVED
  REJECTED
  EXPIRED
}

model Client {
  id              String      @id @default(cuid())
  type            PersonType  @default(PJ)
  name            String      // Razão Social ou Nome Completo
  tradeName       String?     // Nome Fantasia (ex: "Send Beauty")
  document        String?     @unique // CPF ou CNPJ higienizado
  whatsapp        String      @unique // Formato E.164: 5561984853485
  whatsappValid   Boolean     @default(true)
  phoneSecondary  String?
  email           String?
  instagram       String?
  website         String?
  niche           String?     // Ex: "Advocacia", "Salão de Beleza", "Clínica", "Condomínio"
  cityRegion      String?     // Ex: "Águas Claras - DF", "Asa Sul - DF"
  address         String?
  googleRating    Float?      // Extraído do Google Maps para qualificação
  googleReviews   Int?
  source          LeadSource  @default(MANUAL)
  stage           FunnelStage @default(CAPTURED_LEAD)
  notes           String?     @db.Text
  proposals       Proposal[]
  whatsappLogs    WhatsappLog[]
  socialPosts     SocialPost[]
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  @@index([niche, cityRegion])
  @@index([stage])
}

model MaterialCatalog {
  id              String      @id @default(cuid())
  name            String      // Ex: "Fachada ACM 3mm Polietileno c/ Estrutura Metalon"
  category        String      // ACM, LETRA_CAIXA, ACRILICO, IMPRESSAO_DIGITAL, UV_DTF, PLACA
  unit            PricingUnit @default(SQUARE_METER)
  costPrice       Decimal     @db.Decimal(10, 2) // Custo base por m² ou unidade
  salePrice       Decimal     @db.Decimal(10, 2) // Preço sugerido de venda por m²
  minChargeArea   Decimal     @default(0.50) @db.Decimal(10, 2) // Área mínima cobrada (ex: 0.5m²)
  wasteFactorPct  Decimal     @default(10.0) @db.Decimal(5, 2) // % de perda de chapa/refilo
  description     String?     @db.Text // Texto técnico que vai automático para a proposta
  active          Boolean     @default(true)
  createdAt       DateTime    @default(now())
}

model Proposal {
  id                  String         @id @default(cuid())
  number              Int            @default(autoincrement()) // Nº sequencial do orçamento
  token               String         @unique @default(uuid())  // Link público /p/[token]
  clientId            String
  client              Client         @relation(fields: [clientId], references: [id], onDelete: Cascade)
  title               String         // Ex: "Fachada Completa em ACM + Letra Caixa Iluminada"
  items               ProposalItem[]
  subtotal            Decimal        @db.Decimal(10, 2)
  installationFee     Decimal        @default(0) @db.Decimal(10, 2) // Taxa de instalação no DF
  designFee           Decimal        @default(0) @db.Decimal(10, 2) // Criação de arte/projeto 3D
  discount            Decimal        @default(0) @db.Decimal(10, 2)
  total               Decimal        @db.Decimal(10, 2)
  deliveryDays        Int            @default(7) // Prazo em dias úteis
  paymentTerms        String         @default("50% de entrada na aprovação do layout + 50% na entrega/instalação. PIX com 5% de desconto à vista ou em até 6x no cartão.")
  notes               String?        @db.Text
  referenceImages     String[]       // URLs de cases similares da Sinal Sign para mostrar na proposta
  status              ProposalStatus @default(DRAFT)
  sentViaWhatsappAt   DateTime?
  firstViewedAt       DateTime?
  viewCount           Int            @default(0)
  approvedAt          DateTime?
  approvedByIp        String?
  validUntil          DateTime
  createdAt           DateTime       @default(now())
  updatedAt           DateTime       @updatedAt
}

model ProposalItem {
  id              String      @id @default(cuid())
  proposalId      String
  proposal        Proposal    @relation(fields: [proposalId], references: [id], onDelete: Cascade)
  materialName    String      // Nome do serviço/material
  specification   String?     // Detalhes: "Acrílico espelhado dourado 3mm corte laser"
  unit            PricingUnit @default(SQUARE_METER)
  widthMeters     Decimal?    @db.Decimal(10, 3) // Ex: 3.500 (3,5m)
  heightMeters    Decimal?    @db.Decimal(10, 3) // Ex: 1.200 (1,2m)
  areaSqMeters    Decimal?    @db.Decimal(10, 3) // Calculado: L x A x Qtd
  quantity        Int         @default(1)
  finishing       String?     // Ex: "Ilhós a cada 30cm, solda dupla" ou "LED Branco Quente 3000K"
  unitPrice       Decimal     @db.Decimal(10, 2) // Preço por m² ou unidade
  finishingAddon  Decimal     @default(0) @db.Decimal(10, 2) // Adicional de acabamento
  totalPrice      Decimal     @db.Decimal(10, 2)
}

model ScrapeCampaign {
  id              String      @id @default(cuid())
  themeKeyword    String      // Ex: "Escritório de Advocacia", "Clínica Odontológica"
  regionDf        String      // Ex: "Águas Claras, Brasília - DF"
  source          LeadSource  @default(SCRAPER_GOOGLE_MAPS)
  status          String      @default("IDLE") // IDLE, RUNNING, COMPLETED, FAILED
  totalExtracted  Int         @default(0)
  validWhatsapp   Int         @default(0)
  createdAt       DateTime    @default(now())
  finishedAt      DateTime?
}

model WhatsappLog {
  id              String      @id @default(cuid())
  clientId        String
  client          Client      @relation(fields: [clientId], references: [id], onDelete: Cascade)
  proposalId      String?
  direction       String      @default("OUTBOUND") // OUTBOUND ou INBOUND
  messageType     String      // PROPOSAL_LINK, PROSPECTING_NICHE, FOLLOW_UP
  content         String      @db.Text
  mediaUrl        String?
  status          String      @default("SENT") // QUEUED, SENT, DELIVERED, READ, FAILED
  sentAt          DateTime    @default(now())
}

model SocialPost {
  id              String      @id @default(cuid())
  title           String      // Ex: "Projeto Entregue - Resende Advocacia"
  clientId        String?
  client          Client?     @relation(fields: [clientId], references: [id], onDelete: SetNull)
  format          String      @default("FEED_4_5") // FEED_1_1 (1080x1080), FEED_4_5 (1080x1350), STORY_9_16 (1080x1920)
  templateStyle   String      // LIQUID_SHOWCASE, BEFORE_AFTER, TECHNICAL_SPECS, AI_CONCEPT
  rawPhotoUrl     String      // Foto original tirada na instalação ou gerada por IA
  renderedPostUrl String      // Imagem final processada com branding Sinal Sign
  caption         String      @db.Text // Legenda gerada para Instagram + Hashtags DF
  materialTag     String?     // Ex: "Acrílico Espelhado Dourado + Corte Laser"
  locationTag     String      @default("Brasília - DF")
  publishedToSite Boolean     @default(false) // Se também foi enviado para a Galeria Pública do site
  createdAt       DateTime    @default(now())
}
```

---

## 2. MOTOR DE CÁLCULO DE ORÇAMENTOS (`/admin/orcamentos/novo`)

### 2.1. Regra Matemática de Precificação Gráfica e Comunicação Visual
Para cada item medido em metro quadrado (`SQUARE_METER`), a fórmula exata executada no backend e no preview em tempo real é:

$$\text{Área Real (m}^2\text{)} = \text{Largura (m)} \times \text{Altura (m)} \times \text{Quantidade}$$

$$\text{Área Faturada (m}^2\text{)} = \max\left(\text{Área Real}, \text{Área Mínima do Material}\right)$$

$$\text{Subtotal do Item} = \left(\text{Área Faturada} \times \text{Preço por m}^2\right) + \text{Adicional de Acabamento}$$

$$\text{Total da Proposta} = \left(\sum \text{Subtotal dos Itens}\right) + \text{Taxa de Instalação DF} + \text{Taxa de Arte/3D} - \text{Desconto}$$

### 2.2. Catálogo Pré-Carregado (Seed Inicial da Sinal Sign)
O sistema já deve iniciar com os principais produtos da Sinal Sign cadastrados no seed:
1. **Fachada em ACM 3mm c/ Estrutura Metálica:** Cálculo por $m^2$.
2. **Letra Caixa em Aço Inox (Escovado ou Polido):** Cálculo por altura/unidade ou $m^2$.
3. **Logomarca em Acrílico Espelhado (Dourado/Prata) Corte Laser:** Cálculo por $m^2$ ou kit por medida (ex: $1,20\text{m} \times 0,60\text{m}$).
4. **Letra Caixa em PVC Expandido 15mm/20mm Pintura Automotiva:** Cálculo por $m^2$.
5. **Iluminação Interna em Módulos LED IP68 + Fonte Chaveada:** Adicional por projeto ou $m^2$.
6. **Lona Frontlight 440g Impressão Digital (c/ Ilhós ou Bastão):** Cálculo por $m^2$.
7. **Adesivo Vinil Impressão Digital / Jateado / Perfurado:** Cálculo por $m^2$.
8. **Impressão UV Rígida / Flexível e DTF:** Cálculo por $m^2$ ou metro linear.
9. **Placa em Acrílico Cristal 6mm/8mm c/ 4 Prolongadores Inox:** Cálculo por medida.

### 2.3. Fluxo "1-Clique para WhatsApp"
Ao salvar o orçamento, o painel exibe 3 ações imediatas:
* **[Copiar Link da Proposta]:** `https://sinalsignimpressao.com/p/[token]`
* **[Disparar Direto via API WhatsApp]:** Envia a mensagem pelo backend (Evolution API) diretamente para o número do cliente cadastrado e muda o funil do cliente para `PROPOSAL_SENT`.
* **[Abrir no WhatsApp Web/App]:** Fallback instantâneo via `https://wa.me/5561...?text=...` já com o resumo da proposta e o link clicável.

---

## 3. SOCIAL MEDIA STUDIO — GERADOR DE IMAGENS PARA REDES SOCIAIS (`/admin/social-studio`)

Módulo exclusivo dentro do sistema para a Sinal Sign dominar o Instagram, Facebook, Status do WhatsApp e Google Meu Negócio sem depender de agência ou horas no Photoshop.

### 3.1. Modo 1: "Foto da Obra $\rightarrow$ Post de Alto Padrão" (Renderizador Canvas / Sharp)
O usuário faz upload da foto tirada no celular após instalar uma fachada ou placa (ou seleciona uma das fotos atuais do site) e preenche 3 campos rápidos:
* **Título do Projeto:** Ex: *"Resende Advocacia & Consultoria"*
* **Especificação Técnica:** Ex: *"Acrílico Espelhado Dourado • Corte Laser CNC"*
* **Bairro/Região DF:** Ex: *"Brasília - DF"*

**O Motor Gráfico aplica automaticamente sobre a foto (em 3 proporções simultâneas: Feed `1080x1350`, Quadrado `1080x1080` e Story `1080x1920`):**
1. **Filtro Editorial de Contraste & Nitidez:** Realça o brilho metálico do acrílico, inox, LED e ACM.
2. **Vignette Orgânica Liquid Glass:** Escurecimento suave nas bordas superior e inferior para leitura perfeita da tipografia.
3. **Badge Superior em Vidro Translúcido:** Ícone de localização + `"PROJETO ENTREGUE • BRASÍLIA DF"` + Logo `SINAL SIGN` com barra CMYK.
4. **Card Inferior Estilo Monopo/Arquitetura:** Título da obra com tipografia híbrida (*Sans + Italic Serif*), tags de material em fonte monoespaçada (`[ACRÍLICO ESPELHADO] [CORTE LASER]`) e chamada de rodapé: `"Orçamentos: (61) 98485-3485 • sinalsignimpressao.com"`.
5. **Gerador de Carrossel de 3 Lâminas Automático:**
   * *Slide 1 (Capa):* Foto principal com título monumental.
   * *Slide 2 (Zoom no Acabamento):* Recorte aproximado (`crop 2x` automático no centro da peça) mostrando a perfeição do corte laser/relevo 3D + ficha técnica.
   * *Slide 3 (CTA Comercial):* Fundo Liquid Glass da Sinal Sign com chamada direta: *"Quer transformar a imagem da sua empresa em Brasília? Solicite seu orçamento pelo WhatsApp no link da bio."*

### 3.2. Modo 2: "Mockup & Post Conceitual com IA" (Para Prospecção e Ideias)
Quando o operador quer postar uma ideia para atrair um nicho específico (ex: *"Semana das Clínicas de Estética"*) ou mostrar uma referência para um cliente em negociação:
* **Seletor de Nicho + Material:** O usuário escolhe o segmento (ex: *Barbearia Premium*, *Clínica Odontológica*, *Escritório de Advocacia*, *Hamburgueria*) + o tipo de serviço (*Fachada ACM Preto Fosco com LED*, *Logo em Acrílico Dourado na Recepção*, *Totem Externo*).
* **Prompt Engine Otimizado:** O backend monta um prompt fotográfico arquitetônico hiper-realista (evitando textos distorcidos) e gera a imagem base via API de imagem (Gemini Imagen 3 / Flux / OpenAI), aplicando imediatamente a camada gráfica oficial da Sinal Sign por cima.

### 3.3. Gerador Automático de Legenda Comercial + Publicação no Site
* Para qualquer imagem gerada, o sistema já escreve 2 opções de legenda prontas para copiar:
  * **Opção A (Foco em Autoridade & Engenharia para Feed):** Destaca o material usado, a durabilidade em Brasília, o diferencial da fabricação própria e o CTA para o WhatsApp `(61) 98485-3485`.
  * **Opção B (Foco Direto para Status do WhatsApp / Stories):** Texto curto de 2 linhas com link direto para orçamento.
* **Toggle "Publicar também no Portfólio do Site":** Com um clique, o post recém-criado já entra automaticamente na **Seção 09 (Portfólio)** do site público `sinalsignimpressao.com`.