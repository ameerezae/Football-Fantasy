import * as types from "./types";
import * as universal_constants from "../constants/universalConstants";
import * as cardsConstants from "../constants/cards/cardsConstants";
import CardsApi from "../_api/cardsApi";

export const getAllCards = () => {
    return async function (dispatch){
        const response = await CardsApi.getAllCards() ;
        if(response.status === universal_constants.REQUESTS_STATUS.OK){
            dispatch(findActiveCard(response.data));
            dispatch(dispatchGetAllCards(response.data));
        }
        else dispatch(dispatchGetAllCardsFailed(response.data[cardsConstants.MESSAGE]));
    }
};


function findActiveCard(cards) {
    let activeCard = "nothing";
    Object.keys(cards).forEach(key => {
        if(cards[key] === cardsConstants.CARDS_MODES.ACTIVE){
            activeCard = key;
        }
    });
    return {type : types.cards_action_types.FIND_ACTIVE_CARD_SUCCESS, payload : activeCard};
}

const dispatchGetAllCards = (cards) => ({type : types.cards_action_types.GET_ALL_CARDS_SUCCESS, payload : cards});
const dispatchGetAllCardsFailed = (message) => ({type : types.cards_action_types.GET_ALL_CARDS_FAILED, payload : message});

export const postCard = (name,mode) => {
    return async function(dispatch){
        const res = await CardsApi.postCard(name, mode);

        if(res.status === universal_constants.REQUESTS_STATUS.OK){
            dispatch(getAllCards());
        }
        return res;
    }
}