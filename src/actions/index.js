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

export function getWholeItems() {
    return {
        type : "getWholeItems",
        payload : [
            {
                'name': "Bernd Leno",
                "price": 5.0,
                "image": PlayerImg,
                "shirt_number": 1,
                "club": "arsenal",
                "position": "GK",
                "status": "cured"
            },
            {
                'name': "Emiliano Martínez",
                "price": 4.4,
                "image": PlayerImg,
                "shirt_number": 26,
                "club": "arsenal",
                "position": "GK",
                "status": "cured",
            },
            {
                'name': "David Luiz Moreira Marinho",
                "price": 5.8,
                "image": PlayerImg,
                "shirt_number": 23,
                "club": "arsenal",
                "position": "defender",
                "status": "cured",
            },
            {
                'name': "Sokratis Papastathopoulos",
                "price": 5.0,
                "image": PlayerImg,
                "shirt_number": 5,
                "club": "arsenal",
                "position": "defender",
                "status": "cured",
            },
            {
                'name': "Rob Holding",
                "price": 4.5,
                "image": PlayerImg,
                "shirt_number": 16,
                "club": "arsenal",
                "position": "defender",
                "status": "cured",
            },
            {
                'name': "Shkodran Mustafi",
                "price": 5.3,
                "image": PlayerImg,
                "shirt_number": 20,
                "club": "arsenal",
                "position": "defender",
                "status": "cured",
            },
            {
                'name': "Héctor Bellerín",
                "price": 5.4,
                "image": PlayerImg,
                "shirt_number": 2,
                "club": "arsenal",
                "position": "defender",
                "status": "cured",
            },
            {
                'name': "Daniel Ceballos Fernández",
                "price": 5.5,
                "image": PlayerImg,
                "shirt_number": 8,
                "club": "arsenal",
                "position": "middle",
                "status": "cured",
            },
            {
                'name': "Mesut Özil",
                "price": 7.2,
                "image": PlayerImg,
                "shirt_number": 10,
                "club": "arsenal",
                "position": "middle",
                "status": "cured",
            },
            {
                'name': "Mohamed Elneny",
                "price": 4.3,
                "image": PlayerImg,
                "shirt_number": 12,
                "club": "arsenal",
                "position": "middle",
                "status": "cured",
            },
            {
                'name': "Lucas Torreira",
                "price": 4.8,
                "image": PlayerImg,
                "shirt_number": 11,
                "club": "arsenal",
                "position": "middle",
                "status": "cured",
            },
            {
                'name': "Granit Xhaka",
                "price": 5.3,
                "image": PlayerImg,
                "shirt_number": 34,
                "club": "arsenal",
                "position": "middle",
                "status": "cured",
            },
            {
                'name': "Pierre-Emerick Aubameyang",
                "price": 11.1,
                "image": PlayerImg,
                "shirt_number": 14,
                "club": "arsenal",
                "position": "forward",
                "status": "cured",
            },
            {
                'name': "Alexandre Lacazette",
                "price": 9.3,
                "image": PlayerImg,
                "shirt_number": 9,
                "club": "arsenal",
                "position": "forward",
                "status": "cured",
            },
            {
                'name': "Gabriel Teodoro Martinelli Silva",
                "price": 4.5,
                "image": PlayerImg,
                "shirt_number": 90,
                "club": "arsenal",
                "position": "forward",
                "status": "cured",
            },
        ]
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
        payload:captain
    }
}
