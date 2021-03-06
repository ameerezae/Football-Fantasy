import * as types from "../_actions/types";

const initialState = {
    areCompetitionsFetched : false,
    competitions: [],
    selectedCompetition: 0,
    areInformationFetched : false,
    information : [],
    informationFailed : false,
}


export function dashboardReducer (state = initialState,action){
    switch(action.type){
        case types.dashboard_action_types.GET_COMPETITIONS_SUCCESS : {
            return {...state, competitions : action.payload, areCompetitionsFetched: true};
        }
        case types.dashboard_action_types.SET_CURRENT_COMPETITION_SUCCESS : {
            return {...state, selectedCompetition : action.payload};
        }

        case types.dashboard_action_types.GET_INFORMATION_SUCCESS : return {...state, information : action.payload, areInformationFetched : true};

        case types.dashboard_action_types.GET_INFORMATION_FAILED : return {...state, informationFailed : action.payload};

        default : return state;
    }
}