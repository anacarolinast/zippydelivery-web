import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCompanyId() {
  const [empresaId, setEmpresaId] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    console.log("User ID do localStorage:", userId);

    axios.get(`https://zippydelivery-v2-latest.onrender.com/api/empresa`)
      .then(response => {
        const empresas = response.data; 

        const empresa = empresas.find(empresa => empresa.usuario.id === parseInt(userId));
        
        if (empresa) {
          console.log("Empresa encontrada:", empresa);
          setEmpresaId(empresa.id); 
        } else {
          console.error("Usuário não tem permissão para acessar essa empresa");
        }
      })
      .catch(error => {
        console.error('Erro ao buscar os dados da empresa:', error);
      });
  }, []);

  return empresaId;
}
