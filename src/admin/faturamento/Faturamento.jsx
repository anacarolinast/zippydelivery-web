import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import utilService from '../../utilService';


export default function FaturamentoPage() {
  let navigate = useNavigate();

  const [idPedido, setIdPedido] = useState('');
  
  const [vendasTotais, setVendasTotais] = useState('');
  const [faturamentoTotal, setFaturamentoTotal] = useState('');
  const [vendaHoje, setVendaHoje] = useState('');
  const [faturamentoMedio, setFaturamentoMedio] = useState('');



  const apiUrl = utilService.getURlAPI()
  //Exibe quantidade de pedidos
  useEffect(() => {
    axios.get(`${apiUrl}/pedido`)
      .then(function (response) {
        console.log(response.data)
        setIdPedido(response.data.length);
      }).catch(function (error) {
        console.log(error);
      });
  }, [])
  // Exibe a receita total 
  useEffect(() => {
    const receitaTotal = async () => {
      try {
        const response = await axios.get(`${apiUrl}/pedido/dashboardAll`)
        console.log(response.data)
        setFaturamentoTotal(response.data.faturamentoTotal);
      } catch (error) {
        console.log(error);
      };
    };

    receitaTotal();
  }, []);

  
  const custoOperacaoPorPedido = 5;
  const custoOperacao = idPedido.length * custoOperacaoPorPedido;

  const comissao = 0.2;


  const receita = faturamentoTotal - comissao - custoOperacao || 0;
  
  // Exibe a Margem de lucros 
  useEffect(() => {
    const marLucro = async () => {
      try {
        const response = await axios.get(`${apiUrl}/pedido/dashboardAll`)
        console.log(response.data)
        setFaturamentoTotal(response.data.faturamentoTotal);
      } catch (error) {
        console.log(error);
      };
    };

    marLucro();
  }, []);

  // Definindo o Custo de Operação como um valor fixo de 5
  const custoOperacaoPorPedido1 = 5;
  const custoOperacao1 = idPedido.length * custoOperacaoPorPedido1;
  // Calculando a Margem de Lucro
  const margemLucro = ((receita - custoOperacao1) / receita) * 100 || 0;

  // Exibe a balanço 
  useEffect(() => {
    const balanco = async () => {
      try {
        const response = await axios.get(`${apiUrl}/pedido/dashboardAll`)
        console.log(response.data)
        setFaturamentoTotal(response.data.faturamentoTotal);
      } catch (error) {
        console.log(error);
      };
    };

    balanco();
  }, []);

  
  const custoOperacaoPorPedido2 = 5;

  const balancoGeral = idPedido.length * custoOperacaoPorPedido2 || 0;

  // Exibe a comissao
  useEffect(() => {
    const comissao = async () => {
      try {
        const response = await axios.get(`${apiUrl}/pedido/dashboardAll`)
        console.log(response.data)
        setFaturamentoTotal(response.data.faturamentoTotal);
      } catch (error) {
        console.log(error);
      };
    };

    comissao();
  }, []);

  const comissao1 = 0.2;


  const comissaoTotal = faturamentoTotal * comissao1 || 0;
  return (
    <div className="flex h-full justify-center bg-gray-100 pt-28  pb-44">
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        <span className="text-3xl font-medium">Nosso Faturamento</span>

        <div className="flex justify-between w-full py-3 px-10 bg-white text-secondary shadow-md rounded-md  ">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold ">Pedidos</span>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <span>Número de pedidos</span>
                <span>
                  <span className="text-xl font-semibold">{idPedido} </span>pedidos
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Custo de operação</span>
                <span className="text-xl font-semibold">R$5,00</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold ">Balanço</span>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <span>Comissão vigente</span>
                <span className="text-xl font-semibold">20%</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Margem de lucro</span>
                <span className="text-xl font-semibold">{margemLucro.toFixed(2)}%</span>
              </div>
            </div>
          </div>
          <div className='-mr-10 -my-3 rounded-r-md overflow-hidden'>
            <img src="/fatu.png" alt="" />
          </div>
        </div>

        <div className="flex justify-between gap-8">
          <div className="flex flex-col justify-between w-full pt-3 pb-7 px-10 bg-white text-secondary shadow-md rounded-md h-32">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold ">Balanço</span>
            </div>
            <span className="text-xl font-semibold text-gray-500">R$ {balancoGeral}</span>
          </div>
          <div className="flex flex-col justify-between w-full pt-3 pb-7 px-10 bg-white text-secondary shadow-md rounded-md h-32">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold ">Receita Total</span>
            </div>
            <span className="text-xl font-semibold text-gray-500">R$ {receita}</span>
          </div>
          <div className="flex flex-col justify-between w-full pt-3 pb-7 px-10 bg-white text-secondary shadow-md rounded-md h-32">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold ">Comissões e taxas</span>
            </div>
            <span className="text-xl font-semibold text-gray-500">R$ {comissaoTotal}</span>
          </div>
        </div>



        <div className='flex flex-col gap-6 mt-12'>
          <span className='text-2xl text-orange-100'>Zippy Info</span>
          <div className="flex flex-col gap-3">

            <span className='text-secondary text-xl'>
              <span className='font-medium'>Número de pedidos: </span>
              Número total de pedidos feitos através da nossa plataforma móvel.
            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Comissão vigente: </span>
              Porcentagem que escolhemos cobrar da loja parceira sobre cada venda
            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Custo de operação(ticket médio): </span>
              Quanto custa para o nosso sistema a cada pedido realizado.
              <br /> <span className='text-sm'>Custo de Operação = Número de Pedidos * Custo de Operação por Pedido</span>

            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Margem de lucro: </span>
              Percentual de lucro líquido em relação à receita total.
              <br /> <span className='text-sm'>Margem de Lucro = ((Receita Total - Custo de Operação) / Receita Total) * 100</span>

            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Faturamento bruto: </span>
              Soma total do valor bruto das transações antes de quaisquer deduções.
              <br /> <span className='text-sm'>Faturamento Bruto = Número de Pedidos * Ticket Médio</span>

            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Receita total: </span>
              Total de receita gerada pela plataforma, incluindo todas as transações de pedidos.
              <br /> <span className='text-sm'>ReceitaTotal = FaturamentoBruto - Comissão - Custo de operação</span>

            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Comissões e taxas: </span>
              Valor total das comissões e taxas cobradas das lojas parceiras.
              <br /> <span className='text-sm'>Comissão = Faturamento Bruto * Comissão vigente</span>

            </span>

          </div>
        </div>

      </div>
    </div>
  );
}
