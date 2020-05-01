import React, {Component} from 'react';
import Card from "./card";
import "./Cards.scss";
import {getAllCards, postCard, clearAllCars} from "../../../../_actions/cardsActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Cards extends Component {
    componentWillMount() {
        this.props.getAllCards();
    }

    componentWillUnmount() {
        this.props.clearAllCars();
    }

    render() {
        return (
            <div>
                <h3 className="text-white font-weight-bold mt-5">CARDS</h3>
                {this.props.cardsState.fetchedCards ?
                    <div className="row mt-3">

                        {Object.keys(this.props.cardsState.cards).map((key) => {
                                return (
                                    <div className="col-3" >
                                        <Card name={key} mode={this.props.cardsState.cards[key]}/>
                                    </div>
                                )

                            }
                        )}
                    </div>
                    : null}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        cardsState: state.cardsReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllCards,
        postCard,
        clearAllCars,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);