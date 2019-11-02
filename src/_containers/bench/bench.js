import React, {Component} from 'react';
import Player from "../player/player";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setFirstSelected, setMyNewTeam, localAllowSubs} from "../../_actions/manageTeamActions";
import Swal from "sweetalert2";

class Bench extends Component {

    substitution = (secondSelectedKey) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        let newTeam = this.props.myTeam.squad;
        if (newTeam[secondSelectedKey].lineup === !newTeam[this.props.myTeam.firstSelected].lineup && newTeam[secondSelectedKey].position !== "Goalkeeper" && newTeam[this.props.myTeam.firstSelected].position !== "Goalkeeper") {
            newTeam[this.props.myTeam.firstSelected].lineup = !newTeam[this.props.myTeam.firstSelected].lineup;
            newTeam[secondSelectedKey].lineup = !newTeam[secondSelectedKey].lineup;
            Toast.fire({
                type: 'success',
                width: 100
            })
        } else if (newTeam[secondSelectedKey].lineup === !newTeam[this.props.myTeam.firstSelected].lineup && newTeam[secondSelectedKey].position === "Goalkeeper" && newTeam[this.props.myTeam.firstSelected].position === "Goalkeeper") {
            newTeam[this.props.myTeam.firstSelected].lineup = !newTeam[this.props.myTeam.firstSelected].lineup;
            newTeam[secondSelectedKey].lineup = !newTeam[secondSelectedKey].lineup;
            Toast.fire({
                type: 'success',
                width: 100
            })
        }
    }

    render() {
        const bench = (
            <div className="row justify-content-center">
                {this.props.myTeam.squad ?
                    this.props.myTeam.squad.map((element, key) => {
                        if (!element.lineup) {
                            return (
                                <div className="col">
                                    <div onClick={this.props.myTeam.localAllow ? () => {
                                        this.props.setFirstSelected(key);
                                        this.props.localAllowSubs(false);
                                    } : () => {
                                        this.substitution(key)
                                        this.props.localAllowSubs(true);

                                    }}>
                                        <Player number={key} info={element}/>
                                    </div>
                                </div>
                            )
                        }
                    }) : null}
            </div>
        )
        return (
            <div>
                {bench}
            </div>
        );
    }
}

function

mapStateToProps(state) {
    return {
        myTeam: state.manageTeamReaducer
    }
}

function

mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setFirstSelected,
        setMyNewTeam,
        localAllowSubs
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)

(
    Bench
)
;