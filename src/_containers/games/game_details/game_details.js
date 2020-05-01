import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Modal} from "react-bootstrap";
import {toggleModal,setSelectedGame} from "../../../_actions/weeklyGamesActions";
import {clearReducer} from "../../../_actions/gameDetailActions";
import {DETAIL_SUBJECT} from "../../../constants/games/gamesConstants";
import "./game_details.scss";
class Game_details extends Component {

    render() {
        return (
            <div>
                {this.props.gameDetail.game_details_fetched ?
                <Modal show={this.props.weeklyGames.visible_modal} size="xl" scrollable
                     onHide={() => this.props.toggleModal(false)}
                     onExit={() => {this.props.toggleModal(false)
                        this.props.setSelectedGame(null)
                        this.props.clearReducer()
                    }}>
                    <Modal.Header closeButton>
                        <Modal.Title>MATCH DETAILS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container match-event-background p-2">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="row justify-content-center">
                                        <img src={this.props.gameDetail.game_details.homeTeam.image} width={50} alt=""/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row justify-content-center">
                                        {this.props.gameDetail.game_details.homeTeam.name}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row justify-content-center">
                                        {this.props.gameDetail.game_details.homeTeamScore}
                                    </div>
                                </div>
                                <div className="col  row justify-content-center">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <h5>-</h5>
                                        </div>
                                        {/* <div className="row justify-content-center text-center">
                                            {this.props.gameDetail.game_details.utcDate.replace("T","  ")}
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row justify-content-center">
                                        {this.props.gameDetail.game_details.awayTeamScore}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row justify-content-center">
                                        {this.props.gameDetail.game_details.awayTeam.name}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row justify-content-center">
                                        <img src={this.props.gameDetail.game_details.awayTeam.image} width={50} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                        <hr/>
                        <div className="row p-3">
                            <div className="container">
                                {this.props.gameDetail.game_details[DETAIL_SUBJECT.EVENTS].length !== 0 ?
                                <div>
                                <h5>GAME EVENTS</h5>
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
                                            <h6>PLAYER</h6>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row justify-content-center">
                                            <h6>CLUB</h6>
                                        </div>
                                    </div>
                                </div></div> : null }
                                {this.props.gameDetail.game_details[DETAIL_SUBJECT.EVENTS].length !== 0 ?
                                    this.props.gameDetail.game_details[DETAIL_SUBJECT.EVENTS].map((element) => {
                                        return (
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col">
                                                    <div className="row justify-content-center text-center">
                                                        {element[DETAIL_SUBJECT.EVENT_TYPE]}
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="row justify-content-center text-center">
                                                        {element[DETAIL_SUBJECT.EVENT_MINUTE]}
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="row justify-content-center text-center">
                                                        {element[DETAIL_SUBJECT.PLAYER][DETAIL_SUBJECT.NAME]}
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="row justify-content-center text-center">
                                                        <img width={50}
                                                                src={element[DETAIL_SUBJECT.PLAYER][DETAIL_SUBJECT.CLUB][DETAIL_SUBJECT.CLUB_IMAGE]}
                                                                alt="" height="60"/>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                <div className="col">
                                    <div className="row justify-content-center align-items-center">
                                        <h5>Scheduled</h5>
                                    </div>
                                    <div className="row justify-content-center align-items-center">
                                        <h6>{this.props.gameDetail.game_details.utcDate.replace("T"," ")}</h6>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal> : null}
            </div>
            
        )
    }
}

{/* <div className="row align-items-center">
<div className="col  row justify-content-center">
        <div className="row justify-content-center">
            <h5>fuck</h5>
        </div>
</div>
</div> */}
function mapStateToProps(state) {
    return {
        weeklyGames: state.gameReducer,
        statisticState: state.statisticsReducer,
        gameDetail: state.gameDetailReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleModal,
        setSelectedGame,
        clearReducer,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game_details);