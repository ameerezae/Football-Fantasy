import search_api from "../_api/searchApi"
import * as acc from "./types"

export const playerSearchRequest = (credentials,name) => {
  return async function(dispatch){
      let response = await search_api.getPlayers(credentials,name)
      dispatch(playerSearchSuccess(response))
  }
}
export const clubGetRequest = () => {
  return async function(dispatch){
    console.log("now i am requesting")
      let response = await search_api.getClubs()
      console.log("this is club response",response)
      dispatch(clubGetSuccess(response))
  }
}

// const filterByRange = (newRange,temp) => {
//   for( var i = 0; i < temp.length; i++){ 
//     if ( temp[i].price > newRange[1] && temp[i].price < newRange[0]) {
//       temp.splice(i, 1); 
//     }
//  }
// }

// const clubsByRange = (clubs,temp,) => {
//   let clubIds = [];
//   for(var j = 0;j<;j++)
//   for (var i = 0; i < temp.length; i++) { 
//     if ( temp[i].club) {
//       temp.splice(i, 1); 
//     }
//  }
// }


const playerSearchSuccess = players => (
  
  {
    type: acc.search_action_types.GET_PLAYERS_SUCCESS,
    payload: players.data,
})

const clubGetSuccess = clubs => (
  
  {
    type: acc.search_action_types.GET_CLUBS_SUCCESS,
    payload: clubs.data.clubs
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