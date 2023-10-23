import React from 'react';
import { useNavigate } from "react-router-dom";


function HomePage() {
  let navigate = useNavigate()
  return (
    <div className='h-full justify-center pt-44 bg-white'>
      <div className='flex flex-col md:flex-row mx-auto w-[48rem] max-w-2xl h-60 bg-white rounded-lg overflow-hidden shadow-lg border-[0.5px]'>
        <div className='bg-orange-100 w-full md:w-2/6 h-full rounded-b-lg md:rounded-r-lg'>
        </div>
        <div className='w-4/6 min-w-fit p-6 flex flex-col'>
          <span className='text-black text-3xl font-semibold'>Sabores inigualáveis</span>
          <span className='text-secondary text-gray-500 text-lg font-medium'>Cadastre um novo prato para o seu restaurante</span>
          <button onClick={() => { navigate('/produto') }} className='primary-button  mt-auto w-fit px-5 ml-auto'>
            Cadastrar Prato
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
