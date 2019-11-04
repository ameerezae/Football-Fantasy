import React, {Component} from 'react';
import "./allPlayers.scss"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {IoIosInformationCircle} from "react-icons/io";
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta,} from '@material/react-list';
import {getTransferablePlayers, setFirstSelected,enableTransferTable} from "../../../_actions/manageTeamActions";

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
    checkTransfer = (first, second) => {
        let mySquad = this.props.myTeam.myTeamForTransfer;
        mySquad = mySquad.filter(x => x.id !== first.id);
        mySquad.push(second);
        return this.checkTeamMax(mySquad)

    };


    render() {
        return (
            <div className={!this.props.myTeam.enableTable ?"disabled-all":null}>
                <List twoLine
                      handleSelect={(activatedItemIndex) => {
                          console.log(this.checkTransfer(this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelected], this.props.myTeam.transferablePlayers[activatedItemIndex]))
                          this.props.enableTransferTable(false)
                      }} dense>

                    {this.props.myTeam.transferablePlayers ? this.props.myTeam.transferablePlayers.map((element, key) => {
                        return (
                            <ListItem key={key} className="text-white"
                                      disabled={!this.props.myTeam.enableTable}>
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
        enableTransferTable
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPlayers);