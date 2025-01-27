import utilService from "../../utilService";
import axios from "axios";

const apiUrl = utilService.getURlAPI()

const orderManagerService = {

  updatePedido: async function (body, id) { return await axios.put(`${apiUrl}/pedido/${id}`, body) },

  getAll: function () { 
    const id = localStorage.getItem("id");
    return axios.get(`${apiUrl}/pedido/empresa/${id}`)
  },
  
};

export default orderManagerService;
