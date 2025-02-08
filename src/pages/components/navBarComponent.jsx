import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import LogoComponent from './logoComponent';
import useCompany from '../../hooks/UseCompany.js';

function NavBarComponent() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const empresa = useCompany();
  const [isProfileIncomplete, setIsProfileIncomplete] = useState(false);

  useEffect(() => {
    if (empresa) {
      console.log(empresa);
      const isDataComplete = empresa.nome && empresa.cnpj && empresa.email && empresa.categoria && empresa.telefone && empresa.endereco.logradouro && empresa.endereco.bairro && empresa.endereco.numero && empresa.endereco.cidade && empresa.endereco.estado && empresa.endereco.cep && empresa.taxaFrete && empresa.tempoEntrega && empresa.formasPagamento.length > 0;

      console.log("Perfil completo?", isDataComplete);
      
      setIsProfileIncomplete(!isDataComplete);
    }
  }, [empresa]);

  const handleNavigation = (path) => {
    if (!isProfileIncomplete || path === 'profile') {
      navigate(path);
    }
  };

  return (
    <div className='fixed z-50 w-full h-fit top-0'>
      <div className='flex justify-between w-full bg-white py-2 px-8 shadow-md'>
        <div className='flex gap-20'>
          <div className='-mt-2'>
            <LogoComponent />
          </div>
          <div className='flex gap-12 items-center'>
            {['home', 'profile', 'menu-manager', 'order-manager', 'order-history', 'dashboard'].map((path) => (
              <button
                key={path}
                onClick={() => handleNavigation(path)}
                className={`${location === `/${path}` ? 'text-orange-100' : ''} ${isProfileIncomplete && path !== 'profile' ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isProfileIncomplete && path !== 'profile'}
              >
                {path === 'home' ? 'Home' :
                 path === 'profile' ? 'Perfil' :
                 path === 'menu-manager' ? 'Cardápio' :
                 path === 'order-manager' ? 'Pedidos' :
                 path === 'order-history' ? 'Histórico' :
                 'Faturamento'}
              </button>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='hover:bg-gray-200 rounded-md p-1.5 cursor-pointer'>
            <button onClick={() => {
              localStorage.clear();
              navigate('/');
            }}
              className={location === '/' ? 'text-orange-100' : ''}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarComponent;
