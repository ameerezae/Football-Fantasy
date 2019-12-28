import * as api_urls from "./api_urls"
import axios from "axios"
import url_handler from "./url_handler"


class game_detail_api {
    static async getSelectedGame(){
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
        let url = url_handler.match_handler(api_urls.GAME_DETAIL_START,api_urls.GAME_DETAIL_END)
        let response = []
        try {
            response = await axios.get(url,config)
        } catch (error) {
            response = null
        }
        console.log("response",response)
        return response  
    }
}
export default game_detail_api