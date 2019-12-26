import React, {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {getGames, clearReducer, setSelectedGame} from '../../../_actions/weeklyGamesActions'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Alert, Spinner} from "react-bootstrap";

class WeeklyGames extends Component {
    componentWillMount() {
        this.props.getGames();
    }

    componentWillUnmount() {
        this.props.clearReducer();
    }

    onClickHandler(element) {
        this.props.setSelectedGame(element)

    }

    render() {
        return (
            <div>
                <h4 className="text-white mt-5 mb-3">FINISHED GAMES</h4>
                {this.props.games.games_fetched_success ?
                    <div>
                        <ListGroup>
                            {this.props.games.games.map((element, key) => {


                                    return (
                                        <div>
                                            {element.status === "Finished"?
                                            <ListGroup.Item variant='success' action onClick={() => {
                                                this.onClickHandler(element)
                                            }}>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="row justify-content-center">
                                                                <img src={element.homeTeam.image} width={50} alt=""/>
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
                                                                <div className="row justify-content-center text-center">
                                                                    {element.utcDate.replace("T","  ")}
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
                                                                <img src={element.awayTeam.image} width={50} alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                : null }
                                        </div>

                                                )


                            })}
                        </ListGroup>
                        <h4 className="text-white mt-5 mb-3">Scheduled GAMES</h4>
                        <ListGroup>
                            {this.props.games.games.map((element, key) => {


                                return (
                                    <div>
                                        {element.status === "Scheduled"?
                                            <ListGroup.Item variant='info' action onClick={() => {
                                                this.onClickHandler(element)
                                            }}>
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <div className="row justify-content-center">
                                                            <img src={element.homeTeam.image} width={50} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="row justify-content-center">
                                                            {element.homeTeam.name}
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="row justify-content-center align-items-center">
                                                            <h5>Scheduled</h5>
                                                        </div>
                                                        <div className="row justify-content-center align-items-center">
                                                            <h6>{element.utcDate.replace("T"," ")}</h6>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <div className="row justify-content-center">
                                                            {element.awayTeam.name}
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="row justify-content-center">
                                                            <img src={element.awayTeam.image} width={50} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            : null }
                                    </div>

                                )


                            })}
                        </ListGroup>

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
        setSelectedGame

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyGames);

