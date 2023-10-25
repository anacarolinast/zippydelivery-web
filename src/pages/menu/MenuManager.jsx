import React from 'react';
import { useNavigate } from "react-router-dom";


function MenuManagerPage() {
  let navigate = useNavigate()
  return (
    <div className='h-full justify-center p-44 bg-white'>
      <div className='flex flex-col gap-16 mx-auto max-w-5xl pb-44'>

        <div className='flex justify-between'>
          <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>Cardápio</span>
            <span className='text-secondary max-w-xl'>
              Seu cardápio é sua vitrine de produtops no Zippy. Gerencie por este cardápio
              único todos os itens da sua loja.
            </span>
          </div>
          <div className='flex gap-2'>
            <div className='mt-3 text-green-500'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className='flex flex-col'>
              <span className='flex items-center gap-1 text-xl font-semibold text-green-500 '>
                Restaurante Aberto
              </span>
              <span className='text-secondary'>Dentro do horário programado</span>
            </div>
          </div>
        </div>

        <button onClick={() => { navigate('/category-edit') }} className='flex gap-3 items-center primary-button py-2 px-4 w-fit ml-auto -mb-24'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
          </svg>
          Nova Categoria
        </button> 

        <div className='flex mt-20'>
          <div className='flex w-full gap-5'>
            <div className='flex'>
              <button className='flex items-center primary-button rounded-md rounded-r-none px-3  min-w-max max-h-12'>
                Status da Venda
              </button> 
              <button className='flex items-center primary-button rounded-md rounded-l-none px-3 bg-gray-200 text-gray-500 min-w-max max-h-12'>
                Preço e Estoque
              </button> 
            </div>
            <input className="form-input w-3/4" placeholder='Busque pelo nome do item' type="text" />
            <input className="form-input w-1/4" placeholder='Categoria selecionada' type="text" />
          </div>
          
        </div>

        <div className='flex flex-col w-full border rounded-md'>
          <div className='flex justify-between align-middle  py-4 px-5 '>
            <span className='text-2xl font-semibold'>Categoria 1</span>
            <button  className='flex gap-3 items-center secondary-button py-2 px-4'
            onClick={() => { navigate('/produto') }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
              </svg>
              Novo Item
            </button> 
          </div>
          
          <div class="relative overflow-x-auto border-gray-200 border-y">
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Item
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Preço
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Descrição
                    </th>
                    
                </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b ">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Bolo Cremoso de Maizena
                      </th>
                      <td class="px-6 py-4">
                          R$ 29,90
                      </td>
                      <td class="px-6 py-4">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
                      </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Bolo Cremoso de Maizena
                    </th>
                    <td class="px-6 py-4">
                        R$ 29,90
                    </td>
                    <td class="px-6 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
                    </td>
                  </tr>
                  <tr class="bg-white ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Bolo Cremoso de Maizena
                        </th>
                        <td class="px-6 py-4">
                            R$ 29,90
                        </td>
                        <td class="px-6 py-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
                        </td>
                  </tr>
              </tbody>
            </table>
          </div>
          <div className='w-full flex items-center justify-center py-2.5'>
            <span className='flex justify-center gap-2 text-secondary text-red-500 cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              Excluir Categoria
              </span>
          </div>
        </div>


        <div className='flex flex-col w-full border rounded-md'>
          <div className='flex justify-between align-middle  py-4 px-5 '>
            <span className='text-2xl font-semibold'>Categoria 2</span>
            <button  className='flex gap-3 items-center secondary-button py-2 px-4'
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
              </svg>
              Novo Item
            </button> 
          </div>
          
          <div class="relative overflow-x-auto border-gray-200 border-y">
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Item
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Preço
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Descrição
                    </th>
                    
                </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b ">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Bolo Cremoso de Maizena
                      </th>
                      <td class="px-6 py-4">
                          R$ 29,90
                      </td>
                      <td class="px-6 py-4">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
                      </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Bolo Cremoso de Maizena
                    </th>
                    <td class="px-6 py-4">
                        R$ 29,90
                    </td>
                    <td class="px-6 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
                    </td>
                  </tr>
                  <tr class="bg-white ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Bolo Cremoso de Maizena
                        </th>
                        <td class="px-6 py-4">
                            R$ 29,90
                        </td>
                        <td class="px-6 py-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
                        </td>
                  </tr>
              </tbody>
            </table>
          </div>
          <div className='w-full flex items-center justify-center py-2.5'>
            <span className='flex justify-center gap-2 text-secondary text-red-500 cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              Excluir Categoria
              </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MenuManagerPage
