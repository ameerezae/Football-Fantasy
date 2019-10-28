import * as api_urls from "./api_urls"
import axios from "axios"

class Login_page_api {
    static async login(credentials){
        const config = 
        {
            mode: "cors",
            headers: 
            {
            'Content-Type': 'application/json',
            }
        }
        let response = await axios.post(api_urls.LOGIN,JSON.stringify({
            username:credentials.username ,
            password:credentials.password,
            }),config)
        return response  
    }

    static async signup(credentials){
        const config = 
        {
            mode: "cors",
            headers: 
            {
            'Content-Type': 'application/json',
            }
        }
        let response = await axios.post(api_urls.SIGNUP,JSON.stringify({
            username:credentials.username ,
            password1:credentials.password1,
            password2:credentials.password2,
            email:credentials.email,
            }),config)
        return response  
    }

}
export default Login_page_api