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

export const setPlayerStatus = status => (
  {
    type: acc.search_action_types.SET_PLAYERS_STATUS_SUCCESS,
    payload: status
})

export const setPlayerClubs = clubs => (
  {
    type: acc.search_action_types.SET_PLAYERS_CLUBS_SUCCESS,
    payload: clubs
})

export const setPlayerPositions = positions => (
  {
    type: acc.search_action_types.SET_PLAYERS_POSITIONS_SUCCESS,
    payload: positions
})

export const setPriceRange = priceRange => (
  {
    type: acc.search_action_types.SET_PLAYERS_PRICE_SUCCESS,
    payload: priceRange
})