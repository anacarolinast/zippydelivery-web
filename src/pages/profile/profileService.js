import axios from "axios";
import utilService from "../../utilService";

const apiUrl = utilService.getURlAPI();

const profileService = {
  createEmpresa: async function (body, companyId) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token de autenticação não encontrado.");
      }

      const response = await axios.put(`${apiUrl}/empresa/${companyId}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error.message || error);
      throw error;
    }
  },

  getEmpresa: async function (id) {
    try {
      const response = await axios.get(`${apiUrl}/empresa/usuario/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter empresa:", error);
      throw error;
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

  deleteEmpresa: async function (id) {
    try {
      const response = await axios.delete(`${apiUrl}/empresa/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar empresa:", error);
      throw error;
    }
  },
};

export default profileService;
