import React, {Component} from 'react';
import {IoIosInformationCircle} from "react-icons/io";
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta,} from '@material/react-list';
import {bindActionCreators} from "redux";
import {calculateMoney} from "./calculateMoney";
import {
    setDefenders,
    setMiddles,
    setForwards,
    getWholeItems,
    setBench,
    setGoalKeeper,
    setWholeItems,
    setFilteredPosition,
    setRemainedMoney
} from "../../actions";
import {connect} from "react-redux";
import "./playerTable.scss";
import '@material/react-list/dist/list.css';

class PlayersTable extends Component {

    choosePlayer = (index) => {
        const playerDetails = this.props.format.filteredItems[index];
        let chosenPos = this.props.format[this.props.format.pickedPosition];
        if (chosenPos[this.props.format.pickedKey] == null) {
            chosenPos[this.props.format.pickedKey] = playerDetails;
            const newWholeItems = this.props.format.wholeItems.filter(element => element.name !== playerDetails.name);
            switch (this.props.format.pickedPosition) {

                case "defender" :
                    this.props.setDefenders(chosenPos);
                    break;

                case "middle" :
                    this.props.setMiddles(chosenPos);
                    break;

                case "forward" :
                    this.props.setForwards(chosenPos);
                    break;

                case "bench" :
                    this.props.setBench(chosenPos);
                    break;

                case "GK" :
                    this.props.setGoalKeeper(chosenPos);
                    break;

                default :
                    break;
            }
            this.props.setWholeItems(newWholeItems);
            let filteredPosition;
            this.props.format.pickedPosition !== "bench" ?
                filteredPosition = newWholeItems.filter(element => element.position === this.props.format.pickedPosition)
                :
                filteredPosition = newWholeItems;
            this.props.setFilteredPosition(filteredPosition);
            const remainedMoney = calculateMoney(this.props.format.defender,this.props.format.middle,this.props.format.forward,this.props.format.bench,this.props.format.GK)
            this.props.setRemainedMoney(remainedMoney)
        }

    };


    render() {
        return (
            <List style={{overflow: "auto", height: "500px"}} twoLine
                  handleSelect={(activatedItemIndex) => this.choosePlayer(activatedItemIndex)} dense>
                {this.props.format.filteredItems ?
                    this.props.format.filteredItems.map((element, key) => {
                        return (
                            <ListItem key={key} className="text-white">
                                <ListItemGraphic className="list-image" graphic={<img src={element.image} alt="sd"/>}/>
                                <ListItemText
                                    className="text-white"
                                    primaryText={element.name.slice(0, 10)}
                                    secondaryText={element.club}/>
                                <ListItemText
                                    className="whiteText ml-3"
                                    primaryText={element.price}
                                    secondaryText={element.position}/>
                                <ListItemMeta style={{color: "white", fontSize: "1.5rem", verticalAlign: "center"}}
                                              meta={<IoIosInformationCircle/>}/>
                            </ListItem>

                        )
                    }) :
                    this.props.format.wholeItems.map((element, key) => {
                        return (
                            <ListItem key={key}>
                                <ListItemGraphic className="list-image" graphic={<img src={element.image} alt="sd"/>}/>
                                <ListItemText
                                    primaryText={element.name.slice(0, 10)}
                                    secondaryText={element.club}/>
                                <ListItemText
                                    primaryText={element.price + " $"}
                                    secondaryText={element.position}/>
                                <ListItemMeta style={{color: "white", fontSize: "1.5rem", verticalAlign: "center"}}
                                              meta={<IoIosInformationCircle/>}/>
                            </ListItem>
                        )


                    })}
            </List>
        );
    }
}

function mapStateToProps(state) {
    return {
        format: state.formatReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setGoalKeeper,
        setDefenders,
        setMiddles,
        setForwards,
        getWholeItems,
        setBench,
        setWholeItems,
        setFilteredPosition,
        setRemainedMoney

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersTable);