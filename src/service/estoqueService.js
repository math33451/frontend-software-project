import Http from "./httpService";

const baseUrl = '/estoque'

export default {

    criarPeca(peca){
        return Http.post(`${baseUrl}/criar`, peca);
    },

    atualizarPeca(peca){
        return Http.post(`${baseUrl}/atualizar`, peca);
    },

    buscarTodasPecas(){
        return Http.get(`${baseUrl}`)
    },

    buscarPecaById(id){
        return Http.get(`${baseUrl}/${id}`)
    },

    deletarPeca(id){
        return Http.delete(`${baseUrl}/apagar/${id}`)
    }
}