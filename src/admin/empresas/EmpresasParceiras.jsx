import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import profileService from "../../pages/profile/profileService";


export default function EmpresasParceiras() {
    let navigate = useNavigate();

    const { state } = useLocation();

    useEffect(() => {
        const getEmpresas = async () => {
        debugger;
        const empresas = await profileService.getAll();
            
        
        };
        
        getEmpresas()

    }, [state]);
    return (
        <div className='h-fit justify-center p-44 bg-light-300'>
            <div className='flex w-full justify-end'>
                <div className='flex'>
                    <div className='flex items-center primary-button font-semibold rounded-md rounded-r-none px-3  min-w-max max-h-9 text'
                        onClick={() => { navigate('/adm/categorias') }} >
                        <img src="/Categoria de Loja.png" alt="" />

                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 mx-auto max-w-5xl pb-44'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-10'>
                        <span className='text-5xl font-regular text-gray-800'>Empresas Parceiras</span>

                    </div>

                </div>

                <div className='flex justify-between'>

                    <div className='flex w-full justify-end'>
                        <div className='flex'>
                            <button className='flex items-center primary-button font-semibold rounded-md rounded-r-none px-3  min-w-max max-h-9 text'>
                               Ativos
                            </button>
                            <button className='flex items-center primary-button rounded-md rounded-l-none px-3 border border- bg-gray-200 text-gray-500 min-w-max max-h-9'>
                                Inativos
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex justify-around items-center relative bg-white border-gray-200 border-y rounded-sm p-6">
                    <div className="flex flex-col">
                        <input className="flex form-input rounded-sm p-2 " type="search-" placeholder="Código da Loja" />
                    </div>
                    <div className="flex flex-col w-[300px]" >
                        <input className="flex form-input rounded-sm p-2 " type="search-" placeholder="Busque pelo nome do restaurante" />
                    </div>
                    <div className="flex flex-col w-1/3" >

                        <input className="flex form-input rounded-sm p-2 " type="search-" placeholder="Busque por categoria" />
                    </div>
                    
                </div>
                <div class="relative overflow-x-auto bg-white border-gray-200 border-y">
                    <table class="w-full text-center text-sm text-gray-500 ">
                        <thead class="text-xs text-gray-700  bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                   Nome
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Categoria
                                </th>
                                <th scope="col" class="px-6 py-3">
                                   Chegada
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  
                                </th>

                                <th scope="col" class="px-6 py-3">
                                  
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-pink-50 border-b ">
                                <td class="px-6 py-4">
                                    {"Nome do Restarante #4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pendente"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pizzaria"}
                                </td>
                                <td class="px-6 py-4">
                                    {"há 58 minutos"}
                                </td>
                                <td class="px-6 py-4">
                                <img src="done.png" alt=""  />
                                </td>
                                <td class="px-6 py-4">
                                <img src="close.png" alt=""  />
                                </td>
                            </tr>
                            <tr class="bg-pink-50 border-b ">
                                <td class="px-6 py-4">
                                    {"Nome do Restarante #4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pendente"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pizzaria"}
                                </td>
                                <td class="px-6 py-4">
                                    {"há 58 minutos"}
                                </td>
                                <td class="px-6 py-4">
                                <img src="done.png" alt=""  />
                                </td>
                                <td class="px-6 py-4">
                                <img src="close.png" alt=""  />
                                </td>
                            </tr>
                            <tr class="bg-pink-50 border-b ">
                                <td class="px-6 py-4">
                                    {"Nome do Restarante #4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pendente"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pizzaria"}
                                </td>
                                <td class="px-6 py-4">
                                    {"há 58 minutos"}
                                </td>
                                <td class="px-6 py-4">
                                <img src="done.png" alt=""  />
                                </td>
                                <td class="px-6 py-4">
                                <img src="close.png" alt=""  />
                                </td>
                            </tr>
                            <tr class="bg-pink-50 border-b ">
                                <td class="px-6 py-4">
                                    {"Nome do Restarante #4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pendente"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pizzaria"}
                                </td>
                                <td class="px-6 py-4">
                                    {"há 58 minutos"}
                                </td>
                                <td class="px-6 py-4">
                                <img src="done.png" alt=""  />
                                </td>
                                <td class="px-6 py-4">
                                <img src="close.png" alt=""  />
                                </td>
                            </tr>
                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4">
                                    {"Nome do Restarante #4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Ativo"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pizzaria"}
                                </td>
                                <td class="px-6 py-4">
                                    {"há 58 minutos"}
                                </td>
                            </tr>
                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4">
                                    {"Nome do Restarante #4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Ativo"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pizzaria"}
                                </td>
                                <td class="px-6 py-4">
                                    {"há 58 minutos"}
                                </td>
                            </tr>
                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4">
                                    {"Nome do Restarante #4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Ativo"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pizzaria"}
                                </td>
                                <td class="px-6 py-4">
                                    {"há 58 minutos"}
                                </td>
                            </tr>
                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4">
                                    {"Nome do Restarante #4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Ativo"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pizzaria"}
                                </td>
                                <td class="px-6 py-4">
                                    {"há 58 minutos"}
                                </td>
                            </tr>
                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4">
                                    {"Nome do Restarante #4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Ativo"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Pizzaria"}
                                </td>
                                <td class="px-6 py-4">
                                    {"há 58 minutos"}
                                </td>
                            </tr>
                            

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

