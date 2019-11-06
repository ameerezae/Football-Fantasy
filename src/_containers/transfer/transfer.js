import React, {Component} from 'react';
import SquadPlayers from "./squadPlayers/squadPlayers";
import AllPlayers from "./allPlayers/allPlayers";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Button} from "react-bootstrap";
import ManageTeamApi from "../../_api/manageTeamApi";

class Transfer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <SquadPlayers/>
                    </div>
                    <div className="col-2">

                        <lottie-player
                            src="https://assets9.lottiefiles.com/packages/lf20_yJgXcu.json" background="transparent"
                            speed="1" width="300" height="300" loop autoplay>
                        </lottie-player>
                        <Button variant="primary"
                                disabled={!this.props.myTeam.allowedToTransfer}

                                onClick={this.props.myTeam.allowedToTransfer ? () => ManageTeamApi.sendTransferedPlayer(this.props.myTeam.transferablePlayers[this.props.myTeam.secondSelectedTransfer],
                                    this.props.myTeam.myTeamForTransfer[this.props.myTeam.firstSelected])
                                    : null}>Transfer</Button>
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