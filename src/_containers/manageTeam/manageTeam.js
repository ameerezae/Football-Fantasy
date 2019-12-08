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
class ManageTeam extends Component {
    // async componentWillMount() {
    //     const response = await this.props.getMyTeam()
    //     if(!response){
    //         this.props.history.push(`picksquad`)
    //     };
    //
    // }

    render() {
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
                            <Tab>Substitution</Tab>
                            <Tab>Transfer</Tab>
                        </TabList>
                        <TabPanel>
                            <Dashboard/>
                        </TabPanel>
                        <TabPanel>
                            <Substitution/>
                        </TabPanel>
                        <TabPanel>
                            <Transfer/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>




        );
    }
}

function mapStateToProps(state){
    return{
        myTeam : state.manageTeamReaducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getMyTeam,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageTeam);