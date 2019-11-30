import * as types from "./types";
import * as dashboardConstants from "../constants/dashboard/dashboardConstants";
import DashboardApis from "../_api/dashboardApi";

export const getAllCompetitions = () => {
    return async function(dispatch){
        const response = await DashboardApis.getAllCompetitions();
        if (response.data[dashboardConstants.COMPETITIONS]) dispatch(dispatchGetAllCompetitions(response.data[dashboardConstants.COMPETITIONS]))
    }
}

export const dispatchGetAllCompetitions = (competitions) => (
    {
        type : types.dashboard_action_types.GET_COMPETITIONS_SUCCESS,
        payload : competitions
    }
)