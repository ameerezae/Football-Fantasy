import React, {Component} from 'react';
import Modal from "react-awesome-modal";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleModal, setFirstSelected , localAllowSubs ,changeCaptain} from "../../../_actions/manageTeamActions";
import {FaRegCopyright} from "react-icons/all";
import "./detailModal.scss"
import Swal from "sweetalert2";

class DetailModal extends Component {
    render() {
        const clicked = this.props.myTeam.squad ? this.props.myTeam.squad[this.props.myTeam.firstSelected] : null;
        return (
            <Modal visible={this.props.myTeam.visibleModal}
                   effect="fadeInDown"
                   onClickAway={() => {
                       this.props.toggleModal(false);
                       this.props.setFirstSelected(null)
                       this.props.localAllowSubs(true);
                   }}>
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
                        {clicked && clicked.lineup ? <FaRegCopyright className="ml-2" className="captain-style"
                                                                     onClick = {()=>{
                                                                         this.props.changeCaptain(clicked.id);
                                                                         this.props.toggleModal(false);
                                                                         Swal.fire({
                                                                             position: 'center',
                                                                             type: 'success',
                                                                             showConfirmButton: false,
                                                                             timer: 3000,
                                                                             width:200
                                                                         })
                                                                     }}
                            />
                            : null}


                    </div>
                    <hr/>
                </div>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        myTeam: state.manageTeamReaducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleModal,
        setFirstSelected,
        localAllowSubs,
        changeCaptain
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailModal);
