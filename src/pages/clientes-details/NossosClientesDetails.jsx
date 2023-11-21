
export default function NossosClientesDetails() {

    return (
        <div className='h-fit justify-center p-44 bg-light-300'>
            <div className='flex flex-col gap-5 mx-auto max-w-5xl pb-44'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-10'>
                        <span className='text-5xl font-regular text-gray-800'>Catarina Francisca dos Santos</span>

                    </div>

                </div>

                <div className='flex justify-between'>
                    <div className='flex flex-col gap-10'>

                        <span className='text-Roboto max-w-xl'>
                            CPF: 838.110.250-23 <br></br>
                            E-mail: catinha197@hotmail.com <br></br>
                            Telefone: (81) 98654-3120 <br></br>
                            Endereço: Avenida do príncipe mimado, 267, Caxangá - São Lourenço da Mata<br></br>
                            Complemento: Condomínio das flores bloco 02 apto 505
                        </span>
                    </div>

                </div>
                <br></br>
                <br></br>

                <div className='flex justify-between'>
                    <div className='flex flex-col gap-10'>

                        <span className='text-3xl text-popping max-w-xl font-regular text-gray-800'>
                            Pedidos anteriores
                        </span>
                    </div>
                    <div className='flex w-full justify-end'>
                        <div className='flex'>
                            <button className='flex items-center primary-button font-semibold rounded-md rounded-r-none px-3  min-w-max max-h-9 text'>
                                Buscar
                            </button>

                        </div>
                    </div>

                </div>


                <div className="flex justify-around items-center relative bg-white border-gray-200 border-y rounded-sm p-6">
                    <div className="flex flex-col w-[300px]">
                        <input className="flex form-input rounded-sm p-2 " type="search-" placeholder="Busque pelo número de pedido" />
                    </div>
                    <div className="flex flex-col w-[300px]" >
                        <input className="flex form-input rounded-sm p-2 " type="search-" placeholder="Busque pelo status" />
                    </div>
                    <div className="flex flex-col w-[300px]" >
                        <input className="flex form-input rounded-sm p-2 " placeholder="Busque por data" />
                    </div>
                </div>
                <div class="relative overflow-x-auto bg-white border-gray-200 border-y">
                    <table class="w-full text-center text-sm text-gray-500 ">
                        <thead class="text-xs text-gray-700  bg-gray-50">
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
                                <td class="px-6 py-4">
                                    {"#4020"}
                                </td>
                                <td class="px-6 py-4">
                                    {"Concluido"}
                                </td>
                                <td class="px-6 py-4">
                                    {"24/10/2023"}
                                </td>
                                <td class="px-6 py-4">
                                    {"R$ 39,99"}
                                </td>

                            </tr>
                                <tr class="bg-white border-b ">
                                    <td class="px-6 py-4">
                                        {"#4020"}
                                    </td>
                                    <td class="px-6 py-4">
                                        {"Concluido"}
                                    </td>
                                    <td class="px-6 py-4">
                                        {"24/10/2023"}
                                    </td>
                                    <td class="px-6 py-4">
                                        {"R$ 39,99"}
                                    </td>

                                </tr>
                                    <tr class="bg-white border-b ">
                                        <td class="px-6 py-4">
                                            {"#4020"}
                                        </td>
                                        <td class="px-6 py-4">
                                            {"Concluido"}
                                        </td>
                                        <td class="px-6 py-4">
                                            {"24/10/2023"}
                                        </td>
                                        <td class="px-6 py-4">
                                            {"R$ 39,99"}
                                        </td>

                                    </tr>
                                        <tr class="bg-white border-b ">
                                            <td class="px-6 py-4">
                                                {"#4020"}
                                            </td>
                                            <td class="px-6 py-4">
                                                {"Concluido"}
                                            </td>
                                            <td class="px-6 py-4">
                                                {"24/10/2023"}
                                            </td>
                                            <td class="px-6 py-4">
                                                {"R$ 39,99"}
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
                )

}

