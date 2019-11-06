import React, {Component} from 'react';
import SquadPlayers from "./squadPlayers/squadPlayers";
import AllPlayers from "./allPlayers/allPlayers";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Button} from "react-bootstrap";
import ManageTeamApi from "../../_api/manageTeamApi";
import '@lottiefiles/lottie-player';
import AnonymousPlayer from "../../_assets/football-player.svg";


class Transfer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row justify-content-center">
                                {this.props.myTeam.firstSelectedTransfer || this.props.myTeam.firstSelectedTransfer === 0 ?
                                    <div>
                                        <div className="row justify-content-center">
                                            <img width="150"
                                                 src={this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelectedTransfer].image}/>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="text-white">{this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelectedTransfer].name}</div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="text-white">{this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelectedTransfer].position}</div>
                                        </div>
                                    </div>

                                    :
                                    <div>
                                        <div className="row justify-content-center">
                                            <img width="150"
                                                 src={AnonymousPlayer}/>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                    <div className="col row justify-content-center align-items-center">
                        <div className="">

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
                            </Button></div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row justify-content-center">
                                {this.props.myTeam.secondSelectedTransfer || this.props.myTeam.secondSelectedTransfer === 0 ?
                                    <div>
                                        <div className="row justify-content-center">
                                            <div><img width="150"
                                                      src={this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer].image}/>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="text-white">{this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer].name}</div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="text-white">{this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer].position}</div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className="row justify-content-center">
                                            <img width="150"
                                                 src={AnonymousPlayer}/>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <SquadPlayers/>
                    </div>
                    <div className="col-2">
                    </div>
                    <div className="col-5">
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
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);