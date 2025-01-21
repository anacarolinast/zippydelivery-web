import { jsPDF } from 'jspdf';
import axios from 'axios';

const generateReport = async () => {
  try {
    const token = localStorage.getItem("token");
    const empresaId = localStorage.getItem('id');
    
    if (!token || !empresaId) {
      alert("Token ou ID da empresa não encontrado.");
      return;
    }

    const apiUrl = 'https://zippydelivery-v2-latest.onrender.com/api/pedido';
    
    const headers = {
      'Authorization': `Bearer ${token}`,  
      'Content-Type': 'application/json'
    };

    const response = await axios.get(apiUrl, { headers });
    const pedidos = response.data;

    const pedidosDaEmpresa = pedidos.filter(pedido => 
      pedido.empresa.id === 1 || pedido.empresa.id === 103
    );

    const today = new Date();
    const todayDate = today.toISOString().split('T')[0]; 

    let faturamentoHoje = 0;
    let pedidosHoje = 0;
    let pedidosTotais = 0;
    let faturamentoTotal = 0;
    let ticketMedio = 0;
    let pedidosPorDia = 0;
    let pedidosPorPagamento = {
      PIX: 0,
      CartaoCredito: 0,
      CartaoDebito: 0,
      ValeAlimentacao: 0,
      Dinheiro: 0,
      Outros: 0,
    };

    pedidosDaEmpresa.forEach(pedido => {
      const pedidoDate = pedido.dataHora.split('T')[0];
      if (pedidoDate === todayDate) {
        faturamentoHoje += pedido.valorTotal;
        pedidosHoje += 1;
      }

      faturamentoTotal += pedido.valorTotal;
      pedidosTotais += 1;

      ticketMedio = faturamentoTotal / pedidosTotais;

      switch (pedido.formaPagamento) {
        case 1: 
          pedidosPorPagamento.PIX += 1;
          break;
        case 2: 
          pedidosPorPagamento.CartaoCredito += 1;
          break;
        case 3:
          pedidosPorPagamento.CartaoDebito += 1;
          break;
        case 4: 
          pedidosPorPagamento.ValeAlimentacao += 1;
          break;
        case 5: 
          pedidosPorPagamento.Dinheiro += 1;
          break;
        default:
          pedidosPorPagamento.Outros += 1;
          break;
      }
    });

    pedidosPorDia = Math.ceil(pedidosTotais / today.getDate());

    const doc = new jsPDF();
    const orangeColor = "#FF8C42";
    const greyColor = "#333333";
    const highlightColor = "#FFEDD5";

    doc.setFillColor(orangeColor);
    doc.rect(0, 0, 210, 30, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor("#FFFFFF");
    doc.text("Relatório de Pedidos", 105, 20, null, null, "center");

    doc.setFontSize(14);
    doc.setTextColor(greyColor);
    doc.text(`Gerado em: ${todayDate}`, 105, 35, null, null, "center");

    doc.setDrawColor(greyColor);
    doc.line(10, 40, 200, 40);

    doc.setFontSize(16);
    doc.setTextColor(greyColor);
    doc.text("Resumo dos Pedidos", 10, 50);

    const dataBlock = [
      { label: "Faturamento Hoje", value: `R$ ${faturamentoHoje.toFixed(2)}` },
      { label: "Pedidos Hoje", value: pedidosHoje.toString() },
      { label: "Pedidos Totais", value: pedidosTotais.toString() },
      { label: "Faturamento Total", value: `R$ ${faturamentoTotal.toFixed(2)}` },
      { label: "Ticket Médio", value: `R$ ${ticketMedio.toFixed(2)}` },
      { label: "Pedidos por Dia (Média)", value: pedidosPorDia.toString() },
    ];

    let cursorY = 60;
    dataBlock.forEach((item) => {
      doc.setFontSize(12);
      doc.setTextColor(orangeColor);
      doc.text(item.label, 10, cursorY);
      doc.setTextColor(greyColor);
      doc.text(item.value, 90, cursorY);
      cursorY += 12;
    });

    cursorY += 5;
    doc.setDrawColor(greyColor);
    doc.line(10, cursorY, 200, cursorY);

    cursorY += 10;
    doc.setFontSize(16);
    doc.setTextColor(greyColor);
    doc.text("Pedidos por Tipo de Pagamento", 10, cursorY);

    cursorY += 10;
    const paymentMethods = [
      { method: "PIX", value: pedidosPorPagamento.PIX.toString() },
      { method: "Cartão de Crédito", value: pedidosPorPagamento.CartaoCredito.toString() },
      { method: "Cartão de Débito", value: pedidosPorPagamento.CartaoDebito.toString() },
      { method: "Vale Alimentação", value: pedidosPorPagamento.ValeAlimentacao.toString() },
      { method: "Dinheiro", value: pedidosPorPagamento.Dinheiro.toString() },
      { method: "Outros", value: pedidosPorPagamento.Outros.toString() },
    ];

    paymentMethods.forEach((item) => {
      doc.setFontSize(12);
      doc.setTextColor(orangeColor);
      doc.text(item.method, 10, cursorY);
      doc.setTextColor(greyColor);
      doc.text(`${item.value}`, 90, cursorY);
      cursorY += 12;
    });

    doc.setFillColor(orangeColor);
    doc.rect(0, 280, 210, 20, "F");
    doc.setTextColor("#FFFFFF");
    doc.setFontSize(10);
    doc.text("Relatório gerado automaticamente por Zippy Delivery", 105, 290, null, null, "center");

    const pdfBlob = doc.output('blob');

    const pdfUrl = URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'relatorio_pedidos.pdf';
    link.click();

    URL.revokeObjectURL(pdfUrl);

  } catch (error) {
    console.error("Erro ao gerar o relatório:", error);
  }
};

export default generateReport;
