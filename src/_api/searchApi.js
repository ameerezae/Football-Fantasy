import * as api_urls from "./api_urls"
import axios from "axios"
import url_handler from "./url_handler"

class search_api {
    static async getPlayers(){
        const token = localStorage.getItem("access_token")
        const config = 
        {
            mode: "cors",
            headers: 
            {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
            }
        }
        let url = url_handler.competition_handler(api_urls.PLAYERS_START,api_urls.PLAYERS_END)
        let response = await axios.get(url,config)
        return response  
    }
    static async getClubs(){

        const token = localStorage.getItem("access_token")
        const config = 
        {
            mode: "cors",
            headers: 
            {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
            }
        }
        let url = url_handler.competition_handler(api_urls.CLUBS_START,api_urls.CLUBS_END)
        let response = await axios.get(url,config)
        return response  
    }
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
        let response=[];
        let url = url_handler.competition_handler(api_urls.MANAGE_TEAM_START,api_urls.MANAGE_TEAM_END)
        try {
            response = await axios.get(
                url,
                config
            );
        } catch (error) {
            console.log("this is error",error)
            response=[]
        }

        return response;
    }
}
export default search_api