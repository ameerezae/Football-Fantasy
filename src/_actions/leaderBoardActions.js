import * as types from "./types";
import leader_board_api from "../_api/leaderBoardApi"
// import * as gameConstants from '../constants/games/gamesConstants'

export const getUsers = () => {
    return async function (dispatch) {
        const response = await leader_board_api.getUsers();
        // if (response.data[dashboardConstants.COMPETITIONS]) dispatch(dispatchGetUsers(response.data[dashboardConstants.COMPETITIONS]))
        if (response.data.squads.length !== 0) dispatch(dispatchGetUsersSuccess(response.data))
        else dispatch(dispatchGetUsersFailure())
    }
}



const dispatchGetUsersSuccess = (users) => (
    {
        type: types.leaderboard_action_types.GET_USERS_SUCCESS,
        payload: users,
        users_fetched: true,
    }
);
const dispatchGetUsersFailure = () => (
    {
        type: types.leaderboard_action_types.GET_USERS_FAILURE,
        users_fetched: true,
    }
);


export const clearReducer = () => {
    return function (dispatch) {
        dispatch(dispatchClearReducer())
    }
};

const dispatchClearReducer = () => ({type: types.leaderboard_action_types.CLEAR_LEADERBOARD_REDUCER_SUCCESS});