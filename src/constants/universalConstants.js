export const ACCESS_TOKEN = "access_token";

export const CONFIG_WITH_AUTH = {
    mode: "cors",
    headers:
        {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
};


