import swal from 'sweetalert2';

export default {
    alertError: function(text, txtButton = 'Ok', type = "error"){
        swal.fire({
            position: 'top',
            type: type,
            text: text,
            showCancelButton: false,
            confirmButtonText: txtButton,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-primary mr-1',
            cancelButtonClass: 'btn'
        })
    }
}