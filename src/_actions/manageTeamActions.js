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

export const localAllowSubs = (bool) => {
    return function (dispatch){
        dispatch(localAllow(bool));
    }
}

const localAllow=(bool)=>{
    return{
        type : types.manageTeam_action_types.LOCAL_ALLOW_SUCCESS,
        payload : bool,
    }
};

export const getMyTeamForTransfer=()=>{
    return async function(dispatch){
        const response = await ManageTeamApi.getMyTeam()
        console.log(response);
        dispatch(myTeamForTransfer(response.data))
    }
}

const myTeamForTransfer = (myTeam) => {
    return{
        type: types.manageTeam_action_types.GET_MY_TEAM_TRANSFER_SUCCESS,
        payload : myTeam,
    }
}


export const getTransferablePlayers=()=>{
    return async function(dispatch){
        const response = await ManageTeamApi.getTransferablePlayers();
        dispatch(getTransferable(response.data));
    }
}

const getTransferable = (transferable) => {
    return{
        type : types.manageTeam_action_types.GET_TRANSFERABLE_PLAYERS_SUCCESS,
        payload : transferable,
    }
};

export const enableTransferTable = (bool) => {
    return function(dispatch){
        dispatch(enableTable(bool))
    }
};
const enableTable = (bool) => {
    return{
        type : types.manageTeam_action_types.ENABLE_TRANSFER_TABLE,
        payload : bool,
    }
}


export const selectFirstTransfer = (indx) =>{
    return function (dispatch) {
        dispatch(firstTransfer(indx));
    }
}

const firstTransfer = (indx) => {
    return{
        type : types.manageTeam_action_types.SELECT_FIRST_TRANSFER_SUCCESS,
        payload : indx,
    }
}

export const selectSecondTransfer = (indx) =>{
    return function (dispatch) {
        dispatch(secondTransfer(indx))
    }
}

const secondTransfer = (indx) => {
    return{
        type : types.manageTeam_action_types.SELECT_SECOND_TRANSFER_SUCCESS,
        payload : indx
    }
}


export const isAllowedToTransfer = (bool) => {
    return function (dispatch) {
        dispatch(allowedToTransfer(bool));
    }
}

const allowedToTransfer = (bool) => (
    {
        type : types.manageTeam_action_types.ALLOWED_TO_TRANSFER_SUCCESS,
        payload: bool,
    }
)


export const setTransferError = (e) => {
    return function (dispatch) {
        dispatch(transferError(e));
    }
}

const transferError = (e) => {
    return {
        type : types.manageTeam_action_types.TRANSFER_ERROR_SUCCESS,
        payload : e,
    }
}