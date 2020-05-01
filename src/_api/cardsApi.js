import axios from "axios";
import * as api_urls from "./api_urls";
import url_handler from "./url_handler";
import * as universalConstants from "../constants/universalConstants";


class CardsApi {
    static async getAllCards(){
        const url = url_handler.competition_handler(api_urls.CARDS_START, api_urls.CARDS_END);
        try {
            const accessToken = localStorage.getItem(universalConstants.ACCESS_TOKEN);
            const config = universalConstants.CONFIG_WITH_TOKEN(accessToken);
            const respone = await axios.get(
                url,
                config
            );
            if(respone) return respone;
        }catch (e) {
            if(e.response) return e.response;
        }
    }

    static async postCard(name ,mode){
        const url = url_handler.competition_handler(api_urls.CARDS_START, api_urls.CARDS_END);
        try {
            const accessToken = localStorage.getItem(universalConstants.ACCESS_TOKEN);
            const config = universalConstants.CONFIG_WITH_TOKEN(accessToken);
            const response = await axios.post(
                url,
                JSON.stringify(
                    {
                        card : name,
                        mode : mode
                    }
                ),
                config
            );
            if(response) return response;
        }catch (e) {
            if(e.response) return e.response;
        }
    }



}

export default CardsApi;