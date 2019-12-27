import * as api_urls from "./api_urls"
import axios from "axios"
import url_handler from "./url_handler"


class leader_board_api {
    static async getUsers(){
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
        let url = url_handler.competition_handler(api_urls.USER_RANKS_START,api_urls.USER_RANKS_END)
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
export default leader_board_api