import Http from "./httpService";

const baseUrl = '/balanca'

export default {
    criarBalanca(balanca){
        return Http.post(`${baseUrl}/criar`, balanca);
    },

    atualizarBalanca(balanca){
        return Http.post(`${baseUrl}/atualizar`, balanca);
    },

    buscarBalancas(){
        return Http.get(`${baseUrl}`)
    },

    buscarBalancaById(id){
        return Http.get(`${baseUrl}/${id}`)
    },

    deletarBalanca(id){
        return Http.delete(`${baseUrl}/apagar/${id}`)
    }
}