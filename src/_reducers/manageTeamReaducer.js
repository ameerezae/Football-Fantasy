import * as types from "../_actions/types";
const initialState = {
    visibleModal: false,
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.manageTeam_action_types.GET_MY_TEAM_SUCCESS :
            return {...state, squad: action.payload};

        case types.manageTeam_action_types.SET_FIRST_SELECTED_SUCCESS :
            return {...state, firstSelected: action.payload};

        case types.manageTeam_action_types.SET_NEW_TEAM_SUCCESS :
            return {...state , squad: action.payload};

        case types.manageTeam_action_types.TOGGLE_MODAL_SUCCESS :
            return {...state, visibleModal: action.payload};


        default :
            return state;
    }
}