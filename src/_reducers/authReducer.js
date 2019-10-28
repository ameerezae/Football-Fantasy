import * as acc from "../_actions/types"
const initialState = {
    // currentUser: {},
    logged_in: false
  }

export function authReducer(state = initialState, action) {
        switch (action.type) {
            case acc.auth_action_types.LOGIN_SUCCESS:
                console.log("user info :",action.payload,action.logged_in)
                return {...state, currentUser: action.payload,logged_in : true}
            default:
            return state;
        }
}