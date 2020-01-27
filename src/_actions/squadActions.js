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
export const selectRandomSquad= (props,clubs) => {
    // console.log(props)
    let squad = props.format
    let players = props.wholeItems
    let i = 0
    let randomClubs = [0,0,0,0,0]
    while(i<5)
    {
        let number = Math.ceil(Math.random() * clubs.length)
        if(!randomClubs.includes(number))
        {
            randomClubs[i] = number
            i++
        }
    }
    for(i=0;i<5;i++)
    {
        console.log(clubs[randomClubs[i]].name)
        randomClubs[i] = clubs[randomClubs[i]].id
    }
    
    let a = []
    squad = squad.split('-').map((item) => {
        return parseInt(item,10)
    })
    players.sort((a, b) => (a.price < b.price) ? -1 : 1)
    let clubPlayers = players.filter(item => randomClubs[0] == item.club)
    console.log("ths is club players",clubPlayers)
    let Goalkeeper = [clubPlayers.filter(item => item.position==="Goalkeeper")[0]]
    // setGoalKeeper([clubPlayers.filter(item => item.position==="Goalkeeper")[0]])
    let Defenders = [clubPlayers.filter(item => item.position==="Defender")[0],clubPlayers.filter(item => item.position==="Defender")[1]]
    clubPlayers = players.filter(item => randomClubs[1] == item.club)
    let Midfilders = []
    let forwards = []

    squad[0]-=2
    for(i = 0;i<3;i++)
    {
        if(squad[0]>0)
        {
            Defenders.push(clubPlayers.filter(item => item.position==="Defender")[i])
            squad[0]--
        }
        else if(squad[1]>0)
        {
            Midfilders.push(clubPlayers.filter(item => item.position==="Midfielder")[i])
            squad[1]--
        }
    }
    clubPlayers = players.filter(item => randomClubs[2] == item.club)
    for(i = 0;i<3;i++)
    {
        if(squad[1]>0)
        {
            Midfilders.push(clubPlayers.filter(item => item.position==="Midfielder")[i])
            squad[1]--
        }
        else if(squad[2]>0)
        {
            forwards.push(clubPlayers.filter(item => item.position==="Forward")[i])
            squad[2]--
        }
    }
    clubPlayers = players.filter(item => randomClubs[3] == item.club)
    for(i = 0;i<3;i++)
    {
        if(squad[1]>0)
        {
            Midfilders.push(clubPlayers.filter(item => item.position==="Midfielder")[i])
            squad[1]--
        }
        else if(squad[2]>0)
        {
            forwards.push(clubPlayers.filter(item => item.position==="Forward")[i])
            squad[2]--
        }
    }
    let bench=[]
    squad = props.format.split('-').map((item) => {
        return parseInt(item,10)
    })
    let availableNumbers = [5-squad[0],5-squad[1],3-squad[2]]
    if(availableNumbers[0]>0)
    {
        bench.push(clubPlayers.filter(item => item.position==="Defender")[0])
        availableNumbers[0]--
    }
    else if(availableNumbers[1]>0)
    {
        bench.push(clubPlayers.filter(item => item.position==="Midfielder")[2])
        availableNumbers[1]--

    }
    else if(availableNumbers[2]>0)
    {
        bench.push(clubPlayers.filter(item => item.position==="Forward")[2])
        availableNumbers[2]--
    }
    clubPlayers = players.filter(item => randomClubs[4] == item.club)
    for(i =0 ; i<3;i++)
    {
        if(availableNumbers[0]>0)
        {
            bench.push(clubPlayers.filter(item => item.position==="Defender")[i])
            availableNumbers[0]--
        }
        else if(availableNumbers[1]>0)
        {
            bench.push(clubPlayers.filter(item => item.position==="Midfielder")[i])
            availableNumbers[1]--

        }
        else if(availableNumbers[2]>0)
        {
            bench.push(clubPlayers.filter(item => item.position==="Forward")[i])
            availableNumbers[2]--

        }
        else
            bench.push(clubPlayers.filter(item => item.position==="Goalkeeper")[0])
    }


    console.log("Defenders",Defenders)
    console.log("Midfilders",Midfilders)
    console.log("forwards",forwards)
    console.log("bench",bench)



    return function(dispatch){
        dispatch(setGoalKeeper(Goalkeeper))
        dispatch(setForwards(forwards))
        dispatch(setDefenders(Defenders))
        dispatch(setMiddles(Midfilders))
        dispatch(setBench(bench))

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