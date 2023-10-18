import React from 'react';
import { useNavigate } from "react-router-dom";
import img from "./pic.png"


function HomePage() {
  let navigate = useNavigate()
  return (
    <div className='h-full justify-center pt-44'>
      <div className='flex mx-auto w-1/2 h-60 bg-white rounded-lg overflow-hidden'>
        <div className='bg-orange-100 w-2/6 h-full rounded-r-lg'>
          <img src="./pic.png" alt="" />
        </div>
        <div className='w-4/6 p-6 flex flex-col'>
          <span className='text-black text-3xl font-semibold'>Sabores inigualáveis</span>
          <span className='text-secondary text-gray-500 text-lg font-medium'>Cadastre um novo prato para o seu restaurante</span>
          <button onClick={() => { navigate('/produto') }}className='primary-button mt-auto w-fit px-5 ml-auto'>
            Cadastrar Prato
          </button>
        </div>
      </div>
      <div className='mt-14 h-11 w-1/2 mx-auto'>
        <div>
            <span className='text-2xl font-semibold tracking-wider'>Pratos Cadastrados</span>
            <div className='flex gap-3 mt-6'>
              <div className='flex flex-col w-60 h-72 bg-white rounded-md overflow-hidden'>
                <div className='bg-orange-100 h-1/2 w-full rounded-b-md'></div>
                <div className='flex flex-col gap-4 p-3'>
                  <span className='font-semibold'>Pizza de Mussarela</span>
                  <span className='text-secondary text-sm'>Massa fresca com queijo mussarela preparada no forno</span>
                  <button onClick={() => { navigate('/produto') }}className='primary-button mt-auto w-full ml-auto text-sm'>
                    Editar
                  </button>
                </div>
              </div>
              <div className='flex flex-col w-60 h-72 bg-white rounded-md overflow-hidden'>
                <div className='bg-orange-100 h-1/2 w-full rounded-b-md'></div>
                <div className='flex flex-col gap-4 p-3'>
                  <span className='font-semibold'>Torradas de Parma</span>
                  <span className='text-secondary text-sm'>Presunto de parma e rúcula em um pão</span>
                  <button onClick={() => { navigate('/produto') }}className='primary-button mt-auto w-full ml-auto text-sm'>
                    Editar
                  </button>
                </div>
              </div>
              <div className='flex flex-col w-60 h-72 bg-white rounded-md overflow-hidden'>
                <div className='bg-orange-100 h-1/2 w-full rounded-b-md'></div>
                <div className='flex flex-col gap-4 p-3'>
                  <span className='font-semibold'>Salada Ravanello</span>
                  <span className='text-secondary text-sm'>Rabanetes, folhas verdes, e molho agridoce</span>
                  <button onClick={() => { navigate('produto') }}className='primary-button mt-auto w-full ml-auto text-sm'>
                    Editar
                  </button>
                </div>
              </div>
              <div className='flex flex-col w-60 h-72 bg-white rounded-md overflow-hidden'>
                <div className='bg-orange-100 h-1/2 w-full rounded-b-md'></div>
                <div className='flex flex-col gap-4 p-3'>
                  <span className='font-semibold'>Filé à Parmegiana</span>
                  <span className='text-secondary text-sm'>Filé de peito de frango com macarrão</span>
                  <button onClick={() => { navigate('produto') }}className='primary-button mt-auto w-full ml-auto text-sm'>
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default HomePage
