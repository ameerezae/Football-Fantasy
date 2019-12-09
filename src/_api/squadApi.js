import * as api_urls from "./api_urls"
import axios from "axios"
import url_handler from "./url_handler"


class picksquad_page_api {
    static async getPlayers(competition){
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
        let url = url_handler.competition_handler(api_urls.PLAYERS_START,api_urls.PLAYERS_END,competition)
        let response = await axios.get(url,config)
        console.log("response",response)
        return response  
    }
}
export default picksquad_page_api