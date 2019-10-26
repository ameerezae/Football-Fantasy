import React, {Component} from 'react';
import "./pickSquad.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import FormatModal from "./formatModal";
import PlayersTable from "./playersTable"
import Anonymous from "../../assets/football-player.svg"
import {AnimateOnChange} from "react-animation";
import GoalK from "../../assets/GK.svg";
import Bench from "../../assets/bench.svg";
import {Button} from "react-bootstrap"
import {
    getWholeItems,
    setFilteredPosition,
    setPickedPosition,
    setPickedKey,
    toggleModal,
    setSquadName
} from "../../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import DetailsModal from "./detailsModal";
import CountUp from "react-countup/build";
import Swal from "sweetalert2";

class PickSquadContainer extends Component {
    state = {
        pickName: true,
    };

    componentWillMount() {
        this.props.getWholeItems();
    }

    async handleSubmit(event, data) {
        let changedData = data;
        let picks = [];
        Object.keys(data).forEach((key) => {
            if (key === "Defender" || key === "Goalkeeper" || key === "Forward" || key === "Midfielder"){
                const newData = data[key];
                for(let i = 0 ; i< newData.length;i++){
                    newData[i]["lineup"] = true;
                    picks.push(newData[i]);
                }
            }else if(key === "bench"){
                const newData = data[key];
                for(let i = 0 ; i< newData.length;i++){
                    newData[i]["lineup"] = false;
                    picks.push(newData[i]);
                }

            }
        });
        for(let i = 0 ;i < picks.length;i++){
            picks[i]["player_id"] = picks[i].id;
        }
        changedData["picks"] = picks;


        try {
            const url = "http://172.17.3.123:5000/team/pick-squad";
            const token = localStorage.getItem("access_token")
            const response = await fetch(`${url}`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${token}`,
                },
                body : JSON.stringify(changedData)

            })
        } catch (e) {
            console.log("SERVER DOWN")
        }
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
        if (this.state.pickName) {
            Swal.fire({
                title: 'Enter your squad name :',
                input: 'text',
                confirmButtonText: "confirm",
                inputValidator: (value) => {
                    this.props.setSquadName(value)
                    this.setState({pickName: false})
                }
            })
        }

        const GK = (
            this.props.format.Forward ?
                this.props.format.Goalkeeper.map((element, key) => {
                    return (
                        <div className="col" key={key}>
                            <div className="row justify-content-center">
                                <AnimateOnChange key={key}
                                                 animationIn="bounceIn"
                                                 animationOut="bounceOut"
                                >
                                    {this.props.format.Goalkeeper[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.Goalkeeper[key].image}
                                                     onClick={this.pickedPlayerOnClick} name="Goalkeeper" id={key}
                                                     key={key}
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
                                                }}>{this.props.format.Goalkeeper[key].name}</div>
                                            </div>
                                        </div> :
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={GoalK} onClick={this.onClick} alt="anonymous" width="80px"
                                                     name="Goalkeeper"
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
            this.props.format.Defender ?
                this.props.format.Defender.map((element, key) => {
                    return (
                        <div className="col" key={key}>
                            <div className="row justify-content-center">
                                <AnimateOnChange
                                    animationIn="bounceIn"
                                    animationOut="bounceOut"
                                >
                                    {this.props.format.Defender[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.Defender[key].image} width="80px"
                                                     onClick={this.pickedPlayerOnClick} name="Defender" id={key}
                                                     key={key}
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
                                                }}>{this.props.format.Defender[key].name}</div>
                                            </div>
                                        </div>

                                        :
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={Anonymous} onClick={this.onClick} alt="anonymous" width="80px"
                                                     name="Defender"
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
            this.props.format.Midfielder ?
                this.props.format.Midfielder.map((element, key) => {
                    return (
                        <div className="col" key={key}>
                            <div className="row justify-content-center">
                                <AnimateOnChange
                                    animationIn="bounceIn"
                                    animationOut="bounceOut"
                                >
                                    {this.props.format.Midfielder[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.Midfielder[key].image} width="80px"
                                                     alt="pic" onClick={this.pickedPlayerOnClick} name="Midfielder"
                                                     id={key} key={key}/>
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
                                                }}>{this.props.format.Midfielder[key].name}</div>
                                            </div>
                                        </div> :
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={Anonymous} onClick={this.onClick} alt="anonymous" width="80px"
                                                     name="Midfielder"
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
            this.props.format.Forward ?
                this.props.format.Forward.map((element, key) => {
                    return (
                        <div className="col" key={key}>
                            <div className="row justify-content-center">
                                <AnimateOnChange key={key}
                                                 animationIn="bounceIn"
                                                 animationOut="bounceOut"
                                >
                                    {this.props.format.Forward[key] ?
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={this.props.format.Forward[key].image} width="80px" alt="pic"
                                                     onClick={this.pickedPlayerOnClick} name="Forward" id={key}
                                                     key={key}/>
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
                                                }}>{this.props.format.Forward[key].name}</div>
                                            </div>
                                        </div>
                                        :
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src={Anonymous} onClick={this.onClick} alt="anonymous" width="80px"
                                                     name="Forward"
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
            this.props.format.Forward ?
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
                                                <img src={this.props.format.bench[key].image} width="80px"
                                                     onClick={this.pickedPlayerOnClick} name="bench" id={key} key={key}
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
                        <div className="col-lg-7">
                            <div className="row align-items-center mt-2">
                                <div className="col-10">
                                    <div className="row">
                                        <h4 className="text-white ml-3">Pick your squad</h4>
                                        <h5 className="text-white ml-5">Budget: </h5>
                                        <h5 className="text-white pb-0 ml-2"><CountUp start={50} end={this.props.format.budget}
                                                                                      duration={1}
                                                                                      separator="," suffix="$"/></h5>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="row justify-content-end">
                                        <Button variant="primary" size="md" onClick={(event) => this.handleSubmit(event, this.props.format)}>Confirm</Button>
                                    </div>
                                </div>

                            </div>
                            <hr style={{background: "white"}}/>
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

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1">
                            <div className="container bench-margin">
                                <div className="row hidden-lg">
                                    {bench}
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
        toggleModal,
        setSquadName

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PickSquadContainer);