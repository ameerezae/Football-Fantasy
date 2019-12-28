import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllCompetitions, setCurrentCompitition} from "../../../_actions/dashboardActions";
import Competition from "./competiton/competition";
import "./competitions.scss"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import {Alert} from "react-bootstrap";


class Competitions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    componentWillMount() {
        this.props.getAllCompetitions();
    }
    handleSelect = (selectedIndex, e) => {
        let compete = this.props.dashboard.competitions[selectedIndex]
        console.log("hi we are in handleSelect: ",compete)
        this.props.setCurrentCompitition(compete);
      };
    render() {

        return (
            <div>
                {/*<Slider*/}
                {/*    asNavFor={this.state.nav2}*/}
                {/*    ref={slider => (this.slider1 = slider)}*/}
                {/*    arrows={false}*/}
                {/*    fade*/}
                {/*    className="row align-items-center justify-content-center"*/}
                {/*    useCSS*/}
                {/*    useTransform*/}
                {/*    centerMode*/}
                {/*>*/}

                {/*    {this.props.dashboard.areCompetitionsFetched ?*/}
                {/*        this.props.dashboard.competitions.map((element) => {*/}
                {/*            return (*/}
                {/*                <div className="">*/}
                {/*                    <img src={element.image} alt={"ime"} height="250px"*/}
                {/*                         width="50%" className="yours-custom-class"/>*/}
                {/*                </div>*/}

                {/*            )*/}
                {/*        })*/}
                {/*        : null}*/}
                {/*</Slider>*/}
                {/*<Slider*/}
                {/*    asNavFor={this.state.nav1}*/}
                {/*    ref={slider => (this.slider2 = slider)}*/}
                {/*    slidesToShow={2}*/}
                {/*    swipeToSlide={true}*/}
                {/*    focusOnSelect={true}*/}
                {/*    centerMode={true}*/}
                {/*    afterChange={(index)=>{this.handleSelect(index)}}*/}
                {/*    className="row mx-4 p-4 text-white justify-content-center"*/}
                {/*    // initialSlide={localStorage.getItem("current_comp_index")}*/}
                {/*>*/}
                {/*    {this.props.dashboard.areCompetitionsFetched ?*/}
                {/*        this.props.dashboard.competitions.map((element) => {*/}
                {/*            return (*/}
                {/*                <div className="p-4 mx-auto bg-danger">*/}
                {/*                    {element.name}*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        })*/}
                {/*        : null}*/}
                {/*</Slider>*/}

                <Carousel interval={0} onSelect={this.handleSelect}>
                    {this.props.dashboard.areCompetitionsFetched ?
                        this.props.dashboard.competitions.map((element) => {
                            return (

                                <Carousel.Item>
                                    <img className="d-block"
                                         src={element.image}
                                         alt="competition"
                                         height="500px"
                                         width="100%"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="text-black-50">{element.name}</h3>
                                        <p className="text-black-50">{element.area.name}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                        : null}
                </Carousel>
            </div>


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