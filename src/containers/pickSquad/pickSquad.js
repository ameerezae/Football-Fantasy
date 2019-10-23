import React, {Component} from 'react';
import "./pickSquad.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import FormatModal from "./formatModal";
import Anonymous from "../../assets/football-player.svg"
import {AnimateOnChange} from "react-animation";
import {getWholeItems, setFilteredPosition} from "../../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class PickSquadContainer extends Component {
    render() {
        return (
            <div>
                <div className="main-background"></div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <FormatModal/>
                        </div>
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
function mapStateToProps(state) {
    return{
        format : state.formatReducer,
    }
}
function mapDispatchToProps(state) {
    return bindActionCreators({
        getWholeItems,
        setFilteredPosition,

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(PickSquadContainer);