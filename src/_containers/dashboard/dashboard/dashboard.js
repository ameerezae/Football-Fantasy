import React, {Component} from 'react';
import Competitions from "../competitions/competitions";
import Information from "../informations/informations";
class Dashboard extends Component {
    render() {
        return (
            <div>
                <Information/>
                <Competitions/>
            </div>
        );
    }
}

export default Dashboard;