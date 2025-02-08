import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { ref, get } from "firebase/database";
import { format } from "date-fns";
import useNewPedidoNotification from "../../hooks/UseNewPedidoNotification";
import useCompanyId from "../../hooks/UseCompanyId";

export default function OrderHistoryPage() {
  const [lista, setLista] = useState([]);
  const [listaDefault, setListaDefault] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [initialDate, setInitialDate] = useState([]);
  const [finalDate, setFinalDate] = useState([]);
  const [search, setSearch] = useState([]);

  const empresaId = useCompanyId();
  const firebaseUrl = "pedidos";

  useEffect(() => {
    if (empresaId) {
      carregarLista();
    }
  }, [empresaId]);

  const carregarLista = async () => {
    try {
      const pedidosRef = ref(db, firebaseUrl);
      const snapshot = await get(pedidosRef);
  
      if (snapshot.exists()) {
        const pedidos = Object.keys(snapshot.val()).map((key) => {
          const pedido = snapshot.val()[key];
          return {
            id: key,
            dataHora: new Date(pedido.dataHora),
            valorTotal: pedido.valorTotal || 0,
            status: pedido.statusPedido,
            enderecoEntrega: pedido.enderecoEntrega,
            cliente: pedido.cliente,
            itens: pedido.itens,
            formaPagamento: pedido.formaPagamento,
            taxaEntrega: pedido.taxaEntrega,
            empresaId: pedido.empresa?.id,
          };
        });
  
        const pedidosFiltrados = pedidos.filter(
          (pedido) => pedido.empresaId === empresaId
        );
  
        setLista(pedidosFiltrados);
        setListaDefault(pedidosFiltrados);
      } else {
        console.log("Nenhum dado encontrado no Firebase.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };
  

  function formatarData(dataHora) {
    return format(new Date(dataHora), "dd/MM/yyyy HH:mm");
  }

  function onChangeForm(value, type) {
    setLista(listaDefault);
    let filterInitialDate = initialDate;
    let filterFinalDate = finalDate;

    if (type === "search" && (value === "" || value === null)) {
      setLista(listaDefault);
      setSearch(value);
      return;
    }

    switch (type) {
      case "initialDate":
        filterInitialDate = new Date(value);
        setInitialDate(filterInitialDate);
        break;
      case "finalDate":
        filterFinalDate = new Date(value);
        setFinalDate(filterFinalDate);
        break;
      case "search":
        setSearch(value);
        setLista(
          listaDefault.filter((item) => item.id.toString().includes(value))
        );
        break;
      default:
        break;
    }

    if (type === "initialDate" || type === "finalDate") {
      setLista(
        listaDefault.filter((item) => {
          let dateItem = new Date(item.dataHora);
          if (
            filterInitialDate instanceof Date &&
            filterFinalDate instanceof Date
          ) {
            return filterInitialDate <= dateItem && dateItem <= filterFinalDate;
          } else if (filterInitialDate instanceof Date) {
            return dateItem >= filterInitialDate;
          } else if (filterFinalDate instanceof Date) {
            return dateItem <= filterFinalDate;
          }
        })
      );
    }
  }

  const openModal = (pedido) => {
    console.log("Pedido aberto:", pedido);
    setModalData(pedido);
  };

  const closeModal = () => {
    setModalData(null);
  };

  useNewPedidoNotification(); 

  return (
    <div className="h-fit justify-center p-32 bg-light-300">
      <div className="flex flex-col gap-5 mx-auto max-w-5xl pb-44">
        <div className="flex justify-between">
          <div className="flex flex-col gap-10">
            <span className="text-5xl font-regular text-gray-800">
              Histórico de pedidos
            </span>
            <span className="text-secondary max-w-xl">
              Seu histórico de pedidos é o registro de todas as interações com
              clientes no Zippy. Acompanhe e gerencie todos os pedidos
              anteriores a partir deste histórico central.
            </span>
          </div>
          <div className="flex gap-2">
            <div className="mt-3 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-col">
              <span className="flex items-center gap-1 text-xl text-green-500">
                Restaurante Aberto
              </span>
              <span className="text-gray-500">
                Dentro do horário programado
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center relative bg-white border-gray-200 border-y rounded-sm p-6">
          <div className="flex flex-col">
            <span className="text-secondary text-left w-[300px]">
              Data inicial:
            </span>
            <input
              className="form-input rounded-sm"
              type="date"
              onChange={(e) => onChangeForm(e.target.value, "initialDate")}
            />
          </div>
          <div className="flex flex-col w-[300px]">
            <span className="text-secondary text-left">Data Final:</span>
            <input
              className="form-input rounded-sm "
              type="date"
              onChange={(e) => onChangeForm(e.target.value, "finalDate")}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <span className="text-secondary text-left">Pesquisar:</span>
            <input
              className="flex form-input rounded-sm p-2 "
              type="search"
              placeholder="Pesquise pelo número do pedido"
              value={search}
              onChange={(e) => onChangeForm(e.target.value, "search")}
            />
          </div>
        </div>
        <div className="relative overflow-x-auto bg-white border-gray-200 border-y">
          <table className="w-full text-center text-sm text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Data / Hora
                </th>
                <th scope="col" className="px-6 py-3">
                  Valor Total
                </th>
              </tr>
            </thead>
            <tbody>
              {lista.map((pedido) => (
                <tr
                  key={pedido.id}
                  className="bg-white border-b hover:bg-orange-100 cursor-pointer"
                  onClick={() => openModal(pedido)}
                >
                  <td className="px-6 py-4">
                    <div className="text-base font-medium">{pedido.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-base font-medium">
                      {formatarData(pedido.dataHora)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-base font-medium">
                      R$ {pedido.valorTotal.toFixed(2)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalData && (
        <div
          className="absolute inset-0 mt-10 bg-gray-500 bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-2 border-gray-300 p-4 space-y-6">
              <div className="text-center space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">
                  DETALHES DO PEDIDO
                </h1>
                <p className="text-lg text-gray-600">{`Pedido #${modalData.id}`}</p>
                <p className="text-sm text-gray-500">{`Data: ${formatarData(
                  modalData.dataHora
                )}`}</p>
              </div>

              <div className="flex justify-between text-sm text-gray-700">
                <div>
                  <p>
                    <strong>Cliente:</strong> {modalData.cliente.nome}
                  </p>
                  <p>
                    <strong>CPF:</strong> {modalData.cliente.cpf}
                  </p>
                  <p>
                    <strong>Endereço: </strong>
                    {modalData.enderecoEntrega.logradouro},{" "}
                    {modalData.enderecoEntrega.bairro},{" "}
                    {modalData.enderecoEntrega.cep}
                  </p>

                  <p>
                    <strong>Status:</strong> {modalData.status}
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-gray-300 pt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Itens do Pedido
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 mt-2">
                  {modalData.itens.map((item, index) => (
                    <li key={index} className="grid grid-cols-3 gap-4">
                      <span className="truncate">{item.titulo}</span>
                      <span className="text-center">
                        {item.qtdProduto} x R$ {item.preco.toFixed(2)}
                      </span>
                      <span className="font-semibold text-right">
                        R$ {(item.qtdProduto * item.preco).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center border-t-2 border-gray-300 pt-4"></div>
              <div className="flex justify-between items-center pt-2">
                <p className="text-3xl text-gray-600">Total</p>
                <p className="text-xl font-bold text-gray-800">
                  R$ {modalData.valorTotal.toFixed(2)}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
