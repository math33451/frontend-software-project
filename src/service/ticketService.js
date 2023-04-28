import Http from "./httpService";

const baseUrl = '/ticket'

export default {

    criarTicket(ticket){
        return Http.post(`${baseUrl}/criar`, ticket);
    },

    buscarQuantidadeTicketsPendentes(){
        return Http.get(`${baseUrl}/pendentes`)
    }
}