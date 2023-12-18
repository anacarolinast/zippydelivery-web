import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import successImage from "../../assets/img/success_orange.png"
import mastercardLogo from "../../assets/img/mastercard.png";
import orderManagerService from './OrderManagerService';


function formatDateTime(dateTime) {
  return `${dateTime[3]}:${dateTime[4]}`
}

function formatAddress(address) {
  return `${address.logradouro}, ${address.numeroEndereco}, ${address.bairro} - ${address.cidade} (${address.estado}) - CEP ${address.cep}`
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

  function onChangeOrderStatus(body, type) {
     
    body.statusPedido = type
    orderManagerService.updatePedido(body, body.id)
  }


  var defaultClassNameOrder = "cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2"
  var classNameSelectedOrder = "cursor-pointer flex justify-between items-center bg-gray-300 hover:bg-gray-300 py-3 px-4 border-l-4 border-orange-100"


  const getOrders = async () => {
    try {

      const ordersData = await orderManagerService.getAll()
      
      if (ordersData.data.length > 0) {
        setOrders({
          pending: ordersData.data.filter(order => order.statusPedido === "Pendente"),
          inProcess: ordersData.data.filter(order => order.statusPedido === "Em preparo"),
          done: ordersData.data.filter(order => order.statusPedido === "Concluído"),
          cancelled: ordersData.data.filter(order => order.statusPedido === "Cancelado"),
        });

        updateOrdersSummary(ordersData)

      }
    } catch (error) {
      // Handle errors appropriately
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    getOrders();

    const intervalId = setInterval(() => {
      getOrders();
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  function onChangeOrderSelected (newOrder)  {
    setOrderSelected(newOrder)
    console.log(newOrder)
    //setOrderShow(newOrder)
  }


  let navigate = useNavigate()
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
          {
            orderSelected.statusPedido === "Pendente" &&
            <div className='flex gap-8 w-full bg-white rounded-md px-8 py-5 '>
              <img src={successImage} alt="react logo" />
              <div className='flex flex-col gap-3'>
                <span className='text-2xl text-orange-100 '>Confirme o pedido para começar a preparar</span>
                <span className='text-secondary max-w-sm'>Confirme o pedido e o cliente será notificado que você está preparando</span>
              </div>
            </div>
          }

          <div className='flex items-center gap-4'>
            <span className='text-2xl'>Pedido #{orderSelected.id }</span>
            <div className='w-2 h-2 rounded-full bg-gray-600'></div>
            <span className='text-2xl text-secondary'>Feito às { formatDateTime(orderSelected.dataHora) } </span>
          </div>

          <div className='flex gap-8 items-center w-full bg-white rounded-md px-8 py-5 '>
            <span className='text-sm text-secondary py-2 px-4 bg-green-700/80 text-white rounded-full font-semibold'>Entregar em</span>
            <div className='flex flex-col gap-3'>
              <span className='text-secondary'>{ formatAddress(orderSelected) }</span>
            </div>
          </div>

          <div className='flex flex-col w-full h-fit bg-white rounded-md'>
            <div className={`bg-green-100 text-green-600 px-8 py-5 w-full rounded-t-md ${orderSelected.statusPedido === "Pendente" ? '!bg-red-100 !text-red-600' : ''}`}>
              <div className='flex flex-col justify-between'>
                <span className='font-bold'>{ orderSelected.statusPedido }</span>
                <span >4 minutos para confirmar</span>
              </div>
            </div>
            <div className='flex flex-col'>
              {orderSelected.itensPedido.map(item => (
                <div className='flex justify-between border-b-2 border-gray-300 px-8 py-5'>
                  <div className='flex gap-2'>
                    <span className='font-bold'>{ item.qtdProduto }</span>
                    <span className='text-secondary'>{ item.produto.titulo } - { item.produto.descricao }</span>
                  </div>
                  <span>R$ { item.valorUnitario }</span>
                </div>
              ))}
              
              <div className='flex justify-between px-8 py-5'>
                <span className='text-secondary font-bold'>Subtotal</span>
                <span>R${orderSelected.valorTotal}</span>
              </div>
            </div>
          </div>

          <div className='flex gap-8 items-center w-full bg-white rounded-md px-8 py-5 '>
            <img src={mastercardLogo} alt="react logo" />

            <div className='flex flex-col gap-1'>
              <span className='text-secondary font-semibold'>Pagamento pelo aplicativo (online)</span>
              <span className='text-secondary'>O entregador não deve cobrar este valor no ato da entrega</span>
            </div>
          </div>

            {
              orderSelected.statusPedido === "Pendente" ?
              <div className='flex gap-3 ml-auto'>
                <button onClick={() => { onChangeOrderStatus(orderSelected, "Cancelado") }} className='flex items-center bg-white/50 hover:bg-white/100 transition-opacity secondary-button px-10'>
                  Rejeitar
                </button>
                <button onClick={() => { onChangeOrderStatus(orderSelected, "Em preparo") }} className=' flex items-center primary-button px-10'>
                  Confirmar
                </button>

              </div> : <span></span>
            }
            {
              orderSelected.statusPedido === "Em preparo" ?
              <div className='flex gap-3 ml-auto'>
                <button onClick={() => { onChangeOrderStatus(orderSelected, "Concluído")}} className=' flex items-center primary-button bg-green-700/80 text-white px-10'>
                  Despachar
                </button>

              </div> : <span></span>
            }
          

        </div> : <span></span>
      }

      
      
    </div>
  )
}

export default OrderManagerPage
