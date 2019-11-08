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

 export const filterByRange = (newRange,temp) => {
  //newRange is the range and temp is the player list
  temp = temp.filter(item => (item.price<newRange[1] && item.price>newRange[0]))
}
export const filterByPosition = (newPositions,temp) => {
  //newPosition is the positions and temp is the player list
  for( var i = 0; i < newPositions.length; i++){
    if(newPositions[i] == 'GK')
    {
      newPositions[i] = 'Goalkeeper'
    }
    else if(newPositions[i] == 'DEF')
    {
      newPositions[i] = 'Defender'
    }
    else if(newPositions[i] == 'MID')
    {
      newPositions[i] = 'Midfielder'    
    }
    else if(newPositions[i] == 'FWD')
    {
      newPositions[i] = 'Forward'
    }
  }
  temp = temp.filter(item => newPositions.includes(item.position)==true)
}
export const filterByClubs = (temp,state,selectedClubs) => {
  //state is the recent state and temp is the player list
  let clubIds = [];
  for(var j = 0;j<state.fetchedClubs.length;j++)
  {
    if(selectedClubs.includes(state.fetchedClubs[j].name))
    {
      clubIds.push(state.fetchedClubs[j].id)
    }
  }
  temp = temp.filter(item => clubIds.includes(item.club)==true)
}
export const filterByStatus = (newStates,temp) => {
  //newStates is the selected status and temp is players
  temp = temp.filter(item => newStates.includes(item.status)==true)
}
export const filterByName = (newName,temp) => {
  //newName is the selected name and temp is players
  temp = temp.filter(item => item.name.includes(newName)==true)
}

export const filterByNameAll = (newName,state) => {
  //newName is the selected name and temp is players
  console.log("this is current state",state)
  let temp = [...state.sortedPlayers]
  filterByName(newName,temp)
  console.log("temp after name filter",temp)
  filterByStatus(state.status,temp)
  console.log("temp after status filter",temp)
  filterByClubs(temp,state,state.clubs)
  console.log("temp after club filter",temp)
  filterByPosition(state.positions,temp)
  console.log("temp after pos filter",temp)
  filterByRange(state.price,temp)
  console.log("temp after price filter",temp)

  temp = temp.filter(item => item.name.includes(newName)==true)
}


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

export const setPlayerName = name => (
  {
    type: acc.search_action_types.SET_NAME_SUCCESS,
    payload: name
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