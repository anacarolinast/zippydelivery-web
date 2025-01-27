import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useCompany from '../../hooks/UseCompany';
import utilService from '../../utilService';
import { format } from 'date-fns';

export default function OrderHistoryPage() {
  const [lista, setLista] = useState([]);
  const [listaDefault, setListaDefault] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [initialDate, setInitialDate] = useState([]);
  const [finalDate, setFinalDate] = useState([]);
  const [search, setSearch] = useState([]);

  const empresaId = useCompany();
  const apiUrl = utilService.getURlAPI();

  useEffect(() => {
    if (empresaId) {
      carregarLista(empresaId);
    }
  }, [empresaId]);

  const carregarLista = (empresaId) => {
    axios.get(`${apiUrl}/pedido/empresa/${empresaId}`)
      .then((response) => {
        console.log(response.data);
        setLista(response.data);
        setListaDefault(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  };

  function formatarData(dataHora) {
    return format(new Date(dataHora), 'dd/MM/yyyy HH:mm');
  }

  function onChangeForm(value, type) {
    setLista(listaDefault);
    let filterInitialDate = initialDate;
    let filterFinalDate = finalDate;

    var dateSplited = "";

    if (type === "search" && (value === "" || value === null)) {
      setLista(listaDefault);
      setSearch(value);
      return;
    }

    switch (type) {
      case "initialDate":
        dateSplited = value.split('-');
        var date = new Date(dateSplited[0], dateSplited[1] - 1, dateSplited[2]);

        filterInitialDate = date;

        setInitialDate(date);
        break;

      case "finalDate":
        dateSplited = value.split('-');
        var date = new Date(dateSplited[0], dateSplited[1] - 1, dateSplited[2]);

        filterFinalDate = date;
        setFinalDate(date);
        break;

      case "search":
        setSearch(value);
        setLista(listaDefault.filter(item => item.id.toString().includes(value)));
        break;

      default:
        break;
    }

    if (type === "initialDate" || type === "finalDate") {
      setLista(listaDefault.filter(item => {
        let dateItem = new Date(item.dataHora[0], item.dataHora[1] - 1, item.dataHora[2]);

        if (filterInitialDate instanceof Date && filterFinalDate instanceof Date) {
          return filterInitialDate <= dateItem && dateItem <= filterFinalDate;
        }
        else if (filterInitialDate instanceof Date && !(filterFinalDate instanceof Date)) {
          return dateItem >= filterInitialDate;
        }
        else if (!(filterInitialDate instanceof Date) && filterFinalDate instanceof Date) {
          return dateItem <= filterFinalDate;
        }
      }));
    }
  }

  const openModal = (pedido) => {
    setModalData(pedido);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className='h-fit justify-center p-44 bg-light-300'>
      <div className='flex flex-col gap-5 mx-auto max-w-5xl pb-44'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-10'>
            <span className='text-5xl font-regular text-gray-800'>Histórico de pedidos</span>
            <span className='text-secondary max-w-xl'>
              Seu histórico de pedidos é o registro de todas as interações com clientes no Zippy. Acompanhe e gerencie todos os pedidos anteriores a partir deste histórico central.
            </span>
          </div>
          <div className='flex gap-2'>
            <div className='mt-3 text-green-500'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className='flex-col'>
              <span className='flex items-center gap-1 text-xl text-green-500'>
                Restaurante Aberto
              </span>
              <span className='text-gray-500'>Dentro do horário programado</span>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center relative bg-white border-gray-200 border-y rounded-sm p-6">
          <div className="flex flex-col">
            <span className="text-secondary text-left w-[300px]">Data inicial:</span>
            <input className="form-input rounded-sm" type="date"
              onChange={e => onChangeForm(e.target.value, "initialDate")} />
          </div>
          <div className="flex flex-col w-[300px]" >
            <span className="text-secondary text-left">Data Final:</span>
            <input className="form-input rounded-sm " type="date" 
              onChange={e => onChangeForm(e.target.value, "finalDate")} />
          </div>
          <div className="flex flex-col w-1/3" >
            <span className="text-secondary text-left">Pesquisar:</span>
            <input className="flex form-input rounded-sm p-2 " type="search-" placeholder="Pesquise pelo número do pedido" value={search}
            onChange={e => onChangeForm(e.target.value, "search")} />
          </div>
        </div>
        <div className="relative overflow-x-auto bg-white border-gray-200 border-y">
          <table className="w-full text-center text-sm text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Número
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
              {lista.map(pedido => (
                <tr key={pedido.id} 
                  className="bg-white border-b hover:bg-orange-100 cursor-pointer" 
                  onClick={() => openModal(pedido)}>
                  <td className="px-6 py-4">
                    <div className="text-base font-medium">{pedido.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-base font-medium">{formatarData(pedido.dataHora)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-base font-medium">R$ {pedido.valorTotal.toFixed(2)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalData && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
          <div className="bg-white p-6 rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <span className="text-lg font-medium">Número do Pedido:</span>
                <p>{modalData.id}</p>
              </div>
              <div className="col-span-1">
                <span className="text-lg font-medium">Data e Hora:</span>
                <p>{formatarData(modalData.dataHora)}</p>
              </div>
              <div className="col-span-1">
                <span className="text-lg font-medium">Valor Total:</span>
                <p>R$ {modalData.valorTotal.toFixed(2)}</p>
              </div>
              <div className="col-span-2">
                <span className="text-lg font-medium">Status:</span>
                <p>{modalData.status}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
