import { jsPDF } from 'jspdf';
import Chart from 'chart.js/auto';
import axios from 'axios';

const generateReportWithCharts = async () => {
  try {
    const token = localStorage.getItem("token");
    const empresaId = localStorage.getItem('id');

    if (!token || !empresaId) {
      alert("Token ou ID da empresa não encontrado.");
      return;
    }

    const apiUrl = 'https://zippydelivery-fea08-default-rtdb.firebaseio.com/pedidos.json';

    const response = await axios.get(apiUrl);
    const pedidos = Object.values(response.data);  

    const pedidosDaEmpresa = pedidos.filter(pedido =>
      pedido.empresa.id === parseInt(empresaId)
    );

    const today = new Date();
    const todayDate = today.toISOString().split('T')[0]; 

    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() - (6 - i));
      return date.toISOString().split('T')[0];
    });

    const faturamentoUltimos7Dias = last7Days.map(date => {
      return pedidosDaEmpresa
        .filter(pedido => pedido.dataHora.split('T')[0] === date)
        .reduce((acc, pedido) => acc + pedido.valorTotal, 0);
    });

    const pedidosUltimos7Dias = last7Days.map(date => {
      return pedidosDaEmpresa.filter(pedido => pedido.dataHora.split('T')[0] === date).length;
    });

    let pedidosPorPagamento = {
      PIX: 0,
      CartaoCredito: 0,
      CartaoDebito: 0,
      ValeAlimentacao: 0,
      Dinheiro: 0,
      Outros: 0,
    };

    pedidosDaEmpresa.forEach(pedido => {
      switch (pedido.formaPagamento) {
        case 'PIX':
          pedidosPorPagamento.PIX += 1;
          break;
        case 'Cartão de Crédito':
          pedidosPorPagamento.CartaoCredito += 1;
          break;
        case 'Cartão de Débito':
          pedidosPorPagamento.CartaoDebito += 1;
          break;
        case 'Vale Alimentação':
          pedidosPorPagamento.ValeAlimentacao += 1;
          break;
        case 'Dinheiro':
          pedidosPorPagamento.Dinheiro += 1;
          break;
        default:
          pedidosPorPagamento.Outros += 1;
          break;
      }
    });

    const ctx1 = document.createElement('canvas');
    const ctx2 = document.createElement('canvas');
    const ctx3 = document.createElement('canvas');
    ctx1.width = 800;
    ctx1.height = 400;
    ctx2.width = 800;
    ctx2.height = 400;
    ctx3.width = 800;
    ctx3.height = 400;

    const chart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Vale Alimentação', 'Dinheiro', 'Outros'],
        datasets: [{
          label: 'Pedidos por Tipo de Pagamento',
          data: [
            pedidosPorPagamento.PIX,
            pedidosPorPagamento.CartaoCredito,
            pedidosPorPagamento.CartaoDebito,
            pedidosPorPagamento.ValeAlimentacao,
            pedidosPorPagamento.Dinheiro,
            pedidosPorPagamento.Outros
          ],
          backgroundColor: '#FF8C42',
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    const chart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: last7Days,
        datasets: [{
          label: 'Faturamento (R$)',
          data: faturamentoUltimos7Dias, 
          borderColor: '#FF8C42', 
          fill: false
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });

    const chart3 = new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: last7Days, 
        datasets: [{
          label: 'Número de Pedidos',
          data: pedidosUltimos7Dias, 
          backgroundColor: '#FF8C42',
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });

    chart1.update();
    chart2.update();
    chart3.update();

    setTimeout(() => {
      try {
        const imgData1 = ctx1.toDataURL('image/png');
        const imgData2 = ctx2.toDataURL('image/png');
        const imgData3 = ctx3.toDataURL('image/png');

        const doc = new jsPDF();

        doc.setFillColor("#FF8C42");
        doc.rect(0, 0, 210, 30, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(24);
        doc.setTextColor("#FFFFFF");
        doc.text("Relatório de Pedidos", 105, 20, null, null, "center");

        doc.setFontSize(14);
        doc.setTextColor("#333333");

        let yPosition = 100; 

        doc.addImage(imgData1, 'PNG', 10, yPosition, 190, 100);
        yPosition += 110;

        if (yPosition + 100 > 280) { doc.addPage(); yPosition = 20; }
        doc.addImage(imgData2, 'PNG', 10, yPosition, 190, 100);
        yPosition += 110;

        if (yPosition + 100 > 280) { doc.addPage(); yPosition = 20; }
        doc.addImage(imgData3, 'PNG', 10, yPosition, 190, 100);

        doc.setFontSize(10);
        doc.setTextColor("#666666");
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.text(`Página ${i} de ${pageCount}`, 180, 290);
        }

        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'relatorio_pedidos_com_graficos.pdf';
        link.click();

        URL.revokeObjectURL(pdfUrl);
      } catch (error) {
        console.error("Erro ao gerar o PDF:", error);
      }
    }, 2000); 

  } catch (error) {
    console.error("Erro ao gerar o relatório:", error);
  }
};

export default generateReportWithCharts;
