import React, {Component} from 'react';
import {IoIosInformationCircle} from "react-icons/io";
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta,} from '@material/react-list';
import {bindActionCreators} from "redux";
import {calculateMoney} from "./calculateMoney";
import Swal from "sweetalert2";
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
} from "../../_actions/squadActions";
import {connect} from "react-redux";
import "./playerTable.scss";
import '@material/react-list/dist/list.css';
import * as types from "../../_actions/types";
import Modal from "react-awesome-modal";

class PlayersTable extends Component {
    componentWillMount() {
        // this.props.getWholeItems()
    }

    check_2_5_5_3 = (team) => {
        let gkCounter = 0, defCounter = 0, midCounter = 0, forwardCounter = 0;
        team.forEach((element, key) => {
            if (element !== null) {
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
            }

        });
        return !(gkCounter > 2 || defCounter > 5 || midCounter > 5 || forwardCounter > 3);
    };


    checkTeamMax = (team) => {
        const checkingTeam = team;
        for (let i = 0; i < team.length; i++) {
            if (checkingTeam[i] !== null) {
                let num = team.filter(element => element.club === checkingTeam[i].club).length;
                if (num > 3) {
                    return false
                }
            }
        }
        return true;
    };


    choosePlayer = (index) => {
        const playerDetails = this.props.format.filteredItems[index];
        const defenders = this.props.format.Defender;
        const mids = this.props.format.Midfielder;
        const forwards = this.props.format.Forward;
        const bench = this.props.format.bench;
        const goalKeeper = this.props.format.Goalkeeper;
        let wholeTeam = [].concat(goalKeeper, defenders, mids, forwards, bench);
        wholeTeam.push(playerDetails);
        wholeTeam = wholeTeam.filter(element => element !== null);
        console.log(wholeTeam, "WholeTEAAAAAM")
        if (this.checkTeamMax(wholeTeam) && this.check_2_5_5_3(wholeTeam) && calculateMoney(this.props.format.Defender, this.props.format.Midfielder, this.props.format.Forward, this.props.format.bench, this.props.format.Goalkeeper) > playerDetails.price) {
            let chosenPos = this.props.format[this.props.format.pickedPosition];
            if (chosenPos[this.props.format.pickedKey] == null) {
                chosenPos[this.props.format.pickedKey] = playerDetails;
                const newWholeItems = this.props.search.sortedPlayers.filter(element => element.id !== playerDetails.id);
                switch (this.props.format.pickedPosition) {

                    case "Defender" :
                        this.props.setDefenders(chosenPos);
                        break;

                    case "Midfielder" :
                        this.props.setMiddles(chosenPos);
                        break;

                    case "Forward" :
                        this.props.setForwards(chosenPos);
                        break;

                    case "bench" :
                        this.props.setBench(chosenPos);
                        break;

                    case "Goalkeeper" :
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
                const remainedMoney = calculateMoney(this.props.format.Defender, this.props.format.Midfielder, this.props.format.Forward, this.props.format.bench, this.props.format.Goalkeeper)
                this.props.setRemainedMoney(remainedMoney)
            }

        } else {
            let error1 = "";
            let error2 = "";
            let error4 = "";
            if (!this.checkTeamMax(wholeTeam)) {
                error1 = "You have more than 3 players from this team"
            }
            if (!this.check_2_5_5_3(wholeTeam)) {
                error2 = "The No of players in this position is maximum"
            }
            if (calculateMoney(this.props.format.Defender, this.props.format.Midfielder, this.props.format.Forward, this.props.format.bench, this.props.format.Goalkeeper) < playerDetails.price) {
                error4 = "Your money is less than the price of player"
            }
            const error = error1 + "\n" + error2 + "\n" + error4;
            Swal.fire({
                position: 'center',
                type: 'error',
                title: error,
                showConfirmButton: false,
                timer: 3000
            })

        }


    };


    render() {
        return (
            <div>
                {this.props.search.arePlayedFetched ?
                    <div className={!this.props.format.pickedPosition ? "disabled-all" : null}>
                        <List style={{overflow: "auto", height: "500px"}} twoLine
                              handleSelect={(activatedItemIndex) => this.choosePlayer(activatedItemIndex)}>
                            {this.props.format.filteredItems ?
                                this.props.format.filteredItems.map((element, key) => {
                                    return (
                                        <ListItem key={key} className="text-white" disabled={this.props.format.pickedPosition ? false : true}>
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
                                            <ListItemMeta
                                                style={{color: "white", fontSize: "1.5rem", verticalAlign: "center"}}
                                                meta={<IoIosInformationCircle/>}/>
                                        </ListItem>

                                    )
                                }) :
                                this.props.search.sortedPlayers ?
                                    this.props.search.sortedPlayers.map((element, key) => {
                                        return (
                                            <ListItem key={key} disabled={this.props.format.pickedPosition ? false : true}>
                                                <ListItemGraphic className="list-image"
                                                                 graphic={<img src={element.image} alt="sd"/>}/>
                                                <ListItemText
                                                    primaryText={element.name.slice(0, 10)}
                                                    secondaryText={element.club}/>
                                                <ListItemText
                                                    primaryText={element.price + " $"}
                                                    secondaryText={element.position}/>
                                                <ListItemMeta
                                                    style={{color: "white", fontSize: "1.5rem", verticalAlign: "center"}}
                                                    meta={<IoIosInformationCircle/>}/>
                                            </ListItem>
                                        )


                                    }) : null}
                        </List>
                    </div>

                    : <Modal visible effect="fadeInDown">
                        <lottie-player
                            src="https://assets7.lottiefiles.com/datafiles/FiZIpDPgKtqy2Ij/data.json"
                            background="transparent" speed="1" loop autoplay>
                        </lottie-player>
                    </Modal>}

            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        format: state.formatReducer,
        search: state.searchReducer
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