import * as api_urls from "./api_urls";
import axios from "axios";
import url_handler from "./url_handler"


class ManageTeamApi {
    static async getMyTeam(competition) {
        const token = localStorage.getItem("access_token");
        const config = {
            mode: "cors",
            headers:
                {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
        }
        let url = url_handler.competition_handler(api_urls.MANAGE_TEAM_START,api_urls.MANAGE_TEAM_END,competition)
        const response = await axios.get(
            url,
            config
        );
        return response;
    }

    static async getTransferablePlayers(competition) {
        const token = localStorage.getItem("access_token");
        const config = {
            mode: "cors",
            headers:
                {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
        }
        let url = url_handler.competition_handler(api_urls.GET_TRANSFERABLE_START,api_urls.GET_TRANSFERABLE_END,competition)
        const response = await axios.get(
            url,
            config
        );
        return response;
    }

    static async sendSubsTeam (team,captain,competition){
        try{
            const token = localStorage.getItem("access_token");
            const config =
                {
                    mode: "cors",
                    headers:
                        {
                            'Content-Type': 'application/json',
                            "Authorization": `Bearer ${token}`
                        }
                };
            const thisBody = {
                "squad" : team,
                "captain-id" : captain,
            }
            const body = JSON.stringify(
                thisBody
            );
            let url = url_handler.competition_handler(api_urls.MANAGE_TEAM_START,api_urls.MANAGE_TEAM_END,competition)
            const response = await axios.put(
                url,
                body,
                config
            );

            return response;
        }catch (e) {
            if(e.response){

                return e.response;
            }
        }

    }

    static async sendTransferedPlayer(playerIn, playerOut,competition) {
        try {
            const token = localStorage.getItem("access_token");
            const config =
                {
                    mode: "cors",
                    headers:
                        {
                            'Content-Type': 'application/json',
                            "Authorization": `Bearer ${token}`
                        }
                };
            const body = JSON.stringify(
                {
                    "player_in": {
                        "id" : playerIn.id,
                        "name" : playerIn.name
                    },
                    "player_out": {
                        "id" : playerOut.id,
                        "name" : playerOut.name
                    }
                }
            );
            let url = url_handler.competition_handler(api_urls.POST_TRANSFERABLE_START,api_urls.POST_TRANSFERABLE_END,competition)
            const response = await axios.post(
                url,
                body,
                config
            );
            return response;
        }catch (e) {
            if(e.response){
                return e.response
            }
        }

    }
}

export default ManageTeamApi;