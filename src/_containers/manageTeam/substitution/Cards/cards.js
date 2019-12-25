import React, {Component} from 'react';
import Card from "./card";
import {getAllCards} from "../../../../_actions/cardsActions";
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
                Object.keys(this.props.cardsState.cards).map((key)=>{
                    return(
                        <div className="row">
                            <Card name = {key}/>
                        </div>
                    )
                }) : null};
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        cardsState : state.cardsReducer,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getAllCards,
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Cards);