import React, {Component} from 'react';
import Substitution from "../substitution/substitution";
import {getMyTeam} from "../../_actions/manageTeamActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
class ManageTeam extends Component {
    componentWillMount() {
        this.props.getMyTeam();
    }

    render() {
        return (
            <Substitution/>
        );
    }
}

function mapStateToProps(state){
    return{
        myTeam : state.manageTeamReaducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMyTeam,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageTeam);