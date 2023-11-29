import { useNavigate } from 'react-router-dom';

export default function FaturamentoPage() {
  let navigate = useNavigate();
  return (
    <div className="flex h-full justify-center bg-gray-100 pt-44 ">
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        <span className="text-3xl font-medium">Nosso Faturamento</span>

        <div className="flex justify-between w-full py-3 px-10 bg-white text-secondary shadow-md rounded-md overflow-hidden">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold ">Pedidos</span>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <span>Número de pedidos</span>
                <span>
                  <span className="text-xl font-semibold">1000 </span>pedidos
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Custo de operação</span>
                <span className="text-xl font-semibold">R$5,00</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold ">Balanço</span>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <span>Comissão vigente</span>
                <span className="text-xl font-semibold">20%</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Margem de lucro</span>
                <span className="text-xl font-semibold">85,71%</span>
              </div>
            </div>
          </div>
          <div className='-mr-10 -my-3'>
            <img src="/fatu.png" alt="" />
          </div>
        </div>

        <div className="flex justify-between gap-8">
          <div className="flex flex-col justify-between w-full pt-3 pb-7 px-10 bg-white text-secondary shadow-md rounded-md h-32">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold ">Balanço</span>
            </div>
            <span className="text-xl font-semibold text-gray-500">R$ 50.000,00</span>
          </div>
          <div className="flex flex-col justify-between w-full pt-3 pb-7 px-10 bg-white text-secondary shadow-md rounded-md h-32">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold ">Receita Total</span>
            </div>
            <span className="text-xl font-semibold text-gray-500">R$ 50.000,00</span>
          </div>
          <div className="flex flex-col justify-between w-full pt-3 pb-7 px-10 bg-white text-secondary shadow-md rounded-md h-32">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold ">Comissões e taxas</span>
            </div>
            <span className="text-xl font-semibold text-gray-500">R$ 50.000,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
