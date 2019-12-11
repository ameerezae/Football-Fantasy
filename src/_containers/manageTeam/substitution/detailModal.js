import React, {Component} from 'react';
import Modal from "react-awesome-modal";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleModal, setFirstSelected, localAllowSubs, changeCaptain} from "../../../_actions/manageTeamActions";
import {getOnePlayerStatistics} from "../../../_actions/statisticsActions"
import {FaRegCopyright} from "react-icons/all";
import "./detailModal.scss"
import Swal from "sweetalert2";


class DetailModal extends Component {

    async getPlayerStatistics() {
        if (this.props.myTeam.squad && this.props.myTeam.firstSelected  !== undefined && this.props.myTeam.firstSelected !== null  ) {
            this.props.getOnePlayerStatistics(this.props.myTeam.squad[this.props.myTeam.firstSelected].id);
        }
    }

    render() {
        this.getPlayerStatistics();
        const clicked = this.props.myTeam.squad ? this.props.myTeam.squad[this.props.myTeam.firstSelected] : null;
        return (
            <Modal visible={this.props.myTeam.visibleModal}
                   effect="fadeInDown"
                   onClickAway={() => {
                       this.props.toggleModal(false);
                       this.props.setFirstSelected(null)
                       this.props.localAllowSubs(true);
                   }}>
                <div className="container p-4">
                    <div className="row align-items-center">
                        <div className="container statistics-background" >
                            <div className="row">
                                <div className="col-5">
                                    {clicked ? <img style={{backgroundColor: "white", borderRadius: "50%"}} src={clicked.image}
                                                    alt="img" width="100px"/>

                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                {/*</div>*/}
                {/*<div className="container p-4  w-100">*/}
                {/*    <div className="row align-items-center">*/}
                {/*        <div className="col-5">*/}
                {/*            {clicked ? <img style={{backgroundColor: "white", borderRadius: "50%"}} src={clicked.image}*/}
                {/*                            alt="img" width="100px"/>*/}

                {/*                : null}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <hr/>*/}
                {/*    <div className="row align-items-center justify-content-center py-4">*/}
                {/*        {clicked && clicked.lineup ? <FaRegCopyright className="ml-2" className="captain-style"*/}
                {/*                                                     onClick={() => {*/}
                {/*                                                         this.props.changeCaptain(clicked.id);*/}
                {/*                                                         this.props.toggleModal(false);*/}
                {/*                                                         Swal.fire({*/}
                {/*                                                             position: 'center',*/}
                {/*                                                             type: 'success',*/}
                {/*                                                             showConfirmButton: false,*/}
                {/*                                                             timer: 3000,*/}
                {/*                                                             width: 200*/}
                {/*                                                         })*/}
                {/*                                                     }}*/}
                {/*            />*/}
                {/*            : null}*/}


                {/*    </div>*/}
                {/*    <hr/>*/}
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
        changeCaptain,
        getOnePlayerStatistics
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailModal);
