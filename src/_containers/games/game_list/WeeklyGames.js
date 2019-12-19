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
                                <ListGroup.Item variant='dark'>
                                    <div style={{display: 'table-row'}}>
                                        <div style={{display: 'table-cell', width: '50%'}}>
                                            <div style={{display: 'table-row'}}>
                                                <div style={{width: '20%', display: 'table-cell', align: "left"}}>
                                                    <img src={element.homeTeam.image} alt="sd"
                                                         style={{height: 'auto', width: '50%'}}/>
                                                </div>
                                                <div style={{width: '40%', display: 'table-cell', align: "left"}}>
                                                    <h5>{element.homeTeam.name}</h5>
                                                </div>
                                                <div style={{width: '40%', display: 'table-cell', align: "left"}}>
                                                    <h5>{element.homeTeamScore}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{display: 'table-cell', width: '50%'}}>
                                            <div style={{display: 'table-row'}}>
                                                <div style={{width: '40%', display: 'table-cell', align: "right"}}>
                                                    <h5>{element.awayTeamScore}</h5>
                                                </div>
                                                <div style={{width: '40%', display: 'table-cell', align: "right"}}>
                                                    <h5>{element.awayTeam.name}</h5>
                                                </div>
                                                <div style={{width: '20%', display: 'table-cell', align: "right"}}>
                                                    <img src={element.awayTeam.image} alt="sd"
                                                         style={{height: 'auto', width: '50%'}}/>
                                                </div>
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
                    </Alert> : <Spinner animation="border" variant="danger" />
                }
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

