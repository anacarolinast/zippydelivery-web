import utilService from "../../utilService";
import axios from "axios";

const apiUrl = utilService.getURlAPI()

const orderManagerService = {

  editPedido: async function (body, id) { return await axios.put(`${apiUrl}/pedido/${id}`, body) },

  getAll: function () { 
    return axios.get(`${apiUrl}/pedido`)
  },
  
};

export default orderManagerService;
