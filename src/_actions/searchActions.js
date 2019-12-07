import search_api from "../_api/searchApi"
import * as acc from "./types"

export const playerSearchRequest = (competition) => {
  return async function(dispatch){
      let response = await search_api.getPlayers(competition)
      let squadResponse = await search_api.getMyTeam(competition)
      let temp2 = []
      if(squadResponse.length !== 0)
      {
      for(let i = 0 ;i <squadResponse.data.squad.length;i++)
      {
        temp2.push(squadResponse.data.squad[i].name)
      }
    }
      response.data = response.data.filter(item => (temp2.includes(item.name)==false))
      dispatch(playerSearchSuccess(response))
  }
}
export const clubGetRequest = (competition) => {
  return async function(dispatch){
      let response = await search_api.getClubs(competition)
      dispatch(clubGetSuccess(response))
  }
}

const filterByRange = (newRange,temp) => {
  //newRange is the range and temp is the player list

  temp = temp.filter(item => (item.price<=newRange[1] && item.price>=newRange[0]))
  
  return temp
}
const filterByPosition = (newPositions,temp) => {
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
const filterByClubs = (temp,state,selectedClubs) => {
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
const filterByStatus = (newStates,temp) => {
  //newStates is the selected status and temp is players
  if(newStates.length>0)
  {
  temp = temp.filter(item => newStates.includes(item.status)==true)
  }
  return temp
}
const filterByName = (newName,temp) => {
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
  return function(dispatch){
     dispatch(setSortedPlayers(temp))
  }
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
  return function(dispatch){
    dispatch(setSortedPlayers(temp))
  }
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
  return function(dispatch){
    dispatch(setSortedPlayers(temp))
  }
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
  return function(dispatch){
  dispatch(setSortedPlayers(temp))
  }
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
  return function(dispatch){
    dispatch(setSortedPlayers(temp))
  }
}

export const sortBy = (value,state) => {
  //newName is the selected name and temp is players
  let players = [...state.players]
  let sortedPlayers = [...state.sortedPlayers]
  if(value.length>0)
  {
    if(value == "Price")
    {
      players.sort((a, b) => (a.price > b.price) ? -1 : 1)
      sortedPlayers.sort((a, b) => (a.price > b.price) ? -1 : 1)
    }
    else if(value == "Name")
    {
      players.sort((a, b) => (a.name > b.name) ? 1 : -1)
      sortedPlayers.sort((a, b) => (a.name > b.name) ? 1 : -1)

    }
  }
  return function(dispatch){
    dispatch(setSorteLists(players,sortedPlayers))
    }
}
const setSorteLists = (players,sortedPlayers) =>(
  {
    type:acc.search_action_types.SET_LISTS_SUCCESS,
    players: players,
    sortedPlayers: sortedPlayers
  }
)

export const setSortValue = value => (
  {
    type: acc.search_action_types.SET_SORT_SUCCESS,
    payload: value,
  })

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

export const setSortedPlayers = sortedPlayers => (
  {
    type: acc.search_action_types.SET_SORTED_PLAYERS_SUCCESS,
    payload: sortedPlayers
})