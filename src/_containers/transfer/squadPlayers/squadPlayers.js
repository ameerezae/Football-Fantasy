import React, {Component} from 'react';
import "./squadPlayers.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IoIosInformationCircle} from "react-icons/io";
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta,} from '@material/react-list';
import {getMyTeamForTransfer} from "../../../_actions/manageTeamActions";
import {selectFirstTransfer, enableTransferTable} from "../../../_actions/manageTeamActions";

class SquadPlayers extends Component {
    componentWillMount() {
        this.props.getMyTeamForTransfer();
    }

    render() {
        return (
            <div className={this.props.myTeam.secondSelectedTransfer || this.props.myTeam.secondSelectedTransfer === 0 ? "disabled-all" : null}>

                <List twoLine className="list-style"
                      handleSelect={(activatedItemIndex) => {
                          this.props.selectFirstTransfer(activatedItemIndex);
                          this.props.enableTransferTable(true)
                      }} dense>

                    {this.props.myTeam.myTeamForTransfer ? this.props.myTeam.myTeamForTransfer.map((element, key) => {
                        return (
                            <ListItem key={key} className="text-white" disabled={this.props.myTeam.secondSelectedTransfer ? true : false}>

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
        selectFirstTransfer,
        enableTransferTable
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SquadPlayers);