import * as api_urls from "./api_urls";
import axios from "axios";

class ManageTeamApi{
    static async getMyTeam(){
        const token = localStorage.getItem("access_token");
        const config = {
            mode: "cors",
            headers:
                {
                    'Content-Type': 'application/json',
                    "Authorization" : `Bearer ${token}`
                }
        }

        const response = await axios.get(
            api_urls.MANAGE_TEAM,
            config
        );
        return response;
    }
}

export default ManageTeamApi;