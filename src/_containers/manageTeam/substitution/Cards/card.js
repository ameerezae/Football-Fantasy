import React, {Component} from 'react';
import ReactCardFlipper from "react-card-flipper";
import ReactCardFlip from 'react-card-flip';
import {Button} from "react-bootstrap";
import * as cardsConstants from "../../../../constants/cards/cardsConstants";
import {connect} from "react-redux";
class Card extends Component {
    state = {
        isFlipped: false
    };
    toggle = () => {
        this.setState({isFlipped : !this.state.isFlipped})
    }
    render() {
        return (
            <div className="">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <div>
                        <div className={this.props.mode === cardsConstants.CARDS_MODES.INACTIVE? "card bg-c-pink order-card" : "card bg-c-green order-card" }>
                            <div className="card-block">
                                <h6 className="m-b-20">{this.props.name}</h6>
                                <h2 className="text-right"><i className="fa fa-rocket f-left"></i><span>486</span></h2>
                                <p className="m-b-0">{this.props.mode}<span className="f-right">351</span></p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <Button disabled={this.props.cardsState.activeCard !== "nothing" && this.props.cardsState.activeCard !== this.props.name} variant="primary" onClick={()=>this.toggle()}>
                                {this.props.mode === cardsConstants.CARDS_MODES.INACTIVE ? cardsConstants.CARDS_MODES.ACTIVE : cardsConstants.CARDS_MODES.INACTIVE}
                            </Button>
                        </div>
                    </div>

                    <div>
                        <div className={this.props.mode === cardsConstants.CARDS_MODES.INACTIVE? "card bg-c-pink order-card" : "card bg-c-green order-card" }>
                            <div className="card-block">
                                <h6 className="m-b-20">{this.props.name}</h6>
                                <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>486</span></h2>
                                <p className="m-b-0">{this.props.mode}<span className="f-right">351</span></p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <Button disabled={this.props.cardsState.activeCard !== "nothing" && this.props.cardsState.activeCard !== this.props.name} variant="primary" onClick={()=>this.toggle()}>
                                {this.props.mode === cardsConstants.CARDS_MODES.INACTIVE ? cardsConstants.CARDS_MODES.ACTIVE : cardsConstants.CARDS_MODES.INACTIVE}
                            </Button>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cardsState: state.cardsReducer,
    }
}

export default connect(mapStateToProps)(Card);