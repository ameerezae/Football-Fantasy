import React, {Component} from 'react';
import SquadPlayers from "./squadPlayers/squadPlayers";
import AllPlayers from "./allPlayers/allPlayers";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Button} from "react-bootstrap";

class Transfer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <SquadPlayers/>
                    </div>
                    <div className="col-2">
                        <Button variant="primary"
                                disabled={!((this.props.myTeam.secondSelectedTransfer ||
                                    this.props.myTeam.secondSelectedTransfer === 0) && (
                                    this.props.myTeam.firstSelected ||
                                    this.props.myTeam.firstSelected === 0))}
                        onClick={}>Transfer</Button>
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