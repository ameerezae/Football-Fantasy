import React, {Component} from 'react'
import {connect} from "react-redux"
import {userSignUpRequest} from "../../_actions/authActions"
import {bindActionCreators} from "redux"
import {TextInput} from "react-responsive-ui";
import {MdClose} from "react-icons/all";
import {Button, Spinner} from "react-bootstrap";
import Modal from "react-awesome-modal";
import Alert from "react-bootstrap/Alert";
import "./SignUp.scss"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password1: '',
                username: '',
                password2: ''
            },
            toggle: false,
            signUpSuccess: null,
            signUpError: null,
            preLoader: false,
        }
        this.onChange = this.handleChange.bind(this);
        this.onSubmit = this.handleSubmit.bind(this);

    }

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({preLoader: true});
        try {
            const response = await this.props.userSignUpRequest(this.state.data);
            this.setState({signUpError: null})
            this.setState({signUpSuccess: response.data.message})
        } catch (e) {
            this.setState({signUpSuccess: null})
            this.setState({signUpError: e.response.data.message})
        }
        this.setState({preLoader: false})

    }

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

    render() {

        return (
            <div>
                <div className="row justify-content-center cursor-to-pointer link-to-signUp" onClick={() => {
                    this.toggleModal()
                }}>REGISTER
                </div>
                <Modal style={{overflowY: "auto"}} visible={this.state.toggle} effect="fadeInUp"
                       onClickAway={() => this.toggleModal()} width="800">
                    <div className="container">
                        <div className="row mt-3 justify-content-start align-items-center">
                            <MdClose style={{fontSize: "2rem", cursor: "pointer"}} className="mx-4"
                                     onClick={() => this.toggleModal()}/>
                        </div>
                        <div className="row justify-content-center">
                            <h1>REGISTER</h1>
                        </div>
                    </div>
                    <div className="container pb-3 px-5" style={{direction: "ltr"}}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-12 align-items-center justify-content-center">
                                <form className = "remove-margin" onSubmit={(event) => this.handleSubmit(event, this.state.data)}>
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

                                    <TextInput
                                        className="mb-4"
                                        type="password"
                                        label="Re-password"
                                        value={this.state.data.password2}
                                        onChange={(value) => {
                                            this.handleChange("password2", value)
                                        }}
                                    />
                                    {this.state.signUpError !== null ?
                                        <Alert className="text-center"
                                               variant={"danger"}>{this.state.signUpError}</Alert>
                                        : null
                                    }
                                    {this.state.signUpSuccess !== null ?
                                        <Alert className="text-center"
                                               variant={"success"}>{this.state.signUpSuccess}</Alert>
                                        : null
                                    }
                                    <div className="row justify-content-center mt-4 sign-up-button">
                                        {this.state.preLoader ? <Spinner animation="grow" variant="success"/> :
                                            <Button variant="success" size="md" type="submit">register</Button>
                                        }
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </Modal>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        userSignUpRequest
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp);