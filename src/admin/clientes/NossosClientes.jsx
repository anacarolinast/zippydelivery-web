import { Navigate } from "react-router-dom"


export default function NossosClientes() {
  
    return (
        <div className='h-fit justify-center p-44 bg-light-300'>
            <div className='flex flex-col gap-5 mx-auto max-w-5xl pb-44'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-10'>
                        <span className='text-5xl font-regular text-gray-800'>Nossos Clientes</span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className=' flex flex-col gap-10'>

                        <span className='text-secondary max-w-xl '>
                            clique para saber mais detalhes...
                        </span>
                    </div>
                    <div className='flex w-full justify-end'>
                        <div className='flex'>
                            <button className='flex items-center primary-button font-bold rounded-md rounded-r-none px-3  min-w-max max-h-9 text'
                              onClick={() => {Navigate ('') }} >
                                Buscar
                            </button>
                           

                        </div>
                    </div>

                </div>


                <div className="flex justify-around items-center relative bg-white border-gray-200 border-y rounded-sm p-6">
                    <div className="flex flex-col">
                        <input className="flex form-input rounded-sm p-2 " type="search-" placeholder="Busque pelo CPF" />
                    </div>
                    <div className="flex flex-col w-[300px]" >
                        <input className="flex form-input rounded-sm p-2 " type="search-" placeholder="Busque pelo nome" />
                    </div>
                    <div className="flex flex-col w-1/3" >

                        <input className="flex form-input rounded-sm p-2 " type="search-" placeholder="Busque por cidade" />
                    </div>
                </div>
                <div class="relative overflow-x-auto bg-white border-gray-200 border-y">
                    <table class="w-full text-center text-sm text-gray-500 ">
                        <thead class="text-xs text-gray-700  bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    CPF
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nome
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Telefone
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Cidade
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4">
                                    {"123.456.789-12"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Catarina Francisca dos Santos"}
                                </td>
                                <td class="px-6 py-4">
                                    {"catinha197@hotmail.com"}
                                </td>
                                <td class="px-6 py-4">
                                    {"(81)98654-3120"}
                                </td>
                                <td class="px-6 py-4">
                                    {"São Lourenço..."}
                                </td>
                            </tr>

                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4">
                                    {"123.456.789-12"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Catarina Francisca dos Santos"}
                                </td>
                                <td class="px-6 py-4">
                                    {"catinha197@hotmail.com"}
                                </td>
                                <td class="px-6 py-4">
                                    {"(81)98654-3120"}
                                </td>
                                <td class="px-6 py-4">
                                    {"São Lourenço..."}
                                </td>
                            </tr>
                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4">
                                    {"123.456.789-12"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Catarina Francisca dos Santos"}
                                </td>
                                <td class="px-6 py-4">
                                    {"catinha197@hotmail.com"}
                                </td>
                                <td class="px-6 py-4">
                                    {"(81)98654-3120"}
                                </td>
                                <td class="px-6 py-4">
                                    {"São Lourenço..."}
                                </td>
                            </tr>
                            <tr class="bg-white border-b ">
                                <td class="px-6 py-4">
                                    {"123.456.789-12"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Catarina Francisca dos Santos"}
                                </td>
                                <td class="px-6 py-4">
                                    {"catinha197@hotmail.com"}
                                </td>
                                <td class="px-6 py-4">
                                    {"(81)98654-3120"}
                                </td>
                                <td class="px-6 py-4">
                                    {"São Lourenço..."}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

