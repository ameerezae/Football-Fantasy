import Login_page_api from "../_api/authApi"
import * as acc from "./types"

export const playerSearchRequest = (credentials) => {
  return async function(dispatch){
      let response = await Login_page_api.login(credentials)
      dispatch(playerSearchSuccess(response))
  }
}


const playerSearchSuccess = players => (
  
  {
    type: acc.search_action_types.GET_PLAYERS_SUCCESS,
    payload: players
})

export const setPlayerStatusSuccess = status => (
  {
    type: acc.search_action_types.SET_PLAYERS_STATUS_SUCCESS,
    payload: status
})

export const setPlayerClubsSuccess = clubs => (
  {
    type: acc.search_action_types.SET_PLAYERS_CLUBS_SUCCESS,
    payload: clubs
})