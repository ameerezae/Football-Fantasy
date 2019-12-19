import React, {Component} from 'react';
import {connect} from "react-redux";
import Player from "../player/player";
import {bindActionCreators} from "redux";
import {setFirstSelected, setMyNewTeam, toggleModal, localAllowSubs} from "../../../_actions/manageTeamActions";
import DetailModal from "../substitution/detailModal";
import Swal from "sweetalert2";
import {FaExchangeAlt, FaInfo} from "react-icons/all";
import {AnimateOnChange} from "react-animation";
import {getOnePlayerStatistics} from "../../../_actions/statisticsActions";

import "./squad.scss";
import * as types from "../../../_actions/types";

class Squad extends Component {

    substitution = (secondSelectedKey) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        let newTeam = this.props.myTeam.squad;
        if(newTeam[secondSelectedKey].id !== this.props.myTeam["captain"] && newTeam[this.props.myTeam.firstSelected].id !== this.props.myTeam["captain"]){
            if (newTeam[secondSelectedKey].lineup === !newTeam[this.props.myTeam.firstSelected].lineup && newTeam[secondSelectedKey].position !== types.position.GOALKEEPER && newTeam[this.props.myTeam.firstSelected].position !== types.position.GOALKEEPER) {
                newTeam[this.props.myTeam.firstSelected].lineup = !newTeam[this.props.myTeam.firstSelected].lineup;
                newTeam[secondSelectedKey].lineup = !newTeam[secondSelectedKey].lineup;
                Toast.fire({
                    type: 'success',
                    width: 100
                })
            } else if (newTeam[secondSelectedKey].lineup === !newTeam[this.props.myTeam.firstSelected].lineup && newTeam[secondSelectedKey].position === types.position.GOALKEEPER && newTeam[this.props.myTeam.firstSelected].position === types.position.GOALKEEPER) {
                newTeam[this.props.myTeam.firstSelected].lineup = !newTeam[this.props.myTeam.firstSelected].lineup;
                newTeam[secondSelectedKey].lineup = !newTeam[secondSelectedKey].lineup;
                Toast.fire({
                    type: 'success',
                    width: 100
                })
            }

            this.props.setMyNewTeam(newTeam);
            this.props.setFirstSelected(null);
        }
        else{
            Swal.fire({
                position: 'center',
                type: 'error',
                title: "Captain can not change",
                showConfirmButton: false,
                timer: 3000
            })
        }
    }
    ;

    async getPlayerStatistics(id) {
        await this.props.getOnePlayerStatistics(id);
    }

    render() {
        const sqaud = (
            <div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad ?
                        this.props.myTeam.squad.map((element, key) => {
                            if (element.position === "Goalkeeper" && element.lineup) {
                                return (
                                    <div className="col">

                                        <div className="row justify-content-center">
                                            <AnimateOnChange key={key}
                                                             animationIn="bounceIn"
                                                             animationOut="bounceOut"
                                            >
                                                <div
                                                    className={key === this.props.myTeam.firstSelected ? "row justify-content-center exchange-color" : "row justify-content-center"}>
                                                    <Player number={key} info={element}/>
                                                </div>
                                                <div>{element.id === this.props.myTeam["captain"] ?
                                                    <div>CAPTAIN</div> : null}</div>
                                                <div className="row justify-content-center">
                                                    <FaExchangeAlt
                                                        className="mr-1"
                                                        onClick={this.props.myTeam.localAllow ? () => {
                                                            this.props.setFirstSelected(key);
                                                            this.props.localAllowSubs(false);
                                                        } : () => {
                                                            this.substitution(key)
                                                            this.props.localAllowSubs(true);
                                                        }}/>
                                                    <FaInfo onClick={async () => {
                                                        this.props.setFirstSelected(key);
                                                        await this.getPlayerStatistics(element.id);
                                                        this.props.toggleModal(true);
                                                    }}/>

                                                </div>
                                            </AnimateOnChange>

                                        </div>
                                    </div>
                                )
                            }
                        }) : null}
                </div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad ?
                        this.props.myTeam.squad.map((element, key) => {
                            if (element.position === "Defender" && element.lineup) {
                                return (
                                    <div className="col">
                                        <div className="row justify-content-center">
                                            <AnimateOnChange key={key}
                                                             animationIn="bounceIn"
                                                             animationOut="bounceOut"
                                            >
                                                <div
                                                    className={key === this.props.myTeam.firstSelected ? "row justify-content-center exchange-color" : "row justify-content-center"}>
                                                    <Player number={key} info={element}/>
                                                </div>
                                                <div>{element.id === this.props.myTeam["captain"] ?
                                                    <div>CAPTAIN</div> : null}</div>
                                                <div className="row justify-content-center">
                                                    <FaExchangeAlt
                                                        onClick={this.props.myTeam.localAllow ? () => {
                                                            this.props.setFirstSelected(key);
                                                            this.props.localAllowSubs(false);
                                                        } : () => {
                                                            this.substitution(key)
                                                            this.props.localAllowSubs(true);
                                                        }}/>
                                                    <FaInfo onClick={async () => {
                                                        this.props.setFirstSelected(key);
                                                        await this.getPlayerStatistics(element.id);
                                                        this.props.toggleModal(true);
                                                    }}/>
                                                </div>
                                            </AnimateOnChange>

                                        </div>
                                    </div>
                                )
                            }
                        }) : null}
                </div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad ?
                        this.props.myTeam.squad.map((element, key) => {
                            if (element.position === "Midfielder" && element.lineup) {
                                return (
                                    <div className="col">
                                        <div className="row justify-content-center">
                                            <AnimateOnChange key={key}
                                                             animationIn="bounceIn"
                                                             animationOut="bounceOut"
                                            >
                                                <div
                                                    className={key === this.props.myTeam.firstSelected ? "row justify-content-center exchange-color" : "row justify-content-center"}>
                                                    <Player number={key} info={element}/>
                                                </div>
                                                <div>{element.id === this.props.myTeam["captain"] ?
                                                    <div>CAPTAIN</div> : null}</div>
                                                <div className="row justify-content-center">
                                                    <FaExchangeAlt
                                                        onClick={this.props.myTeam.localAllow ? () => {
                                                            this.props.setFirstSelected(key);
                                                            this.props.localAllowSubs(false);
                                                        } : () => {
                                                            this.substitution(key)
                                                            this.props.localAllowSubs(true);
                                                        }}/>
                                                    <FaInfo onClick={async () => {
                                                        this.props.setFirstSelected(key);
                                                        await this.getPlayerStatistics(element.id);
                                                        this.props.toggleModal(true);
                                                    }}/>
                                                </div>
                                            </AnimateOnChange>

                                        </div>
                                    </div>
                                )
                            }
                        }) : null}
                </div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad ?
                        this.props.myTeam.squad.map((element, key) => {
                            if (element.position === "Forward" && element.lineup) {
                                return (
                                    <div className="col">
                                        <div className="row justify-content-center">
                                            <AnimateOnChange key={key}
                                                             animationIn="bounceIn"
                                                             animationOut="bounceOut"
                                            >
                                                <div
                                                    className={key === this.props.myTeam.firstSelected ? "row justify-content-center exchange-color" : "row justify-content-center"}>
                                                    <Player number={key} info={element}/>
                                                </div>
                                                <div>{element.id === this.props.myTeam["captain"] ?
                                                    <div>CAPTAIN</div> : null}</div>
                                                <div className="row justify-content-center">
                                                    <FaExchangeAlt
                                                        onClick={this.props.myTeam.localAllow ? () => {
                                                            this.props.setFirstSelected(key);
                                                            this.props.localAllowSubs(false);
                                                        } : () => {
                                                            this.substitution(key)
                                                            this.props.localAllowSubs(true);
                                                        }}/>
                                                    <FaInfo onClick={async () => {
                                                        this.props.setFirstSelected(key);
                                                        await this.getPlayerStatistics(element.id);
                                                        this.props.toggleModal(true);
                                                    }}/>
                                                </div>
                                            </AnimateOnChange>

                                        </div>
                                    </div>
                                )
                            }
                        }) : null}
                </div>
            </div>
        )

        return (
            <div className="container-fluid field-background p-5">
                <DetailModal/>
                {sqaud}
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
        setFirstSelected,
        setMyNewTeam,
        toggleModal,
        localAllowSubs,
        getOnePlayerStatistics
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Squad);
