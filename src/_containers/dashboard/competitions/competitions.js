import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllCompetitions,setCurrentCompitition} from "../../../_actions/dashboardActions";
import Competition from "./competiton/competition";

class Competitions extends Component {
    componentWillMount() {
        this.props.getAllCompetitions();
    }
    handleSelect = (selectedIndex, e) => {
        // console.log("hi we are in handleSelect: ",selectedIndex,e)
        let compete = this.props.dashboard.competitions[selectedIndex]
        console.log("hi we are in handleSelect: ",compete)
        this.props.setCurrentCompitition(compete);
      };
    render() {


        return (
            <Carousel interval={0} onSelect={this.handleSelect}>
                {this.props.dashboard.areCompetitionsFetched ?
                    this.props.dashboard.competitions.map((element) => {
                        return (

                            <Carousel.Item>
                                <img className="d-block"
                                     src={element.image}
                                     alt="competition"
                                    style={{height:"20%"}}
                                />
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
        setCurrentCompitition,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Competitions);