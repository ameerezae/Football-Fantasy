import React, {Component} from 'react';
// import Modal from "react-awesome-modal";
import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleModal, setFirstSelected, localAllowSubs, changeCaptain} from "../../../_actions/manageTeamActions";
import {getOnePlayerStatistics} from "../../../_actions/statisticsActions"
import {FaRegCopyright} from "react-icons/all";
import * as statisticConstants from "../../../constants/statistics/statisticsConstants"
import "./detailModal.scss"
import Swal from "sweetalert2";


class DetailModal extends Component {
    componentWillUnmount() {
        console.log("kossher")
    }

    render() {

        const clicked = this.props.myTeam.squad ? this.props.myTeam.squad[this.props.myTeam.firstSelected] : null;
        return (
            <div>
                {this.props.statisticState.arePlayerStatisticsFetched ?
                    <Modal show={this.props.myTeam.visibleModal} size="xl" scrollable
                           onHide={() => this.props.toggleModal(false)}
                           onExited={() => {
                               this.props.toggleModal(false);
                               this.props.setFirstSelected(null)
                               this.props.localAllowSubs(true);
                           }}>
                        <Modal.Header closeButton>
                            <Modal.Title>STATISTICS</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="container p-3">
                                <div className="row align-items-center">
                                    <div className="container statistics-background">
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="container">
                                                    <div className="row mt-2 ">
                                                        <h4 className="text-white">{this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.PLAYER][statisticConstants.ONE_PLAYER_STATISTICS.NAME]}</h4>
                                                    </div>
                                                    <div className="row">
                                                        <h5 className="text-white">{this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.PLAYER][statisticConstants.ONE_PLAYER_STATISTICS.POSITION]}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-1">
                                                <div className="container p-3">
                                                    <div className="row justify-content-center align-items-center">
                                                        {clicked && clicked.lineup ?
                                                            <FaRegCopyright className="captain-style ml-2"
                                                                            onClick={() => {
                                                                                this.props.changeCaptain(clicked.id);
                                                                                this.props.toggleModal(false);
                                                                                Swal.fire({
                                                                                    position: 'center',
                                                                                    type: 'success',
                                                                                    showConfirmButton: false,
                                                                                    timer: 3000,
                                                                                    width: 200
                                                                                })
                                                                            }}
                                                            />
                                                            : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="container">
                                                    <div className="row align-items-center">
                                                        <div className="col-6">
                                                            <div className="row justify-content-center">
                                                                <img
                                                                    src={this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.CLUB][statisticConstants.ONE_PLAYER_STATISTICS.CLUB_IMAGE]}
                                                                    alt="" width="60"/>
                                                            </div>
                                                            <div className="row justify-content-center">
                                                                <h5 className="text-white text-center">
                                                                    {this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.CLUB][statisticConstants.ONE_PLAYER_STATISTICS.CLUB_NAME]}
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="row justify-content-end">
                                                                {clicked ? <img
                                                                        style={{
                                                                            backgroundColor: "white",
                                                                            borderRadius: "50%"
                                                                        }}
                                                                        src={clicked.image}
                                                                        alt="img" width="100px"/>

                                                                    : null}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-3" style={{backgroundColor: "rgb(0, 255, 135)"}}>
                                    <div className="col">
                                        <div className="container">
                                            <div
                                                className="row justify-content-center">{statisticConstants.ONE_PLAYER_STATISTICS.PRICE}</div>
                                            <div
                                                className="row justify-content-center">{this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.PLAYER][statisticConstants.ONE_PLAYER_STATISTICS.PRICE]}</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="container">
                                            <div
                                                className="row justify-content-center">{statisticConstants.ONE_PLAYER_STATISTICS.STATUS}</div>
                                            <div
                                                className="row justify-content-center">{this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.PLAYER][statisticConstants.ONE_PLAYER_STATISTICS.STATUS]}</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="container">
                                            <div
                                                className="row justify-content-center">{statisticConstants.ONE_PLAYER_STATISTICS.POINT}</div>
                                            <div
                                                className="row justify-content-center">{this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.PLAYER][statisticConstants.ONE_PLAYER_STATISTICS.POINT]}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-3">
                                    <div className="container">
                                        <h5>LAST EVENTS</h5>
                                        <div className="row align-items-center justify-content-center mt-4">
                                            <div className="col">
                                                <div className="row justify-content-center">
                                                    <h6>TYPE</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row justify-content-center">
                                                    <h6>MINUTE</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row justify-content-center">
                                                    <h6>OPPONENT</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row justify-content-center">
                                                    <h6>IMAGE</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.EVENTS].length !== 0 ?
                                            this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.EVENTS].map((element) => {
                                                return (
                                                    <div className="row align-items-center justify-content-center">
                                                        <div className="col">
                                                            <div className="row justify-content-center text-center">
                                                                {element[statisticConstants.ONE_PLAYER_STATISTICS.EVENT_TYPE]}
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="row justify-content-center text-center">
                                                                {element[statisticConstants.ONE_PLAYER_STATISTICS.EVENT_MINUTE]}
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="row justify-content-center text-center">
                                                                {element[statisticConstants.ONE_PLAYER_STATISTICS.EVENT_OPPONENT_NAME]}
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="row justify-content-center text-center">
                                                                <img width={50}
                                                                     src={element[statisticConstants.ONE_PLAYER_STATISTICS.EVENT_IMAGE]}
                                                                     alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :
                                            <div className="row align-items-center justify-content-center">
                                                THERE IS NO LAST EVENT FOR THIS PLAYER
                                            </div>}
                                    </div>
                                </div>
                                <div className="row p-3">
                                    <div className="container">
                                        <h5>LAST GAMES</h5>
                                        <div className="row align-items-center justify-content-center mt-4">
                                            <div className="col-4">
                                                <div className="row justify-content-center">
                                                    <h6>DATE</h6>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="row justify-content-center">
                                                    <h6>RESULT</h6>
                                                </div>
                                            </div>
                                            <div className="col-1">
                                                <div className="row justify-content-center">
                                                    <h6>SCORE</h6>
                                                </div>
                                            </div>
                                            <div className="col-1">
                                                <div className="row justify-content-center">
                                                    <h6>MINUTES</h6>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="row justify-content-center">
                                                    <h6>UP/BENCH</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.MATCHES].length !== 0 ?

                                            this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.MATCHES].map((element) => {
                                                return (
                                                    <div className="row align-items-center justify-content-center mt-2">
                                                        <div className="col-4">
                                                            <div className="row justify-content-center">
                                                                {element[statisticConstants.ONE_PLAYER_STATISTICS.DATE]}
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="row justify-content-center">
                                                                {element[statisticConstants.ONE_PLAYER_STATISTICS.HOME_AWAY] === statisticConstants.ONE_PLAYER_STATISTICS.HOME ?
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <img
                                                                                    src={this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.CLUB][statisticConstants.ONE_PLAYER_STATISTICS.CLUB_IMAGE]}
                                                                                    alt="" width="30" height="40"/>
                                                                            </div>
                                                                            <div className="col">
                                                                                <h6>{element[statisticConstants.ONE_PLAYER_STATISTICS.MATCH_RESULT][statisticConstants.ONE_PLAYER_STATISTICS.HOME_TEAM_SCORE]}</h6>
                                                                            </div>
                                                                            <div className="col">
                                                                                <h5>-</h5>
                                                                            </div>
                                                                            <div className="col">
                                                                                <h6>{element[statisticConstants.ONE_PLAYER_STATISTICS.MATCH_RESULT][statisticConstants.ONE_PLAYER_STATISTICS.AWAY_TEAM_SCORE]}</h6>
                                                                            </div>
                                                                            <div className="col">
                                                                                <img
                                                                                    src={element[statisticConstants.ONE_PLAYER_STATISTICS.MATCH_OPPONENT][statisticConstants.ONE_PLAYER_STATISTICS.MATCH_OPPONENT_IMAGE]}
                                                                                    alt="" width="30" height="40"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <img
                                                                                    src={element[statisticConstants.ONE_PLAYER_STATISTICS.MATCH_OPPONENT][statisticConstants.ONE_PLAYER_STATISTICS.MATCH_OPPONENT_IMAGE]}
                                                                                    alt="" width="30" height="40"/>
                                                                            </div>
                                                                            <div className="col">
                                                                                <h6>{element[statisticConstants.ONE_PLAYER_STATISTICS.MATCH_RESULT][statisticConstants.ONE_PLAYER_STATISTICS.HOME_TEAM_SCORE]}</h6>
                                                                            </div>
                                                                            <div className="col">
                                                                                <h5>-</h5>
                                                                            </div>
                                                                            <div className="col">
                                                                                <h6>{element[statisticConstants.ONE_PLAYER_STATISTICS.MATCH_RESULT][statisticConstants.ONE_PLAYER_STATISTICS.AWAY_TEAM_SCORE]}</h6>
                                                                            </div>
                                                                            <div className="col">
                                                                                <img
                                                                                    src={this.props.statisticState.playerStatistics[statisticConstants.ONE_PLAYER_STATISTICS.CLUB][statisticConstants.ONE_PLAYER_STATISTICS.CLUB_IMAGE]}
                                                                                    alt="" width="30" height="40"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="col-1">
                                                            <div className="row justify-content-center">
                                                                {element[statisticConstants.ONE_PLAYER_STATISTICS.PLAYER_SCORE]}
                                                            </div>
                                                        </div>
                                                        <div className="col-1">
                                                            <div className="row justify-content-center">
                                                                {element[statisticConstants.ONE_PLAYER_STATISTICS.MINUTES_PLAYED]}
                                                            </div>
                                                        </div>
                                                        <div className="col-2">
                                                            <div className="row justify-content-center">
                                                                {element[statisticConstants.ONE_PLAYER_STATISTICS.PLAYER_PLAYING_STATUS]}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : <div className="row align-items-center justify-content-center">
                                                THERE IS NO LAST GAME FOR THIS PLAYER
                                            </div>}
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal> : null}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myTeam: state.manageTeamReaducer,
        statisticState: state.statisticsReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleModal,
        setFirstSelected,
        localAllowSubs,
        changeCaptain,
        getOnePlayerStatistics,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailModal);
