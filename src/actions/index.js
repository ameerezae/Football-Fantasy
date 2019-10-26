import PlayerImg from "../assets/p98745.png"
export function setFormat(format) {
    return{
        type : "setFormat",
        payload : format,
    }
}
export function setDefenders(defs) {
    return{
        type : "setDefenders",
        payload : defs,
    }
}
export function setMiddles(mids) {
    return{
        type : "setMiddles",
        payload : mids,
    }
}
export function setForwards(forwards) {
    return{
        type : "setForwards",
        payload : forwards,
    }
}

export function setBench(bench) {
    return{
        type : "setBench",
        payload : bench,
    }
}

export function setGoalKeeper(gk) {
    return{
        type:"setGoalKeeper",
        payload : gk,
    }
}

export async function getWholeItems() {
    try{
        const url = "http://172.17.3.123:5000/team/pick-squad";
        const token = localStorage.getItem("access_token")
        const response = await fetch(`${url}`,{
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        });
        const json = await response.json();
        for(let i=0 ;i<json.length;i++){
            json[i].image = PlayerImg;
        }

        return {
            type : "getWholeItems",
            payload : json,
        }
    }catch (e) {
        console.log("the SERVER is DOWN");
    }

}
export function setWholeItems(items) {
    return{
        type: "setWholeItems",
        payload : items,
    }
}
export function setFilteredPosition(filteredPositions){
    return{
        type : "filteredPositions",
        payload : filteredPositions,
    }
}

export function setPickedPosition(pickedPosition) {
    return{
        type: "pickedPosition",
        payload : pickedPosition,
    }
}

export function setPickedKey(pickedKey) {
    return{
        type : "pickedKey",
        payload : pickedKey,
    }
}

export function toggleModal(bool) {
    return{
        type: "toggleModal",
        payload : bool,
    }
}

export function setCaptain(captain){
    return{
        type:"setCaptain",
        payload:captain.id
    }
}

export function setRemainedMoney(money){
    return{
        type : "setRemainedMoney",
        payload : money,
    }
}

export function setSquadName(name) {
    return{
        type : "setSquadName",
        payload : name,
    }
}