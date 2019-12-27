import * as types from "./types";
import * as universal_constants from "../constants/universalConstants";
import * as cardsConstants from "../constants/cards/cardsConstants";
import CardsApi from "../_api/cardsApi";

export const getAllCards = () => {
    return async function (dispatch){
        const response = await CardsApi.getAllCards() ;
        if(response.status === universal_constants.REQUESTS_STATUS.OK){
            dispatch(dispatchGetAllCards(response.data));
        }
        else dispatch(dispatchGetAllCardsFailed(response.data[cardsConstants.MESSAGE]));
    }
};

const dispatchGetAllCards = (cards) => ({type : types.cards_action_types.GET_ALL_CARDS_SUCCESS, payload : cards});
const dispatchGetAllCardsFailed = (message) => ({type : types.cards_action_types.GET_ALL_CARDS_FAILED, payload : message});

export const postCard = (name,mode) => {
    return async function(dispatch){
        const res = await CardsApi.postCard(name, mode);

        if(res.status === universal_constants.REQUESTS_STATUS.OK){
            const response = await CardsApi.getAllCards() ;
            if(response.status === universal_constants.REQUESTS_STATUS.OK){
                dispatch(dispatchGetAllCards(response.data));
            }
            else dispatch(dispatchGetAllCardsFailed(response.data[cardsConstants.MESSAGE]));
        }
    }
}