import utilService from "../../utilService";
import axios from "axios";

const apiUrl = utilService.getURlAPI();
const token = localStorage.getItem('token');

const profileService = {

  createEmpresa: async function (body, id) { 
    try {
      const response = axios.put(`${apiUrl}/empresa/${id}`, body,  
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      ); 
      console.log(response.data);
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
    }
  },

  getEmpresa: function (id) { 
    return axios.get(`${apiUrl}/empresa/usuario/${id}`)
  },

  getAll: function () { 
    return axios.get(`${apiUrl}/empresa`)
  },

  deleteEmpresa: function(id) {
    return axios.delete(`${apiUrl}/empresa/${id}`)
  }
  
};

export default profileService;
