import Http from "../service/httpService";

let baseUser = "users";

export default {
    acessarAplicacao(login) {
        return Http.post(`/${baseUser}/login`, login);
    },

}