import  * as  acc from "../_actions/types"
const initialState = {
    users: [],
    users_fetched_failed: false,
    users_fetched_success: false,
  }

export function leaderBoardReducer(state = initialState, action) {
        switch (action.type) {
            case acc.leaderboard_action_types.GET_USERS_SUCCESS:
                return {...state, users: action.payload, users_fetched_success : action.users_fetched}
            case acc.leaderboard_action_types.GET_USERS_FAILURE:
                return {...state, users_fetched_failed:action.users_fetched};
            case acc.leaderboard_action_types.CLEAR_LEADERBOARD_REDUCER_SUCCESS :
                return {users: [],users_fetched_failed: false,users_fetched_success: false};
            default:
            return state;
        }
}