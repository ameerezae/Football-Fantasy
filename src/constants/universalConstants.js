export const ACCESS_TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";
export const CURRENT_COMP = "current_competition";

export const REQUESTS_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
};

export const CONFIG_WITH_AUTH = {
    mode: "cors",
    headers:
        {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
};


export const CONFIG_WITH_TOKEN = (accessToken) => ({
    mode: "cors",
    headers:
        {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`
        }
});




