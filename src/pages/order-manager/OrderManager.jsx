import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import successImage from "../../assets/img/success_orange.png"
import mastercardLogo from "../../assets/img/mastercard.png";
import orderManagerService from './OrderManagerService';

function formatDateTime(dateTime) {
  return `${dateTime[3]}:${dateTime[4]}`
}

function formatAddress(address) {
  return `${address.logradouro}, ${address.numero}, ${address.bairro} - ${address.cidade} (${address.estado}) - CEP ${address.cep}`
}

function OrderManagerPage() {
  
  const [orders, setOrders] = useState({
    pending: [],
    inProcess: [],
    done: [],
    cancelled: [],
  });
  
  const [orderSelected, setOrderSelected] = useState('');
  const [ordersSummary, setAllOrders] = useState('');

  function updateOrdersSummary(orders) {
    setAllOrders({
      amount: orders.data.length,
      total: orders.data.reduce((total, order) => total + order.valorTotal, 0)
    })
  }

  function onChangeOrderSelected(orderSelected, type) {
    console.log("Função chamada", orderSelected, type);
  
    const updatedBody = {
      formaPagamento: orderSelected.formaPagamento,
      statusPedido: type,
      statusPagamento: orderSelected.statusPagamento,
      enderecoEntregaId: orderSelected.enderecoEntregaId,
    };
  
    console.log("Body da requisição:", updatedBody);
  
    orderManagerService.updatePedido(updatedBody, orderSelected.id)
      .then(response => {
        console.log("Resposta da API:", response);
      })
      .catch(error => {
        console.log("Erro na requisição:", error);
      });
  }

  const getOrders = async () => {
    try {
      const ordersData = await orderManagerService.getAll();
      
      if (ordersData.data.length > 0) {
        setOrders({
          pending: ordersData.data.filter(order => order.statusPedido === 2),
          inProcess: ordersData.data.filter(order => order.statusPedido === 6),
          done: ordersData.data.filter(order => order.statusPedido === 7),
          cancelled: ordersData.data.filter(order => order.statusPedido === 5),
        });

        updateOrdersSummary(ordersData);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []); 

  let navigate = useNavigate();
  return (
    <div className='flex h-full pt-16 mt-3 bg-gray-100'>
      <div className='relative flex flex-col  bg-gray-100 w-80 min-w-[20rem] shadow-md overflow-y-auto overflow'>
        <span className='w-full p-4 mb-10'>
          <input className='w-full input-underline bg-gray-100' placeholder='Busque pelo número do pedido' type="text" />
        </span>
        
        {/* Sessao PENDENTE */}
        <div className='flex flex-col p-0'>
          <div className='flex justify-between items-center bg-gray-200 py-3 px-4'>
            <span className='text-xl font-medium text-gray-500'>Pendente</span>
            <span className='text-xl font-medium text-gray-500'>{ orders.pending?.length || 0 }</span>
          </div>

          <div className='flex flex-col text-secondary'>
            {orders.pending?.map(order => (
              <div onClick={() => { onChangeOrderSelected(order) }} className={order.id === orderSelected.id ? classNameSelectedOrder : defaultClassNameOrder}>
                <div className='flex flex-col justify-between '>
                  <span className='font-semibold '>#{ order.id }</span>
                  <span className='font-semibold '>Confirme o pedido</span>
                </div>
                <button className='bg-orange-100 text-white py-0.5 px-5 w-fit h-fit rounded-full'>5 min</button>
              </div>
            ))}
          </div>

        </div>

        {/* Sessao EM PREPARO */}
        <div className='flex flex-col p-0'>
          <div className='flex justify-between items-center bg-gray-200 py-3 px-4'>
            <span className='text-xl font-medium text-gray-500'>Em preparo</span>
            <span className='text-xl font-medium text-gray-500'>{ orders.inProcess?.length || 0 }</span>
          </div>

          <div className='flex flex-col text-secondary'>
            {orders.inProcess?.map(order => (
                <div onClick={() => { onChangeOrderSelected(order) }} className={order.id === orderSelected.id ? classNameSelectedOrder : defaultClassNameOrder}>
                  <div className='flex flex-col justify-between '>
                    <span className='font-semibold '>#{ order.id }</span>
                    <span className='font-semibold '>Entregar até 18:30</span>
                  </div>
                  <button className='bg-red-600 text-white py-0.5 px-5 w-fit h-fit rounded-full'>5 min</button>
                </div>
            ))}
          </div>

        </div>

        {/* Sessao CONCLUÍDOS */}
        <div className='flex flex-col p-0 mb-24'>
          <div className='flex justify-between items-center bg-gray-200 py-3 px-4'>
            <span className='text-xl font-medium text-gray-500'>Concluídos</span>
            <span className='text-xl font-medium text-gray-500'>{ orders.done?.length || 0 }</span>
          </div>

          <div className='flex flex-col text-secondary'>
            {orders.done?.map(order => (
              <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
                <div className='flex flex-col justify-between '>
                  <span className='font-semibold '>#{ order.id }</span>
                </div>
                <span className='font-semibold '>{ order.cliente.nome }</span>
              </div>
            ))}

            <div className='shadow-2xl border-t fixed flex justify-end w-[19.05rem] pt-2 pb-8 px-4 bottom-0 bg-white'>
              <div className='flex flex-col gap-2'>
                <span className='text-sm text-secondary font-medium'>Pedidos ({ ordersSummary.amount })</span>
                <span className='text-xl font-medium'>R$ { ordersSummary.total }</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      {
        !orderSelected ? 
        <div className='flex flex-col w-9/12 mx-auto mt-3 p-5 gap-10 justify-center mb-20'>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <span className='text-2xl font-medium'>Nenhum pedido selecionado</span>
            <span className='text-secondary'>Selecione um pedido na lista ao lado</span>
          </div>
        </div> : <span></span>
      }

      {
        orderSelected ?
        <div className='flex flex-col w-9/12 mx-auto mt-3 p-5 gap-10'>
          {/* Restante do código para exibir os detalhes do pedido selecionado */}
        </div> : <span></span>
      }
    </div>
  );
}

export default OrderManagerPage;
