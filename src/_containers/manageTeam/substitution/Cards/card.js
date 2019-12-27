import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import {Button} from "react-bootstrap";
import * as cardsConstants from "../../../../constants/cards/cardsConstants";
import {connect} from "react-redux";
import Swal from "sweetalert2";
import {bindActionCreators} from "redux";
import {postCard} from "../../../../_actions/cardsActions";
import * as universalConstants from "../../../../constants/universalConstants";
import {IoIosFootball} from "react-icons/all";
class Card extends Component {
    state = {
        isFlipped: false
    };

    postTheCard = (card) => {
        Swal.fire({
            title: 'Are you sure?',
            text: card === cardsConstants.CARDS_NAMES.WILD_CARD || card === cardsConstants.CARDS_NAMES.FREE_HIT ? "You won't be able to revert this!" : "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then(async (result) => {
            if (result.value) {
                const response = await this.props.postCard(card, this.props.cardsState.cards[card] === cardsConstants.CARDS_MODES.ACTIVE ? cardsConstants.CARDS_MODES.INACTIVE : cardsConstants.CARDS_MODES.ACTIVE);
                console.log(response);
                if(response.status === universalConstants.REQUESTS_STATUS.OK){
                    this.toggle();
                }
                else{
                    const message = response.data.message;
                    Swal.fire(
                        'Oooooops!!',
                        message,
                        'error'
                    )
                }
            }
        })
    }
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
                                <h6 className="m-b-20 text-uppercase">{this.props.name}</h6>
                                <h2 className="text-right"><i className="fa fa-rocket f-left"></i><span><IoIosFootball/></span></h2>
                                <p className="m-b-0 mt-3">status<span className="f-right text-uppercase">{this.props.mode}</span></p>
                                <hr/>
                                <div className="row">
                                    <div className="col-12">
                                        <Button className="w-100 text-uppercase" disabled={this.props.cardsState.activeCard !== "nothing" && this.props.cardsState.activeCard !== this.props.name} variant={this.props.mode === cardsConstants.CARDS_MODES.INACTIVE? "primary" : "warning"} onClick={()=>this.postTheCard(this.props.name)}>
                                            {this.props.mode === cardsConstants.CARDS_MODES.INACTIVE ? cardsConstants.CARDS_MODES.ACTIVE : cardsConstants.CARDS_MODES.INACTIVE}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={this.props.mode === cardsConstants.CARDS_MODES.INACTIVE? "card bg-c-pink order-card" : "card bg-c-green order-card" }>
                            <div className="card-block">
                                <h6 className="m-b-20 text-uppercase">{this.props.name}</h6>
                                <h2 className="text-right"><i className="fa fa-rocket f-left"></i><span><IoIosFootball/></span></h2>
                                <p className="m-b-0 mt-3">status<span className="f-right text-uppercase">{this.props.mode}</span></p>
                                <hr/>
                                <div className="row">
                                    <div className="col-12">
                                        <Button className="w-100 text-uppercase" disabled={this.props.cardsState.activeCard !== "nothing" && this.props.cardsState.activeCard !== this.props.name} variant={this.props.mode === cardsConstants.CARDS_MODES.INACTIVE? "primary" : "warning"} onClick={()=>this.postTheCard(this.props.name)}>
                                            {this.props.mode === cardsConstants.CARDS_MODES.INACTIVE ? cardsConstants.CARDS_MODES.ACTIVE : cardsConstants.CARDS_MODES.INACTIVE}
                                        </Button>
                                    </div>
                                </div>
                            </div>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postCard
    }, dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(Card);