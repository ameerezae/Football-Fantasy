import * as acc from "../_actions/types"
import { element } from "prop-types"
import { template } from "@babel/core"
const initialState = {
    players : [],
    sortedPlayers : [],
    status : [],
    clubs : [],
    fetchedClubs : [],
    positions : [],
    price : [0,12],
    isFetched : false,
    arePlayedFetched : false,


}

export function searchReducer(state = initialState, action) {
        switch (action.type) {
            case acc.search_action_types.GET_PLAYERS_SUCCESS:
                // let temp = [];
                // let fuck = action.payload;
                // console.log("fucking ass",fuck.len)
                // (action.payload).foreach(listElement => {
                //         listElement.foreach(element => {
                //                 temp.push(element)
                //         });
                // });
                return {...state, players: action.payload, sortedPlayers: action.payload, arePlayedFetched:true}
            case acc.search_action_types.GET_PLAYERS_FAILURE:
                console.log("internal_server_error")
            case acc.search_action_types.SET_PLAYERS_STATUS_SUCCESS:
                    return {...state, status: action.payload}
            case acc.search_action_types.SET_PLAYERS_CLUBS_SUCCESS:
                    return {...state, clubs: action.payload}
            case acc.search_action_types.SET_PLAYERS_POSITIONS_SUCCESS:
                    return {...state, positions: action.payload}
            case acc.search_action_types.SET_PLAYERS_PRICE_SUCCESS:
                    return {...state, price: action.payload}
            case acc.search_action_types.GET_CLUBS_SUCCESS:
                    console.log("this is club reduce")
                    return {...state, fetchedClubs: action.payload, isFetched: true} 
            default:
            return state;
        }
}