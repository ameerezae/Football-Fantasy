import React, {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Alert, Spinner} from "react-bootstrap";
import {getUsers,clearReducer} from "../../../_actions/leaderBoardActions";

class LeaderBoard extends Component {
    componentWillMount() {
        this.props.getUsers();
    }

    componentWillUnmount() {
        this.props.clearReducer();
    }

    render() {
        return (
                <div>
                    <h4 className="text-white mt-5 mb-3">LEADERBOARD</h4>
                    {this.props.leaderboard.users_fetched_success ?
                        <div>
                            <ListGroup>
                                {this.props.leaderboard.users.map((element, key) => {


                                        return (
                                            <div>
                                                <ListGroup.Item variant='info'> {/*action onClick={() => { 
                                                //     this.onClickHandler(element)

                                                // }}>*/}
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
                                            </div>

                                                    )
                                })}
                            </ListGroup>

                        </div>
                        :
                        this.props.leaderboard.users_fetched_failed ?

                            <Alert variant="success">
                                <Alert.Heading>Abandoned!!!</Alert.Heading>
                                <p>
                                    There are no squad in this competition, Come back later
                                </p>
                                <hr/>
                                <p className="mb-0">
                                    Go to dashboard and create your squad in this competition.
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
        leaderboard: state.leaderBoardReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUsers,
        clearReducer,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);

