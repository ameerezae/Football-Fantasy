import * as acc from "../_actions/types"
const initialState = {
    players : [],
    status : [],
    clubs : [],
    positions : [],
    price : [2,8],

}

export function searchReducer(state = initialState, action) {
        switch (action.type) {
            case acc.search_action_types.GET_PLAYERS_SUCCESS:
                return {...state, players: action.payload}
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
            default:
            return state;
        }
}