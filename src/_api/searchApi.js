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
        let response = await axios.post(api_urls.PICKSQUAD,JSON.stringify(
            {
                
            }
        ),config)
        console.log("response",response)
        return response  
    }
}
export default search_api