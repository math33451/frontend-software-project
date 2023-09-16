import Http from "./httpService";

const baseUrl = '/endereco'

export default {

    buscaPorCep(cep){
        return Http.get(`${baseUrl}/${cep}`)
    },

}