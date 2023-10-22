import React from 'react';
import { useNavigate } from "react-router-dom";
import img from "./pic.png"


function HomePage() {
  let navigate = useNavigate()
  return (
    <div className='h-full justify-center pt-44 bg-gray-200'>
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
    </div>
  )
}

export default HomePage
