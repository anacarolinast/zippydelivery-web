import React from 'react';
import { useNavigate } from "react-router-dom";
//import LogoComponent from '../../components/logoComponent';
import zippy from '../../../assets/img/zippy.png';


function LoginPage() {
  let navigate = useNavigate()
  return (
    <div className='flex flex-col  sm:flex-row items-center h-full'>
      {/* Lado esquerdo do login */}
      <div className="flex gap-5 items-center w-3/4  h-full bg-orange-100 justify-center ">
        {/* Logo Branca */}
        <div className='flex flex-col text-white items-center mb-14'>
          <img className='scale-75 -mb-14  animate-fade-right animate-once animate-duration-[1000ms] animate-ease-out animate-normal animate-fill-both ' src={zippy} alt="" />
          <div className='flex items-center gap-3 z-50'>
            <div className="w-6 h-6 relative">
              <div className="hexagon !bg-white"></div>
            </div>
            <div className="flex flex-col justify-center items-end mb-1">
              <span className="text-3xl font-bold  lowercase">
                Zippy Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Lado direito do login */}
      <div className='flex flex-col gap-20 px-12 py-16 h-[90%] sm:h-screen w-full sm:w-1/2 items-start sm:items-center justify-center bg-white shadow-xl'>
        <span className='text-4xl font-semibold mx-auto text-gray-800'>Faça login</span>
        <div className='flex flex-col gap-14 sm:w-1/2'>
          <div className='flex flex-col gap-10'>
            {/* Campos */}
            <div className='flex flex-col gap-1 text-gray-500' >
              <span className='input-label'>Email</span>
              <input placeholder='seuemail@exemplo.com.br' className='input ' type="text" />
            </div>
            <div className='flex flex-col gap-1 text-gray-500'>
              <span className='input-label'>Senha</span>
              <input placeholder='******' className='input' type="text" />
              {/*  <span className='text-secondary mt-1'>Esqueceu a senha ? <span onClick={() => { navigate('reset-password') }} className='text-gray-600 font-semibold cursor-pointer'>Recuperar Senha</span></span> */}
            </div>
          </div>

          {/* Botões */}
          <div className='flex flex-col gap-1'>
            <button onClick={() => { navigate('home-adm') }} className='primary-button font-semibold py-2'>Entrar</button>
            <button onClick={() => { navigate('sign-up') }} className='outline-button'>Criar uma conta</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
