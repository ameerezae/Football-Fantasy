import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getUserInformation} from "../../../_actions/dashboardActions";
import * as dashboardConstants from "../../../constants/dashboard/dashboardConstants";
import "./scss/information.scss";
import Edit from "./Edit";
import {Button} from "react-bootstrap";

class Information extends Component {
    componentWillMount() {
        this.props.getUserInformation();
    }

    findSelectedSquadCompInfo = () => {
        if (this.props.dashboard.areInformationFetched) {
            const squads = this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.SQUADS];
            for (let i = 0; i < squads.length; i++) {
                if (squads[i][dashboardConstants.INFORMATION_CONSTANTS.COMPETITION][dashboardConstants.INFORMATION_CONSTANTS.COMPETITION_ID] === this.props.dashboard.selectedCompetition.id) {
                    return i;
                }
            }
            return -1;
        }
    }

    render() {
        let indexOfSquad = this.findSelectedSquadCompInfo();
        console.log("rendered again")
        return (
            <div>
                {indexOfSquad !== -1 ?
                    <div className="container emp-profile">
                        {this.props.dashboard.areInformationFetched ?
                            <form method="post">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="profile-img">
                                            <img
                                                src="https://www.glovespot.net/fileadmin/_processed_/5/8/csm_ENG_-_Henderson_Dean_0a0dddb16f.png"
                                                alt=""/>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="profile-head">
                                            <h5>
                                                {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.USER][dashboardConstants.INFORMATION_CONSTANTS.USER_NAME]}
                                            </h5>
                                            <h6>
                                                {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.USER][dashboardConstants.INFORMATION_CONSTANTS.EMAIL]}

                                            </h6>
                                            <h5 className="proile-rating">RANKINGS : <span>8/10</span></h5>
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="home-tab" data-toggle="tab"
                                                       href="#home"
                                                       role="tab" aria-controls="home" aria-selected="true">About</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <Edit/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="profile-work">
                                            <p>CAPTAIN</p>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    {dashboardConstants.CAPTAIN_SUBJECT.NAME}
                                                </div>
                                                <div className="col-sm-8">
                                                    <div>
                                                        {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.SQUADS][indexOfSquad]
                                                            [dashboardConstants.INFORMATION_CONSTANTS.CAPTAIN]
                                                            [dashboardConstants.INFORMATION_CONSTANTS.CAPTAIN_NAME]
                                                        }</div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    {dashboardConstants.CAPTAIN_SUBJECT.POSITION}
                                                </div>
                                                <div className="col-sm-8">
                                                    <div>
                                                        {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.SQUADS][indexOfSquad]
                                                            [dashboardConstants.INFORMATION_CONSTANTS.CAPTAIN]
                                                            [dashboardConstants.INFORMATION_CONSTANTS.CAPTAIN_POSITION]
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    {dashboardConstants.CAPTAIN_SUBJECT.POINT}
                                                </div>
                                                <div className="col-sm-8">
                                                    <div>
                                                        {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.SQUADS][indexOfSquad]
                                                            [dashboardConstants.INFORMATION_CONSTANTS.CAPTAIN]
                                                            [dashboardConstants.INFORMATION_CONSTANTS.CAPTAIN_POINT]
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="tab-content profile-tab" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                                 aria-labelledby="home-tab">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>
                                                            {dashboardConstants.INFORMATION_SUBJECT.SQUAD_NAME}
                                                        </label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.SQUADS][indexOfSquad]
                                                                [dashboardConstants.INFORMATION_CONSTANTS.SQUAD_NAME]
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>
                                                            {dashboardConstants.INFORMATION_SUBJECT.POINT}
                                                        </label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.SQUADS][indexOfSquad]
                                                                [dashboardConstants.INFORMATION_CONSTANTS.SQUAD_POINT]
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>
                                                            {dashboardConstants.INFORMATION_SUBJECT.COMPETITION_NAME}
                                                        </label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.SQUADS][indexOfSquad]
                                                                [dashboardConstants.INFORMATION_CONSTANTS.COMPETITION]
                                                                [dashboardConstants.INFORMATION_CONSTANTS.COMPETITION_NAME]
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>{
                                                            dashboardConstants.INFORMATION_SUBJECT.LEFT_BUDGET
                                                        }</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.SQUADS][indexOfSquad]
                                                                [dashboardConstants.INFORMATION_CONSTANTS.BUDGET]
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>
                                                            {
                                                                dashboardConstants.INFORMATION_SUBJECT.COMPETITION_END_DATE
                                                            }
                                                        </label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.SQUADS][indexOfSquad]
                                                                [dashboardConstants.INFORMATION_CONSTANTS.COMPETITION]
                                                                [dashboardConstants.INFORMATION_CONSTANTS.COMPETITION_END_DATE]
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form> : null}
                    </div>
                    :

                    <div className="row">
                        <div style={{width:"100%"}} className="card-custom card">
                            <div className="card-img card-custom-img"
                                 style={{backgroundImage:"url(https://www.itl.cat/pngfile/big/38-381433_photo-wallpaper-wallpaper-sport-stadium-football-allianz-arena.jpg)"}}>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-6 offset-6">
                                        <div className="no-team-background">
                                            <div className="container">
                                                <div className="row">
                                                    <h5 className="mt-5 p-4 whiteText text-center">you have no team in this competition if you want to have a team hover this box.</h5>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <Button variant="success" href="/picksquad">MAKE YOUR TEAM NOW!</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                }
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
        getUserInformation
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Information);