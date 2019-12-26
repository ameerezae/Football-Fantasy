import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Modal} from "react-bootstrap";
import {toggleModal,setSelectedGame} from "../../../_actions/weeklyGamesActions";
class Game_details extends Component {

    render() {
        return (
            <div>
                <Modal show={this.props.weeklyGames.visible_modal} size="xl" scrollable
                     onHide={() => this.props.toggleModal(false)}
                     onExit={() => {this.props.toggleModal(false)
                        this.props.setSelectedGame(null)
                    }}>
                    fuck
                </Modal>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        weeklyGames: state.gameReducer,
        statisticState: state.statisticsReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleModal,
        setSelectedGame,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game_details);