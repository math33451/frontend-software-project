import Http from "./httpService";

const baseUrl = '/cliente'

export default {

    atualizarCliente(cliente){
        return Http.post(`${baseUrl}/atualizar`, cliente);
    },

    buscarClientes(){
        return Http.get(`${baseUrl}`)
    },

    buscarClienteById(id){
        return Http.get(`${baseUrl}/${id}`)
    },

    buscarPorDocumento(documento){
        return Http.get(`${baseUrl}/${documento}`)
    },

    deletarCliente(id){
        return Http.delete(`${baseUrl}/apagar/${id}`)
    }
}