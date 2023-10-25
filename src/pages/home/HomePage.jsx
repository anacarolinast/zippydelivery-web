import React from 'react';
import { useNavigate } from "react-router-dom";


function HomePage() {
  let navigate = useNavigate()
  return (
    <div className='h-fit justify-center p-44 bg-white'>
      <div className='flex justify-end p-10'>
        <div className='flex gap-2'>
            <div className='mt-3 text-green-500'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className='flex flex-col'>
              <span className='flex items-center gap-1 text-xl font-semibold text-green-500 '>
                Restaurante Aberto
              </span>
              <span className='text-secondary'>Dentro do horário programado</span>
            </div>
        </div>
    </div>
    <div className='flex flex-col space-y-8 w-full h-full p-10'>
      <span className='text-black text-3xl font-semibold'>Olá, Zipper!</span>
      <div className='flex gap-5 border border-sky-100 p-2 justify-start'>
        <div className='flex'>
        <img class="h-auto max-w-xs self-center rounded-full" src="restaurant.png"></img>
        </div>
        <div className='flex-1 flex-col p-2'>
          <span className='text-black text-3xl font-semibold'>Nome da Loja &gt;&gt;</span> 
          <span className='text-orange-100 text-3xl'> Acompanhamento</span>
          <div className='border-[0.5px] mt-2'></div>
          <div className='flex pt-2 justify-between'>
            <div className='flex flex-col space-y-2'>
              <div className='flex flex-row gap-2'>
                <img class="h-auto mt-2 max-w-xs self-start" src="check.png"></img>
                <span className='text-black text-3xl'> Desempenho</span>
              </div>
              <div className='flex flex-row gap-10 justify-between'>
                <div className='flex'>
                  <span className='text-black pl-9'>Pedidos de hoje</span>
                </div>
                <div className='flex'>
                  <span className='text-black'>Ticket médio de hoje</span>
                </div>
              </div>
              <div className='flex flex-row gap-10 justify-between'>
                <div className='flex'>
                  <span className='text-black text-3x1 pl-9'>15 pedidos</span>
                </div>
                <div className='flex'>
                  <span className='text-black selft-start'>R$ 943,98</span>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col sapce-y-2 gap-2'>
              <div className='flex flex-row gap-2'>
                <img class="h-auto mt-2 max-w-xs self-start" src="dollar.png"></img>
                <span className='text-black text-3xl'> Vendas</span>
              </div>
              <div className='flex flex-row gap-10 justify-between'>
                <div className='flex'>
                  <span className='text-black pl-9'>Valor total das vendas</span>
                </div>
                <div className='flex'>
                  <span className='text-black'>Total de vendas realizadas</span>
                </div>
              </div>
              <div className='flex flex-row gap-10 justify-between'>
                <div className='flex'>
                  <span className='text-black text-3x1 pl-9'>R$ 5.777,59</span>
                </div>
                <div className='flex'>
                  <span className='text-black selft-start'>165</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className='flex flex-col h-fit p-2 items-center'>
        <span className='text-tomato-100 underline mt-2 cursor-pointer'>Fechar agora</span>
        </div>
      </div>
      <span className='text-black text-2xl font-semibold'>Aqui você pode...</span>
      <div className='flex flex-row'>
        <div className='flex h-fit justify-center'>
          <span className='text-center w-1/2'>Além disso, mantenha-se no comando dos pedidos, rastreie suas entregas, aceite ou recuse-os com simplicidade e eficiência. É o seu negócio, sob seu controle.</span>
        </div>
        <div className='flex h-fit justify-center'>
          <span className='text-center w-1/2'>Além disso, mantenha-se no comando dos pedidos, rastreie suas entregas, aceite ou recuse-os com simplicidade e eficiência. É o seu negócio, sob seu controle.</span>
        </div>
      </div>
      <div className='flex flex-row gap-10 justify-center'>
        <div className='flex bg-orange-100 rounded-lg h-fit p-4 cursor-pointer items-center gap-5 '
             onClick={() => { navigate('/menu-manager') }} >
          <img src="gerenciar-cardapio.png" alt="" />
          <span className='text-light-100 text-2xl font-bold text-center'>Gerencie o cardápio</span>
        </div>
        <div className='flex bg-tomato-300 rounded-md h-fit p-4 cursor-pointer justify-center items-center gap-5'
             onClick={() => { navigate('/order-manager') }} >
          <img src="gerenciar-pedidos.png" alt="" />
          <span className='text-light-100 text-2xl font-bold text-center'>Gerencie os pedidos</span>
        </div>
        {/* <div className='flex bg-tomato-300 rounded-md h-fit p-4 cursor-pointer justify-center items-center gap-5'
             onClick={() => { navigate('/produto') }} >
          <img src="gerenciar-pedidos.png" />
          <span className='text-light-100 text-2xl font-bold text-center'>Cadastre um novo prato</span>
        </div> */}
        
      </div>
      
    </div>
    

      {/* <div className='flex flex-col md:flex-row mx-auto w-[48rem] max-w-2xl h-60 bg-white rounded-lg overflow-hidden shadow-lg border-[0.5px]'>
        <div className='bg-orange-100 w-full md:w-2/6 h-full rounded-b-lg md:rounded-r-lg'>
        </div>
        <div className='w-4/6 min-w-fit p-6 flex flex-col'>
          <span className='text-black text-3xl font-semibold'>Sabores inigualáveis</span>
          <span className='text-secondary text-gray-500 text-lg font-medium'>Cadastre um novo prato para o seu restaurante</span>
          <button onClick={() => { navigate('/produto') }} className='primary-button  mt-auto w-fit px-5 ml-auto'>
            Cadastrar Prato
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default HomePage
