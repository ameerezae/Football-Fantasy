import * as types from "../_actions/types";

const initialState = {

};

export function statisticsReducer(state = initialState, action) {
    switch (action.type) {
        case types.statistics_action_types.GET_PLAYER_STATISTICS_SUCCESS : return {...state, playerStatistics : action.payload};
        default: return state;
    }

}