import React, {Component} from 'react';
import Squad from "../squad/squad";
import Bench from "../bench/bench";
import {connect} from "react-redux";
import '@lottiefiles/lottie-player';
import {bindActionCreators} from "redux";
import {getMyTeam, clearMyTeam} from "../../../_actions/manageTeamActions";
import {Button} from "react-bootstrap";
import ManageTeamApi from "../../../_api/manageTeamApi";
import Swal from "sweetalert2";
import Cards from "./Cards/cards";

class Substitution extends Component {
    async componentWillMount() {
        const bool = await this.props.getMyTeam(this.props.dashboard.selectedCompetition);
        if(!bool){
            console.log("push to history here")
            this.props.history.push(`/picksquad`);
        }
    }

    componentWillUnmount() {
        this.props.clearMyTeam();
    }

    async confirmSubs(){
        const res = await ManageTeamApi.sendSubsTeam(this.props.myTeam.squad, this.props.myTeam["captain"]);
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
    }

    render() {
        return (
            <div>
                <h3 className="text-white font-weight-bold mt-5">SUBSTITUTION</h3>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-11">
                            <Squad/>
                            <Bench/>
                        </div>
                        <div className="col-1">
                            <Button variant="primary" onClick={() => this.confirmSubs()}>Confirm</Button>
                       </div>
                    </div>

                    <Cards/>
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
        getMyTeam,
        clearMyTeam
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Substitution);