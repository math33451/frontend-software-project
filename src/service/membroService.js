import Http from "./httpService";

const baseUrl = '/membro'

export default {

    criarMembro(membro){
        return Http.post(`${baseUrl}/save`, membro);
    },

    buscarTodosMembros(){
        return Http.get(`${baseUrl}`)
    },

    buscarMembroById(id){
        return Http.get(`${baseUrl}/${id}`)
    },

    editarMembro(membro){
        return Http.post(`${baseUrl}/edit`, membro);
    },

}