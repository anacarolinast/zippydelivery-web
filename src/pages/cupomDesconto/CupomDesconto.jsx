import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Table } from 'semantic-ui-react';
import utilService from '../../utilService';


export default function CupomDesconto() {
    let navigate = useNavigate();

    const { state } = useLocation();
    const [lista, setLista] = useState([]);
    const [setOpenModal] = useState(false);
    const [idRemover] = useState();

    useEffect(() => {
        carregarLista();
    },)

    async function carregarLista() {

        axios.get(`${utilService.getURlAPI()}/cupom`)
            .then((response) => {
                setLista(response.data)
            })
    }

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === '') {
            return ''
        };

        //let arrayData = dataParam.split('-');
        return dataParam[2] + '/' + dataParam[1] + '/' + dataParam[0] 
    }

   
    return (
        <div className='h-fit justify-center p-44 bg-light-300'>
            <div className='flex w-full justify-end'>
            <button
          onClick={() => {
            navigate ('/cadastro-cupom-desconto');
          }}
          className='flex items-center primary-button font-semibold rounded-md rounded-r-none px-3  min-w-max max-h-9 text'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
          Novo Cupom
        </button>

            </div>
            <div className='flex flex-col gap-5 mx-auto max-w-5xl pb-44'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-10'>
                        <span className='text-5xl font-regular text-gray-800'>Cupom de Desconto</span>

                    </div>

                </div>

                <div className='flex justify-between'>

                    
                </div>


                
                </div>
                <div class="relative overflow-x-auto bg-white border-gray-200 border-y">
                    <table class="w-full text-center text-sm text-gray-500 ">
                        <thead class="text-xs text-gray-700  bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Código
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Percentual de Desconto
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Valor de Desconto
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Valor Minimo do Pedido
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Uso Maximo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Inicio
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Fim
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {lista.map(cupomDesconto => (

                                <Table.Row key={cupomDesconto.id}>
                                    <Table.Cell>{cupomDesconto.codigo}</Table.Cell>
                                    <Table.Cell>{cupomDesconto.percentualDesconto}</Table.Cell>
                                    <Table.Cell>{cupomDesconto.valorDesconto}</Table.Cell>
                                    <Table.Cell>{cupomDesconto.valorMinimoPedidoPermitido}</Table.Cell>
                                    <Table.Cell>{cupomDesconto.quantidadeMaximaUso}</Table.Cell>
                                    <Table.Cell>{formatarData(cupomDesconto.inicioVigencia)}</Table.Cell>
                                    <Table.Cell>{formatarData(cupomDesconto.fimVigencia)}</Table.Cell>
                                </Table.Row>
                            ))}




                        </tbody>
                    </table>
                </div>
            </div>
       
    )

}

