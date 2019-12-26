import axios from "axios";
import * as api_urls from "./api_urls";
import url_handler from "./url_handler";
import * as universalConstants from "../constants/universalConstants";
import * as cardsConstants from "../constants/cards/cardsConstants";
import {CARDS_POST} from "../constants/cards/cardsConstants";


class CardsApi {
    static async getAllCards(){
        const url = url_handler.competition_handler(api_urls.CARDS_START, api_urls.CARDS_END);
        try {
            const respone = await axios.get(
                url,
                universalConstants.CONFIG_WITH_AUTH
            )
            if(respone) return respone;
        }catch (e) {
            if(e.response) return e.response;
        }
    }

    static async postCard(name ,mode){
        const url = url_handler.competition_handler(api_urls.CARDS_START, api_urls.CARDS_END);
        try {
            const response = await axios.post(
                url,
                JSON.stringify(
                    {
                        name : name,
                        mode : mode
                    }
                ),
                universalConstants.CONFIG_WITH_AUTH
            );
            if(response) return response;
        }catch (e) {
            if(e.response) return e.response;
        }
    }



}

export default CardsApi;