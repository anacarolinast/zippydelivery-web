import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import LogoComponent from './logoComponent';


function NavBarComponent() {
  let navigate = useNavigate()
  let location = useLocation().pathname
  console.log(location)
  return (
    <div className='fixed z-50 w-full h-fit top-0'>
      <div className='flex justify-between w-full bg-white py-2 px-8 shadow-md'>
        
        <div className='flex gap-20 '>

          <div className='-mt-2'>
            <LogoComponent></LogoComponent>
          </div>

          <div className='flex gap-12 items-center'>
            <button onClick={() => {   navigate('home')           }} className={ location === '/home'? 'text-orange-100': ''                  }>Home</button>
            <button onClick={() => {   navigate('profile')        }} className={ location === '/profile'? 'text-orange-100': ''               }>Perfil</button>
            <button onClick={() => {   navigate('menu-manager')   }} className={ location === '/menu-manager'? 'text-orange-100': ''          }>Cardápio</button>
            <button onClick={() => {   navigate('order-manager')  }} className={ location === '/order-manager'? 'text-orange-100': ''         }>Pedidos</button>
            <button onClick={() => {   navigate('order-history')  }} className={ location === '/order-history'? 'text-orange-100': ''         }>Histórico</button>
          </div>

        </div>

        <div className='flex items-center gap-4'>
          {/*
          <button onClick={() => { navigate('produto') }} className='flex gap-5 pr-12 items-center primary-button px-8'>
            <svg className='fill-gray-700' width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53906 14C8.53906 13.4477 8.98678 13 9.53906 13H22.5391C23.0913 13 23.5391 13.4477 23.5391 14C23.5391 14.5523 23.0913 15 22.5391 15H9.53906C8.98678 15 8.53906 14.5523 8.53906 14Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53906 18C8.53906 17.4477 8.98678 17 9.53906 17H22.5391C23.0913 17 23.5391 17.4477 23.5391 18C23.5391 18.5523 23.0913 19 22.5391 19H9.53906C8.98678 19 8.53906 18.5523 8.53906 18Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.62485 6.58579C3.99992 6.21071 4.50863 6 5.03906 6H27.0391C27.5695 6 28.0782 6.21071 28.4533 6.58579C28.8284 6.96086 29.0391 7.46957 29.0391 8V27C29.0391 27.3466 28.8596 27.6684 28.5648 27.8507C28.27 28.0329 27.9018 28.0494 27.5918 27.8944L24.0391 26.118L20.4863 27.8944C20.2047 28.0352 19.8734 28.0352 19.5919 27.8944L16.0391 26.118L12.4863 27.8944C12.2047 28.0352 11.8734 28.0352 11.5918 27.8944L8.03906 26.118L4.48628 27.8944C4.17629 28.0494 3.80815 28.0329 3.51333 27.8507C3.21851 27.6684 3.03906 27.3466 3.03906 27V8C3.03906 7.46957 3.24978 6.96086 3.62485 6.58579ZM27.0391 8L5.03906 8L5.03906 25.382L7.59185 24.1056C7.87338 23.9648 8.20475 23.9648 8.48628 24.1056L12.0391 25.882L15.5918 24.1056C15.8734 23.9648 16.2047 23.9648 16.4863 24.1056L20.0391 25.882L23.5918 24.1056C23.8734 23.9648 24.2047 23.9648 24.4863 24.1056L27.0391 25.382V8Z" fill="white" />
            </svg>
            Pedidos (0)
          </button>
           */}
          <div className=' hover:bg-gray-200 rounded-md p-1.5 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarComponent
