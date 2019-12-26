import  * as  acc from "../_actions/types"
const initialState = {
    game_details: [],
    game_details_fetched: false,
  }

export function gameDetailReducer(state = initialState, action) {
        switch (action.type) {
            case acc.gamedetail_action_types.GET_GAME_DETAIL_SUCCESS:
                return {...state, game_details: action.payload, game_details_fetched : action.game_details_fetched}
            case acc.gamedetail_action_types.GET_GAME_DETAIL_FAILURE:
                return {...state, game_details_fetched:action.game_details_fetched};
            case acc.gamedetail_action_types.CLEAR_REDUCER_SUCCESS :
                return {game_details: [],game_details_fetched: false};
            default:
            return state;
        }
}