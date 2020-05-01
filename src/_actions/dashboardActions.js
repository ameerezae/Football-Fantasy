import * as types from "./types";
import * as dashboardConstants from "../constants/dashboard/dashboardConstants";
import * as universal_constants from "../constants/universalConstants";
import DashboardApis from "../_api/dashboardApi";
import * as universalCons from "../constants/universalConstants";

export const getAllCompetitions = () => {
    return async function (dispatch) {
        const response = await DashboardApis.getAllCompetitions();
        if (response.data[dashboardConstants.COMPETITIONS])
        {
            if(!localStorage.getItem(universalCons.CURRENT_COMPET)){
                localStorage.setItem(universalCons.CURRENT_COMPET, JSON.stringify(response.data[dashboardConstants.COMPETITIONS][0]))
                localStorage.setItem(universalCons.CURRENT_COMP, response.data[dashboardConstants.COMPETITIONS][0][dashboardConstants.INFORMATION_CONSTANTS.COMPETITION_ID])

            }
            dispatch(dispatchGetAllCompetitions(response.data[dashboardConstants.COMPETITIONS]))
        }
    }
}

export const setCurrentCompitition = (compete) => {
    return function(dispatch){
        localStorage.setItem(universalCons.CURRENT_COMP, compete[dashboardConstants.INFORMATION_CONSTANTS.COMPETITION_ID])
        localStorage.setItem(universalCons.CURRENT_COMPET, JSON.stringify(compete))
        dispatch(dispatchsetCurrentCompitition(compete))
      }
    }

export const dispatchGetAllCompetitions = (competitions) => (
    {
        type: types.dashboard_action_types.GET_COMPETITIONS_SUCCESS,
        payload: competitions
    }
);


export const getUserInformation =  () => {
    return async function (dispatch){
        const response = await DashboardApis.getUserInformation();
        if(response.status === universal_constants.REQUESTS_STATUS.OK){
           dispatch(dispatchGetUserInformation(response.data))
        }
        else dispatch(dispatchFailGetUserInformation(true));
    }
};

export const dispatchGetUserInformation = (info) => ({ type : types.dashboard_action_types.GET_INFORMATION_SUCCESS , payload : info});
export const dispatchFailGetUserInformation = (bool) => ({ type : types.dashboard_action_types.GET_INFORMATION_SUCCESS , payload : bool});


const dispatchsetCurrentCompitition = (compete) => (
    {
        type : types.dashboard_action_types.SET_CURRENT_COMPETITION_SUCCESS,
        payload : compete
    }
)
