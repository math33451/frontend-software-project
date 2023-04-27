
import userService from "@/service/userService";
import statusCode from "@/shared/consts/statusCode";
import store from "@/shared/consts/store/index";
import swal from "@/utils/alertUtils";

export function requiredAuth(to, from, next){
    
    userService.acessarAplicacao().then((response) =>{
        store.setExterno(response.data.externo)
        store.setLogged(true)
        next();
        return;
    })
    .catch(e => {
        if(e.status == statusCode.unauthorized){
            store.setLogged(false)
            swal.alertError("É preciso estar logado para acessar essa função.")
        }
    })
}