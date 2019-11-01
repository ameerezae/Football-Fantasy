import React, {Component} from 'react';
import {connect} from "react-redux";
import Player from "../player/player";
import {bindActionCreators} from "redux";
import {setFirstSelected, setMyNewTeam} from "../../_actions/manageTeamActions";

class Squad extends Component {

    substitution = (secondSelectedKey) => {
        let newTeam = this.props.myTeam.squad;
        newTeam[this.props.myTeam.firstSelected].lineup = false;
        newTeam[secondSelectedKey].lineup = true;
        this.props.setMyNewTeam(newTeam);
    };

    render() {
        const sqaud = (
            <div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad ?
                        this.props.myTeam.squad.map((element, key) => {
                            if (element.position === "Goalkeeper" && element.lineup) {
                                return (
                                    <div className="col">
                                        <div onClick={!this.props.myTeam.firstSelected ? () => {
                                            this.props.setFirstSelected(key)
                                        } : () => {
                                            this.substitution(key)
                                        }}>
                                            <Player number={key} info={element}/>
                                        </div>

                                    </div>
                                )
                            }
                        }) : null}
                </div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad ?
                        this.props.myTeam.squad.map((element, key) => {
                            if (element.position === "Defender" && element.lineup) {
                                return (
                                    <div className="col">
                                        <div onClick={!this.props.myTeam.firstSelected ? () => {
                                            this.props.setFirstSelected(key)
                                        } : () => {
                                            this.substitution(key)
                                        }}>
                                            <Player number={key} info={element}/>
                                        </div>
                                    </div>
                                )
                            }
                        }) : null}
                </div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad ?
                        this.props.myTeam.squad.map((element, key) => {
                            if (element.position === "Midfielder" && element.lineup) {
                                return (
                                    <div className="col">
                                        <div onClick={!this.props.myTeam.firstSelected ? () => {
                                            this.props.setFirstSelected(key)
                                        } : () => {
                                            this.substitution(key)
                                        }}>
                                            <Player number={key} info={element}/>
                                        </div>
                                    </div>
                                )
                            }
                        }) : null}
                </div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad ?
                        this.props.myTeam.squad.map((element, key) => {
                            if (element.position === "Forward" && element.lineup) {
                                return (
                                    <div className="col">
                                        <div onClick={!this.props.myTeam.firstSelected ? () => {
                                            this.props.setFirstSelected(key)
                                        } : () => {
                                            this.substitution(key)
                                        }}>
                                            <Player number={key} info={element}/>
                                        </div>
                                    </div>
                                )
                            }
                        }) : null}
                </div>
            </div>
        )

        return (
            <div className="container-fluid field-background">
                {sqaud}
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
        setFirstSelected,
        setMyNewTeam
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Squad);