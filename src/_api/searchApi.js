import * as api_urls from "./api_urls"
import axios from "axios"

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
        let response = await axios.get(api_urls.PLAYERS,config)
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
        let response = await axios.get(api_urls.CLUBS,config)
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
        try {
            response = await axios.get(
                api_urls.MANAGE_TEAM,
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