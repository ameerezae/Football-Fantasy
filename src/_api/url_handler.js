class url_handler{
    static competition_handler(start_url,end_url,competition){

        let url = start_url + competition.id + end_url
        console.log("this is competition_handler: ",url)
        return url  
    }


}

export default url_handler;