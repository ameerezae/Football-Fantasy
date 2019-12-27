import React, {Component} from 'react';
import Card from "./card";
import "./Cards.scss";
import {getAllCards, postCard} from "../../../../_actions/cardsActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Cards extends Component {
    componentWillMount() {
        this.props.getAllCards();
    }

    render() {
        return (
            <div>
                {this.props.cardsState.fetchedCards ?
                    <div className="row">

                        {Object.keys(this.props.cardsState.cards).map((key) => {
                                return (
                                    <div className="col-3" >
                                        <Card name={key} mode={this.props.cardsState.cards[key]}/>
                                    </div>
                                )

                            }
                        )}
                    </div>
                    : null};
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
        postCard
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);