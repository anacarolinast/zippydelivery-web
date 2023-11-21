import { useNavigate } from "react-router-dom"

export default function HomeAdm() {
    let navigate = useNavigate()
    return (
        <div className='h-full justify-center p-44 bg-white'>
            <div className='flex flex-colunm p-10 md:flex-row mx-auto h-60 gap-10'>
                <div className='flex flex-col space-y-8 w-full h-full'>
                    <span className='text-gray-500  text-3xl font-semibold'>Bem vindo,Zippy!</span>'
                    <span className='text-secondary text-gray-500 text-lg font-medium'>Aqui você pode...</span>
                </div>
            </div>
            <div className='flex h-fit justify-center'>
                <div className='flex bg-orange-50 rounded-lg h-fit p-4 cursor-pointer items-center gap-5 '
                    onClick={() => { navigate('/nossos-clientes') }} >
                    <img src="gerenciar_clientes.png" alt="" />
                </div>

                <div className='flex bg-orange-50 rounded-lg h-fit p-4 cursor-pointer items-center gap-5 '
                    onClick={() => { navigate('/nossos-parceiros') }} >
                    <img src="gerenciar_parceiros.png" alt="" />
                </div>


                <div className='flex bg-orange-50 rounded-lg h-fit p-4 cursor-pointer items-center gap-5 '
                    onClick={() => { navigate('') }} >
                    <img src="nosso_faturamento.png" alt="" />
                </div>


                <div className='flex bg-orange-50 rounded-lg h-fit p-4 cursor-pointer items-center gap-5 '
                    onClick={() => { navigate('') }} >
                    <img src="nossas_informacoes.png" alt="" />
                </div>


                <div className='flex bg-orange-50 rounded-lg h-fit p-4 cursor-pointer items-center gap-5 '
                    onClick={() => { navigate('') }} >
                    <img src="nosso_marketing.png" alt="" />
                </div>

            </div>
        </div>


    )
}