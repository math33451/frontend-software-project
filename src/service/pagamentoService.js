import Http from "./httpService";

const baseUrl = '/pagamento'

export default {

    salvarPagamento(pagamento){
        return Http.post(`${baseUrl}/criar`, pagamento);
    },

    buscarTodos(){
        return Http.get(`${baseUrl}`);
    },

    buscarPagamentoById(id){
        return Http.get(`${baseUrl}/${id}`);
    },

    fecharMes(mes){
        return Http.get(`${baseUrl}/fecharMes/${mes}`);
    }
}