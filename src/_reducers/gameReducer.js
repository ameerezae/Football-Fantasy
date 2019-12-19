import  * as  acc from "../_actions/types"
const initialState = {
    games: [],
    games_fetched_success: false,
    games_fetched_failed: false,
  }

export function gameReducer(state = initialState, action) {
        switch (action.type) {
            case acc.weeklygames_action_types.GET_GAMES_SUCCESS:
                return {...state, games: action.payload, games_fetched_success : action.games_fetched = true}
            case acc.weeklygames_action_types.GET_GAMES_FAILURE:
                return {...state, games_fetched_failed:action.games_fetched};
            default:
            return state;
        }
}