import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import utilService from '../../utilService';

export default function CategoryEditPage() {

  let navigate = useNavigate();
  const { state } = useLocation();

  const [categoryId, setCategoryId] = useState();
  const [descricao, setDescricao] = useState();

  useEffect(() => {
    if (state !== null && state.id !== null) {
      axios.get(`${utilService.getURlAPI()}/categoria-produto/${state.id}`)
        .then((response) => {
          setCategoryId(response.data.id)
          setDescricao(response.data.descricao)
        })
    }
  }, [state]);

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  // Cabeçalho com o token Bearer
  const header = {
    headers: { 
      'Authorization': `Bearer ${token}`, // Passando o token como Bearer
      'Content-Type': 'application/json' 
    }
  };

  const criarCategoria = () => {
    let productCategoryRequest = {
      descricao: descricao,
      empresaId: parseInt(id)
    };

    if (categoryId === undefined) {
      // Requisição POST para criar categoria
      axios.post(`${utilService.getURlAPI()}/categoria-produto`, productCategoryRequest, header)
        .then(response => {
          navigate('/menu-manager');
        })
        .catch(error => { 
          console.error('Erro ao criar categoria:', error); 
        });
    } else {
      // Requisição PUT para atualizar categoria
      axios.put(`${utilService.getURlAPI()}/categoria-produto/${categoryId}`, productCategoryRequest, header)
        .then(response => {
          navigate('/menu-manager');
        })
        .catch(error => { 
          console.error('Erro ao alterar categoria:', error); 
        });
    }
  };


  return (
    <div className='flex h-full justify-center pt-44 px-16 bg-white'>
      <div className='w-full h-28 max-w-5xl'>

        {/* Form Session */}
        <div className='flex flex-col gap-10 w-full pb-44'>

          {/* Info Session */}
          <div className='flex flex-col gap-20'>
            <span onClick={() => { navigate('/menu-manager') }} className='cursor-pointer text-orange-500 font-semibold hover:opacity-100 transition-all underline'> Voltar</span>
            {categoryId === undefined &&
              <div className='flex flex-col gap-5'>
                <span className='text-4xl font-regular text-gray-800'>Nova Categoria</span>
                <span className='text-secondary max-w-xl'>
                  Preencha as informações da nova categoria.
                </span>
              </div>
            }
            {categoryId !== undefined &&
              <div className='flex flex-col gap-5'>
                <span className='text-4xl font-regular text-gray-800'>{descricao}</span>
                <span className='text-secondary max-w-xl'>
                  Atualize as informações desta categoria.
                </span>
              </div>
            }

            {/* Form rows*/}
            <div className='flex flex-col gap-4'>
              <div className="flex gap-4">
                <div className='flex flex-col w-full gap-1'>
                  <span>Como será chamada?</span>
                  <input
                    placeholder='Nome da sua categoria'
                    className='form-input pl-6'
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* Session End */}
          </div>
          {/* Session End */}
          {/* Session End */}
          {categoryId === undefined &&
            <div className='flex gap-4 ml-auto'>
              <button onClick={() => { navigate('/menu-manager') }} className='flex items-center secondary-button px-14 '>
                Cancelar
              </button>
              <button onClick={criarCategoria} className=' flex items-center primary-button px-10'>
                Criar Categoria
              </button>
            </div>
          }
          {categoryId !== undefined &&
            <div className='flex gap-4 ml-auto'>
              <button onClick={() => { navigate('/menu-manager') }} className='flex items-center secondary-button px-14 '>
                Cancelar
              </button>
              <button onClick={criarCategoria} className=' flex items-center primary-button px-14'>
                Atualizar
              </button>
            </div>
          }
        </div>
        {/* Session End */}

      </div>
    </div>
  );
}

