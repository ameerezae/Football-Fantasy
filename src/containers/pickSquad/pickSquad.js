import React, {Component} from 'react';
import "./pickSquad.scss";
import "bootstrap/dist/css/bootstrap.min.css";
class PickSquadContainer extends Component {
    render() {
        return (
            <div>
                <div className="main-background"></div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-8">
                            <div className="row align-items-center">
                                <div className="container-fluid field-background mt-3 padding-to-field">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PickSquadContainer;