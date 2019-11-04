import React, {Component} from 'react';
import "./squadPlayers.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IoIosInformationCircle} from "react-icons/io";
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta,} from '@material/react-list';
import {getMyTeamForTransfer} from "../../../_actions/manageTeamActions";
import {setFirstSelected, enableTransferTable} from "../../../_actions/manageTeamActions";

class SquadPlayers extends Component {
    componentWillMount() {
        this.props.getMyTeamForTransfer();
    }

    // check_2_5_5_3 = (team) => {
    //     let gkCounter = 0, defCounter = 0, midCounter = 0, forwardCounter = 0;
    //     team.forEach((element, key) => {
    //         switch (element.position) {
    //             case "goalKeeper" : gkCounter++;break;
    //             case "Defender" : defCounter++;break;
    //             case "Midfielder" : midCounter++;break;
    //             case "Forward" : forwardCounter++;break;
    //             default : break;
    //         }
    //     });
    //
    //     return !(gkCounter > 2 || defCounter > 5 || midCounter > 5 || forwardCounter > 3);
    // };


    render() {
        return (
            <div>
                <List twoLine
                      handleSelect={(activatedItemIndex) => {
                          this.props.setFirstSelected(activatedItemIndex);
                          this.props.enableTransferTable(true)
                      }} dense>

                    {this.props.myTeam.myTeamForTransfer ? this.props.myTeam.myTeamForTransfer.map((element, key) => {
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
                    }) : null}


                </List>

            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        myTeam: state.manageTeamReaducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMyTeamForTransfer,
        setFirstSelected,
        enableTransferTable
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SquadPlayers);