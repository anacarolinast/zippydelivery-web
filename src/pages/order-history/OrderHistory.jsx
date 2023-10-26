
import { useNavigate } from "react-router-dom"

export default function OrderHistoryPage(){
    let navigate = useNavigate()
    return(
        <div className='h-fit justify-center p-44 bg-light-300'>
            <div className='flex flex-col gap-10 mx-auto max-w-5xl pb-44'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col pl-10'>
                        <span className='flex items-center gap-1 underline text-xl text-orange-100 font-bold cursor-pointer'
                        onClick={() => { navigate('/home') }} >
                            Voltar
                        </span>
                    </div>
                    <div className='flex gap-2'>
                        <div className='mt-3 text-green-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className='flex flex-col pr-10'>
                            <span className='flex items-center gap-1 text-xl font-semibold text-green-500 '>
                            Restaurante Aberto
                            </span>
                            <span className='text-secondary'>Dentro do horário programado</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pl-10 pr-10 gap-4">
                    <span className='text-black text-4xl'>Histórico de pedidos</span>
                    <span className='text-black'>Seu histórico de pedidos é o registro de todas as interações com clientes no Zippy. Acompanhe e gerencie todas os pedidos anteriores a partir deste histórico central</span>
                    <div className='flex w-full justify-end'>
                        <div className='flex'>
                            <button className='flex items-center primary-button rounded-md rounded-r-none px-3  min-w-max max-h-12'>
                                Concluídos
                            </button> 
                            <button className='flex items-center primary-button rounded-md rounded-l-none px-3 border border- bg-gray-200 text-gray-500 min-w-max max-h-12'>
                                Cancelados
                            </button> 
                        </div>
                    </div>
                </div>
                <div className="flex justify-around items-center relative bg-white border-gray-200 border-y rounded-md ml-10 mr-10 p-6">
                    <div className="flex flex-col">
                        <span className="text-secondary text-left">Data inicial:</span>
                        <input className="form-input p-2 rounded-sm"type="date"/>                    
                    </div>
                    <div className="flex flex-col" >
                        <span className="text-secondary text-left">Data Final:</span>
                        <input className="form-input p-2 rounded-sm"type="date"/>    
                    </div>
                    <div className="flex flex-col w-1/3" >
                        <span className="text-secondary text-left">Pesquisar:</span>
                        <input className="flex form-input rounded-sm p-2 "type="search-" placeholder="Pesquise pelo número do pedido" />
                    </div>
                </div>
                <div class="relative overflow-x-auto bg-white border-gray-200 border-y ml-10 mr-10">
                    <table class="w-full text-center text-sm text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Número
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Valor
                                </th>                        
                            </tr>
                        </thead>
                        <tbody>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                            R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                        </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                        </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                #4020
                            </th>
                            <td class="px-6 py-4">
                                Concluído
                            </td>
                            <td class="px-6 py-4">
                                24/10/2023 
                            </td>
                            <td class="px-6 py-4">
                                R$39,99 
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


