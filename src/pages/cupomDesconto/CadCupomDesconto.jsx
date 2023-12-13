import axios from "axios";
import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import utilService from '../../utilService';


export default function CadCupomDesconto() {
  const [idCupomDesconto, setIdCupomDesconto] = useState();
  const [codigoDesconto, setCodigoDesconto] = useState();
  const [percentualDesconto, setPercentualDesconto] = useState();
  const [valorDesconto, setValorDesconto] = useState();
  const [valorMinimoPedidoPermitido, setValorMinimoPedidoPermitido] = useState();
  const [quantidadeMaximaUso, setQuantidadeMaximaUso] = useState();
  const [inicioVigencia, setInicioVigencia] = useState();
  const [fimVigencia, setFimVigencia] = useState();

  const { state } = useLocation();

  const apiUrl = utilService.getURlAPI()


  useEffect(() => {
    if (state != null && state.id != null) {
      axios.get(`${utilService.getURlAPI()}/cupom/${state.id}`)
        .then((response) => {
          setIdCupomDesconto(response.data.id)
          setCodigoDesconto(response.data.codigoDesconto)
          setPercentualDesconto(response.data.percentualDesconto)
          setValorDesconto(response.data.valorDesconto)
          setValorMinimoPedidoPermitido(response.data.valorMinimoPedidoPermitido)
          setQuantidadeMaximaUso(response.data.quantidadeMaximaUso)
          setInicioVigencia(formatarData(response.data.inicioVigencia))
          setFimVigencia(formatarData(response.data.fimVigencia))
        })
    }
  }, [state])


  function salvar() {

    let cupomDescontoRequest = {
      codigo: codigoDesconto,
      percentualDesconto: percentualDesconto,
      valorDesconto: valorDesconto,
      valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
      quantidadeMaximaUso: quantidadeMaximaUso,
      inicioVigencia: inicioVigencia,
      fimVigencia: fimVigencia

    }
    axios.post(`${apiUrl}/cupom`, cupomDescontoRequest)
      .then((response) => {
        console.log('Cupom cadastrado com sucesso.')
      })
      .catch((error) => {
        console.log('Erro ao incluir o um cupom.')
      })

  }




  function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        };

        //let arrayData = dataParam.split('-');
        return dataParam[2] + '/' + dataParam[1] + '/' + dataParam[0] +'  h'+ dataParam[3] +':'+ dataParam[4]
    }

  return (
    <div className="flex h-full justify-center pt-44 px-16 bg-white">
      <div className="flex flex-col gap-10 w-full pb-44">
        {/* Info Session */}
        <div className="flex flex-col gap-5">
          <span className="text-2xl font-semibold">Cadastro de Cupom de Desconto</span>
          {/* Form rows*/}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-1">
                <span>Codigo</span>
                <input
                  value={codigoDesconto}
                  onChange={(e) => setCodigoDesconto(e.target.value)}
                  placeholder="Codigo do cupom"
                  className="form-input"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Percentual do desconto</span>
                <input
                  value={percentualDesconto}
                  onChange={(e) => setPercentualDesconto(e.target.value)}
                  placeholder="Percetual do desconto"
                  className="form-input"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-1">
                <span>Valor Desconto</span>
                <input
                  value={valorDesconto}
                  onChange={(e) => setValorDesconto(e.target.value)}
                  placeholder="Valor do Desconto"
                  className="form-input"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Valor minino de Pedido</span>
                <input
                  value={valorMinimoPedidoPermitido}
                  onChange={(e) => setValorMinimoPedidoPermitido(e.target.value)}
                  placeholder="Valor minino de pedidos"
                  className="form-input"
                  type="text"
                />

              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-1">
                <span>Inicio de vigencia</span>
                <input
                  value={inicioVigencia}
                  onChange={(e) => setInicioVigencia(e.target.value)}
                  placeholder="99/99/9999"
                  className="form-input"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Fim da vigencia</span>
                <input
                  value={fimVigencia}
                  onChange={(e) => setFimVigencia(e.target.value)}
                  placeholder="99/99/9999"
                  className="form-input"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Quantidade Maxima de uso</span>
                <input
                  value={quantidadeMaximaUso}
                  onChange={(e) => setQuantidadeMaximaUso(e.target.value)}
                  placeholder="Quantidade Maxima"
                  className="form-input"
                  type="text"
                />
              </div>


            </div>
          </div>

        </div>
        <button
          onClick={salvar}
          className=" flex items-center primary-button px-20 ml-auto "
        >
          Salvar
        </button>



      </div>

    </div>)
}
