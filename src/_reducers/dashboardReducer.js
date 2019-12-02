import * as types from "../_actions/types";

const initialState = {
    areCompetitionsFetched : false,
}


export function dashboardReducer (state = initialState,action){
    switch(action.type){
        case types.dashboard_action_types.GET_COMPETITIONS_SUCCESS : {
            return {...state, competitions : action.payload, areCompetitionsFetched: true};
        }

        default : return state;
    }
}