import ManageTeamApi from "../_api/manageTeamApi";
import * as types from "./types";

export const getMyTeam = () =>{
    return async function(dispatch){
        const response = await ManageTeamApi.getMyTeam()
        dispatch(myTeam(response.data))
    }
}

const myTeam = (myteam) => (
    {
        type : types.manageTeam_action_types.GET_MY_TEAM_SUCCESS,
        payload : myteam
    }
)