import PlayerImg from "../_assets/p98745.png"
import picksquad_page_api from "../_api/squadApi"
import * as acc from "./types"

export function setFormat(format) {
    return{
        type : "setFormat",
        payload : format,
    }
}
export function setDefenders(defs) {
    return{
        type : "setDefenders",
        payload : defs,
    }
}
export function setMiddles(mids) {
    return{
        type : "setMiddles",
        payload : mids,
    }
}
export function setForwards(forwards) {
    return{
        type : "setForwards",
        payload : forwards,
    }
}

export function setBench(bench) {
    return{
        type : "setBench",
        payload : bench,
    }
}

export function setGoalKeeper(gk) {
    return{
        type:"setGoalKeeper",
        payload : gk,
    }
}

export const getWholeItems = (competition) => {
    return async function(dispatch){
    let response = await picksquad_page_api.getPlayers(competition)
    console.log("i am here",response.data)
    dispatch(getPlayers(response.data))
    }
    

    

}
const getPlayers = players => (
    {
        
      type: acc.picksquad_action_types.SET_PLAYERS_SUCCESS,
      payload: players,
  })
// return {
//     type : "getWholeItems",
//     payload : json,
// }
export function setWholeItems(items) {
    return{
        type: "setWholeItems",
        payload : items,
    }
}
export function setFilteredPosition(filteredPositions){
    return{
        type : "filteredPositions",
        payload : filteredPositions,
    }
}

export function setPickedPosition(pickedPosition) {
    return{
        type: "pickedPosition",
        payload : pickedPosition,
    }
}

export function setPickedKey(pickedKey) {
    return{
        type : "pickedKey",
        payload : pickedKey,
    }
}

export function toggleModal(bool) {
    return{
        type: "toggleModal",
        payload : bool,
    }
}

export function setCaptain(captain){
    return{
        type:"setCaptain",
        payload:captain.id
    }
}

export function setRemainedMoney(money){
    return{
        type : "setRemainedMoney",
        payload : money,
    }
}

export function setSquadName(name) {
    return{
        type : "setSquadName",
        payload : name,
    }
}