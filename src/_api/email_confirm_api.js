import axios from "axios";
import * as apiUrls from "./api_urls";

class Email_confirm_api{

    static async confirm_email(token){

        try {
            const response = await axios.get(
                apiUrls.EMAIL_CONFIRMATION + token
            );
            if(response) return response;
        }catch (e) {
            if(e.response) return e.response
        }
    }
}
export default Email_confirm_api;