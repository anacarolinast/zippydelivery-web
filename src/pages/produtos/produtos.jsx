/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
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
import { useEffect, useState } from 'react';
import { PhotoIcon } from '@heroicons/react/20/solid';
//import { Switch } from '@headlessui/react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//import firebase from 'firebase/app';
import 'firebase/storage';
import { storage } from '../../firebase';
import utilService from '../../utilService';
//import ModalComponent from '../components/modal'

//function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
//}


export default function ProdutoRegister() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [imagem, setImagem] = useState(null);
  const [titulo, setTitulo] = useState();
  const [idProduto, setIdProduto] = useState();
  const [preco, setPreco] = useState();
  const [categoria, setCategoria] = useState();
  const [descricao, setDescricao] = useState();

  const [categoriaDescricao, setCategoriaDescricao] = useState();

  useEffect(() => {
    debugger;
    if (state !== null && state.id !== null) {
      axios
        .get(`${utilService.getURlAPI()}/categoriaproduto/${state.id}`)
        .then((response) => {
          debugger;
          setCategoria(response.data.id);
          setCategoriaDescricao(response.data.descricao);
          if (state.produto) {
            setIdProduto(state.produto.id);
            setPreco(state.produto.preco);
            setTitulo(state.produto.titulo);
            setDescricao(state.produto.descricao);
            setImagem(state.produto.imagem);
          }
        });
    }
  }, [state]);

  /* const handleFileChange = (e) => {
      setImagem(e.target.files[0]);
    };*/
  const clearForm = () => {
    setImagem(null);
    setTitulo('');
    setPreco('');
    setCategoria('');
    setDescricao('');
  };
  const handleUpload = async () => {
    debugger;

    if (!titulo || !preco || !categoria || !descricao) {
      console.error('Preencha todos os campos antes de salvar.');
      return;
    }

   
    var body = {};
    debugger;
    if (imagem?.name) {
      const storageRef = ref(storage, `images/${imagem.name}`); // Use .child() para criar a referência
      await uploadBytes(storageRef, imagem);
      await getDownloadURL(storageRef).then((response) => {
        setImagem(response)
        body = {
          idCategoria: categoria,
          idEmpresa: 0,
          titulo: titulo,
          imagem: response,
          descricao: descricao,
          preco: preco,
          disponibilidade: true,
          tempoEntregaMinimo: 0,
          tempoEntregaMáximo: 0,
        };
      });
    } else {
      body = {
        idCategoria: categoria,
        idEmpresa: 0,
        titulo: titulo,
        imagem: '',
        descricao: descricao,
        preco: preco,
        disponibilidade: true,
        tempoEntregaMinimo: 0,
        tempoEntregaMáximo: 0,
      };
    }

    try {
      debugger;

      if (idProduto) {
        await axios
          .put(`${utilService.getURlAPI()}/produto/${idProduto}`, body)
          .then((response) => {
            navigate('/menu-manager');
            console.log(response);
          });
      } else {
        await axios
          .post(`${utilService.getURlAPI()}/produto`, body)
          .then((response) => {
            navigate('/menu-manager');
            console.log(response);
          });
      }
      //console.log('Imagem enviada com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
    }
    //clearForm();
  };
  return (
    <div className="h-fit justify-center p-44 bg-white">
      <div className="flex justify-between items-center p-10">
        <div className="flex flex-col">
          <span
            className="flex items-center gap-1 underline text-xl text-orange-100 font-bold cursor-pointer z-10"
            onClick={() => {
              navigate('/menu-manager');
            }}
          >
            Voltar
          </span>
        </div>
        <div className="flex gap-2">
          <div className="mt-3 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-7 h-7"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-1 text-xl font-semibold text-green-500 ">
              Restaurante Aberto
            </span>
            <span className="text-secondary">Dentro do horário programado</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full p-10">
        <span className="text-black text-3xl font-semibold">
          {idProduto ? (
            <span>
              Alterando item <span className="text-gray-600">{titulo}</span>
            </span>
          ) : (
            <span>
              Novo item em{' '}
              <span className="text-gray-600">{categoriaDescricao}</span>
            </span>
          )}
        </span>
      </div>
      <div className="flex pl-10 pr-10 justify-between gap-8">
        <div className="flex w-full flex-col ">
          <span className="text text-black">Nome do item</span>
          <input
            className="form-input z-10"
            placeholder="Ex.: Feijoada"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="flex w-full flex-col ">
          <span className="text text-black">Preço</span>
          <input
            className="form-input z-10"
            placeholder="R$ 0,00"
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        {/**
                     * 
                     
                    <div className='flex flex-col space-y'>
                        <span className='text text-black'>Categoria</span>
                        <select
                            id="categoria"
                            name="categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            className="bg-white w-full bg-transparent pl-4 !text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm">
                            <option defaultValue={''} selected>Selecione uma opção</option>
                            <option value={"Entrada"}>Entrada</option>
                            <option value={"Prato Principal"}>Prato Principal</option>
                            <option value={"Sobremesa"}>Sobremesa</option>
                            <option value={"Bebida"}>Bebida</option>
                            <option value={"Outros"}>Outros</option>
                        </select>
                    </div>
                    */}
      </div>
      <div className="flex-1 flex-row pl-10 pr-10 justify-between p-12">
        <div className="flex flex-col space-y">
          <span className="text text-black">Descrição</span>
          <textarea
            className="form-input z-10"
            placeholder="Exemplo: Filé de frango grelhado acompanhado de arroz branco, purê de batatas e farofa"
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="flex pt-10">
          <span className="text text-black h-fit">Foto do item</span>
        </div>

        {imagem ? (
          <div className="flex w-full items-center justify-center ">
            {/*<img src={profileImage['data_url']} className="object-cover" alt="" width="100" />*/}
            <img src={imagem} className="object-cover w-fit h-fit " alt="" />
            <div className="opacity-0 text-white group-hover:opacity-100 absolute bg-gray-800/70 flex w-full h-full items-center justify-center">
              New Image
            </div>
          </div>
        ) : (
          <div className="flex justify-center rounded-lg border-orange-100 border-4 border-dashed px-6 py-10">
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-bold text-orange-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-100 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span className="outline-button p-1">Escolher imagem</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={(e) => setImagem(e.target.files[0])}
                  />
                </label>
                <p className="pl-2">ou arraste e solte aqui</p>
              </div>
              <p className="text-xs leading-5 py-1 text-light-700">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-center ">
          <button
            onClick={handleUpload}
            className="flex z-50 items-center primary-button px-20 mt-12 "
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
{
  /* // <div className="bg-gray-200 px-6 py-24 sm:py-32 lg:px-8 flex justify-center items-center">
        //     <div className="hover:border border-orange-100 mt-6 md:max-w-xl md:rounded-xl md:shadow-lg md:mt-0 p-10">
        //     <div className="mx-auto max-w-2xl text-center">
        //         <h2 className="text-3xl font-bold tracking-tight text-light-700 sm:text-4xl">Cadastrar Produto</h2>
        //         <p className="mt-2 text-lg leading-8 text-light-700">
        //             Adicione um novo produto
        //         </p>
        //     </div>
        //     <form method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        //         <div className="grid gap-x-4 gap-y-6 grid-cols-2">
        //             <div>
        //                 <label htmlFor="food" className="block text-sm font-bold leading-6 text-light-700">
        //                     Nome
        //                 </label>
        //                 <div className="mt-2.5">
        //                     <input
        //                         type="text"
        //                         name="food"
        //                         id="food"
        //                         autoComplete="food"
        //                         className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-light-400 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm sm:leading-6"
        //                         placeholder='Ex.: Pizza'
        //                     />
        //                 </div>
        //             </div>
        //             <div>
        //                 <label htmlFor="categoria" className="block text-sm font-bold leading-6 text-light-700">
        //                     Categoria
        //                 </label>
        //                 <div className="relative">
        //                     <div className=" inset-y-0 left-0 flex items-center ">
        //                         <label htmlFor="categoria" className="sr-only">
        //                             Categorias
        //                         </label>
        //                         <select
        //                             id="categoria"
        //                             name="categoria"
        //                             className="px-3.5 py-2.5 mt-2.5 bg-white w-full rounded-md border-0 bg-transparent pl-4 !text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm"
        //                         >   
        //                             <option defaultValue={''} selected>Selecione uma opção</option>
        //                             <option value={"Entrada"}>Entrada</option>
        //                             <option value={"Prato Principal"}>Prato Principal</option>
        //                             <option value={"Sobremesa"}>Sobremesa</option>
        //                             <option value={"Bebida"}>Bebida</option>
        //                             <option value={"Outros"}>Outros</option>
                                    
        //                         </select>

        //                     </div>

        //                 </div>
        //             </div>

        //             <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 col-span-2">
        //                 <div>
        //                     <label htmlFor="ingredientes" className="block text-sm font-bold leading-6 text-light-700">
        //                         Ingredientes
        //                     </label>
        //                     <div className="mt-2.5">
        //                         <input
        //                             type="text"
        //                             name="ingredientes"
        //                             id="ingredientes"
        //                             autoComplete="ingredientes"
        //                             className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm sm:leading-6"
        //                         />
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <label htmlFor="preco" className="block text-sm font-bold leading-6 text-light-700">
        //                         Preço
        //                     </label>
        //                     <div className="relative mt-2.5">
        //                         <input
        //                             type="preco"
        //                             name="preco"
        //                             id="preco"
        //                             placeholder='R$ 0.00'
        //                             autoComplete="preco"
        //                             className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm sm:leading-6"
        //                         />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-span-2">
        //                 <label htmlFor="message" className="block text-sm font-bold leading-6 text-light-700">
        //                     Descrição
        //                 </label>
        //                 <div className="mt-2.5">
        //                     <textarea
        //                         name="message"
        //                         id="message"
        //                         placeholder='Breve descrição do produto...'
        //                         rows={4}
        //                         className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-100 sm:text-sm sm:leading-6"
        //                         defaultValue={''}
        //                     />
        //                 </div>
        //             </div>
        //             <div className="col-span-full">
        //                 <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-light-700">
        //                     Adicionar imagem do produto
        //                 </label>
        //                 <div className="mt-2 flex justify-center rounded-lg border-orange-100 border-4 border-dashed px-6 py-10">
        //                     <div className="text-center">
        //                         <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
        //                         <div className="mt-4 flex text-sm leading-6 text-gray-600">
        //                             <label
        //                                 htmlFor="file-upload"
        //                                 className="relative cursor-pointer rounded-md bg-white font-bold text-orange-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-100 focus-within:ring-offset-2 hover:text-indigo-500"
        //                             >
        //                                 <span className='outline-button p-1'>Escolher imagem</span>
        //                                 <input id="file-upload" name="file-upload" type="file" className="sr-only" />
        //                             </label>
        //                             <p className="pl-2">ou arraste e solte aqui</p>
        //                         </div>
        //                         <p className="text-xs leading-5 py-1 text-light-700">PNG, JPG, GIF up to 10MB</p>
        //                     </div>
        //                 </div>
        //             </div>


        //             <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
        //                 <div className="flex h-6 items-center">
        //                     <Switch
        //                         checked={agreed}
        //                         onChange={setAgreed}
        //                         className={classNames(
        //                             agreed ? 'bg-orange-100' : 'bg-gray-200',
        //                             'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100'
        //                         )}
        //                     >
        //                         <span className="sr-only">Agree to policies</span>
        //                         <span
        //                             aria-hidden="true"
        //                             className={classNames(
        //                                 agreed ? 'translate-x-3.5' : 'translate-x-0',
        //                                 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
        //                             )}
        //                         />
        //                     </Switch>
        //                 </div>
        //                 <Switch.Label className="text-sm leading-6 text-light-700">
        //                     O produto está indisponível no momento{' '}
        //                 </Switch.Label>
        //             </Switch.Group>
        //         </div>
        //         <div className="mt-10 flex justify-between">
        //             <button
        //                 type="submit"
        //                 className="outline-button p-2"

        //             >
        //                 Voltar
        //             </button>
        //             <button
        //                 // type="submit"
        //                 className="primary-button p-2"
        //             >
        //                 Cadastrar
        //             </button>

        //         </div>
        //     </form>
        //     </div>
        // </div> */
}
