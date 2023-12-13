import { useNavigate } from 'react-router-dom';

export default function FaturamentoPage() {
  let navigate = useNavigate();
  return (
    <div className="flex h-full justify-center bg-gray-100 pt-28  pb-44">
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        <span className="text-3xl font-medium">Nosso Faturamento</span>

        <div className="flex justify-between w-full py-3 px-10 bg-white text-secondary shadow-md rounded-md  ">
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
          <div className='-mr-10 -my-3 rounded-r-md overflow-hidden'>
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



        <div className='flex flex-col gap-6 mt-12'>
          <span className='text-2xl text-orange-100'>Zippy Info</span>
          <div className="flex flex-col gap-3">

            <span className='text-secondary text-xl'>
              <span className='font-medium'>Número de pedidos: </span>
              Número total de pedidos feitos através da nossa plataforma móvel. 
            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Comissão vigente: </span>
              Porcentagem que escolhemos cobrar da loja parceira sobre cada venda
            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Custo de operação(ticket médio): </span>
              Quanto custa para o nosso sistema a cada pedido realizado.
              <br /> <span className='text-sm'>Custo de Operação = Número de Pedidos * Custo de Operação por Pedido</span>

            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Margem de lucro: </span>
              Percentual de lucro líquido em relação à receita total.
              <br /> <span className='text-sm'>Margem de Lucro = ((Receita Total - Custo de Operação) / Receita Total) * 100</span>

            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Faturamento bruto: </span>
              Soma total do valor bruto das transações antes de quaisquer deduções.
              <br /> <span className='text-sm'>Faturamento Bruto = Número de Pedidos * Ticket Médio</span>

            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Receita total: </span>
              Total de receita gerada pela plataforma, incluindo todas as transações de pedidos.
              <br /> <span className='text-sm'>ReceitaTotal = FaturamentoBruto - Comissão - Custo de operação</span>

            </span>
            <span className='text-secondary text-xl'>
              <span className='font-medium'>Comissões e taxas: </span>
              Valor total das comissões e taxas cobradas das lojas parceiras.
              <br /> <span className='text-sm'>Comissão = Faturamento Bruto * Comissão vigente</span>

            </span>

          </div>
        </div>

      </div>
    </div>
  );
}
