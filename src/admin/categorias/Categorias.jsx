import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import utilService from '../../utilService';
import axios from 'axios';

export default function CategoriasPage() {
  let navigate = useNavigate();
  const { state } = useLocation();

  const [categoria, setCategoria] = useState();


  const [categorias, setCategorias] = useState();
  const [descricao, setDescricao] = useState();

  useEffect(() => {
    //var categorias = [];
    axios
      .get(`${utilService.getURlAPI()}/categoriaempresa`)
      .then((response) => {
        setCategorias(response.data);
        console.log(response)
      });
  }, [state])

  const getCategorias = async () => {
    try {
      axios
        .get(`${utilService.getURlAPI()}/categoriaempresa`)
        .then((response) => {
          setCategorias(response.data);
          console.log(response)
        });

    } catch (error) {
      // Handle errors appropriately
      console.error('Error fetching categoria:', error);
    }
  };

  useEffect(() => {
    getCategorias();

    const intervalId = setInterval(() => {
      getCategorias();
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  const criarCategoria = () => {
     
    if (!categoria || categoria === "") return

    let body = {
      descricao: categoria
    }

    axios.post(`${utilService.getURlAPI()}/categoriaempresa`, body)
      .then(response => {
        console.log('Categoria criada com sucesso:', response.data);
      })
      .catch(error => { console.error('Erro ao criar categoria:', error); });
    
  }

  const deletarCategoria = id => {
    if (!id || id === "") return

    axios.delete(`${utilService.getURlAPI()}/categoriaempresa/${id}`)
      .then(response => {
        console.log('Categoria criada com sucesso:', response.data);
      })
      .catch(error => { console.error('Erro ao criar categoria:', error); });
    
  }


  return (
    <div className="flex h-full justify-center bg-white pt-40  pb-44">
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        <div className="flex justify-between">
          <div className='flex flex-col w-4/6 self-end'>
            <span className='text-3xl font-medium'>Categoria de Loja</span>
            <span className='text-lg font-medium text-secondary'>Aqui estão todas as categorias das lojas parceiras ...</span>

          </div>
          <div className="flex w-2/6 items-center">
            <div className='flex w-full flex-col gap-2'>
              <span className='input-label text-sm'>Nova Categoria</span>
              <input className='form-input' type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
            </div>
            <span onClick={() => { criarCategoria() }} className='text-orange-100 w-fit px-4 mt-5 cursor-pointer hover:text-orange-100/75'>Salvar</span>
          </div>
        </div>


        <div className='flex flex-wrap max-w-full  py-2 gap-4'>

        {categorias?.map(categoria => (
          <div className='flex gap-4 group items-center justify-center w-60 py-3 bg-orange-50 ring-1 ring-orange-100 rounded-md'>
            <span className='group-hover:pl-2 transition-all'>{categoria.descricao}</span>
            <div className="group-hover:w-fit group-hover:opacity-100  w-0 overflow-hidden opacity-0 flex transition-all">
              
              <span onClick={() => { deletarCategoria(categoria.id) }} className='hover:bg-red-100 p-2 cursor-pointer rounded-full transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#AB222E"/>
                </svg>
              </span>
            </div>
          </div>
        ))}

          

        </div>

      </div>
    </div>
  );
}
