import React, {Component} from 'react';
import "./allPlayers.scss"
import * as types from "../../../_actions/types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {IoIosInformationCircle} from "react-icons/io";
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta,} from '@material/react-list';
import {
    getTransferablePlayers,
    setFirstSelected,
    enableTransferTable,
    selectSecondTransfer
} from "../../../_actions/manageTeamActions";

class AllPlayers extends Component {
    componentWillMount() {
        this.props.getTransferablePlayers();
    }

    checkTeamMax = (team) => {
        const checkingTeam = team;
        for (let i = 0; i < team.length; i++) {
            let num = team.filter(element => element.club === checkingTeam[i].club).length;
            if (num > 3) {
                return false
            }
        }
        return true;
    };

    check_2_5_5_3 = (team) => {
        let gkCounter = 0, defCounter = 0, midCounter = 0, forwardCounter = 0;
        team.forEach((element, key) => {
            switch (element.position) {
                case types.position.GOALKEEPER :
                    gkCounter++;
                    break;
                case types.position.DEFENDER :
                    defCounter++;
                    break;
                case types.position.MIDFIELDER :
                    midCounter++;
                    break;
                case types.position.FORWARD :
                    forwardCounter++;
                    break;
                default :
                    break;
            }
        });

        return !(gkCounter > 2 || defCounter > 5 || midCounter > 5 || forwardCounter > 3);
    };
    checkTransfer = (first, second) => {
        let mySquad = this.props.myTeam.myTeamForTransfer;
        mySquad = mySquad.filter(x => x.id !== first.id);
        mySquad.push(second);
        console.log(this.check_2_5_5_3(mySquad),"2553");
        console.log(this.checkTeamMax(mySquad),"MAX")
        return (this.checkTeamMax(mySquad) && this.check_2_5_5_3(mySquad))

    };


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        {this.props.myTeam.secondSelectedTransfer || this.props.myTeam.secondSelectedTransfer === 0?
                            <div>
                                <div>{this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer].name}</div>
                                <div>{this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer].position}</div>
                            </div>
                            : null}
                    </div>
                </div>
                <div className={!this.props.myTeam.enableTable ? "disabled-all" : null}>
                    <List twoLine
                          handleSelect={(activatedItemIndex) => {
                              this.props.selectSecondTransfer(activatedItemIndex);
                              console.log(this.checkTransfer(this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelected], this.props.myTeam.transferablePlayers[activatedItemIndex]))
                              this.props.enableTransferTable(false)
                          }} dense>

                        {this.props.myTeam.transferablePlayers ? this.props.myTeam.transferablePlayers.map((element, key) => {
                            return (
                                <ListItem key={key} className="text-white"
                                          disabled={!this.props.myTeam.enableTable}>
                                    <ListItemGraphic className="list-image"
                                                     graphic={<img src={element.image} alt="sd"/>}/>
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
            </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        myTeam: state.manageTeamReaducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTransferablePlayers,
        setFirstSelected,
        enableTransferTable,
        selectSecondTransfer
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPlayers);