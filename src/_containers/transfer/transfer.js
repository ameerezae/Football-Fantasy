import React, {Component} from 'react';
import SquadPlayers from "./squadPlayers/squadPlayers";
import AllPlayers from "./allPlayers/allPlayers";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Button} from "react-bootstrap";
import ManageTeamApi from "../../_api/manageTeamApi";
import '@lottiefiles/lottie-player';
import AnonymousPlayer from "../../_assets/football-player.svg";
import {
    selectSecondTransfer,
    selectFirstTransfer,
    enableTransferTable,
    isAllowedToTransfer
} from "../../_actions/manageTeamActions";
import {AnimateOnChange} from "react-animation";
import Transfer1 from "../../_assets/transfer1.svg";
import Transfer2 from "../../_assets/transfer2.svg";

class Transfer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row justify-content-center">
                                <AnimateOnChange
                                    animationIn="bounceIn"
                                    animationOut="bounceOut"
                                >
                                    {this.props.myTeam.firstSelectedTransfer || this.props.myTeam.firstSelectedTransfer === 0 ?
                                        <div>
                                            <div className="row justify-content-center">
                                                <img width="150"
                                                     src={this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelectedTransfer].image}/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div
                                                    className="text-white">{this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelectedTransfer].name}</div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div
                                                    className="text-white">{this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelectedTransfer].position}</div>
                                            </div>
                                        </div>

                                        :
                                        <div>
                                            <div className="row justify-content-center">
                                                <img width="150"
                                                     src={Transfer1}/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div>&nbsp;</div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div>&nbsp;</div>
                                            </div>
                                        </div>}
                                </AnimateOnChange>
                            </div>
                        </div>
                    </div>
                    <div className="col container">
                        <div>
                            <div className="row mb-3 justify-content-center align-items-center">
                                <Button variant="primary"
                                        disabled={!this.props.myTeam.allowedToTransfer}

                                        onClick={this.props.myTeam.allowedToTransfer ? () => ManageTeamApi.sendTransferedPlayer(this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer],
                                            this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelectedTransfer])
                                            : null}>
                                    <lottie-player
                                        autoplay={!this.props.myTeam.allowedToTransfer}
                                        loop
                                        speed=".5"
                                        mode="normal"
                                        src="https://maxst.icons8.com/vue-static/landings/animated-icons/icons/left-right/left-right.json"
                                    >
                                    </lottie-player>
                                </Button>
                            </div>
                            <div className="row mt-3 justify-content-center align-items-center">
                                <Button variant="danger" onClick={() => {
                                    this.props.selectFirstTransfer(null);
                                    this.props.selectSecondTransfer(null);
                                    this.props.enableTransferTable(false);
                                    this.props.isAllowedToTransfer(false);
                                }}>

                                    <lottie-player
                                        hover
                                        loop
                                        speed="1"
                                        mode="normal"
                                        src="https://maxst.icons8.com/vue-static/landings/animated-icons/icons/restart/restart.json"
                                    >
                                    </lottie-player>


                                </Button>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row justify-content-center">
                                <AnimateOnChange
                                    animationIn="bounceIn"
                                    animationOut="bounceOut"
                                >
                                    {this.props.myTeam.secondSelectedTransfer || this.props.myTeam.secondSelectedTransfer === 0 ?
                                        <div>
                                            <div className="row justify-content-center">
                                                <div><img width="150"
                                                          src={this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer].image}/>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div
                                                    className="text-white">{this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer].name}</div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div
                                                    className="text-white">{this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer].position}</div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className="row justify-content-center">
                                                <img width="150"
                                                     src={Transfer2}/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div>&nbsp;</div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div>&nbsp;</div>
                                            </div>
                                        </div>}
                                </AnimateOnChange>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-5 col-xs-6">
                        <SquadPlayers/>
                    </div>
                    <div className="col-md-2 hidden-xs hidden-sm">
                    </div>
                    <div className="col-md-5 col-xs-6">
                        <AllPlayers/>
                    </div>
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
        selectSecondTransfer,
        selectFirstTransfer,
        enableTransferTable,
        isAllowedToTransfer
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);