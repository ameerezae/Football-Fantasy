import React, {Component} from 'react';
import Substitution from "./substitution/substitution";
import {connect} from "react-redux";
import Transfer from "../transfer/transfer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ThreePlayersImage from "../../_assets/player-comp-3-1x.7eb15f60.png"
import "./manageTeam.scss";
import {getMyTeam} from "../../_actions/manageTeamActions";
import {bindActionCreators} from "redux";
import Dashboard from "../dashboard/dashboard/dashboard";
import WeeklyGames from "../games/game_list/WeeklyGames";
import LeaderBoard from "../leaderBoard/leaderBoardList/leaderBoardList";
import * as universalCons from "../../constants/universalConstants";
import Swal from "sweetalert2";
import * as dashboardConstants from "../../constants/dashboard/dashboardConstants";

class ManageTeam extends Component {
    // async componentWillMount() {
    //     const response = await this.props.getMyTeam()
    //     if(!response){
    //         this.props.history.push(`picksquad`)
    //     };
    //
    // }
    componentWillMount() {
        if(!this.isAuthorized()) {
            Swal.fire({
                position: 'center',
                type: 'error',
                title: 'please log in first!',
                showConfirmButton: false,
                timer: 1500
            });
            this.props.history.push("/");
        }
    }


    isAuthorized = () => {
        const token = localStorage.getItem(universalCons.ACCESS_TOKEN);
        return !!token;
    };

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

        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col row align-items-center">
                                <h1 className="text-white">FANTASY</h1>
                        </div>
                        <div className="col">
                            <div className="row justify-content-end">
                                <img src={ThreePlayersImage} width="250" alt="ww"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="main-background"></div>
                    <Tabs>
                        <TabList>
                            <Tab>Dashboard</Tab>
                            {indexOfSquad !== -1 ?
                                <Tab>Substitution</Tab>
                                :
                                <Tab>Pick Squad</Tab>
                            }
                            {indexOfSquad !== -1 ?
                                <Tab>Transfer</Tab>
                                : null
                            }
                            <Tab>Weekly Games</Tab>
                            <Tab>LeaderBoard</Tab>
                        </TabList>
                        <TabPanel>
                            <Dashboard/>
                        </TabPanel>
                        <TabPanel>
                            <Substitution history={this.props.history}/>
                        </TabPanel>
                        {indexOfSquad !== -1 ?
                            <TabPanel>
                                <Transfer/>
                            </TabPanel>
                            :
                            null
                        }
                        <TabPanel>
                            <WeeklyGames/>
                        </TabPanel>
                        <TabPanel>
                            <LeaderBoard/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>




        );
    }
}

function mapStateToProps(state){
    return{
        myTeam : state.manageTeamReaducer,
        dashboard: state.dashboardReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getMyTeam,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageTeam);