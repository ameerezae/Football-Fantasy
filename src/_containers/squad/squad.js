import React, {Component} from 'react';
import {connect} from "react-redux";
import Player from "../player/player";

class Squad extends Component {


    render() {
        const sqaud = (
            <div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad?
                        this.props.myTeam.squad.map((element,key)=>{
                        if(element.position === "Goalkeeper" && element.lineup){
                            return(
                                <div className="col">
                                    <Player number={key} info={element}/>
                                    {key}
                                </div>
                            )
                        }
                    }):null}
                </div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad?
                        this.props.myTeam.squad.map((element,key)=>{
                        if(element.position === "Defender" && element.lineup){
                            return(
                                <div className="col">
                                    <Player number={key} info={element}/>
                                    {key}
                                </div>
                            )
                        }
                    }):null}
                </div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad?
                        this.props.myTeam.squad.map((element,key)=>{
                            if(element.position === "Midfielder" && element.lineup){
                                return(
                                    <div className="col">
                                        <Player number={key} info={element}/>
                                        {key}
                                    </div>
                                )
                            }
                        }):null}
                </div>
                <div className="row justify-content-center">
                    {this.props.myTeam.squad?
                        this.props.myTeam.squad.map((element,key)=>{
                            if(element.position === "Forward" && element.lineup){
                                return(
                                    <div className="col">
                                        <Player number={key} info={element}/>
                                        {key}
                                    </div>
                                )
                            }
                        }):null}
                </div>
            </div>
        )

        return (
            <div className="container-fluid field-background">
                {sqaud}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        myTeam: state.manageTeamReaducer,
    }
}

export default connect(mapStateToProps, null)(Squad);