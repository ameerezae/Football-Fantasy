import * as types from "../_actions/types";

const initialState = {
    areCompetitionsFetched : false,
    competitions: [],
    selectedCompetition: null,
}


export function dashboardReducer (state = initialState,action){
    switch(action.type){
        case types.dashboard_action_types.GET_COMPETITIONS_SUCCESS : {
            return {...state, competitions : action.payload, selectedCompetition : action.payload[0], areCompetitionsFetched: true};
        }
        case types.dashboard_action_types.GET_CURRENT_COMPETITION_SUCCESS : {
            return {...state, selectedCompetition : action.payload};
        }
        default : return state;
    }
}