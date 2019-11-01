import React, {Component} from 'react';
import Player from "../player/player";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setFirstSelected} from "../../_actions/manageTeamActions";

class Bench extends Component {
    render() {
        const bench = (
            <div className="row justify-content-center">
                {this.props.myTeam.squad?
                    this.props.myTeam.squad.map((element,key)=>{
                        if(!element.lineup){
                            return(
                                <div className="col">
                                    <div onClick={()=>{this.props.setFirstSelected(key)}}>
                                        <Player number={key} info={element}/>
                                    </div>
                                </div>
                            )
                        }
                    }):null}
            </div>
        )
        return (
            <div>
                {bench}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        myTeam : state.manageTeamReaducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        setFirstSelected,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Bench);