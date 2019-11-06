import * as acc from "../_actions/types"
const initialState = {
    players : [],
    status : [],
}

export function searchReducer(state = initialState, action) {
        switch (action.type) {
            case acc.search_action_types.GET_PLAYERS_SUCCESS:
                return {...state, players: action.payload}
            case acc.search_action_types.SET_PLAYERS_STATUS_SUCCESS:
                console.log("fucking status",action.payload)
                return {...state, status: action.payload}
            case acc.search_action_types.GET_PLAYERS_FAILURE:
                console.log("internal_server_error")
            default:
            return state;
        }
}