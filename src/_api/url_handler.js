class url_handler{
    static competition_handler(start_url,end_url,competition){
        let id = localStorage.getItem("current_competition")
        console.log("this is current compete: ",id)
        let url = start_url + id + end_url
        console.log("this is competition_handler: ",url)
        return url  
    }


}

export default url_handler;