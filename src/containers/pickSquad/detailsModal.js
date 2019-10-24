import React, {Component} from 'react';
import Modal from "react-awesome-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";
import {
    toggleModal,
    setGoalKeeper,
    setDefenders,
    setMiddles,
    setForwards,
    setBench,
    setWholeItems,
    setFilteredPosition
} from "../../actions";
import {bindActionCreators} from "redux";
import "./detailsModal.scss";

class DetailsModal extends Component {

    onRemove = () => {
        let newWholeItems = this.props.format.wholeItems;
        newWholeItems.push(this.props.format[this.props.format.pickedPosition][this.props.format.pickedKey])
        this.props.setWholeItems(newWholeItems);
        let filteredPosition;
        this.props.format.pickedPosition !== "bench" ?
            filteredPosition = newWholeItems.filter(element => element.position === this.props.format.pickedPosition)
            :
            filteredPosition = newWholeItems;
        this.props.setFilteredPosition(filteredPosition);
        let selectedPos = this.props.format[this.props.format.pickedPosition];
        selectedPos[this.props.format.pickedKey] = null;
        switch (this.props.format.pickedPosition) {
            case "GK" :
                this.props.setGoalKeeper(selectedPos);
                break;
            case "defender" :
                this.props.setDefenders(selectedPos);
                break;
            case "middle" :
                this.props.setMiddles(selectedPos);
                break;
            case "forward" :
                this.props.setForwards(selectedPos);
                break;
            case "bench" :
                this.props.setBench(selectedPos);
                break;
            default :
                break;

        }
        this.props.toggleModal(false);
    };

    render() {
        const clicked = this.props.format[this.props.format.pickedPosition] ? this.props.format[this.props.format.pickedPosition][this.props.format.pickedKey] : null
        return (
            <Modal visible={this.props.format.visibleModal} effect="fadeInDown"
                   onClickAway={() => this.props.toggleModal(false)}>
                <div className="container background-modal">
                    <div className="row align-items-center">
                        <di className="col-5">
                            {clicked ? <img src={clicked.image} alt="img" width="100px"/>

                                : null}
                        </di>
                        <div className="col-7">
                            <h5>{clicked ? clicked.name : null}</h5>
                            <button onClick={this.onRemove}>Remove</button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        format: state.formatReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleModal,
        setGoalKeeper,
        setDefenders,
        setMiddles,
        setForwards,
        setBench,
        setWholeItems,
        setFilteredPosition,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);