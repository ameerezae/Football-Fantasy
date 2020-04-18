import React, {Component} from 'react';
import Player from "../player/player";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setFirstSelected, setMyNewTeam, localAllowSubs,toggleModal} from "../../../_actions/manageTeamActions";
import Swal from "sweetalert2";
import {AnimateOnChange} from "react-animation";
import {FaExchangeAlt, FaInfo} from "react-icons/all";
import * as types from "../../../_actions/types";
import {Badge} from "react-bootstrap";
import {getOnePlayerStatistics} from "../../../_actions/statisticsActions";

class Bench extends Component {

    substitution = (secondSelectedKey) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        let newTeam = this.props.myTeam.squad;
        if(newTeam[secondSelectedKey].id !== this.props.myTeam["captain"] && newTeam[this.props.myTeam.firstSelected].id !== this.props.myTeam["captain"]){
            if (newTeam[secondSelectedKey].lineup === !newTeam[this.props.myTeam.firstSelected].lineup && newTeam[secondSelectedKey].position !== types.position.GOALKEEPER && newTeam[this.props.myTeam.firstSelected].position !== types.position.GOALKEEPER) {
                newTeam[this.props.myTeam.firstSelected].lineup = !newTeam[this.props.myTeam.firstSelected].lineup;
                newTeam[secondSelectedKey].lineup = !newTeam[secondSelectedKey].lineup;
                Toast.fire({
                    type: 'success',
                    width: 100
                })
            } else if (newTeam[secondSelectedKey].lineup === !newTeam[this.props.myTeam.firstSelected].lineup && newTeam[secondSelectedKey].position === types.position.GOALKEEPER && newTeam[this.props.myTeam.firstSelected].position === types.position.GOALKEEPER) {
                newTeam[this.props.myTeam.firstSelected].lineup = !newTeam[this.props.myTeam.firstSelected].lineup;
                newTeam[secondSelectedKey].lineup = !newTeam[secondSelectedKey].lineup;
                Toast.fire({
                    type: 'success',
                    width: 100
                })
            }

            this.props.setMyNewTeam(newTeam);
            this.props.setFirstSelected(null);
        }
        else{
            Swal.fire({
                position: 'center',
                type: 'error',
                title: "Captain can not change",
                showConfirmButton: false,
                timer: 3000
            })
        }
    }
    ;

    async getPlayerStatistics(id) {
        await this.props.getOnePlayerStatistics(id);
    }

    render() {
        const bench = (
            <div className="row justify-content-center">
                {this.props.myTeam.squadFetched ?
                    this.props.myTeam.squad.map((element, key) => {
                        if (!element.lineup) {
                            return (
                                <div className="col">
                                    <div className="row justify-content-center">
                                        <AnimateOnChange key={key}
                                                         animationIn="bounceIn"
                                                         animationOut="bounceOut"
                                        >
                                            <div className={key === this.props.myTeam.firstSelected ? "row justify-content-center exchange-color" : "row justify-content-center" }>
                                                <Player number={key} info={element}/>
                                                <p style={{backgroundColor:"#ffb400",color:"white"}}>{element.position}</p>
                                            </div>
                                            <div className="row justify-content-center align-items-center">
                                                <Badge variant="primary" className="mr-1"
                                                       onClick={this.props.myTeam.localAllow ? () => {
                                                           this.props.setFirstSelected(key);
                                                           this.props.localAllowSubs(false);
                                                       } : () => {
                                                           this.substitution(key)
                                                           this.props.localAllowSubs(true);
                                                       }}
                                                >
                                                    SUBS
                                                    <FaExchangeAlt/>
                                                </Badge>
                                                <Badge variant="danger"
                                                       onClick={async () => {
                                                           this.props.setFirstSelected(key);
                                                           await this.getPlayerStatistics(element.id);
                                                           this.props.toggleModal(true);
                                                       }}
                                                >
                                                    INFO
                                                    <FaInfo />
                                                </Badge>
                                            </div>
                                        </AnimateOnChange>

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
        localAllowSubs,
        toggleModal,
        getOnePlayerStatistics
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)

(
    Bench
)
;