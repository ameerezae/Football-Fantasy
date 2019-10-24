import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email : '',
        password :  ''
    }
    handleChange = (e) => {
        this.setState({
            [e.terget.id] : e.terget.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
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
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                            <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0">Sign IN</button>
                            </div>
                        </form>
                </div>
            </section>
    
        </div>
        )
    }
}

export default SignIn