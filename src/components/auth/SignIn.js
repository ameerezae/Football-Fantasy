import React, {Component} from 'react'
import {connect} from "react-redux"
import {userSignInRequest} from "../../_actions/authActions"
import {bindActionCreators} from "redux"
import {Button} from "react-bootstrap";
import {TextInput} from "react-responsive-ui";
import "./SignIn.scss";
import "react-responsive-ui/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TriplePlayer from "../../_assets/src__assets_player-comp-3-1x.7eb15f60.png";
import SignUp from "./SignUp";
import {Alert} from "react-bootstrap";

class SignIn extends Component {
    state = {
        username: "",
        password: "",
    };

    handleChange = (name, value) => {
        this.setState(prevState => {
            const newState = {...prevState};
            newState[name] = value;
            return newState;
        });
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userSignInRequest(this.state)
    }


    render() {
        if(this.props.userObj.message === "successful login"){
            this.props.history.push(`/manageteam`)
        }
        const loginForm = (
            <div className="login-center container py-3">
                <div className="row justify-content-center">
                    <p className="login-title mt-3"> LOGIN </p>
                </div>
                <hr/>
                <div className="row direct-to-signup-box">
                    <div className="col-sm-6">
                        <div className="row justify-content-center guide-to-signup ">
                            Register if you have no account
                        </div>
                    </div>
                    <div className="col-sm-6">

                        <SignUp/>
                    </div>

                </div>
                <hr/>
                <div className="row align-items-center">
                    <div className="col-sm-6 col-md-6">
                        <div className="row align-items-center justify-content-center">
                            <img src={TriplePlayer} alt="img" className="img-fluid mb-4" width="250px" height="200px"/>
                            {this.props.userObj.message ? <Alert variant={this.props.userObj.message==="successful login"?"success":"danger"}>{this.props.userObj.message}</Alert> :null }
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="row justify-content-center align-items-center">
                            <form onSubmit={event => this.handleSubmit(event)}>
                                <div className="row justify-content-center mb-5">
                                    <div className="col-sm-12">
                                        <TextInput
                                            type="text"
                                            label="Username"
                                            value={this.state.username}
                                            onChange={(value) => {
                                                this.handleChange("username", value)
                                            }}
                                        />
                                    </div>

                                </div>

                                <div className="row justify-content-center mb-5">
                                    <TextInput
                                        type="password"
                                        label="Password"
                                        value={this.state.password}
                                        onChange={(value) => {
                                            this.handleChange("password", value)
                                        }}
                                    />
                                </div>
                                <div className="row justify-content-center">
                                    <Button id="button" className=" button-submit-login" type="submit"
                                            variant="success"
                                            size="md">
                                        LOGIN
                                    </Button>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>


            </div>
        );

        return (
            <div>
                <div className="background"></div>
                <div className="d-flex min-vh-100">
                    <div className="d-flex w-100 align-items-center justify-content-center">
                        {loginForm}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        userSignInRequest
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        userObj: state.authReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)