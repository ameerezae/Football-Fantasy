// const initialState = user ? { loggedIn: true, user } : {};
import { auth_action_types } from "../_actions/authActions"
const initialState = {
    // currentUser: {},
    logged_in: false
  }

export function authReducer(state = initialState, action) {
        switch (action.type) {
            case auth_action_types.LOGIN_SUCCESS:
                console.log("user info :",action.payload,action.logged_in)
                return {...state, currentUser: action.payload,logged_in : true}
            default:
            return state;
        }
}