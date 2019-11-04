import React, {Component} from 'react';
import SquadPlayers from "./squadPlayers/squadPlayers";
import AllPlayers from "./allPlayers/allPlayers";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getMyTeamForTransfer} from "../../_actions/manageTeamActions";

class Transfer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <SquadPlayers/>
                    </div>
                    <div className="col-6">
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
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);