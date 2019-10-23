export default function (state = {}, action) {
    switch (action.type) {
        case "setFormat": {
            return {...state, format: action.payload};
        }

        case "setDefenders":{
            return {...state, defender : action.payload}
        }

        case "setMiddles" : {
            return {...state, middle : action.payload}
        }

        case "setForwards" : {
            return {...state, forward : action.payload}
        }

        case "getWholeItems" : {
            return {...state, wholeItems : action.payload}
        }

        case "filteredPositions" : {
            return {...state, filteredItems : action.payload}
        }
        default :
            return state;
    }
}