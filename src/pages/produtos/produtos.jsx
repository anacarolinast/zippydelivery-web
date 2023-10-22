/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { PhotoIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
//import ModalComponent from '../components/modal'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProdutoRegister() {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="bg-gray-200 px-6 py-24 sm:py-32 lg:px-8 flex justify-center items-center">
            <div className="hover:border border-orange-100 mt-6 md:max-w-xl md:rounded-xl md:shadow-lg md:mt-0 p-10">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-light-700 sm:text-4xl">Cadastrar Produto</h2>
                <p className="mt-2 text-lg leading-8 text-light-700">
                    Adicione um novo produto
                </p>
            </div>
            {/*<form onSubmit={ModalComponent} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">*/}
            <form method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid gap-x-4 gap-y-6 grid-cols-2">
                    <div>
                        <label htmlFor="food" className="block text-sm font-bold leading-6 text-light-700">
                            Nome
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="food"
                                id="food"
                                autoComplete="food"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-light-400 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm sm:leading-6"
                                placeholder='Ex.: Pizza'
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="categoria" className="block text-sm font-bold leading-6 text-light-700">
                            Categoria
                        </label>
                        <div className="relative">
                            <div className=" inset-y-0 left-0 flex items-center ">
                                <label htmlFor="categoria" className="sr-only">
                                    Categorias
                                </label>
                                <select
                                    id="categoria"
                                    name="categoria"
                                    className="px-3.5 py-2.5 mt-2.5 bg-white w-full rounded-md border-0 bg-transparent pl-4 !text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm"
                                >   
                                    <option defaultValue={''} selected>Selecione uma opção</option>
                                    <option value={"Entrada"}>Entrada</option>
                                    <option value={"Prato Principal"}>Prato Principal</option>
                                    <option value={"Sobremesa"}>Sobremesa</option>
                                    <option value={"Bebida"}>Bebida</option>
                                    <option value={"Outros"}>Outros</option>
                                    
                                </select>

                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 col-span-2">
                        <div>
                            <label htmlFor="ingredientes" className="block text-sm font-bold leading-6 text-light-700">
                                Ingredientes
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="ingredientes"
                                    id="ingredientes"
                                    autoComplete="ingredientes"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="preco" className="block text-sm font-bold leading-6 text-light-700">
                                Preço
                            </label>
                            <div className="relative mt-2.5">
                                <input
                                    type="preco"
                                    name="preco"
                                    id="preco"
                                    placeholder='R$ 0.00'
                                    autoComplete="preco"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="message" className="block text-sm font-bold leading-6 text-light-700">
                            Descrição
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                placeholder='Breve descrição do produto...'
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-light-700">
                            Adicionar imagem do produto
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border-orange-100 border-4 border-dashed px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-bold text-orange-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-100 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span className='outline-button p-1'>Escolher imagem</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-2">ou arraste e solte aqui</p>
                                </div>
                                <p className="text-xs leading-5 py-1 text-light-700">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>


                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-orange-100' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-light-700">
                            O produto está indisponível no momento{' '}
                        </Switch.Label>
                    </Switch.Group>
                </div>
                <div className="mt-10 flex justify-between">
                    <button
                        type="submit"
                        className="outline-button p-2"

                    >
                        Voltar
                    </button>
                    <button
                        // type="submit"
                        className="primary-button p-2"
                    >
                        Cadastrar
                    </button>

                </div>
            </form>
            </div>
        </div>
    )
}
