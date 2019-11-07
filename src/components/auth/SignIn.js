import React, { Component } from 'react'
import { connect } from "react-redux"
import { userSignInRequest } from "../../_actions/authActions"
import { bindActionCreators } from "redux"


class SignIn extends Component {
    constructor(props)
    {
        super(props);
    this.state = {
        username : '',
        password :'',

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
        this.props.userSignInRequest(this.state)
        console.log(this.props.userObj)


    }
    loginPhase() {
        if(this.props.userObj.message != 'successful login')
        {
            return this.props.userObj.message
        }
        else{
            this.props.history.push('/')
        }

    }
    render() {
        return (
            <div className="main">

            <section className="signin">
                {/* <!-- <img src="images/signup-bg.jpg" alt=""> --> */}
                <div className="container">
                        <form onSubmit={this.handleSubmit} id="signup-form" className="white">
                            {/* <h5 className="grey-text text-darken-3">Sign In</h5>*/}
                            <br/> 
                            <div className="input-field">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" value ={this.state.username} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                            <label htmlFor="password">Password</label>
                                <input type="password" id="password" value ={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0">LOGIN</button>
                                    {this.loginPhase()}
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
    userSignInRequest
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        userObj: state.authReducer,
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(SignIn)