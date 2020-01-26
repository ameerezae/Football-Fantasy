import React, {Component} from 'react';
import Competitions from "../competitions/competitions";
import Information from "../informations/informations";
import PersonalInfo from "../informations/personal_info";
class Dashboard extends Component {
    render() {
        return (
            <div>
                <PersonalInfo/>
                <Competitions/>
                <Information/>
            </div>
        );
    }
}

export default Dashboard;