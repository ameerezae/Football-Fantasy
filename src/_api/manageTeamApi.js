import * as api_urls from "./api_urls";
import axios from "axios";

class ManageTeamApi {
    static async getMyTeam() {
        const token = localStorage.getItem("access_token");
        const config = {
            mode: "cors",
            headers:
                {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
        }

        const response = await axios.get(
            api_urls.MANAGE_TEAM,
            config
        );
        return response;
    }

    static async getTransferablePlayers() {
        const token = localStorage.getItem("access_token");
        const config = {
            mode: "cors",
            headers:
                {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
        }
        const response = await axios.get(
            api_urls.GET_TRANSFERABLE,
            config
        );
        return response;
    }

    static async sendSubsTeam (team,captain){
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
            const response = await axios.put(
                api_urls.MANAGE_TEAM,
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

    static async sendTransferedPlayer(playerIn, playerOut) {
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
            const response = await axios.post(
                api_urls.POST_TRANSFERABLE,
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