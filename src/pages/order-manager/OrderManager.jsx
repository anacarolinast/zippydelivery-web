import React from 'react';
import { useNavigate } from "react-router-dom";
import successImage from "../../assets/img/success_orange.png"
import mastercardLogo from "../../assets/img/mastercard.png";



function OrderManagerPage() {
  let navigate = useNavigate()
  return (
    <div className='flex h-full pt-16 mt-3 bg-gray-100'>
      <div className='relative flex flex-col  bg-gray-100 w-80 min-w-[20rem] shadow-md overflow-y-auto overflow'>
        <span className='w-full p-4 mb-10'>
          <input className='w-full input-underline bg-gray-100' placeholder='Busque pelo número do pedido' type="text" />
        </span>
        {/* Sessao */}
        <div className='flex flex-col p-0'>
          <div className='flex justify-between items-center bg-gray-200 py-3 px-4'>
            <span className='text-xl font-medium text-gray-500'>Pendente</span>
            <span className='text-xl font-medium text-gray-500'>4</span>
          </div>

          <div className='flex flex-col text-secondary'>

            <div className='cursor-pointer flex justify-between items-center bg-gray-300 hover:bg-gray-300 py-3 px-4  border-l-4 border-orange-100'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4020</span>
                <span className='font-semibold '>Confirme o pedido</span>
              </div>
              <button className='bg-orange-100 text-white py-0.5 px-5 w-fit h-fit rounded-full'>0 min</button>
            </div>

            <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4021</span>
                <span className='font-semibold '>Confirme o pedido</span>
              </div>
              <button className='bg-orange-100 text-white py-0.5 px-5 w-fit h-fit rounded-full'>5 min</button>
            </div>

            <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4022</span>
                <span className='font-semibold '>Confirme o pedido</span>
              </div>
              <button className='bg-orange-100 text-white py-0.5 px-5 w-fit h-fit rounded-full'>9 min</button>
            </div>

            <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4023</span>
                <span className='font-semibold '>Confirme o pedido</span>
              </div>
              <button className='bg-orange-100 text-white py-0.5 px-5 w-fit h-fit rounded-full'>2 min</button>
            </div>

          </div>

        </div>
        <div className='flex flex-col p-0'>
          <div className='flex justify-between items-center bg-gray-200 py-3 px-4'>
            <span className='text-xl font-medium text-gray-500'>Em preparo</span>
            <span className='text-xl font-medium text-gray-500'>4</span>
          </div>

          <div className='flex flex-col text-secondary'>

          <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4021</span>
                <span className='font-semibold '>Entregar até 18:30</span>
              </div>
              <button className='bg-red-600 text-white py-0.5 px-5 w-fit h-fit rounded-full'>5 min</button>
            </div>

            <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4021</span>
                <span className='font-semibold '>Entregar até 18:17</span>
              </div>
              <button className='bg-red-600 text-white py-0.5 px-5 w-fit h-fit rounded-full'>5 min</button>
            </div>

            <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4022</span>
                <span className='font-semibold '>Entregar até 18:10</span>
              </div>
              <button className='bg-red-600 text-white py-0.5 px-5 w-fit h-fit rounded-full'>9 min</button>
            </div>

            <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4023</span>
                <span className='font-semibold '>Entregar até 18:00</span>
              </div>
              <button className='bg-red-600 text-white py-0.5 px-5 w-fit h-fit rounded-full'>2 min</button>
            </div>

          </div>

        </div>
        <div className='flex flex-col p-0 mb-24'>
          <div className='flex justify-between items-center bg-gray-200 py-3 px-4'>
            <span className='text-xl font-medium text-gray-500'>Concluídos</span>
            <span className='text-xl font-medium text-gray-500'>3</span>
          </div>

          <div className='flex flex-col text-secondary'>

            <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4020</span>
              </div>
              <span className='font-semibold '>Jamilly A.</span>
            </div>

            <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4020</span>
              </div>
              <span className='font-semibold '>Jamilly A.</span>
            </div>

            <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-300 border-b-2'>
              <div className='flex flex-col justify-between '>
                <span className='font-semibold '>#4020</span>
              </div>
              <span className='font-semibold '>Jamilly A.</span>
            </div>

            <div className='shadow-2xl border-t fixed flex justify-end w-[18.9rem] pt-2 pb-8 px-4 bottom-0 bg-white'>
              <div className='flex flex-col gap-2'>
                <span className='text-sm text-secondary font-medium'>Pedidos(100)</span>
                <span className='text-xl font-medium'>R$ 12.231,88</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className='flex flex-col w-9/12 mx-auto mt-3 p-5 gap-10'>
        <div className='flex gap-8 w-full bg-white rounded-md px-8 py-5 '>
          <img src={successImage} alt="react logo" />
          <div className='flex flex-col gap-3'>
            <span className='text-2xl text-orange-100 '>Confirme o pedido para começar a preparar</span>
            <span className='text-secondary max-w-sm'>Confirme o pedido e o cliente será notificado que você está preparando</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <span className='text-2xl'>Pedido #4020</span>
          <div className='w-2 h-2 rounded-full bg-gray-600'></div>
          <span className='text-2xl text-secondary'>Feito às 14:13</span>
        </div>

        <div className='flex gap-8 items-center w-full bg-white rounded-md px-8 py-5 '>
          <span className='text-sm text-secondary py-2 px-4 bg-gray-200 rounded-full font-semibold'>Entregar em</span>
          <div className='flex flex-col gap-3'>
            <span className='text-secondary'>Av. do General Manoel Rabelo, 798, Vila Yara - Recife/PE - CEP 52891-355</span>
          </div>
        </div>

        <div className='flex flex-col w-full h-fit bg-white rounded-md'>
          <div className='bg-red-100 text-red-600 px-8 py-5 w-full rounded-t-md'>
            <div className='flex flex-col justify-between'>
              <span className='font-bold'>Pendente</span>
              <span >4 minutos para confirmar</span>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className='flex justify-between border-b-2 border-gray-300 px-8 py-5'>
              <div className='flex gap-2'>
                <span className='font-bold'>1</span>
                <span className='text-secondary'>Saint peter ao molho de limão siciliano</span>
              </div>
              <span>R$ 28,99</span>
            </div>
            <div className='flex justify-between border-b-2 border-gray-300 px-8 py-5'>
              <div className='flex gap-2'>
                <span className='font-bold'>1</span>
                <span className='text-secondary'>Saint peter ao molho de limão siciliano</span>
              </div>
              <span>R$ 28,99</span>
            </div>
            <div className='flex justify-between px-8 py-5'>
              <span className='text-secondary font-bold'>Subtotal</span>
              <span>R$ 57,98</span>
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

        <div className='flex gap-3 ml-auto'>
            <button onClick={() => { navigate('') }} className='flex items-center bg-white/50 hover:bg-white/100 transition-opacity secondary-button px-10 '>
              Rejeitar
            </button>
            <button onClick={() => { navigate('') }} className=' flex items-center primary-button px-10'>
              Confirmar
            </button>

          </div>

      </div>
    </div>
  )
}

export default OrderManagerPage
