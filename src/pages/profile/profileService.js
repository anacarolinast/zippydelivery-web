import utilService from "../../utilService";
import axios from "axios";

const apiUrl = utilService.getURlAPI()

const profileService = {

  createEmpresa: function (body, id = 0) { 
    debugger
    // Se o id for zero significa que é um método post, se houver id significa que é um método patch ou put para alterar empresa
    if (id === 0) return axios.post(`${apiUrl}/empresa`, body)

    return axios.put(`${apiUrl}/empresa/${id}`, body)

  },

  getEmpresa: function (id) { 
    return axios.get(`${apiUrl}/empresa/${id}`)
  },

  getAll: function () { 
    return axios.get(`${apiUrl}/empresa`)
  },

  deleteEmpresa: function(id) {
    return axios.delete(`${apiUrl}/empresa/${id}`)
  }
  
};

export default profileService;
