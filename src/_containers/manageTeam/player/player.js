import React, {Component} from 'react';
import "./player.scss";
class Player extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <img src={this.props.info.image} className="player-image" alt="pic"
                         name={this.props.info.position} id={this.props.info.id}
                    />
                </div>
                <div className="row mt-1 justify-content-center">
                    <h6 className="player-name-style">{this.props.info.name}</h6>
                </div>
            </div>
        );
    }
}

export default Player;