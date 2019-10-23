import React, {Component} from 'react';
import {IoIosInformationCircle} from "react-icons/io";
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta, } from '@material/react-list';
import {bindActionCreators} from "redux";
import {setDefenders, setMiddles, setForwards, getWholeItems} from "../../actions";
import {connect} from "react-redux";
import "./playerTable.scss";
import '@material/react-list/dist/list.css';

class PlayersTable extends Component {

    choosePlayer = (index) => {
        const playerDetails = this.props.format.filteredItems[index];
        let chosenPos = this.props.format[this.props.format.pickedPosition];
        chosenPos[this.props.format.pickedKey] = playerDetails;
        switch (this.props.format.pickedPosition) {
            case "defender" : this.props.setDefenders(chosenPos);break;

            case "middle" : this.props.setMiddles(chosenPos);break;

            case "forward" : this.props.setForwards(chosenPos);break;

            default : break;
        }
    };


    render() {
        return (
            <List style={{overflow:"auto",height: "500px"}} twoLine handleSelect={(activatedItemIndex) => this.choosePlayer(activatedItemIndex)} dense>
                {this.props.format.filteredItems ?
                    this.props.format.filteredItems.map((element, key) => {
                        return (
                            <ListItem key={key} className="text-white">
                                <ListItemGraphic className="list-image" graphic={<img src={element.image} alt="sd"/>}/>
                                <ListItemText
                                    className="text-white"
                                    primaryText={element.name.slice(0,10)}
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
                                    primaryText={element.name.slice(0,10)}
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
    return{
        format : state.formatReducer,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        setDefenders,
        setMiddles,
        setForwards,
        getWholeItems
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(PlayersTable);