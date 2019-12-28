import * as types from "../_actions/types";


const initialState = {
    fetchedCards : false,
    activeCard : "nothing",
};


export function cardsReducer(state = initialState, action){
    switch (action.type) {
        case types.cards_action_types.GET_ALL_CARDS_SUCCESS :return {
            ...state,
            cards : action.payload,
            fetchedCards: true,
        };
        case types.cards_action_types.GET_ALL_CARDS_FAILED : return {
            ...state,
            cardsFetchError : action.payload,
        };
        case types.cards_action_types.FIND_ACTIVE_CARD_SUCCESS : return {
            ...state,
            activeCard: action.payload,
        };

        default : return state;

    }
}