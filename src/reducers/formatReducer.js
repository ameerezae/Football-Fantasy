const initialState = {
    bench : [null,null,null,null],
    Goalkeeper : [null],
    visibleModal: false,
    "captain-id" : null,
    budget : 100,
    "squad-name" : null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case "setFormat": {
            return {...state, format: action.payload};
        }

        case "setGoalKeeper" : {
            return {...state, Goalkeeper: action.payload}
        }

        case "setDefenders":{
            return {...state, Defender : action.payload}
        }

        case "setMiddles" : {
            return {...state, Midfielder : action.payload}
        }

        case "setForwards" : {
            return {...state, Forward : action.payload}
        }

        case "setBench" : {
            return {...state, bench: action.payload}
        }

        case "getWholeItems" : {
            return {...state, wholeItems : action.payload}
        }

        case "setWholeItems" : {
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

        case "toggleModal" : {
            return {...state, visibleModal: action.payload}
        }

        case "setCaptain" : {
            return {...state, "captain-id": action.payload}
        }

        case "setRemainedMoney" : {
            return {...state, budget : action.payload}
        }

        case "setSquadName" : {
            return {...state, "squad-name" : action.payload}
        }
        default :
            return state;
    }
}