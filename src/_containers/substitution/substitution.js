import React, {Component} from 'react';
import Squad from "../squad/squad";
import Bench from "../bench/bench";

class Substitution extends Component {
    render() {
        return (
            <div>
                <Squad/>
                <Bench/>
            </div>
        );
    }
}

export default Substitution;