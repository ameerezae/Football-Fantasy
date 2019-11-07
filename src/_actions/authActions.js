import * as acc from './types'
import Login_page_api from "../_api/authApi"


export const userSignInRequest = (credentials) => {
  return async function(dispatch){
      let response = await Login_page_api.login(credentials)
      localStorage.setItem("access_token", response.data.access_token)
      localStorage.setItem("refresh_token", response.data.refresh_token)
      dispatch(loginUserSuccess(response))
  }
}

export const userSignUpRequest = (credentials) => {
  return async function(dispatch){
      let response = await Login_page_api.signup(credentials) 
      localStorage.setItem("access_token", response.data.access_token)
      localStorage.setItem("refresh_token", response.data.refresh_token)
      if(response.message == "successful login")
      {
      dispatch(loginUserSuccess(response.data))
      }
      else{
        dispatch(loginUserFailure(response.data))
      }
  }
}

const loginUserSuccess = userObj => (

  {
    type: acc.auth_action_types.LOGIN_SUCCESS,
    payload: userObj,
    logged_in : true
})

const loginUserFailure = userObj => (
  
  {
    type: acc.auth_action_types.LOGIN_FAILURE,
    payload: userObj,
    logged_in : false
})
