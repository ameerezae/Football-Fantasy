import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {email_accept} from "../../_actions/email_accept_action";
import {connect} from "react-redux";
import "./email-accept.scss";

class EmailAccept extends Component {
    componentWillMount() {
        this.props.email_accept(this.props.match.params.token);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="email-accept"></div>
                <div className=" ml-5 mt-3 row align-items-center">
                    <h1 className="text-white">FOOTBALL FANTASY</h1>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        email_accept,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(EmailAccept);