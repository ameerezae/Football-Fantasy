import search_api from "../_api/searchApi"
import * as acc from "./types"

export const playerSearchRequest = (credentials,name) => {
  return async function(dispatch){
      let response = await search_api.getPlayers(credentials,name)
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