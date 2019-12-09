import React, {Component} from 'react';
import Squad from "../squad/squad";
import Bench from "../bench/bench";
import {connect} from "react-redux";
import '@lottiefiles/lottie-player';
import {bindActionCreators} from "redux";
import {getMyTeam} from "../../../_actions/manageTeamActions";
import {Button} from "react-bootstrap";
import ManageTeamApi from "../../../_api/manageTeamApi";
import Swal from "sweetalert2";
class Substitution extends Component {
    async componentWillMount() {
        const bool = await this.props.getMyTeam(this.props.dashboard.selectedCompetition);
        if(!bool){
            console.log("push to history here")
            this.props.history.push(`/picksquad`);
        }
    }

    render() {
        return (
            <div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-9">
                            <Squad/>
                            <Bench/>
                        </div>
                        <div className="col-3">
                            <Button variant="primary" onClick={async () => {
                                const res = await ManageTeamApi.sendSubsTeam(this.props.myTeam.squad, this.props.myTeam["captain-id"]);
                                if(res.status === 200){
                                    Swal.fire({
                                        position: 'center',
                                        type: 'success',
                                        title: res.data.detail,
                                        showConfirmButton: false,
                                        timer: 3000
                                    })
                                }else{
                                    Swal.fire({
                                        position: 'center',
                                        type: 'error',
                                        title : res.data.message,
                                        showConfirmButton: false,
                                        timer: 3000
                                    })
                                }
                            }}>Confirm</Button>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myTeam: state.manageTeamReaducer,
        dashboard: state.dashboardReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMyTeam
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Substitution);