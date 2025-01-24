import utilService from "../../utilService";
import axios from "axios";

const apiUrl = utilService.getURlAPI();
const token = localStorage.getItem('token');

const profileService = {

  // Função para criar ou atualizar uma empresa
  createEmpresa: async function (body, id) { 
    try {
        // Verifica se id e body foram passados corretamente
        if (!id) {
            throw new Error("O ID da empresa é obrigatório.");
        }
        if (!body || typeof body !== "object") {
            throw new Error("O corpo da requisição é obrigatório e deve ser um objeto.");
        }

        // Realiza a requisição PUT
        const response = await axios.put(`${apiUrl}/empresa/${id}`, body, {
            headers: {
                'Authorization': `Bearer ${token}`, // Certifique-se de que o token está definido
                'Content-Type': 'application/json',
            },
        });

        // console.log("Resposta da API:", response.data);
        // console.log("Token usado:", token);
        // console.log("ID enviado:", id);

        // Retorna a resposta para ser usada pelo chamador
        return response.data;
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error.message || error);
        throw error; // Propaga o erro para o chamador tratar
    }
},


  getEmpresa: async function (id) { 
    try {
      const response = await axios.get(`${apiUrl}/empresa/usuario/${id}`);
      //console.log("empresa/usuario id", id)
      return response.data; // Retorna os dados da empresa
    } catch (error) {
      console.error("Erro ao obter empresa:", error);
      throw error; // Lança o erro para tratamento
    }
  },

  getAll: async function () {
    try {
      const response = await axios.get(`${apiUrl}/empresa`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter todas as empresas:", error);
      throw error;
    }
  },

  deleteEmpresa: async function(id) {
    try {
      const response = await axios.delete(`${apiUrl}/empresa/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar empresa:", error);
      throw error;
    }
  }
};

export default profileService;
