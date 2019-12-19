import React, {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {getGames,clearReducer} from '../../../_actions/weeklyGamesActions'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Alert,Spinner} from "react-bootstrap";

class WeeklyGames extends Component {
    componentWillMount() {
        this.props.getGames();
    }

    componentWillUnmount() {
        this.props.clearReducer();
    }

    render() {
        return (
            <div>
                {this.props.games.games_fetched_success ?
                    <ListGroup>
                        {this.props.games.games.map((element, key) => {
                            console.log(element)
                            return (
                                <ListGroup.Item variant='success'>
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
                            )
                        })}
                    </ListGroup> :
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
                            <Spinner animation="border" variant="danger" />
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
        clearReducer
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyGames);

