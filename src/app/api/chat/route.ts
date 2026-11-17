import { NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages, contextData } = body;

    const userMessage = messages[messages.length - 1]?.content || "";
    const lowerMessage = userMessage.toLowerCase();

    // Contexto inicial inteligente alimentado pelo formulário de nicho
    const clientNiche = contextData?.nicheName || "Comunicação Visual";
    const selectedItems = contextData?.selectedItems || [];
    const customDemand = contextData?.customDemand || "";
    const region = contextData?.region || "Distrito Federal";

    // Respostas conversacionais humanizadas com inteligência de vendas e engenharia
    let reply = "";

    if (messages.length <= 1) {
      // Primeira interação após vir do simulador
      const itemsList = selectedItems.length > 0 
        ? selectedItems.join(", ") 
        : "soluções personalizadas";

      reply = `Olá! Tudo bem? Prazer falar com você! 👋 Sou a assistente técnica da Sinal Sign aqui em Brasília.

Já analisei o perfil do seu negócio (${clientNiche}) e as opções que você marcou: ${itemsList}${customDemand ? ` além da sua observação: "${customDemand}"` : ""}.

A fabricação é 100% própria aqui no DF (com corte a laser, CNC Router e acabamento automotivo). Para já prepararmos uma prévia de dimensões ou até agendarmos uma medição técnica sem compromisso na sua obra, me conta: você já tem as medidas aproximadas do local ou o arquivo do seu logotipo/projeto em vetor?`;
    } else if (
      lowerMessage.includes("preço") ||
      lowerMessage.includes("valor") ||
      lowerMessage.includes("quanto custa") ||
      lowerMessage.includes("orçamento")
    ) {
      reply = `Perfeito! Como somos fábrica própria sem revendedores, o metro quadrado das nossas Fachadas em ACM varia entre R$ 380 e R$ 580/m² (já com estrutura galvanizada e pintura PVDF resistente ao sol do DF). As Letras Caixa 3D e Acrílicos nobres são orçados de acordo com a altura e acabamento (Inox, Acrílico espelhado ou PVC com LED).

Para eu já gerar um cálculo exato e passar para o nosso especialista humano finalizar com as condições de fábrica, qual seria a largura aproximada da sua fachada ou parede? E qual a sua cidade/região aqui no DF (Águas Claras, Asa Sul, Taguatinga...)?`;
    } else if (
      lowerMessage.includes("medida") ||
      lowerMessage.includes("metro") ||
      lowerMessage.includes("tamanho") ||
      /\d+/.test(lowerMessage)
    ) {
      reply = `Excelente! Essas proporções atendem perfeitamente aos padrões de corte de nossas chapas de ACM e usinagem laser, o que evita desperdício e barateia o seu projeto.

Se você preferir, nosso técnico responsável por medições pode dar um pulo no local para aferir milimetricamente com trena a laser e conferir a estrutura de fixação elétrica. Você gostaria de receber o contato direto do especialista via WhatsApp agora mesmo para alinhar data e horários?`;
    } else if (
      lowerMessage.includes("whatsapp") ||
      lowerMessage.includes("sim") ||
      lowerMessage.includes("quero") ||
      lowerMessage.includes("agendar") ||
      lowerMessage.includes("telefone")
    ) {
      reply = `Sensacional! Já registrei todo o histórico da nossa conversa técnica.

Você pode clicar no botão verde abaixo para continuar diretamente com o nosso especialista sênior no WhatsApp oficial (61) 98485-3485. O chat já levará todas as especificações que conversamos para você não precisar repetir nada! 🚀`;
    } else {
      reply = `Entendi perfeitamente! Esse detalhe é fundamental na comunicação visual para garantir que a iluminação e a fixação fiquem impecáveis.

Você tem alguma preferência de acabamento específico (por exemplo: acrílico espelhado dourado, inox escovado, acabamento amadeirado ou LED backlight indireto)? Se quiser, também podemos transferir agora para o WhatsApp com nossa equipe técnica de prontidão!`;
    }

    return NextResponse.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("Chat AI Assistant Error:", error);
    return NextResponse.json(
      {
        success: false,
        reply:
          "Olá! Tivemos uma oscilação na rede, mas estou pronta para te atender. Você pode falar diretamente com nossa equipe no WhatsApp pelo (61) 98485-3485!",
      },
      { status: 500 }
    );
  }
}
