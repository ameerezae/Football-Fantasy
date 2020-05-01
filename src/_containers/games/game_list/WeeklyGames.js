import React, {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {getGames, clearReducer, setSelectedGame, toggleModal} from '../../../_actions/weeklyGamesActions'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Alert, Spinner} from "react-bootstrap";
import Game_details from '../game_details/game_details'
import {getSelectedGame} from "../../../_actions/gameDetailActions";

class WeeklyGames extends Component {


    countingMatchesStatus = () => {
        let finishedCount = 0;
        let scheduledCount = 0;
        if (this.props.games.games_fetched_success) {
            this.props.games.games.forEach((game) => {
                if (game.status === "Finished") {
                    finishedCount++;
                } else {
                    scheduledCount++;
                }
            })
        }
        return {
            finished: finishedCount,
            scheduled: scheduledCount
        }
    };


    componentWillMount() {
        this.props.getGames();
    }

    componentWillUnmount() {
        this.props.clearReducer();
    }

    onClickHandler(element) {
        console.log("now we have to see gamedeatil modal")
        this.props.setSelectedGame(element)
        this.props.getSelectedGame()
        this.props.toggleModal(true)

    }

    render() {
        const counts = this.countingMatchesStatus();
        const finishedCounts = counts.finished;
        const scheduledCounts = counts.scheduled;
        return (
            <div>
                <Game_details/>
                <div>
                    {this.props.games.games_fetched_success ?
                        <div>
                            <h4 className="text-white mt-5 mb-3">FINISHED GAMES</h4>
                            {finishedCounts !== 0 ?
                                <ListGroup>
                                    {this.props.games.games.map((element, key) => {


                                        return (
                                            <div>
                                                {element.status === "Finished" ?
                                                    <ListGroup.Item variant='success' action onClick={() => {
                                                        this.onClickHandler(element)

                                                    }}>
                                                        <div className="row align-items-center">
                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    <img src={element.homeTeam.image} width={50}
                                                                         alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    {element.homeTeam.name}
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    {element.homeTeamScore}
                                                                </div>
                                                            </div>
                                                            <div className="col  row justify-content-center">
                                                                <div className="container">
                                                                    <div className="row justify-content-center">
                                                                        <h5>-</h5>
                                                                    </div>
                                                                    <div
                                                                        className="row justify-content-center text-center">
                                                                        {element.utcDate.replace("T", "  ")}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    {element.awayTeamScore}
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    {element.awayTeam.name}
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    <img src={element.awayTeam.image} width={50}
                                                                         alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    : null}
                                            </div>

                                        )


                                    })}
                                </ListGroup>
                                :
                                <Alert variant="warning">
                                    <Alert.Heading>No Finished Match!!!</Alert.Heading>
                                    <p>
                                        There are no Finished matches, Come back later
                                    </p>
                                </Alert>
                            }
                            <h4 className="text-white mt-5 mb-3">SCHEDULED GAMES</h4>
                            {scheduledCounts !== 0 ?
                                <ListGroup className="mb-5">
                                    {this.props.games.games.map((element, key) => {


                                        return (
                                            <div>
                                                {element.status === "Scheduled" ?
                                                    <ListGroup.Item variant='info' action onClick={() => {
                                                        this.onClickHandler(element)
                                                    }}>
                                                        <div className="row align-items-center">
                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    <img src={element.homeTeam.image} width={50}
                                                                         alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    {element.homeTeam.name}
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div
                                                                    className="row justify-content-center align-items-center">
                                                                    <h5>Scheduled</h5>
                                                                </div>
                                                                <div
                                                                    className="row justify-content-center align-items-center">
                                                                    <h6>{element.utcDate.replace("T", " ")}</h6>
                                                                </div>
                                                            </div>

                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    {element.awayTeam.name}
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="row justify-content-center">
                                                                    <img src={element.awayTeam.image} width={50}
                                                                         alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    : null}
                                            </div>

                                        )


                                    })}
                                </ListGroup>
                                :
                                <Alert variant="warning" className="mb-5">
                                    <Alert.Heading>No Scheduled Match!!!</Alert.Heading>
                                    <p>
                                        There are no Scheduled matches, Come back later
                                    </p>
                                </Alert>
                            }
                        </div>
                        :
                        this.props.games.games_fetched_failed ?

                            <Alert variant="success">
                                <Alert.Heading>No recent match!!!</Alert.Heading>
                                <p>
                                    There are no recent matches, Come back later
                                </p>
                                <hr/>
                                <p className="mb-0">
                                    Whenever you need to, be sure to use margin utilities to keep things nice
                                    and tidy.
                                </p>
                            </Alert> :
                            <div className="row justify-content-center">
                                <Spinner animation="border" variant="danger"/>
                            </div>}
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        games: state.gameReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getGames,
        clearReducer,
        setSelectedGame,
        getSelectedGame,
        toggleModal
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyGames);

