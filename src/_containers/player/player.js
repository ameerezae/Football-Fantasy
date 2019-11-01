import React, {Component} from 'react';
import "./player.scss";
class Player extends Component {
    render() {

        return (
            <div onClick={()=>{console.log(this.props.number)}} className="container">
                <div className="row justify-content-center">
                    <img src={this.props.info.image} width="80" alt="pic"
                         name={this.props.info.position} id={this.props.info.id}
                    />
                </div>
                <div className="row mt-1 justify-content-center">
                    <div className="player-name-style">{this.props.info.name}</div>
                </div>
            </div>
        );
    }
}

export default Player;