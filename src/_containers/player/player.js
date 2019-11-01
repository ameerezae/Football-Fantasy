import React, {Component} from 'react';
import "./player.scss";
class Player extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <img src={this.props.image} width="80" alt="pic"
                         name={this.props.position} id={this.props.id}
                    />
                </div>
                <div className="row mt-1 justify-content-center">
                    <div className="player-name-style">{this.props.name}</div>
                </div>
            </div>
        );
    }
}

export default Player;