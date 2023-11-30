import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import utilService from '../../utilService';

export default function MenuManagerPage() {
  let navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [produtosCategoria, setProdutosCategoria] = useState([]);
  const [produtoSearch, setProdutoSearch] = useState([]);
  const produtos = [1, 2, 3];

  useEffect(() => {
    var categorias = [];
    axios
      .get(`${utilService.getURlAPI()}/categoriaproduto`)
      .then((response) => {
        setCategories(response.data);
        categorias = response.data;
      });

    axios.get(`${utilService.getURlAPI()}/produto`).then((response) => {
      let produtos = response.data;

      // Distribuir produtos e suas devidas categorias
      setCategories(
        categorias
          .map((category) => ({
            id: category?.id,
            descricao: category?.descricao,
            produtos: produtos.filter(
              (produto) => produto.categoria?.id == category?.id,
            ),
          }))
          .filter((category) => category.id != null),
      );

      setAllCategories(
        categorias
          .map((category) => ({
            id: category?.id,
            descricao: category?.descricao,
            produtos: produtos.filter(
              (produto) => produto.categoria?.id == category?.id,
            ),
          }))
          .filter((category) => category.id != null),
      );
    });
  }, []);

  async function remove(id) {
    await axios
      .delete(`${utilService.getURlAPI()}/categoriaproduto/${id}`)
      .then((response) => {
        console.log('Categoria removida com sucesso.');
        axios
          .get(`${utilService.getURlAPI()}/categoriaproduto`)
          .then((response) => {
            setCategories(response.data);
          });
      })
      .catch((error) => {
        console.log('Erro ao remover categoria: ', error.response);
      });
  }

  async function removeProduto(id) {
    await axios
      .delete(`${utilService.getURlAPI()}/produto/${id}`)
      .then((response) => {
        console.log('Produto removido com sucesso.');
        var categorias = [];
        axios
          .get(`${utilService.getURlAPI()}/categoriaproduto`)
          .then((response) => {
            setCategories(response.data);
            categorias = response.data;
          });

        axios.get(`${utilService.getURlAPI()}/produto`).then((response) => {
          let produtos = response.data;

          // Distribuir produtos e suas devidas categorias
          setCategories(
            categorias
              .map((category) => ({
                id: category?.id,
                descricao: category?.descricao,
                produtos: produtos.filter(
                  (produto) => produto.categoria?.id == category?.id,
                ),
              }))
              .filter((category) => category.id != null),
          );
        });
      })
      .catch((error) => {
        console.log('Erro ao remover categoria: ', error.response);
      });
  }

  function handleChangeCategory(event) {
    setCategoryFilter({ value: event.target.value });
    filterCategory(event.target.value);
  }

  function filterCategory(filteredCategory) {
    if (filteredCategory == 0) setCategories(allCategories);
    else
      setCategories(
        allCategories.filter(
          (category) => category.descricao == filteredCategory,
        ),
      );
  }

  function handleChangeProduct(event) {
    setProdutoSearch(event.target.value);
    filterProduct(event.target.value);
  }

  function filterProduct(search) {
    if (search == null) setCategories(allCategories);
    else
      setCategories(
        allCategories.map((category) => {
          return {
            id: category?.id,
            descricao: category?.descricao,
            produtos: category.produtos.filter((produto) =>
              produto.titulo.toLowerCase().includes(search.toLowerCase()),
            ),
          };

          //if (category == [] || category.produtos == []) return
        }),
      );
  }

  return (
    <div className="h-full justify-center p-44 bg-white">
      <div className="flex flex-col gap-16 mx-auto max-w-5xl pb-44">
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <span className="text-5xl font-regular text-gray-800">
              Cardápio
            </span>
            <span className="text-secondary max-w-xl">
              Seu cardápio é sua vitrine de produtos no Zippy. Gerencie por este
              cardápio único todos os itens da sua loja.
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
            <div className="flex-col">
              <span className="flex items-center gap-1 text-xl text-green-500 ">
                Restaurante Aberto
              </span>
              <span className="text-gray-500">
                Dentro do horário programado
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            navigate('/category-edit');
          }}
          className="flex gap-3 items-center primary-button py-2 px-4 w-fit ml-auto -mb-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
          Nova Categoria
        </button>

        <div className="flex mt-20">
          <div className="flex w-full gap-3">
            <div className="flex">
              <button className="flex items-center primary-button rounded-md rounded-r-none px-3  min-w-max max-h-10">
                Status da Venda
              </button>
              <button className="flex items-center text-sm rounded-md rounded-l-none px-3 bg-gray-200 text-gray-500 min-w-max max-h-10">
                Preço e Estoque
              </button>
            </div>
            <input
              value={produtoSearch}
              onChange={handleChangeProduct}
              className="form-input w-3/4"
              placeholder="Busque pelo nome do item"
              type="text"
            />
            <select
              className="form-input w-1/4"
              value={categoryFilter.value}
              onChange={handleChangeCategory}
            >
              <option value={0}>Selecione a categoria</option>
              {allCategories.map((category) => (
                <option value={category.descricao}>{category.descricao}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          {categories.map((category) => (
            <div>
              <div className="flex flex-col w-full border rounded-md">
                <div className="flex justify-between align-middle py-4 px-5 ">
                  <div className="flex">
                    <Button className="flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-full h-fit p-2 transition-colors">
                      <Link
                        to="/category-edit"
                        state={{ id: category?.id }}
                        style={{ color: 'gray' }}
                      >
                        {' '}
                        {/*state={{ id: category.id }} */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </Link>
                    </Button>
                    <span className="text-2xl font-regular text-gray-800">
                      {category?.descricao}
                    </span>
                  </div>

                  <Button className="flex gap-3 items-center secondary-button py-1.5 px-4">
                    <Link to="/produto" state={{ id: category?.id }}>
                      {' '}
                      {/*state={{ id: category.id }} */}
                      <div className="flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Novo Item
                      </div>
                    </Link>
                  </Button>
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
                      {category.produtos?.map((produto, index) => (
                        <tr class="bg-white border-b group">
                          <th
                            scope="row"
                            class="tb-400 px-6 py-1.5 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {produto.titulo}
                          </th>
                          <td class="px-6 py-1.5 tb-150">R$ {produto.preco}</td>
                          <td class="px-6 py-1.5 line-clamp-2 flex justify-between">
                            <span className="w-9/12">{produto.descricao}</span>
                            <div className="opacity-0 group-hover:opacity-100 flex justify-center gap-4 w-2/12 transition-all">
                              <div className="flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-full h-fit p-2 transition-colors">
                                <Link
                                  to="/produto"
                                  state={{ id: category.id, produto: produto }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div
                                onClick={() => removeProduto(produto.id)}
                                className="flex justify-center items-center cursor-pointer  hover:bg-gray-100 rounded-full h-fit p-2 transition-colors"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Button
                  onClick={(e) => remove(category.id)}
                  className="w-full flex items-center justify-center py-2.5"
                >
                  <span className="flex justify-center gap-2 text-sm text-red-800 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    Excluir Categoria
                  </span>
                </Button>
              </div>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
