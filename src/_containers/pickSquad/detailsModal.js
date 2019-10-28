import React, {Component} from 'react';
import Modal from "react-awesome-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";
import {calculateMoney} from "./calculateMoney";
import Swal from 'sweetalert2'
import {
    toggleModal,
    setGoalKeeper,
    setDefenders,
    setMiddles,
    setForwards,
    setBench,
    setWholeItems,
    setFilteredPosition,
    setCaptain,
    setRemainedMoney
} from "../../_actions/squadActions";
import {bindActionCreators} from "redux";
import "./detailsModal.scss";
import {FaRegCopyright, FaTrashAlt} from "react-icons/all"

class DetailsModal extends Component {

    onRemove = () => {
        if (this.props.format["captain-id"] && this.props.format[this.props.format.pickedPosition][this.props.format.pickedKey].name === this.props.format["captain-id"].name) {
            this.props.setCaptain(null);
        }
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
            case "Goalkeeper" :
                this.props.setGoalKeeper(selectedPos);
                break;
            case "Defender" :
                this.props.setDefenders(selectedPos);
                break;
            case "Midfielder" :
                this.props.setMiddles(selectedPos);
                break;
            case "Forward" :
                this.props.setForwards(selectedPos);
                break;
            case "bench" :
                this.props.setBench(selectedPos);
                break;
            default :
                break;

        }
        this.props.toggleModal(false);
        const remainedMoney = calculateMoney(this.props.format.Defender, this.props.format.Midfielder, this.props.format.Forward, this.props.format.bench, this.props.format.Goalkeeper)
        this.props.setRemainedMoney(remainedMoney)

    };

    render() {
        const clicked = this.props.format[this.props.format.pickedPosition] ? this.props.format[this.props.format.pickedPosition][this.props.format.pickedKey] : null
        return (
            <Modal visible={this.props.format.visibleModal} effect="fadeInDown"
                   onClickAway={() => this.props.toggleModal(false)}>
                <div className="container p-4 background-modal w-100">
                    <div className="row align-items-center">
                        <div className="col-5">
                            {clicked ? <img style={{backgroundColor: "white", borderRadius: "50%"}} src={clicked.image}
                                            alt="img" width="100px"/>

                                : null}
                        </div>
                        <div className="col-7">
                            <h5 className="text-white">{clicked ? clicked.name : null}</h5>
                            <div className="text-white">{clicked ? clicked.club : null}</div>
                            <div className="text-white">{clicked ? clicked.price : null} $</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row align-items-center justify-content-center py-4">
                        <FaTrashAlt className="mr-2" style={{fontSize: "2.5rem", color: "red", cursor: "pointer"}}
                                    onClick={this.onRemove}/>

                        {this.props.format.pickedPosition !== "bench" ? <FaRegCopyright className="ml-2" style={{
                            fontSize: "2.5rem",
                            color: "yellow",
                            cursor: "pointer"
                        }} onClick={() => {
                            this.props.setCaptain(this.props.format[this.props.format.pickedPosition][this.props.format.pickedKey]);
                            this.props.toggleModal(false);
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000
                            });
                            Toast.fire({
                                type: 'success',
                                width : 100
                            })
                        }}/> : null}
                    </div>
                    <hr/>
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
        setCaptain,
        setRemainedMoney
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);