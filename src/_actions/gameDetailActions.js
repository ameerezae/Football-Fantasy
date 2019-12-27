import * as types from "./types";
import game_detail_api from "../_api/gameDetailApi"
import * as gameConstants from '../constants/games/gamesConstants'

export const getSelectedGame = () => {
    return async function (dispatch) {
        const response = await game_detail_api.getSelectedGame();
        console.log("getSelectedGame response" , response)
        // if (response.data[dashboardConstants.COMPETITIONS]) dispatch(dispatchGetGames(response.data[dashboardConstants.COMPETITIONS]))
        response.data.match[gameConstants.DETAIL_SUBJECT.EVENTS].sort((a, b) => (a.event_type < b.event_type) ? -1 : 1)
        response.data.match[gameConstants.DETAIL_SUBJECT.EVENTS].sort((a, b) => (a.minute < b.minute) ? -1 : 1)
        if (response !== null) dispatch(dispatchGetGameDetailSuccess(response.data.match))
        else dispatch(dispatchGetGameDetailFailure())
    }
}


const dispatchGetGameDetailSuccess = (details) => (
    {
        type: types.gamedetail_action_types.GET_GAME_DETAIL_SUCCESS,
        payload: details,
        game_details_fetched: true,
    }
);
const dispatchGetGameDetailFailure = () => (
    {
        type: types.gamedetail_action_types.GET_GAME_DETAIL_FAILURE,
        game_details_fetched: false,
    }
);

export const clearReducer = () => {
    return function (dispatch) {
        dispatch(dispatchClearReducer())
    }
};

const dispatchClearReducer = () => ({type: types.gamedetail_action_types.GAME_DETAIL_CLEAR_REDUCER_SUCCESS});