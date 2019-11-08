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

  temp = temp.filter(item => (item.price<=newRange[1] && item.price>=newRange[0]))
  
  return temp
}
export const filterByPosition = (newPositions,temp) => {
  //newPosition is the positions and temp is the player list
  let posTemp = [...newPositions]
  for( var i = 0; i < posTemp.length; i++){
    if(posTemp[i] == 'GK')
    {
      posTemp[i] = 'Goalkeeper'
    }
    else if(posTemp[i] == 'DEF')
    {
      posTemp[i] = 'Defender'
    }
    else if(posTemp[i] == 'MID')
    {
      posTemp[i] = 'Midfielder'    
    }
    else if(posTemp[i] == 'FWD')
    {
      posTemp[i] = 'Forward'
    }
  }
  if(posTemp.length>0)
  {
  temp = temp.filter(item => posTemp.includes(item.position)==true)
  }
  return temp
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
  if(clubIds.length>0)
  {
  temp = temp.filter(item => clubIds.includes(item.club)==true)
  }
  return temp
}
export const filterByStatus = (newStates,temp) => {
  //newStates is the selected status and temp is players
  if(newStates.length>0)
  {
  temp = temp.filter(item => newStates.includes(item.status)==true)
  }
  return temp
}
export const filterByName = (newName,temp) => {
  //newName is the selected name and temp is players
  if(newName.length>0)
  {
    temp = temp.filter(item => item.name.includes(newName)==true)
  }
  return temp
}

export const filterByNameAll = (newName,state) => {
  console.log("this is current state",state)
  let temp = [...state.players]
  temp = filterByName(newName,temp);
  console.log("temp after name filter",temp)
  temp =filterByStatus(state.status,temp);
  console.log("temp after status filter",temp)
  temp = filterByClubs(temp,state,state.clubs);
  console.log("temp after club filter",temp)
  temp =filterByPosition(state.positions,temp);
  console.log("temp after pos filter",temp)
  temp =filterByRange(state.price,temp);
  console.log("temp after price filter",temp)
}

export const filterByStatusAll = (newStatus,state) => {
  console.log("this is current state",state)
  let temp = [...state.players]
  temp = filterByName(state.name,temp);
  console.log("temp after name filter",temp)
  temp =filterByStatus(newStatus,temp);
  console.log("temp after status filter",temp)
  temp = filterByClubs(temp,state,state.clubs);
  console.log("temp after club filter",temp)
  temp =filterByPosition(state.positions,temp);
  console.log("temp after pos filter",temp)
  temp =filterByRange(state.price,temp);
  console.log("temp after price filter",temp)
}

export const filterByClubsAll = (newClubs,state) => {
  console.log("this is current state",state)
  let temp = [...state.players]
  temp = filterByName(state.name,temp);
  console.log("temp after name filter",temp)
  temp =filterByStatus(state.status,temp);
  console.log("temp after status filter",temp)
  temp = filterByClubs(temp,state,newClubs);
  console.log("temp after club filter",temp)
  temp =filterByPosition(state.positions,temp);
  console.log("temp after pos filter",temp)
  temp =filterByRange(state.price,temp);
  console.log("temp after price filter",temp)
}

export const filterByPositionAll = (newPos,state) => {
  console.log("this is current state",state)
  let temp = [...state.players]
  temp = filterByName(state.name,temp);
  console.log("temp after name filter",temp)
  temp =filterByStatus(state.status,temp);
  console.log("temp after status filter",temp)
  temp = filterByClubs(temp,state,state.clubs);
  console.log("temp after club filter",temp)
  temp =filterByPosition(newPos,temp);
  console.log("temp after pos filter",temp)
  temp =filterByRange(state.price,temp);
  console.log("temp after price filter",temp)
}

export const filterByRangeAll = (newRange,state) => {
  console.log("this is current state",state)
  let temp = [...state.players]
  temp = filterByName(state.name,temp);
  console.log("temp after name filter",temp)
  temp =filterByStatus(state.status,temp);
  console.log("temp after status filter",temp)
  temp = filterByClubs(temp,state,state.clubs);
  console.log("temp after club filter",temp)
  temp =filterByPosition(state.positions,temp);
  console.log("temp after pos filter",temp)
  temp =filterByRange(newRange,temp);
  console.log("temp after price filter",temp)
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