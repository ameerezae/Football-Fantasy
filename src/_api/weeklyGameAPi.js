import * as api_urls from "./api_urls"
import axios from "axios"
import url_handler from "./url_handler"


class weekly_game_api {
    static async getGames(){
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
        // let url = url_handler.competition_handler(api_urls.PLAYERS_START,api_urls.PLAYERS_END,competition)
        let url = url_handler.competition_handler(api_urls.GAMES_START,api_urls.GAMES_END)
        let response = []
        try {
            response = await axios.get(url,config)
        } catch (error) {
            response = []
        }
        console.log("response",response)
        return response  
    }
}
export default weekly_game_api