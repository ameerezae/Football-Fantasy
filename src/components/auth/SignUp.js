import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        email : '',
        password :'',
        username : ''
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
            <div>
                
            </div>
        )
    }
}
