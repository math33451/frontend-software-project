import Http from "./httpService";

const baseUrl = '/pagamento'

export default {

    salvarPagamento(pagamento){
        return Http.post(`${baseUrl}/criar`, pagamento);
    },
}