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
import React, { useEffect, useState } from 'react';
import { PhotoIcon } from '@heroicons/react/20/solid';
//import { Switch } from '@headlessui/react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getStorage, uploadBytesResumable } from 'firebase/storage';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//import firebase from 'firebase/app';
import 'firebase/storage';
import { storage } from '../../firebase';
import utilService from '../../utilService';
//import ModalComponent from '../components/modal'

import ImageUploading from 'react-images-uploading';

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

  const [imgProduct, setImgProduct] = React.useState(null);

  const [productImage, setProductImage] = React.useState([]);


  const maxNumber = 69;


  useEffect(() => {
     ;
    if (state !== null && state.id !== null) {
      axios
        .get(`${utilService.getURlAPI()}/categoriaproduto/${state.id}`)
        .then((response) => {
           ;
          setCategoria(response.data.id);
          setCategoriaDescricao(response.data.descricao);
           
          if (state.produto) {
            setIdProduto(state.produto.id);
            setPreco(state.produto.preco);
            setTitulo(state.produto.titulo);
            setDescricao(state.produto.descricao);
            setImgProduct(state.produto.imagem);
          }
        });
    }
  }, [state]);



  const handleUpload = async () => {
     ;

    if (!titulo || !preco || !categoria || !descricao) {
      console.error('Preencha todos os campos antes de salvar.');
      return;
    }

     

    let body = {
      idCategoria: categoria,
      idEmpresa: localStorage.getItem('id'),
      titulo: titulo,
      imagem: imgProduct || "",
      descricao: descricao,
      preco: preco,
      disponibilidade: true,
      tempoEntregaMinimo: 0,
      tempoEntregaMáximo: 0,
    };

    try {
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


  const onChangeProductImage = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    console.log(imageList[0].file);
    setProductImage(imageList[0]);
    handleSubmit(imageList[0], true)
  };

  function handleSubmit(image, isProductImage) {
    const file = image['file'];

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        //setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           
          if (isProductImage) {
            setImgProduct(downloadURL);
          }
        });
      },
    );
  };

  return (
    <div className="flex h-fit justify-center  p-44 bg-white">
      <div className="w-full h-fit max-w-5xl">

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

          
            <div className="flex justify-center rounded-lg px-6 py-10">
              {/* Images Session */}
              <ImageUploading
                value={productImage}
                onChange={onChangeProductImage}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <div className='w-full'>
                    {/*{productImage['data_url'] ?*/}
                    {imgProduct ?
                      <div onClick={onImageUpload} className="relative group cursor-pointer hover:shadow-lg transition-all flex items-center justify-center bg-gray-200 w-auto h-auto mx-auto rounded-lg overflow-hidden">
                        <div className=" flex items-center justify-center">
                          {/*<img src={productImage['data_url']} className="object-cover" alt="" width="100" />*/}
                          <img src={imgProduct} className="object-cover w-full h-full" alt="" width="100" />
                          <div className="opacity-0 text-white group-hover:opacity-100 absolute bg-gray-800/70 flex w-full h-full  items-center justify-center ">
                            New Image
                          </div>
                        </div>

                      </div>
                    : 
                    <div className="w-full flex justify-center rounded-lg border-orange-100 border-4 border-dashed px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label className="relative cursor-pointer rounded-md bg-white font-bold text-orange-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-100 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span className="outline-button p-1 cursor-pointer" onClick={onImageUpload}>Escolher imagem</span>
                          </label>
                          <p className="pl-2">ou arraste e solte aqui</p>
                        </div>
                        <p className="text-xs leading-5 py-1 text-light-700">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                    }
                    
                  </div>
                )}
              </ImageUploading>
              {/* Session End */}
              
            </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleUpload}
              className="flex z-50 items-center primary-button px-20 mt-12 "
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
{
  
}
