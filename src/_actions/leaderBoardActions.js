import * as types from "./types";
import leader_board_api from "../_api/leaderBoardApi"
// import * as gameConstants from '../constants/games/gamesConstants'

export const getUsers = () => {
    return async function (dispatch) {
        const response = await leader_board_api.getUsers();
        // if (response.data[dashboardConstants.COMPETITIONS]) dispatch(dispatchGetUsers(response.data[dashboardConstants.COMPETITIONS]))
        if (response.length !== 0) dispatch(dispatchGetUsersSuccess(response.data))
        else dispatch(dispatchGetUsersFailure())
    }
}



const dispatchGetUsersSuccess = (users) => (
    {
        type: types.weeklygames_action_types.GET_GAMES_SUCCESS,
        payload: users,
        users_fetched: true,
    }
);
const dispatchGetUsersFailure = () => (
    {
        type: types.weeklygames_action_types.GET_GAMES_FAILURE,
        users_fetched: true,
    }
);


export const clearReducer = () => {
    return function (dispatch) {
        dispatch(dispatchClearReducer())
    }
};

const dispatchClearReducer = () => ({type: types.weeklygames_action_types.CLEAR_REDUCER_SUCCESS});