import  * as  acc from "../_actions/types"
const initialState = {
    games: [],
    games_fetched: false,
  }

export function authReducer(state = initialState, action) {
        switch (action.type) {
            case acc.weeklygames_action_types.GET_GAMES_SUCCESS:
                return {...state, games: action.payload, games_fetched : action.games_fetched = true}
            case acc.weeklygames_action_types.GET_GAMES_FAILURE:
                return {...state, games_fetched:action.games_fetched}
            default:
            return state;
        }
}