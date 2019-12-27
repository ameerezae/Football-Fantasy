import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Modal} from "react-bootstrap";
import {toggleModal,setSelectedGame} from "../../../_actions/weeklyGamesActions";
class Game_details extends Component {

    render() {
        return (
            <div>
                {this.props.gameDetail.game_details_fetched ?
                <Modal show={this.props.weeklyGames.visible_modal} size="xl" scrollable
                     onHide={() => this.props.toggleModal(false)}
                     onExit={() => {this.props.toggleModal(false)
                        this.props.setSelectedGame(null)
                    }}>
                    <Modal.Header closeButton>
                        <Modal.Title>MATCH DETAILS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
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
                    </Modal.Body>
                    
                    <Modal.Body>
                    <hr/>
                        fuck
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
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game_details);