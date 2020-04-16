import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import * as dashboardConstants from "../../../constants/dashboard/dashboardConstants";
import Edit from "./Edit";
import *as universalCons from "../../../constants/universalConstants";


class PersonalInfo extends Component {
    render() {
        return (
            <div className="row">
                <div style={{width:"100%"}} className="card-custom card">
                    <div className="card-img card-custom-img"
                         style={{backgroundImage:"url(https://i.dailymail.co.uk/i/pix/2017/10/26/07/459C6D6600000578-0-image-a-13_1508998092047.jpg)"}}>
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="no-team-background">
                                    {this.props.dashboard.areInformationFetched?


                                        <div className="container">
                                            <div className="row">
                                                <div className="col-3 mt-3 p-4 whiteText text-center">USERNAME</div>
                                                <div className="col-9 mt-3 p-4 whiteText text-center">
                                                    <h5>
                                                        {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.USER][dashboardConstants.INFORMATION_CONSTANTS.USER_NAME]}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-3   whiteText text-center">EMAIL</div>
                                                <div className="col-9  whiteText text-center">
                                                    <h5>
                                                        {this.props.dashboard.information[dashboardConstants.INFORMATION_CONSTANTS.USER][dashboardConstants.INFORMATION_CONSTANTS.EMAIL]}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-3   whiteText text-center"><Edit/></div>
                                                <div className="col-9  whiteText text-center">
                                                        <Button variant="danger" href={"/"} onClick={()=>{
                                                            localStorage.removeItem(universalCons.ACCESS_TOKEN);
                                                            localStorage.removeItem(universalCons.REFRESH_TOKEN);
                                                            localStorage.removeItem(universalCons.CURRENT_COMP);
                                                        }}>
                                                            LOGOUT
                                                        </Button>
                                                </div>
                                            </div>
                                        </div>

                                        :null
                                    }

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
        dashboard: state.dashboardReducer
    }
}

export default connect(mapStateToProps)(PersonalInfo);