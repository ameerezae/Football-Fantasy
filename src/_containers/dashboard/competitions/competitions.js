import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllCompetitions} from "../../../_actions/dashboardActions";


class Competitions extends Component {
    componentWillMount() {
        this.props.getAllCompetitions();
    }

    render() {


        return (
            <Carousel>

            </Carousel>
        );
    }
}

function mapStateToProps (state){
    return{
        dashboard : state.dashboardReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getAllCompetitions,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Competitions);