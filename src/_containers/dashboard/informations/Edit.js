import React, {Component} from 'react';
import Modal from "react-awesome-modal";
import {MdClose} from "react-icons/all";
import "./scss/information.scss";
import {TextInput} from "react-responsive-ui";
import DashboardApis from "../../../_api/dashboardApi";
import * as dashboard_constants from "../../../constants/dashboard/dashboardConstants";
import * as universal_contants from "../../../constants/universalConstants";
import {Button, Spinner, Alert} from "react-bootstrap";

class Edit extends Component {
    state = {
        data: {
            username: null,
            password: null,
            email: null,
        },
        toggle: false,
        success : null,
        failed : null,
        preloader : false,
    };

    toggleModal = () => {
        this.setState({toggle: !this.state.toggle});
    };

    handleChange = (name, value) => {
        this.setState(prevState => {
            const newState = {...prevState};
            newState.data[name] = value;
            return newState;
        });
    };

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({preloader : true});
        const response = await DashboardApis.EditProfile(this.state.data);
        if (response.status === universal_contants.REQUESTS_STATUS.OK) {

            localStorage.setItem(
                universal_contants.ACCESS_TOKEN,
                response.data[dashboard_constants.EDIT_CONSTANTS.ACCESS_TOKEN]
            );

            localStorage.setItem(
                universal_contants.REFRESH_TOKEN,
                response.data[dashboard_constants.EDIT_CONSTANTS.REFRESH_TOKEN]
            );
            this.setState({success: response.data[dashboard_constants.EDIT_CONSTANTS.MESSAGE]});

        }else {
            this.setState({failed : response.data[dashboard_constants.EDIT_CONSTANTS.MESSAGE] });
        }
        this.setState({preloader : false});


    }

    render() {
        return (
            <div>
                <div className="row justify-content-center cursor-to-pointer" onClick={() => {
                    this.toggleModal()
                }}><Button variant="primary">EDIT</Button>
                </div>
                <Modal style={{overflowY: "auto"}} visible={this.state.toggle} effect="fadeInUp"
                       onClickAway={() => this.toggleModal()} width="800">
                    <div className="container">
                        <div className="row mt-3 justify-content-start align-items-center">
                            <MdClose style={{fontSize: "2rem", cursor: "pointer"}} className="mx-4"
                                     onClick={() => this.toggleModal()}/>
                        </div>
                    </div>
                    <div className="container pb-3 px-5" style={{direction: "ltr"}}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-12 align-items-center justify-content-center">
                                <form className="remove-margin"
                                      onSubmit={(event) => this.handleSubmit(event, this.state.data)}>
                                    <TextInput
                                        className="mb-4"
                                        type="text"
                                        label="username"

                                        value={this.state.data.username}
                                        onChange={(value) => {
                                            this.handleChange("username", value)
                                        }}
                                    />
                                    <TextInput
                                        className="mb-4"
                                        type="email"
                                        label="email"
                                        value={this.state.data.email}
                                        onChange={(value) => {
                                            this.handleChange("email", value)
                                        }}
                                    />
                                    <TextInput
                                        className="mb-4"
                                        type="password"
                                        label="password"
                                        value={this.state.data.password1}
                                        onChange={(value) => {
                                            this.handleChange("password1", value)
                                        }}
                                    />
                                    {this.state.preloader ?   <Spinner animation="grow" variant="success"/> :
                                        this.state.success ? <Alert variant = "success">{this.state.success}</Alert> :
                                            this.state.failed ? <Alert variant = "danger">{this.state.failed}</Alert>:
                                                <Button variant="success">Confirm</Button>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Edit;