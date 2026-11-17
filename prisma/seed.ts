import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Semeando dados iniciais da Sinal Sign...");

  // 1. Criar Usuário Admin inicial
  const adminPasswordHash = await bcrypt.hash("SinalSign2026@DF", 10);
  const admin = await prisma.user.upsert({
    where: { email: "contato@sinalsign.com.br" },
    update: {},
    create: {
      name: "Diretoria Sinal Sign",
      email: "contato@sinalsign.com.br",
      passwordHash: adminPasswordHash,
      role: "ADMIN",
    },
  });
  console.log("✓ Admin criado:", admin.email);

  // 2. Criar Cliente e Proposta de Demonstração (Send Beauty)
  const clientSendBeauty = await prisma.client.upsert({
    where: { whatsapp: "5561999990001" },
    update: {},
    create: {
      name: "Send Beauty Cosméticos LTDA",
      tradeName: "Send Beauty",
      whatsapp: "5561999990001",
      cityRegion: "Águas Claras - DF",
      niche: "Saúde & Beleza",
      stage: "PROPOSAL_SENT",
      source: "SITE_SIMULATOR",
      notes: "Fachada de 18 metros em ACM grafite com letras em acrílico iluminadas.",
    },
  });

  await prisma.commercialProposal.upsert({
    where: { publicToken: "demo-send-beauty-2026" },
    update: {},
    create: {
      clientId: clientSendBeauty.id,
      publicToken: "demo-send-beauty-2026",
      title: "Fachada em ACM Grafite PVDF + Letras Caixa Iluminadas",
      status: "SENT",
      subtotalAmount: 18500.0,
      discountAmount: 1000.0,
      totalAmount: 17500.0,
      conditions:
        "• 50% de entrada e restante em até 4x no cartão sem juros.\n• Prazo de fabricação: 12 dias úteis após aprovação.\n• Garantia de 5 anos no ACM contra desbotamento e 1 ano nos módulos LED.",
      itemsJson: [
        {
          name: "Revestimento em ACM Grafite 3mm PVDF",
          description: "Chassi em metalon galvanizado tratado com junta de dilatação siliconada.",
          dimensions: "18.00m x 1.40m (25.2 m²)",
          price: 11200.0,
        },
        {
          name: "Letras Caixa 3D 'SEND BEAUTY' em Acrílico Leitoso",
          description: "Lateral em inox escovado e face em acrílico difusor com LED interno IP68.",
          dimensions: "Letras com 45cm de altura",
          price: 6300.0,
        },
      ],
    },
  });
  console.log("✓ Proposta Demo criada: /p/demo-send-beauty-2026");

  // 3. Materiais de Engenharia Base
  const materials = [
    {
      category: "FACHADA_ACM",
      name: "ACM 3mm PVDF Proteção Solar DF",
      costPrice: 190.0,
      salePrice: 380.0,
    },
    {
      category: "LETRA_CAIXA",
      name: "Letra Caixa Inox Escovado com LED",
      costPrice: 280.0,
      salePrice: 620.0,
    },
    {
      category: "IMPRESSAO_UV",
      name: "Adesivo Vinil Polimérico com Laminação UV",
      costPrice: 45.0,
      salePrice: 120.0,
    },
  ];

  for (const mat of materials) {
    await prisma.materialItem.create({ data: mat });
  }
  console.log("✓ Materiais base cadastrados com sucesso.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

