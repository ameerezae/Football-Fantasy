class url_handler{
    static competition_handler(start_url,end_url){
        let id = localStorage.getItem("current_competition")
        console.log("this is current compete: ",id)
        let url = start_url + id + end_url
        console.log("this is competition_handler: ",url)
        return url  
    }

    static player_handler(start_url, player_id){
        return start_url + player_id;
    }


}

export default url_handler;