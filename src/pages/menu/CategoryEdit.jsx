import React from 'react';
import { useNavigate } from "react-router-dom";
import eloLogo from "../../assets/img/elo.png";
import mastercardLogo from "../../assets/img/mastercard.png";
import pixLogo from "../../assets/img/pix.png";
import visaLogo from "../../assets/img/visa.png";


function CategoryEditPage() {
  let navigate = useNavigate()
  return (
    <div className='flex h-full justify-center pt-44 px-16 bg-white'>
      <div className='w-full h-28 max-w-5xl'>
        

        {/* Form Session */}
        <div className='flex flex-col gap-10 w-full pb-44'>

          {/* Info Session */}
          <div className='flex flex-col gap-5'>
            <span onClick={() => { navigate('/menu-manager') }} className='cursor-pointer text-orange-500 font-semibold py-1 px-8 bg-[#fce1c7] w-fit rounded-full opacity-75 hover:opacity-100 transition-all'>{'<'} Voltar à listagem</span>
            <div className='flex flex-col text-2xl font-semibold '>
              Informações
              <span className='text-secondary text-sm'>Preencha as informações da nova categoria</span>
            </div>
            {/* Form rows*/}
            <div className='flex flex-col gap-4'>
              <div className="flex gap-4">
                <div className='flex flex-col w-full gap-1'>
                  <span>Nome</span>
                  <input placeholder='Nome da sua categoria' className='form-input' type="text" />
                </div>
              </div>
            </div>
            
            {/* Session End */}
          </div>
          {/* Session End */}

          
          {/* Session End */}
          <div className='flex gap-3 ml-auto'>
            <button onClick={() => { navigate('/menu-manager') }} className='flex items-center secondary-button px-20 '>
              Cancelar
            </button>
            <button onClick={() => { navigate('') }} className=' flex items-center primary-button px-20'>
              Criar Categoria
            </button>

          </div>

        </div>
        {/* Session End */}

      </div>
    </div>
  )
}

export default CategoryEditPage
