import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllCompetitions} from "../../../_actions/dashboardActions";
import Competition from "./competiton/competition";

class Competitions extends Component {
    componentWillMount() {
        this.props.getAllCompetitions();
    }

    render() {


        return (
            <Carousel>
                {this.props.dashboard.areCompetitionsFetched ?
                    this.props.dashboard.competitions.map((element) => {
                        return (

                            <Carousel.Item>
                                <img className="d-block w-100"
                                     src={"https://assets.sport.bt.com/v1/btsapp/packshots/2019-11-04/1001258311-htm.jpg"}
                                     alt="competition"/>
                                <Carousel.Caption>
                                    <h3>{element.name}</h3>
                                    <p>{element.area.name}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                    : null}
            </Carousel>

        );
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboardReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllCompetitions,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Competitions);