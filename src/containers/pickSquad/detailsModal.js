import React, {Component} from 'react';
import Modal from "react-awesome-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";
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
    setCaptain
} from "../../actions";
import {bindActionCreators} from "redux";
import "./detailsModal.scss";
import {IoMdCloseCircle, FaCopyright,FaRegCopyright,FaTrashAlt} from "react-icons/all"
class DetailsModal extends Component {

    onRemove = () => {
        if (this.props.format.captain && this.props.format[this.props.format.pickedPosition][this.props.format.pickedKey].name === this.props.format.captain.name) {
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
                <div className="container p-4 background-modal w-100">
                    <div className="row align-items-center">
                        <div className="col-5">
                            {clicked ? <img style={{backgroundColor:"white",borderRadius:"50%"}} src={clicked.image} alt="img" width="100px"/>

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
                        <FaTrashAlt className="mr-2" style={{fontSize:"2.5rem",color:"red",cursor:"pointer"}} onClick={this.onRemove}/>

                        {this.props.format.pickedPosition !== "bench" ? <FaRegCopyright className="ml-2" style = {{fontSize:"2.5rem",color:"yellow",cursor:"pointer"}} onClick={() => {
                            this.props.setCaptain(this.props.format[this.props.format.pickedPosition][this.props.format.pickedKey]);this.props.toggleModal(false); Swal.fire({
                                type: 'success',
                                width : 300,
                                showConfirmButton: false,
                                timer: 1500
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
        setCaptain
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);