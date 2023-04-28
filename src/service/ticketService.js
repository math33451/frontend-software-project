import Http from "./httpService";

const baseUrl = '/ticket'

export default {

    criarTicket(ticket){
        return Http.post(`${baseUrl}/criar`, ticket);
    },

    buscarQuantidadeTicketsPendentes(){
        return Http.get(`${baseUrl}/pendentes`)
    },

    buscarTodosTickets(){
        return Http.get(`${baseUrl}`)
    },

    buscarTicketById(id){
        return Http.get(`${baseUrl}/${id}`)
    },

    setaVisualizado(id){
        return Http.get(`${baseUrl}/visualiza/${id}`)
    },

    encerraTicket(id){
        return Http.get(`${baseUrl}/encerrar/${id}`)
    },
}