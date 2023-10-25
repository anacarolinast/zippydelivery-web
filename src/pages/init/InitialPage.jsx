import { useNavigate } from "react-router-dom"

export default function InitialPage(){
    let navigate = useNavigate()
    return (
      <div className='h-full justify-center p-44 bg-white'>
        <div className='flex flex-colunm p-10 md:flex-row mx-auto h-60 gap-10'>
          <div className='flex flex-col space-y-8 w-full h-full'>
         <span className='text-black text-3xl font-semibold'>Olá,Zipper!</span>'
            <span className='text-secondary text-gray-500 text-lg font-medium'>Prazer! Sou o <strong>Portal do Parceiro</strong>, a ferramenta para você gerenciar o funcionamento da sua loja no Zippy.</span>
            <span className='text-secondary text-gray-500 text-lg font-medium'>            
                Para vender no aplicativo, você precisa preencher algumas informações básicas. Mas não se preocupe! Elas poderão ser alteradas mais tarde, sempre que desejar</span>
          </div>
          <div className='w-4/6 min-w-fit p-4 flex flex-col items-center space-y-16'>
            <img class="h-auto max-w-xs self-center" src="selfconfidence-bro.png"></img>
            <button onClick={() => { navigate('/profile') }} className='primary-button mt-auto px-5 self-center'>
              Começar
            </button>
          </div>
        </div>
      </div>
    )
}