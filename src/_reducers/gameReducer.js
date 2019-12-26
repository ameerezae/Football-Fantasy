import  * as  acc from "../_actions/types"
const initialState = {
    games: [],
    games_fetched_success: false,
    games_fetched_failed: false,
    selected_game: null,
    visible_modal: false,
  }

export function gameReducer(state = initialState, action) {
        switch (action.type) {
            case acc.weeklygames_action_types.GET_GAMES_SUCCESS:
                return {...state, games: action.payload, games_fetched_success : action.games_fetched = true}
            case acc.weeklygames_action_types.GET_GAMES_FAILURE:
                return {...state, games_fetched_failed:action.games_fetched};
            case acc.weeklygames_action_types.CLEAR_REDUCER_SUCCESS :
                return {games: [],games_fetched_failed: false,games_fetched_success: false};
            case acc.weeklygames_action_types.SET_SELECTED_GAME_SUCCESS :
                return {...state,selected_game: action.payload};
            case acc.weeklygames_action_types.SET_TOGGLE_MODAL_SUCCESS :
                return {...state,visible_modal: action.visibleModal}
            default:
            return state;
        }
}