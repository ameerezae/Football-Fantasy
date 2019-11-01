import React, {Component} from 'react';
import Player from "../player/player";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Bench extends Component {
    render() {
        const bench = (
            <div className="row justify-content-center">
                {this.props.myTeam.squad?
                    this.props.myTeam.squad.map((element,key)=>{
                        if(!element.lineup){
                            return(
                                <div className="col">
                                    <Player number={key} info={element}/>
                                    {key}
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

export default connect(mapStateToProps,null)(Bench);