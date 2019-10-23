const initialState = {
    bench : [null,null,null,null],
    GK : [null],
};


export default function (state = initialState, action) {
    switch (action.type) {
        case "setFormat": {
            return {...state, format: action.payload};
        }

        case "setGoalKeeper" : {
            return {...state, GK: action.payload}
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

        case "setBench" : {
            return {...state, bench: action.payload}
        }

        case "getWholeItems" : {
            return {...state, wholeItems : action.payload}
        }

        case "filteredPositions" : {
            return {...state, filteredItems : action.payload}
        }

        case "pickedPosition" : {
            return {...state, pickedPosition : action.payload}
        }

        case "pickedKey" : {
            return {...state, pickedKey : action.payload}
        }

        default :
            return state;
    }
}