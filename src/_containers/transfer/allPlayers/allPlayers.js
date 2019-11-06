import React, {Component} from 'react';
import "./allPlayers.scss"
import * as types from "../../../_actions/types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {IoIosInformationCircle} from "react-icons/io";
import Swal from "sweetalert2";
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta,} from '@material/react-list';
import {
    getTransferablePlayers,
    selectFirstTransfer,
    enableTransferTable,
    selectSecondTransfer,
    isAllowedToTransfer,
    setTransferError,

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
                this.props.setTransferError("The number of players from this club is maximum");
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
        if(gkCounter > 2 || defCounter > 5 || midCounter > 5 || forwardCounter > 3){
            this.props.setTransferError("The number of players in this position is maximum");
        }
        return !(gkCounter > 2 || defCounter > 5 || midCounter > 5 || forwardCounter > 3);
    };
    checkTransfer = (first, second) => {
        let mySquad = this.props.myTeam.myTeamForTransfer;
        mySquad = mySquad.filter(x => x.id !== first.id);
        mySquad.push(second);
        if(!(this.checkTeamMax(mySquad) && this.check_2_5_5_3(mySquad))){
            Swal.fire({
                position: 'center',
                type: 'error',
                title: this.props.myTeam.transferError,
                showConfirmButton: false,
                timer: 3000
            })
            this.props.selectFirstTransfer(null);
            this.props.selectSecondTransfer(null);
        }
        this.props.isAllowedToTransfer(this.checkTeamMax(mySquad) && this.check_2_5_5_3(mySquad))

    };


    render() {
        return (
            <div>
                <div className={!this.props.myTeam.enableTable ? "disabled-all" : null}>
                    <List twoLine className="list-style"
                          handleSelect={(activatedItemIndex) => {
                              this.props.selectSecondTransfer(activatedItemIndex);
                              this.checkTransfer(this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelectedTransfer], this.props.myTeam.transferablePlayers[activatedItemIndex])
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
        selectFirstTransfer,
        enableTransferTable,
        selectSecondTransfer,
        isAllowedToTransfer,
        setTransferError
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPlayers);