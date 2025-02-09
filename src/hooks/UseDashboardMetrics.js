import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { db } from "../firebase";

import useCompanyId from "./UseCompanyId";
const useDashboardMetrics = () => {
  const [vendasTotais, setVendasTotais] = useState(0);
  const [faturamentoTotal, setFaturamentoTotal] = useState(0);
  const [vendaHoje, setVendaHoje] = useState(0);
  const [faturamentoMedio, setFaturamentoMedio] = useState(0);
  const [pedidosPorPagamento, setPedidosPorPagamento] = useState({
    "Cartão de Crédito": 0,
    "Cartão de Débito": 0,
    PIX: 0,
    "Vale Alimentação": 0,
    Dinheiro: 0,
    Outros: 0,
  });
  const [faturamentoUltimos7Dias, setFaturamentoUltimos7Dias] = useState(0);
  const [pedidosUltimos7Dias, setPedidosUltimos7Dias] = useState(0);

  const empresaId = useCompanyId();
  const firebaseUrl = "pedidos";

  useEffect(() => {
    if (!empresaId) return;

    const calcularMétricas = async () => {
      try {
        const pedidosRef = ref(db, firebaseUrl);
        const snapshot = await get(pedidosRef);

        if (snapshot.exists()) {
          const pedidos = snapshot.val();

          let totalPedidos = 0;
          let totalFaturamento = 0;
          let pedidosHoje = 0;
          let faturamentoHoje = 0;
          let pedidosPorTipoPagamento = {
            "Cartão de Crédito": 0,
            "Cartão de Débito": 0,
            PIX: 0,
            "Vale Alimentação": 0,
            Dinheiro: 0,
            Outros: 0,
          };
          let faturamentoUltimos7Dias = 0;
          let pedidosUltimos7Dias = 0;

          const hoje = new Date().toISOString().split("T")[0];
          const seteDiasAtras = new Date();
          seteDiasAtras.setDate(seteDiasAtras.getDate() - 7);
          const dataSeteDiasAtras = seteDiasAtras.toISOString().split("T")[0];

          // Log para inspecionar os pedidos
          console.log("Pedidos data:", pedidos);

          Object.entries(pedidos).forEach(([id, pedido]) => {
            console.log("Processing pedido:", pedido);

            if (pedido.empresa?.id === empresaId) {
              totalPedidos += 1;
              totalFaturamento += pedido.valorTotal || 0;

              // Contabilizar pedidos por tipo de pagamento
              if (pedido.formaPagamento) {
                pedidosPorTipoPagamento[pedido.formaPagamento] =
                  (pedidosPorTipoPagamento[pedido.formaPagamento] || 0) + 1;
              }

              const dataPedido = pedido.dataHora.split("T")[0];
              if (dataPedido === hoje) {
                pedidosHoje += 1;
                faturamentoHoje += pedido.valorTotal || 0;
              }

              // Faturamento e número de pedidos nos últimos 7 dias
              if (dataPedido >= dataSeteDiasAtras) {
                pedidosUltimos7Dias += 1;
                faturamentoUltimos7Dias += pedido.valorTotal || 0;
              }
            }
          });

          console.log(
            "Pedidos por Tipo de Pagamento:",
            pedidosPorTipoPagamento
          );
          console.log(
            "Faturamento nos Últimos 7 Dias:",
            faturamentoUltimos7Dias
          );
          console.log("Pedidos nos Últimos 7 Dias:", pedidosUltimos7Dias);

          setVendasTotais(totalPedidos);
          setFaturamentoTotal(totalFaturamento);
          setVendaHoje(pedidosHoje);
          setFaturamentoMedio(
            pedidosHoje > 0 ? faturamentoHoje / pedidosHoje : 0
          );
          setPedidosPorPagamento(pedidosPorTipoPagamento);
          setFaturamentoUltimos7Dias(faturamentoUltimos7Dias);
          setPedidosUltimos7Dias(pedidosUltimos7Dias);
        } else {
          console.log("Nenhum dado encontrado no Firebase.");
        }
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    calcularMétricas();
  }, [empresaId]);

  return {
    vendasTotais,
    faturamentoTotal,
    vendaHoje,
    faturamentoMedio,
    pedidosPorPagamento,
    faturamentoUltimos7Dias,
    pedidosUltimos7Dias,
  };
};

export default useDashboardMetrics;
