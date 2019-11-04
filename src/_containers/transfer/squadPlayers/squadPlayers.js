import React, {Component} from 'react';
import "./squadPlayers.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IoIosInformationCircle} from "react-icons/io";
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta,} from '@material/react-list';

class SquadPlayers extends Component {

    render() {
        return (
            <List twoLine
                  handleSelect={(activatedItemIndex) => console.log(activatedItemIndex)} dense>

                {this.props.myTeam.myTeamForTransfer? this.props.myTeam.myTeamForTransfer.map((element,key)=>{
                    return(
                        <ListItem key={key} className="text-white">
                            <ListItemGraphic className="list-image" graphic={<img src={element.image} alt="sd"/>}/>
                            <ListItemText
                                className="text-white"
                                primaryText={element.name.slice(0, 10)}
                                secondaryText={element.club}/>
                            <ListItemText
                                className="whiteText ml-3"
                                primaryText={element.price}
                                secondaryText={element.position}/>
                            <ListItemMeta style={{color: "white", fontSize: "1.5rem", verticalAlign: "center"}}
                                          meta={<IoIosInformationCircle/>}/>
                        </ListItem>
                    )
                }):null}


            </List>

        )
    }
}

function mapStateToProps(state) {
    return {
        myTeam: state.manageTeamReaducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SquadPlayers);