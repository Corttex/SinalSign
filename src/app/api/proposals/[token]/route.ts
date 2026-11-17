import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  if (!token || token.length < 8) {
    return NextResponse.json({ error: "Token inválido ou ausente." }, { status: 400 });
  }

  try {
    const proposal = await prisma.commercialProposal.findUnique({
      where: { publicToken: token },
      include: {
        client: {
          select: {
            name: true,
            tradeName: true,
            cityRegion: true,
            niche: true,
          },
        },
      },
    });

    if (!proposal) {
      return NextResponse.json({ error: "Proposta não encontrada." }, { status: 404 });
    }

    // Registra visualização de forma assíncrona para auditoria
    await prisma.commercialProposal.update({
      where: { id: proposal.id },
      data: {
        viewCount: { increment: 1 },
        lastViewedAt: new Date(),
        status: proposal.status === "DRAFT" || proposal.status === "SENT" ? "VIEWED" : proposal.status,
      },
    });

    // Retorna apenas dados públicos e sanitizados (sem vazar margens ou custos internos)
    return NextResponse.json({
      title: proposal.title,
      clientName: proposal.client.tradeName || proposal.client.name,
      cityRegion: proposal.client.cityRegion,
      items: proposal.itemsJson,
      subtotal: proposal.subtotalAmount,
      discount: proposal.discountAmount,
      total: proposal.totalAmount,
      conditions: proposal.conditions,
      expiresAt: proposal.expiresAt,
      status: proposal.status,
    });
  } catch (error) {
    console.error("[Proposal Get Error]:", error);
    return NextResponse.json({ error: "Erro interno ao processar proposta." }, { status: 500 });
  }
}

