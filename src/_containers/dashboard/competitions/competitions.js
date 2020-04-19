import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllCompetitions, setCurrentCompitition} from "../../../_actions/dashboardActions";
import "./competitions.scss"



class Competitions extends Component {


    componentWillMount() {
        this.props.getAllCompetitions();
        if(localStorage.getItem("current_comp")){
            const savedCompetition = JSON.parse(localStorage.getItem("current_comp"));
            this.props.setCurrentCompitition(savedCompetition);
        }
    }

    handleSelect = (selectedIndex, e) => {
        let compete = this.props.dashboard.competitions[selectedIndex]
        this.props.setCurrentCompitition(compete);
      };
    render() {

        return (
            <div>
                <h3 className="text-white">COMPETITIONS</h3>
                {this.props.dashboard.areCompetitionsFetched ?
                    this.props.dashboard.competitions.map((element,key) => {
                        return (
                            <div className="card-custom card">
                                <div className="card-img card-custom-img"
                                     style={{backgroundImage: `url(${element.image})`}}>
                                    <div className="overlay">
                                        <div key={key} className="overlay-content">
                                            <a onClick={()=>{this.handleSelect(key)}}>Choose</a>
                                        </div>
                                    </div>
                                </div>

                                <div  style={JSON.parse(localStorage.getItem("current_comp")).id === element.id
                                    ? {backgroundColor:"#5fdba7"} : {}} className="card-content card-custom-content">
                                    <a href="#!">
                                        <div className="row">
                                            <div className="justify-content-center">
                                                <h2>{element.name}</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="justify-content-center">
                                                <p>{element.area.name}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                    : null}
            </div>


        );
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboardReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllCompetitions,
        setCurrentCompitition,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Competitions);