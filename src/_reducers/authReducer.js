// const initialState = user ? { loggedIn: true, user } : {};
import  * as  acc from "../_actions/types"
const initialState = {
    // currentUser: {},
    logged_in: false,
  }

export function authReducer(state = initialState, action) {
        switch (action.type) {
            case acc.auth_action_types.LOGIN_SUCCESS:
                return {...state,success_message: action.payload,logged_in : action.logged_in}
            case acc.auth_action_types.LOGIN_FAILURE:
                return {...state, failure_message: action.payload,logged_in : action.logged_in}
            default:
            return state;
        }
}