// const initialState = user ? { loggedIn: true, user } : {};
import  * as  acc from "../_actions/types"
const initialState = {
    // currentUser: {},
    logged_in: false,
    message : '',
  }

export function authReducer(state = initialState, action) {
        switch (action.type) {
            case acc.auth_action_types.LOGIN_SUCCESS:
                console.log("user info :",action.payload)
                return {...state,message: action.payload.data.message,logged_in : action.logged_in}
            case acc.auth_action_types.LOGIN_FAILURE:
                console.log(action.payload.message)
                return {...state, message: action.payload.message,logged_in : action.logged_in}
            default:
            return state;
        }
}