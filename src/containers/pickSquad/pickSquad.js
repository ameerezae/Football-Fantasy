import React, {Component} from 'react';
import "./pickSquad.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import FormatModal from "./formatModal";
import PlayersTable from "./playersTable"
import Anonymous from "../../assets/football-player.svg"
import {AnimateOnChange} from "react-animation";
import GoalK from "../../assets/GK.svg";
import Bench from "../../assets/bench.svg"
import {getWholeItems, setFilteredPosition, setPickedPosition, setPickedKey, toggleModal} from "../../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import DetailsModal from "./detailsModal";
class PickSquadContainer extends Component {

    componentWillMount() {
        this.props.getWholeItems();
    }

    onClick = (event) => {
        const position = event.target.name;
        const id = event.target.id;

        let filteredPosition;
        position !== "bench" ?
            filteredPosition = this.props.format.wholeItems.filter(element => element.position === position)
            :
            filteredPosition = this.props.format.wholeItems;
        this.props.setFilteredPosition(filteredPosition);
        this.props.setPickedPosition(position);
        this.props.setPickedKey(id);
    };

    pickedPlayerOnClick = (event) => {
        const position = event.target.name;
        const id = event.target.id;
        this.props.setPickedPosition(position);
        this.props.setPickedKey(id);
        this.props.toggleModal(true)
    };

    render() {
        const GK = (
            this.props.format.forward ?
                this.props.format.GK.map((element, key) => {
                    return (
                        <div className="col" key={key}>
                            <div className="row justify-content-center">
                                <AnimateOnChange key={key}
                                                 animationIn="bounceIn"
                                                 animationOut="bounceOut"
                                >
                                    {this.props.format.GK[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.GK[key].image} onClick={this.pickedPlayerOnClick} name="GK" id={key} key={key}
                                                     width="80px"
                                                     alt="pic"/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                    backgroundColor: "rgb(90, 247, 220)"
                                                }}>{this.props.format.GK[key].name}</div>
                                            </div>
                                        </div> :
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={GoalK} onClick={this.onClick} alt="anonymous" width="80px"
                                                     name="GK"
                                                     id={key} key={key}/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                }}>&nbsp;</div>
                                            </div>
                                        </div>
                                    }
                                </AnimateOnChange>
                            </div>
                        </div>
                    )
                }) : null
        );

        const defenders = (
            this.props.format.defender ?
                this.props.format.defender.map((element, key) => {
                    return (
                        <div className="col" key={key}>
                            <div className="row justify-content-center">
                                <AnimateOnChange
                                    animationIn="bounceIn"
                                    animationOut="bounceOut"
                                >
                                    {this.props.format.defender[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.defender[key].image} width="80px" onClick={this.pickedPlayerOnClick} name="defender" id={key} key={key}
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
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={Anonymous} onClick={this.onClick} alt="anonymous" width="80px"
                                                     name="defender"
                                                     id={key} key={key}/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                }}>&nbsp;</div>
                                            </div>
                                        </div>}
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
                        <div className="col" key={key}>
                            <div className="row justify-content-center">
                                <AnimateOnChange
                                    animationIn="bounceIn"
                                    animationOut="bounceOut"
                                >
                                    {this.props.format.middle[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.middle[key].image} width="80px" alt="pic" onClick={this.pickedPlayerOnClick} name="middle" id={key} key={key}/>
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
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={Anonymous} onClick={this.onClick} alt="anonymous" width="80px"
                                                     name="middle"
                                                     id={key} key={key}/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                }}>&nbsp;</div>
                                            </div>
                                        </div>}
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
                        <div className="col" key={key}>
                            <div className="row justify-content-center">
                                <AnimateOnChange key={key}
                                                 animationIn="bounceIn"
                                                 animationOut="bounceOut"
                                >
                                    {this.props.format.forward[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.forward[key].image} width="80px" alt="pic" onClick={this.pickedPlayerOnClick} name="forward" id={key} key={key}/>
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
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={Anonymous} onClick={this.onClick} alt="anonymous" width="80px"
                                                     name="forward"
                                                     id={key} key={key}/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                }}>&nbsp;</div>
                                            </div>
                                        </div>}
                                </AnimateOnChange>
                            </div>
                        </div>
                    )
                }) : null

        );

        const bench = (
            this.props.format.forward ?
                this.props.format.bench.map((element, key) => {
                    return (
                        <div className="col" key={key}>
                            <div className="row justify-content-center">
                                <AnimateOnChange key={key}
                                                 animationIn="bounceIn"
                                                 animationOut="bounceOut"
                                >
                                    {this.props.format.bench[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.bench[key].image} width="80px" onClick={this.pickedPlayerOnClick} name="bench" id={key} key={key}
                                                     alt="pic"/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                    backgroundColor: "rgb(90, 247, 220)"
                                                }}>{this.props.format.bench[key].name}</div>
                                            </div>
                                        </div> :
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={Bench} onClick={this.onClick} alt="anonymous" width="80px"
                                                     name="bench"
                                                     id={key} key={key}/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div style={{
                                                    textAlign: "center",
                                                    fontSize: ".8rem",
                                                    color: "black",
                                                    paddingLeft: "4px",
                                                    paddingRight: "4px",
                                                    fontWeight: "200",
                                                }}>&nbsp;</div>
                                            </div>
                                        </div>
                                    }
                                </AnimateOnChange>
                            </div>
                        </div>
                    )
                }) : null
        )
        return (
            <div>
                <div className="main-background"></div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <FormatModal/>
                            <PlayersTable/>
                        </div>
                        <div className="col-lg-8">
                            <DetailsModal/>
                            <div className="row align-items-center">
                                <div className="container-fluid field-background padding-to-field">
                                    <div className="row justify-content-center">
                                        {GK}
                                    </div>
                                    <div className="row justify-content-center customized-margin">
                                        {defenders}
                                    </div>
                                    <div className="row justify-content-center customized-margin">
                                        {mids}
                                    </div>
                                    <div className="row justify-content-center customized-margin">
                                        {forwards}
                                    </div>
                                    <div className="row justify-content-center customized-margin">
                                        {bench}
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getWholeItems,
        setFilteredPosition,
        setPickedPosition,
        setPickedKey,
        toggleModal

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PickSquadContainer);