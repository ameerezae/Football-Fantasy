import axios from "axios";
import * as api_urls from "./api_urls";
import url_handler from "./url_handler";
import * as universalConstants from "../constants/universalConstants";

class StatisticApi{

    static async getPlayerStatistics(player_id){

        try{
            const url = url_handler.player_handler(api_urls.PLAYER_STATISTICS, player_id);
            const response = await axios.get(
                url,
                universalConstants.CONFIG_WITH_AUTH
            );
            if(response) return  response;

        }catch (e) {
            if(e.response) return e.response;
        }

    }
}

export default StatisticApi;