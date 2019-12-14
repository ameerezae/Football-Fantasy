import * as api_urls from "./api_urls"
import axios from "axios"
import * as universal_constants from "../constants/universalConstants";

class DashboardApis{
    static async getAllCompetitions() {
        try{
            const response = await axios.get(
                api_urls.COMPETITIONS,
                universal_constants.CONFIG_WITH_AUTH
            )
            if(response) return response
        }catch (e) {
            if(e.response) return e.response;
        }
    }

    static async getUserInformation () {
        try {
            const response = await axios.get(
                api_urls.INFORMATION,
                universal_constants.CONFIG_WITH_AUTH
            );
            if(response) return response;
        }catch (e) {
            if(e.response) return e.response;
        }
    }

    static async EditProfile (data){
        try{
            const response = await axios.put(
                api_urls.EDIT_PROFILE,
                JSON.stringify(data),
                universal_constants.CONFIG_WITH_AUTH
            );
            if(response) return response;
        }catch (e) {
            if(e.response) return e.response;
        }
    }

}

export default DashboardApis;