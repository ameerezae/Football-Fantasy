import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {getGames} from '../../../_actions/weeklyGamesActions'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class WeeklyGames extends Component {
    componentWillMount() {
        this.props.getGames();
    }
	render() {
		return (
			<div>
                <ListGroup>
                {this.props.games.games_fetched ?
                    // <ListGroup variant="info">
                    //     <ListGroup.Item variant="dark">Cras justo odio</ListGroup.Item>
                    //     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    //     <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    //     <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    // </ListGroup> 
                    this.props.games.games.map((element, key) => {
                        console.log(element)
                        return (
                            // <ListItem key={key} className="text-white"
                            //           disabled={!this.props.myTeam.enableTable}>
                            //     <ListItemGraphic className="list-image"
                            //                      graphic={<img src={element.image} alt="sd"/>}/>
                            //     <ListItemText
                            //         className="text-white"
                            //         primaryText={element.name.slice(0, 10)}
                            //         secondaryText={element.club}/>
                            //     <ListItemText
                            //         className="whiteText ml-3"
                            //         primaryText={element.price}
                            //         secondaryText={element.position}/>
                            //     <ListItemMeta
                            //         style={{color: "white", fontSize: "1.5rem", verticalAlign: "center"}}
                            //         meta={<IoIosInformationCircle/>}/>
                            // </ListItem>
                            <ListGroup.Item variant='dark'>
                                <div style={{display: 'table-row'}}>
                                    <div style={{display: 'table-cell',width: '50%'}}>
                                        <div style={{display: 'table-row'}}>   
                                            <div style={{width: '20%',display: 'table-cell',align: "left"}}>
                                                <img src={element.homeTeam.image} alt="sd" style={{height:'auto',width:'50%'}}/>
                                            </div>
                                            <div style={{width: '40%',display: 'table-cell',align: "left"}}>
                                                <h5>{element.homeTeam.name}</h5>
                                            </div>
                                            <div style={{width: '40%',display: 'table-cell',align: "left"}}>
                                                <h5>{element.homeTeamScore}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display: 'table-cell',width: '50%'}}>
                                        <div style={{display: 'table-row'}}>  
                                            <div style={{width: '40%',display: 'table-cell',align: "right"}}>
                                                <h5>{element.awayTeamScore}</h5>
                                            </div>
                                            <div style={{width: '40%',display: 'table-cell',align: "right"}}>
                                                <h5>{element.awayTeam.name}</h5>
                                            </div>
                                            <div style={{width: '20%',display: 'table-cell',align: "right"}}>
                                                <img src={element.awayTeam.image} alt="sd" style={{height:'auto',width:'50%'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        )
                    })
                            : null } 
                </ListGroup> 
			</div>
		)
	}
}
function mapStateToProps(state) {
    return {
        games: state.gameReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getGames
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyGames);

