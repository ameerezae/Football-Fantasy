import React, {Component} from 'react';
import Modal from "react-awesome-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setFormat, setDefenders, setMiddles, setForwards} from "../../_actions/squadActions";
import ThreeFourThree from "../../_assets/3-4-3.png";
import ThreeFiveTwo from "../../_assets/3-5-2.png";
import FourThreeThree from "../../_assets/4-3-3.png";
import FourFourTwo from "../../_assets/4-4-2.png";
import FourFiveOne from "../../_assets/4-5-1.png";
import FiveTwoThree from "../../_assets/5-2-3.png";
import FiveThreeTwo from "../../_assets/5-3-2.png";
import FiveFourOne from "../../_assets/5-4-1.png";

class FormatModal extends Component {
    state = {
        modalVisible: false,
        format: null,
        modalFormats: [
            {value: "3-4-3", image: ThreeFourThree},
            {value: "4-5-1", image: FourFiveOne},
            {value: "4-3-3", image: FourThreeThree},
            {value: "3-5-2", image: ThreeFiveTwo},
            {value: "4-4-2", image: FourFourTwo},
            {value: "5-4-1", image: FiveFourOne},
            {value: "5-3-2", image: FiveThreeTwo},
            {value: "5-2-3", image: FiveTwoThree},
        ],
    };

    toggleModal = () => {
        this.setState({modalVisible: !this.state.modalVisible})
    };

    formatHandleChange = (index) => {
        const value = this.state.modalFormats[index].value;
        const defsCount = Number(value[0]);
        const midsCount = Number(value[2]);
        const forwardsCount = Number(value[4]);
        let newDef = [];
        let newMid = [];
        let newForw = [];
        for (let i = 0; i < defsCount; i++) {
            newDef.push(null)
        }
        for (let j = 0; j < midsCount; j++) {
            newMid.push(null);
        }
        for (let k = 0; k < forwardsCount; k++) {
            newForw.push(null);
        }
        this.props.setFormat(value);
        this.props.setDefenders(newDef);
        this.props.setMiddles(newMid);
        this.props.setForwards(newForw);
        this.toggleModal();
    };
    
    render() {

        const modal = (
            <Modal visible={this.state.modalVisible} effect="fadeInDown" onClickAway={() => this.toggleModal()}>
                <div className="container pt-4 px-5 pb-5">
                    <p style={{fontWeight: "bold"}}>Formations</p>
                    <div className="row">
                        {this.state.modalFormats.map((element, key) => {
                            return (
                                <div className="col-sm-3 mt-1 border rounded-sm" key={key} style={{cursor: "pointer"}}
                                     onClick={() => this.formatHandleChange(key)}>
                                    <div className="row justify-content-center">
                                        {element.value}
                                    </div>
                                    <div className="row justify-content-center">
                                        <img src={element.image} width="80px" alt="ax"/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Modal>
        );

        return (
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center py-3 mb-0"
                         style={{color: "white", backgroundColor: "#0389fa", cursor: "pointer"}}
                         onClick={() => this.toggleModal()}>{this.props.format.format ?
                        <div className="border px-3 rounded-sm">{this.props.format.format}</div> :
                        <div className="border px-3 rounded-sm">Choose Format</div>}</div>
                </div>
                {modal}
            </div>
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
        setFormat,
        setDefenders,
        setMiddles,
        setForwards,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormatModal);