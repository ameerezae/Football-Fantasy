import * as types from "./types";
import * as universal_constants from "../constants/universalConstants";
import StatisticApi from "../_api/statisticApi";


export const getOnePlayerStatistics = (playerId) => {
    return async function(dispatch){
        const response = await StatisticApi.getPlayerStatistics(playerId);
        if(response.status === universal_constants.REQUESTS_STATUS.OK){
            dispatch(dispatchGetOnePlayerStatistics(response.data))
        }

    }
};
export const dispatchGetOnePlayerStatistics = (statistics) => ({type : types.statistics_action_types.GET_PLAYER_STATISTICS_SUCCESS, payload: statistics});
