import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import profileService from "../../pages/profile/profileService";
import utilService from "../../utilService";
import axios from "axios";


export default function EmpresasParceiras() {
    let navigate = useNavigate();

    const apiUrl = utilService.getURlAPI()


    const { state } = useLocation();
    const [empresas, setEmpresas] = useState();

    function onChangeEmpresaStatus(empresa, type) {
         
        let body = {
            id: empresa.id,
            nome: empresa.nome || "",
            cnpj: empresa.cnpj || "",
            email: empresa.email || "",
            cep: empresa.cep || "",
            idCategoria: empresa.categoria.id || "",
            tempoEntrega: empresa.tempoEntrega || "",
            taxaFrete: empresa.taxaFrete || "",
            telefone: empresa.telefone || "",
            imgPerfil: empresa.imgPerfil || "",
            imgCapa: empresa.imgCapa || "",
            logradouro: empresa.logradouro || "",
            bairro: empresa.bairro || "",
            cidade: empresa.cidade || "",
            estado: empresa.estado || "",
            complemento: empresa.complemento || "",
            status: empresa.status || "",
            formasPagamento: ['DINHEIRO',
              'CARTAO_CREDITO',
              'CARTAO_DEBITO',
              'PIX',
              'VALE_ALIMENTACAO',
              'OUTRAS']
          };

          body.status = type
        updateEmpresa(body, body.id)
    }

    async function updateEmpresa (body, id) { return await profileService.createEmpresa(body, id) }

    const getEmpresas = async () => {
        try {
            await profileService.getAll().then(response => setEmpresas(response.data));
    
        } catch (error) {
          // Handle errors appropriately
          console.error('Error fetching categoria:', error);
        }
      };
    
      useEffect(() => {
        getEmpresas();
    
        const intervalId = setInterval(() => {
            getEmpresas();
        }, 2000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);


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
                            {empresas?.map((empresa, index) => (
                                <tr key={index} className={`border-b ${empresa.status === "Pendente" ? '!bg-pink-50' : '!bg-white'}`} >
                                    <td class="px-6 py-4">
                                        {empresa.nome}
                                    </td>
                                    <td class="px-6 py-4">
                                        {empresa.status}
                                    </td>
                                    <td class="px-6 py-4">
                                        {empresa.categoria.descricao}
                                    </td>
                                    <td class="px-6 py-4">
                                        {"há 58 minutos"}
                                    </td>
                                    {empresa.status === "Pendente" ? 
                                        <td class="py-4">
                                            <img onClick={() => { onChangeEmpresaStatus(empresa, "Ativo") }} className="cursor-pointer hover:bg-green-100 rounded-full transition-all p-2" src="../done.png" alt=""  />
                                        </td> : <div></div>
                                    }
                                    {empresa.status === "Pendente" ? 
                                        <td class="py-4">
                                            <img onClick={() => { onChangeEmpresaStatus(empresa, "Recusado") }} className="cursor-pointer hover:bg-red-100 rounded-full transition-all p-2" src="../close.png" alt=""  />
                                        </td> : <div></div>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

