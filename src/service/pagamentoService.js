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

    fecharMes(mes, data){
        return Http.post(`${baseUrl}/fecharMes/${mes}`, data,
        { responseType: 'blob' });
    },

    download(){
        return Http.get(`${baseUrl}/downloadPagamento`);
    }
}