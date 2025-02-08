import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import utilService from '../../utilService';
import generateReport from '../components/generatePDF';
import useNewPedidoNotification from '../../hooks/UseNewPedidoNotification';


function HomePage() {

  const [vendasTotais, setVendasTotais] = useState('');
  const [faturamentoTotal, setFaturamentoTotal] = useState('');
  const [vendaHoje, setVendaHoje] = useState('');
  const [faturamentoMedio, setFaturamentoMedio] = useState('');
  const [empresaId, setEmpresaId] = useState();
  const [empresaNome, setEmpresaNome] = useState('');
  const [empresaImgPerfil, setEmpresaImgPerfil] = useState('');
  const [empresaDesc, setEmpresaDesc] = useState('');
 
  const apiUrl = utilService.getURlAPI();
  
  useEffect(() => {
    axios.get(`${apiUrl}/empresa/usuario/` + localStorage.getItem('id'))
      .then(function (response) {
        console.log(response.data);
        setEmpresaId(response.data.id);
        setEmpresaNome(response.data.nome);
        setEmpresaImgPerfil(response.data.imgPerfil);
        setEmpresaDesc(response.data.categoria.descricao);
      }).catch(function (error) {
        console.error(error);
      });
  }, []);
  
  useEffect(() => {
    if (empresaId) {
      axios.get(`${apiUrl}/pedido/dashboard/` + empresaId)
        .then(function (response) {
          setVendasTotais(response.data.vendasTotais);
          setFaturamentoTotal(response.data.fatoramentoTotal);
          setVendaHoje(response.data.vendaHoje);
          setFaturamentoMedio(response.data.faturamentoMedio);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [empresaId]);

  let navigate = useNavigate();

  useNewPedidoNotification();
  
  return (
    <div className='h-fit justify-center p-24 bg-white'>
      <div className='flex justify-end p-7 mb-12'>
        <div className='flex gap-2'>
          <div className='mt-3 text-green-500'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='flex flex-col'>
            <span className='flex items-center gap-1 text-xl font-semibold text-green-500'>
              Restaurante Aberto
            </span>
            <span className='text-secondary'>Dentro do horário programado</span>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col space-y-8 w-full h-full p-10'>
        <div className='flex gap-5 border border-sky-100 p-2 justify-start'>
          <div className='flex'>
            <img className="h-fit self-center rounded-full" style={{ resizeMode: 'cover', height: 240, width: 240 }} src={empresaImgPerfil} alt="Perfil da Empresa" />
          </div>
          <div className='flex-1 flex-col p-2'>
            <span className='text-black text-3xl font-bold'>{empresaNome}</span> 
            <div className='border-[0.5px] mt-2'></div>
            <div className='flex pt-2 justify-between'>
              <div className='flex flex-col space-y-2'>
                <div className='flex flex-row gap-2'>
                  <img className="h-auto mt-2 max-w-xs self-start" src="check.png" alt="Desempenho" />
                  <span className='text-black font-medium text-2xl'>Métricas</span>
                </div>
                <div className='flex flex-column gap-10 justify-between'>
                  <div className='flex'>
                    <span className='text-black pl-9'>Pedidos (Hoje)</span>
                  </div>
                  <div className='flex'>
                    <span className='text-black text-lg font-semibold'>{vendaHoje}</span>
                  </div>
                  <div className='flex'>
                    <span className='text-black'>Ticket (Hoje)</span>
                  </div>
                  <div className='flex'>
                    <span className='text-black text-lg font-semibold'>R$ {faturamentoMedio}</span>
                  </div>
                </div>
              </div>
              
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-2'>
                  <img className="h-auto mt-2 max-w-xs self-start" src="dollar.png" alt="Vendas" />
                  <span className='text-black font-medium text-2xl'> Vendas</span>
                </div>
                <div className='flex flex-row gap-10 justify-between'>
                  <div className='flex'>
                    <span className='text-black pl-9'>Faturamento (Total)</span>
                  </div>
                  <div className='flex'>
                    <span className='text-black text-lg font-semibold'>R$ {faturamentoTotal}</span>
                  </div>
                  <div className='flex'>
                    <span className='text-black'>Pedidos (Total)</span>
                  </div>
                  <div className='flex'>
                    <span className='text-black text-lg font-semibold'>{vendasTotais}</span>
                  </div>
                </div>
                <div className='flex flex-row gap-10 justify-between'>

                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col h-fit p-2 items-center'>
          <button 
              className='mt-4 p-3 bg-red-700 text-white rounded-lg cursor-pointer w-full'
            >
              Fechar agora
            </button>
            
            <button 
              className='mt-4 p-3 bg-green-500 text-white rounded-lg cursor-pointer w-full'
              onClick={generateReport}
            >
              Exportar métricas
            </button>
          </div>
        </div>
        
        <span className='text-black text-4xl font-semibold'>Aqui você pode...</span>
        <div className='flex flex-row'>
          <div className='flex h-fit justify-center'>
            <span className='text-center w-1/2'>Além disso, mantenha-se no comando dos pedidos, rastreie suas entregas, aceite ou recuse-os com simplicidade e eficiência. É o seu negócio, sob seu controle.</span>
          </div>
          <div className='flex h-fit justify-center'>
            <span className='text-center w-1/2'>Além disso, mantenha-se no comando dos pedidos, rastreie suas entregas, aceite ou recuse-os com simplicidade e eficiência. É o seu negócio, sob seu controle.</span>
          </div>
        </div>
        
        <div className='flex flex-row gap-10 justify-center'>
          <div className='flex bg-orange-100 rounded-lg h-fit p-4 cursor-pointer items-center gap-5' onClick={() => { navigate('/menu-manager') }}>
            <img src="gerenciar-cardapio.png" alt="Gerenciar Cardápio" />
            <span className='text-light-100 text-2xl font-bold text-center'>Gerencie o cardápio</span>
          </div>
          <div className='flex bg-tomato-300 rounded-md h-fit p-4 cursor-pointer justify-center items-center gap-5' onClick={() => { navigate('/order-manager') }}>
            <img src="gerenciar-pedidos.png" alt="Gerenciar Pedidos" />
            <span className='text-light-100 text-2xl font-bold text-center'>Gerencie os pedidos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
