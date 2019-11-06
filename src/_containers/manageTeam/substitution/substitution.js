import React, {Component} from 'react';
import Squad from "../squad/squad";
import Bench from "../bench/bench";
import {connect} from "react-redux";

import {bindActionCreators} from "redux";
import {getMyTeam} from "../../../_actions/manageTeamActions";

class Substitution extends Component {
    componentWillMount() {
        this.props.getMyTeam();
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <Squad/>
                            <Bench/>
                        </div>
                        <div className="col-2">

                        </div>

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
        getMyTeam
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Substitution);