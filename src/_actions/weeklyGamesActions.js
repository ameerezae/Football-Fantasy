import * as types from "./types";
import weekly_game_api from "../_api/weeklyGameAPi"
import * as gameConstants from '../constants/games/gamesConstants'

export const getGames = () => {
    return async function (dispatch) {
        const response = await weekly_game_api.getGames();
        console.log("games response" , response)
        // if (response.data[dashboardConstants.COMPETITIONS]) dispatch(dispatchGetGames(response.data[dashboardConstants.COMPETITIONS]))
        if (response.length !== 0) dispatch(dispatchGetGamesSuccess(response.data[gameConstants.LIST_SUBJECT.GAMES]))
        else dispatch(dispatchGetGamesFailure())
    }
}

export const setSelectedGame = (game) => {
    return function (dispatch) {
        dispatch(dispatchSetSelectedGame(game))
    }
}

const dispatchGetGamesSuccess = (games) => (
    {
        type: types.weeklygames_action_types.GET_GAMES_SUCCESS,
        payload: games,
        games_fetched: true,
    }
);
const dispatchGetGamesFailure = () => (
    {
        type: types.weeklygames_action_types.GET_GAMES_FAILURE,
        games_fetched: true,
    }
);

const dispatchSetSelectedGame = (game) => (
    {
        type: types.weeklygames_action_types.SET_SELECTED_GAME_SUCCESS,
        payload: game,
    }
);


export const clearReducer = () => {
    return function (dispatch) {
        dispatch(dispatchClearReducer())
    }
};

const dispatchClearReducer = () => ({type: types.weeklygames_action_types.CLEAR_REDUCER_SUCCESS});