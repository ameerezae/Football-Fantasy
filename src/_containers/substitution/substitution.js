import React, {Component} from 'react';
import Squad from "../squad/squad";
import Bench from "../bench/bench";
import {connect} from "react-redux";

class Substitution extends Component {
    render() {
        return (
            <div>
                <div className="main-background"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <Squad/>
                            <Bench/>
                        </div>
                        <div className="col-2">

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Substitution;