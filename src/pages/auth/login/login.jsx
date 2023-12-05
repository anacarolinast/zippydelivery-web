import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
//import LogoComponent from '../../components/logoComponent';
import zippy from '../../../assets/img/zippy.png';
import { registerSuccessfulLoginForJwt } from '../../util/AuthenticationService';
import utilService from '../../../utilService';



function LoginPage() {
  let navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const apiUrl = utilService.getURlAPI()

  function entrar() {

    if (username !== '' && password !== '') {

      let authenticationRequest = {
        username: username,
        password: password,
      }

      axios.post(`${apiUrl}/login`, authenticationRequest)
        .then((response) => {

          registerSuccessfulLoginForJwt(response.data.token, response.data.expiration)
          debugger
          window.localStorage.setItem('id', response.data.id)
          navigate("/init");

        })
        .catch((error) => {

          Error('Usuário não encontrado')
        })
    }
  }

  return (
    <div className='flex flex-col  sm:flex-row gap-14 items-center h-full'>
      {/* Lado esquerdo do login */}
      <div className="flex gap-5 items-center w-1/2  h-full bg-orange-100 justify-center ">
        {/* Logo Branca */}
        <div className='flex flex-col text-white items-center mb-14'>
          <img className='scale-75 -mb-14 ' src={zippy} alt="" />
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
      <div className='flex h-[90%] sm:h-screen  w-full sm:w-1/2 items-start sm:items-center justify-center'>
        <div className='flex w-full sm:w-[30rem] flex-col  gap-8 px-12 py-16 rounded-md shadow-xl bg-white'>
          <span className='text-3xl font-semibold mx-auto'>Faça login</span>

          {/* Campos */}
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1 text-gray-500' >
              <span className='input-label'>Email</span>
              <input placeholder='Exemplo@exemplo.com.br'
                className='input '
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1 text-gray-500'>
              <span className='input-label'>Senha</span>
              <input placeholder='No mínimo 6 caracteres'
                className='input'
                type="password"
                value={password}
                onChange={e => setpassword(e.target.value)} />
              <span className='text-secondary mt-1'>Esqueceu a senha ? <span onClick={() => { navigate('reset-password') }} className='text-gray-600 font-semibold cursor-pointer'>Recuperar Senha</span></span>
            </div>

          </div>

          {/* Botões */}
          <div className='flex flex-col gap-2'>
            <button onClick={() => entrar()} className='primary-button'>Entrar</button>
            <button onClick={() => { navigate('sign-up') }} className='outline-button'>Criar uma conta</button>
          </div>
        <button onClick={() => { navigate('adm/home-adm') }} className='outline-button'>ADM</button> {/*TEMPORÁRIO */}
        </div>
      </div>
    </div>
  )
}

export default LoginPage