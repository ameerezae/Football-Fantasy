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
);

export const setFirstSelected = (index) => {
    return function (dispatch) {
        dispatch(FirstSelected(index))
    }
}

const FirstSelected = (index) => (
    {
        type : types.manageTeam_action_types.SET_FIRST_SELECTED_SUCCESS,
        payload : index
    }
);


export const setMyNewTeam = (newTeam) => {
    return function (dispatch) {
        dispatch(myNewTeam(newTeam))
    }
}

const myNewTeam = (newTeam) => (
    {
        type : types.manageTeam_action_types.SET_NEW_TEAM_SUCCESS ,
        payload : newTeam
    }
);

export const toggleModal = (bool) => {
    return function (dispatch){
        dispatch(modal(bool));
    }
}

const modal = (bool) => (
    {
        type : types.manageTeam_action_types.TOGGLE_MODAL_SUCCESS,
        payload : bool
    }
)