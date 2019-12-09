import * as types from "./types";
import weekly_game_api from "../_api/weeklyGameAPi"


export const getGames = () => {
    return async function (dispatch) {
        const response = await weekly_game_api.getGames();
        // if (response.data[dashboardConstants.COMPETITIONS]) dispatch(dispatchGetGames(response.data[dashboardConstants.COMPETITIONS]))
        if (response.data) dispatch(dispatchGetGamesSuccess(response.data))
        else dispatch(dispatchGetGamesFailure())
    }
}

const dispatchGetGamesSuccess = (games) => (
    {
        type: types.weeklygames_action_types.GET_GAMES_SUCCESS,
        payload: games,
        games_fetched = true,
    }
);
const dispatchGetGamesFailure = () => (
    {
        type: types.weeklygames_action_types.GET_GAMES_FAILURE,
        payload: games,
        games_fetched = false,
    }
);