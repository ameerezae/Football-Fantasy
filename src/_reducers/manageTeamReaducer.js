import * as types from "../_actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case types.manageTeam_action_types.GET_MY_TEAM_SUCCESS : return{...state, squad : action.payload};

        default : return state;
    }
}