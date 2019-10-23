import React, {Component} from 'react';
import "./pickSquad.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import FormatModal from "./formatModal";
import Anonymous from "../../assets/football-player.svg"
import {AnimateOnChange} from "react-animation";
import {getWholeItems, setFilteredPosition} from "../../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class PickSquadContainer extends Component {
    state = {
        pickedPosition: null,
        pickedKey: null,
    };


    onClick = (event) => {
        const position = event.target.name;
        const id = event.target.id;

        const filteredPosition = this.props.format.wholeItems.filter(element => element.position === position);
        this.props.setFilteredPosition(filteredPosition);

        this.setState(prevState => {
            const newState = {...prevState};
            newState["pickedPosition"] = position;
            newState["pickedKey"] = id;
            return newState
        })
    };


    render() {
        const defenders = (
            this.props.format.defender ?
                this.props.format.defender.map((element, key) => {
                    return (
                        <div className="col">
                            <div className="row justify-content-center">
                                <AnimateOnChange
                                    animationIn="bounceIn"
                                    animationOut="bounceOut"
                                >
                                    {this.props.format.defender[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.defender[key].image} width="80px"
                                                     alt="pic"/>
                                            </div>
                                            <div className="row mt-1 justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                    backgroundColor: "rgb(90, 247, 220)"
                                                }}>{this.props.format.defender[key].name}</div>
                                            </div>
                                        </div>

                                        :
                                        <img src={Anonymous} onClick={this.onClick} alt="anonymous" width="80px"
                                             name="defender"
                                             id={key} key={key}/>}
                                </AnimateOnChange>

                            </div>
                        </div>
                    )
                }) : null
        );
        const mids = (
            this.props.format.middle ?
                this.props.format.middle.map((element, key) => {
                    return (
                        <div className="col">
                            <div className="row justify-content-center">
                                <AnimateOnChange
                                    animationIn="bounceIn"
                                    animationOut="bounceOut"
                                >
                                    {this.props.format.middle[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.middle[key].image} width="80px" alt="pic"/>
                                            </div>
                                            <div className="row mt-1 justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                    backgroundColor: "rgb(90, 247, 220)"
                                                }}>{this.props.format.middle[key].name}</div>
                                            </div>
                                        </div> :
                                        <img src={Anonymous} onClick={this.onClick} alt="anonymous" width="80px"
                                             name="middle"
                                             id={key} key={key}/>}
                                </AnimateOnChange>
                            </div>
                        </div>

                    )
                }) : null

        );
        const forwards = (
            this.props.format.forward ?
                this.props.format.forward.map((element, key) => {
                    return (
                        <div className="col">
                            <div className="row justify-content-center">
                                <AnimateOnChange key={key}
                                                 animationIn="bounceIn"
                                                 animationOut="bounceOut"
                                >
                                    {this.props.format.forward[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.forward[key].image} width="80px" alt="pic"/>
                                            </div>
                                            <div className="row mt-1 justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                    backgroundColor: "rgb(90, 247, 220)"
                                                }}>{this.props.format.forward[key].name}</div>
                                            </div>
                                        </div>
                                        :
                                        <img src={Anonymous} onClick={this.onClick} alt="anonymous" width="80px"
                                             name="forward"
                                             id={key} key={key}/>}
                                </AnimateOnChange>
                            </div>
                        </div>
                    )
                }) : null

        );
        return (
            <div>
                <div className="main-background"></div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <FormatModal/>
                        </div>
                        <div className="col-lg-8">
                            <div className="row align-items-center">
                                <div className="container-fluid field-background mt-3 padding-to-field">
                                    <div className="row justify-content-center mt-5">
                                        {defenders}
                                    </div>
                                    <div className="row justify-content-center customized-margin">
                                        {mids}
                                    </div>
                                    <div className="row justify-content-center customized-margin">
                                        {forwards}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        format: state.formatReducer,
    }
}

function mapDispatchToProps(state) {
    return bindActionCreators({
        getWholeItems,
        setFilteredPosition,

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PickSquadContainer);