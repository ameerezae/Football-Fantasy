import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="container bg-white">
                {this.props.name}
            </div>
        );
    }
}

export default Card;