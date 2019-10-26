// import React from 'react'
// import axios from 'axios'
export const auth_action_types = {
  LOGIN_SUCCESS : 'LOGIN_SUCCESS',
  LOGIN_FAILURE : 'LOGIN_FAILURE',
  LOGOUT_SUCCESS : 'LOGOUT_SUCCESS'
}

export const userSignUpRequest = user => {
    return dispatch => {
        return fetch("http://172.17.3.123:5000/auth/registeration",{
            method: "POST",
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              // Accept: 'application/json',
              // mode: "CORS",
            },
            body: JSON.stringify(
              user
            )
          })
            .then(resp => resp.json())
            // .catch(err => )
            .then(data => {
              if (data.message) {
                console.log(data.message)
                localStorage.setItem("access_token", data.access_token)
                localStorage.setItem("refresh_token", data.refresh_token)
                dispatch(loginUser(data))
              } 
            })
    }
}

export const userSignInRequest = user => {
  console.log(user)
  return dispatch => {
      return fetch("http://172.17.3.123:5000/auth/login", {
          method: "POST",
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
            // Accept: 'application/json',
          },
          body: JSON.stringify(user)
        })
          .then(resp => resp.json())
          .then(data => {
            if (data.message) {
              console.log(data)
              localStorage.setItem("access_token", data.access_token)
              localStorage.setItem("refresh_token", data.refresh_token)
              // console.log("pashmam")
              dispatch(loginUser(data))
            }
          })
  }
}

const loginUser = userObj => (
  
  {
    type: auth_action_types.LOGIN_SUCCESS,
    payload: userObj,
    logged_in : true
})

