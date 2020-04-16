import Email_confirm_api from "../_api/email_confirm_api";
import Swal from "sweetalert2";
import * as universalCons from "../constants/universalConstants";

export const email_accept = (token) => {
    return async function(){
        const response = await Email_confirm_api.confirm_email(token);
        if(response.status === universalCons.REQUESTS_STATUS.ACCEPTED){
            const message = response.data.message;
            Swal.fire({
                position: 'center',
                type: 'success',
                title: message,
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(function() {
                window.location.replace("/login");
            }, 2500);
        }else{
            const message = response.data.message ? response.data.message : response.data.detail;
            Swal.fire({
                position: 'center',
                type: 'error',
                title: message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
};