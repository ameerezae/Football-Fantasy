import React, {Component} from 'react';
import Substitution from "./substitution/substitution";
import {connect} from "react-redux";
import Transfer from "../transfer/transfer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ThreePlayersImage from "../../_assets/player-comp-3-1x.7eb15f60.png"
import "./manageTeam.scss";
class ManageTeam extends Component {


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
                            <Tab>Substitution</Tab>
                            <Tab>Transfer</Tab>
                        </TabList>
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



export default connect(mapStateToProps,null)(ManageTeam);