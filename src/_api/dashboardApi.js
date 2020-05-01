import * as api_urls from "./api_urls"
import axios from "axios"
import * as universalConstants from "../constants/universalConstants";

class DashboardApis{
    static async getAllCompetitions() {
        try{
            const accessToken = localStorage.getItem(universalConstants.ACCESS_TOKEN);
            const config = universalConstants.CONFIG_WITH_TOKEN(accessToken);
            const response = await axios.get(
                api_urls.COMPETITIONS,
                config
            )
            if(response) return response
        }catch (e) {
            if(e.response) return e.response;
        }
    }

    static async getUserInformation () {
        try {
            const accessToken = localStorage.getItem(universalConstants.ACCESS_TOKEN);
            const config = universalConstants.CONFIG_WITH_TOKEN(accessToken);
            const response = await axios.get(
                api_urls.INFORMATION,
                config
            );
            if(response) return response;
        }catch (e) {
            if(e.response) return e.response;
        }
    }

    static async EditProfile (data){
        try{
            const accessToken = localStorage.getItem(universalConstants.ACCESS_TOKEN);
            const config = universalConstants.CONFIG_WITH_TOKEN(accessToken);
            const response = await axios.put(
                api_urls.EDIT_PROFILE,
                JSON.stringify(data),
                config
            );
            if(response) return response;
        }catch (e) {
            if(e.response) return e.response;
        }
    }

}

export default DashboardApis;