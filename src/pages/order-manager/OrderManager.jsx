import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import successImage from "../../assets/img/success_orange.png";
import mastercardLogo from "../../assets/img/mastercard.png";
import { db } from "../../firebase";
import { ref, onValue, update } from "firebase/database";
import { format } from "date-fns";

function formatarData(dataHora) {
  return dataHora ? format(new Date(dataHora), "dd/MM/yyyy HH:mm") : "";
}

function formatAddress(address) {
  return `${address.logradouro}, ${address.numero}, ${address.bairro} - ${address.cidade} (${address.estado}) - CEP ${address.cep}`;
}

function OrderManagerPage() {
  const [orders, setOrders] = useState({
    pending: [],
    inProcess: [],
    done: [],
    cancelled: [],
  });

  const [orderSelected, setOrderSelected] = useState(null);
  const [ordersSummary, setAllOrders] = useState({
    amount: 0,
    total: 0,
  });

  function updateOrdersSummary(orders) {
    const ordersData = Array.isArray(orders.data) ? orders.data : [];

    const completedOrders = ordersData.filter(
      (order) => order.statusPedido === "Concluído"
    );

    setAllOrders({
      amount: completedOrders.length,
      total: completedOrders.reduce(
        (total, order) => total + order.valorTotal,
        0
      ),
    });
  }

  function onChangeOrderStatus(body, type) {
    body.statusPedido = type;
    const orderRef = ref(db, `pedidos/${body.id}`);

    update(orderRef, body)
      .then(() => {
        console.log("Pedido atualizado com sucesso");
      })
      .catch((error) => {
        console.error("Erro ao atualizar pedido:", error);
      });
  }

  const defaultClassNameOrder =
    "cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2";
  const classNameSelectedOrder =
    "cursor-pointer flex justify-between items-center bg-gray-300 hover:bg-gray-300 py-3 px-4 border-l-4 border-orange-100";

  const listenToOrders = (empresaId) => {
    const ordersRef = ref(db, "pedidos");

    onValue(ordersRef, (snapshot) => {
      const ordersData = snapshot.val();
      if (ordersData) {
        const filteredOrders = Object.keys(ordersData)
          .map((orderId) => ({
            id: orderId,
            ...ordersData[orderId],
          }))
          .filter((order) => order.empresa.id === empresaId);

        console.log("Pedidos filtrados com ID:", filteredOrders);

        setOrders({
          pending: filteredOrders.filter(
            (order) => order.statusPedido === "Pendente"
          ),
          inProcess: filteredOrders.filter(
            (order) => order.statusPedido === "Em preparo"
          ),
          done: filteredOrders.filter(
            (order) => order.statusPedido === "Concluído"
          ),
          cancelled: filteredOrders.filter(
            (order) => order.statusPedido === "Cancelado"
          ),
        });

        updateOrdersSummary({ data: filteredOrders });
      } else {
        console.log("Nenhum pedido encontrado no Firebase.");
      }
    });
  };

  useEffect(() => {
    const empresaId = 1;
    listenToOrders(empresaId);
  }, []);

  function onChangeOrderSelected(newOrder) {
    setOrderSelected(newOrder);
    console.log(newOrder);
  }

  let navigate = useNavigate();

  console.log(orderSelected);

  return (
    <div className="flex h-full pt-16 mt-3 bg-gray-100">
      <div className="relative flex flex-col bg-gray-100 w-80 min-w-[20rem] shadow-md overflow-y-auto">
        <span className="w-full p-4 mb-10">
          <input
            className="w-full input-underline bg-gray-100"
            placeholder="Busque pelo número do pedido"
            type="text"
          />
        </span>

        {/* Sessao PENDENTE */}
        <div className="flex flex-col p-0">
          <div className="flex justify-between items-center bg-gray-200 py-3 px-4">
            <span className="text-xl font-medium text-gray-500">Pendente</span>
            <span className="text-xl font-medium text-gray-500">
              {orders.pending?.length || 0}
            </span>
          </div>
          <div className="flex flex-col text-secondary">
            {orders.pending?.map((order) => (
              <div
                onClick={() => onChangeOrderSelected(order)}
                className={
                  order.id === orderSelected?.id
                    ? classNameSelectedOrder
                    : defaultClassNameOrder
                }
                key={order.id}
              >
                <div className="flex flex-col justify-between">
                  <span className="font-semibold">Pedido</span>
                  <span className="font-semibold">Confirme o pedido</span>
                </div>
                <button className="bg-orange-100 text-white py-0.5 px-5 w-fit h-fit rounded-full">
                  5 min
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sessao EM PREPARO */}
        <div className="flex flex-col p-0">
          <div className="flex justify-between items-center bg-gray-200 py-3 px-4">
            <span className="text-xl font-medium text-gray-500">
              Em preparo
            </span>
            <span className="text-xl font-medium text-gray-500">
              {orders.inProcess?.length || 0}
            </span>
          </div>
          <div className="flex flex-col text-secondary">
            {orders.inProcess?.map((order) => (
              <div
                onClick={() => onChangeOrderSelected(order)}
                className={
                  order.id === orderSelected?.id
                    ? classNameSelectedOrder
                    : defaultClassNameOrder
                }
                key={order.id}
              >
                <div className="flex flex-col justify-between">
                  <span className="font-semibold">Pedido</span>
                  <span className="font-semibold">Entregar até 18:30</span>
                </div>
                <button className="bg-red-600 text-white py-0.5 px-5 w-fit h-fit rounded-full">
                  5 min
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sessao CONCLUÍDOS */}
        <div className="flex flex-col p-0 mb-24">
          <div className="flex justify-between items-center bg-gray-200 py-3 px-4">
            <span className="text-xl font-medium text-gray-500">
              Concluídos
            </span>
            <span className="text-xl font-medium text-gray-500">
              {orders.done?.length || 0}
            </span>
          </div>
          <div className="flex flex-col text-secondary">
            <div className="shadow-2xl border-t fixed flex justify-end w-[19.05rem] pt-2 pb-8 px-4 bottom-0 bg-white">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-secondary font-medium">
                  Pedidos ({ordersSummary.amount})
                </span>
                <span className="text-xl font-medium">
                  R$ {Number(ordersSummary.total).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!orderSelected ? (
        <div className="flex flex-col w-9/12 mx-auto mt-3 p-5 gap-10 justify-center mb-20">
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="text-2xl font-medium">
              Nenhum pedido selecionado
            </span>
            <span className="text-secondary">
              Selecione um pedido na lista ao lado
            </span>
          </div>
        </div>
      ) : null}

      {orderSelected ? (
        <div className="flex flex-col w-9/12 mx-auto mt-3 p-5 gap-10">
          {orderSelected.statusPedido === "Pendente" && (
            <div className="flex gap-8 w-full bg-white rounded-md px-8 py-5">
              <img src={successImage} alt="react logo" />
              <div className="flex flex-col gap-3">
                <span className="text-2xl text-orange-100">
                  Confirme o pedido para começar a preparar
                </span>
                <span className="text-secondary max-w-sm">
                  Confirme o pedido e o cliente será notificado que você está
                  preparando
                </span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <span className="text-2xl">Status do Pedido</span>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          </div>

          <div className="flex gap-8 items-center w-full bg-white rounded-md px-8 py-5">
            <span className="text-sm text-secondary py-2 px-4 bg-green-700/80 text-white rounded-full font-semibold">
              Entregar em
            </span>
            <div className="flex flex-col gap-3">
              <span className="text-secondary">
                {formatAddress(orderSelected.enderecoEntrega)}
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full h-fit bg-white rounded-md">
            <div
              className={`bg-green-100 text-green-600 px-8 py-5 w-full rounded-t-md ${
                orderSelected.statusPedido === "Pendente"
                  ? "!bg-red-100 !text-red-600"
                  : ""
              }`}
            >
              <div className="flex flex-col justify-between">
                <span className="font-bold">{orderSelected.statusPedido}</span>
                <span>4 minutos para confirmar</span>
              </div>
            </div>
            <div className="flex flex-col">
              {orderSelected.itens.map((item, index) => (
                <div
                  className="flex justify-between border-b-2 border-gray-300 px-8 py-5"
                  key={index}
                >
                  <div className="flex gap-2">
                    <span className="font-bold">{item.qtdProduto}</span>
                    <span>{item.titulo}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold">R$ {item.preco}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-5">
            <button
              className="bg-red-600 text-white py-2 px-6 rounded-lg"
              onClick={() => onChangeOrderStatus(orderSelected, "Cancelado")}
            >
              Cancelar
            </button>
            <button
              className="bg-green-600 text-white py-2 px-6 rounded-lg"
              onClick={() => {
                const novoStatus =
                  orderSelected.statusPedido === "Em preparo"
                    ? "Concluído"
                    : "Em preparo";
                onChangeOrderStatus(orderSelected, novoStatus);
              }}
            >
              Confirmar
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default OrderManagerPage;
