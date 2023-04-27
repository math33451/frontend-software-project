import Http from "../service/httpService";

let baseUser = "users";

export default {
    acessarAplicacao() {
        return Http.get(`/${baseUser}/logged`);
    },

    carregarComHeaders(headers) {
        return Http.get(`/${baseUser}/logged`, {headers: headers});
    },

    logout() {
        return Http.get(`/${baseUser}/logout`);
    },

    current() {
        return Http.get(`/${baseUser}/logged/current`);
    }
}