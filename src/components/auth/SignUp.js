import React, { Component } from 'react'
// import { connect } from 'http2'
import { connect } from "react-redux"
import { userSignUpRequest } from "../../_actions/authActions"
import { bindActionCreators } from "redux"
class SignUp extends Component {
    constructor(props)
    {
        super(props);
    this.state = {
        email : '',
        password1 :'',
        username : '',
        password2 : ''
    }
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);

}
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userSignUpRequest(this.state)
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="main">

            <section className="signup">
                {/* <!-- <img src="images/signup-bg.jpg" alt=""> --> */}
                <div className="container">
                        <form onSubmit={this.handleSubmit} id="signup-form" className="white">
                            {/* <h5 className="grey-text text-darken-3">Sign In</h5>*/}
                            <br/> 
                            <div className="input-field">
                                <label htmlFor="username">User Name</label>
                                <input type="text" id="username" value ={this.state.username} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value ={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                            <label htmlFor="password1">Password</label>
                                <input type="password" id="password1" value ={this.state.password1} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                            <label htmlFor="password2">PasswordConfirmation</label>
                                <input type="password" id="password2" value ={this.state.password2} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0">SIGNUP</button>
                            </div>
                        </form>
                </div>
            </section>
    
        </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    userSignUpRequest
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp);