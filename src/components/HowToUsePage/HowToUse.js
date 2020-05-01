import React from 'react';
import PickSquadPic from "../../_assets/HowToUseAssets/pick squad.png"
import PlayerDetail from "../../_assets/HowToUseAssets/playerdetail.png"
import PlayerSubstitution from "../../_assets/HowToUseAssets/playersubstitution.png"
import RecentMatch from "../../_assets/HowToUseAssets/recentmatch.png"
import RecentMatchDetail from "../../_assets/HowToUseAssets/recentmatchdetail.png"
import SelectCaptain from "../../_assets/HowToUseAssets/select captain.png"
import Transfer from "../../_assets/HowToUseAssets/transfer.png"
import WildCards from "../../_assets/HowToUseAssets/wild cards.png"

const HowToUse = () => {
    return (
        <div className="container-fluid" style={{backgroundColor: "#010d25"}}>


            <div className="container" style={{backgroundColor: "white"}}>
                <h1>How To Use Website</h1>


                <h3>Dashborad</h3>
                You can see and edit your account info at top of this section.<br/>

                There are four competitions available for you to choose.<br/>
                You can have a squad on each of them and manage them seperately.<br/>
                If for example The Premier league is chosen all other parts of the website will based on this
                competition.<br/>
                The Pick Squad/Team management, Weekly Games, Leader Board and Transfer will be based on your squad in
                Premier League.<br/>

                At the buttom of this section, details about your squad will be shown IF you have a squad in that
                competition.<br/><br/>


                <h3>Pick Squad/Team Management</h3>
                <div className="alert alert-info" role="alert">
                    Note:<br/>
                    If you don't have a squad in the selected competition in Dashborad, Pick Squad will be loaded
                    and you should first pick a squad for the comptition.
                    <br/>If you've picked a squad already, the Team Management will be loaded and you can manage your
                        squad.
                </div>


                <h4>Pick Squad</h4>
                <img src={PickSquadPic} className="img-fluid" alt="Responsive image"/>
                    <br/>

                        <ol>
                            <li>Click on choose format button to select the formation of the squad.</li>
                            <li>Select a player on field so the list gets updated and players with proper position would
                                be
                                shown in the list.
                            </li>
                            <li>Select a player in the list.</li>
                            <li>Repeat steps 2 and 3 to complete your squad.</li>
                            <li>Select a captain for your squad by clicking on it and click the captain button.</li>
                            <li>Players can be deleted from squad by clicking on them and then selecting delete.</li>
                            <img src={SelectCaptain} className="img-fluid" alt="Responsive image"/>
                        </ol>
                        <div className="alert alert-danger" role="alert">
                            <ol>
                                <li>You can't select more than three players from a club.</li>
                                <li>A captain Must be selected.</li>
                            </ol>
                        </div>


                        <h4>How to filter players</h4>
                        <ol>
                            <li>Do the filters you want in the filter section.</li>
                            <li>Select a player on field and the list gets updated with filters and position of selected
                                player.
                            </li>
                        </ol>
                        <div className="alert alert-danger" role="alert">
                            Filters would be evaluated only if you click on a player on field.
                        </div>


                        <h4>Team Management</h4>
                        <img src={PlayerSubstitution} className="img-fluid" alt="Responsive image"/>

                            <ol>
                                <li>substitute your squad players with your bench.</li>
                                <li>apply wildcards and use the extra point they give you.</li>
                                <li>examine your squad player information and recent activites and matches by clicking
                                    on i button near
                                    players.
                                </li>
                                <img src={PlayerDetail} className="img-fluid" alt="Responsive image"/>
                                <img src={WildCards} className="mt-4 img-fluid" alt="Responsive image"/>

                            </ol>


                            <h3>Weekly games</h3>


                            All the recent matches of the selected competition in Dashborad will be listed here.<br/>
                            If the game has took place and is finished if you click on it the game, detail will be
                            shown, and if the game
                            is scheduled there will be no details for it obviously.<br/>
                            <img src={RecentMatch} className="img-fluid"
                                 alt="Responsive image"/><br/><br/>
                                <img src={RecentMatchDetail} className="img-fluid"
                                     alt="Responsive image"/>


                                    <br/>
                                        <br/>
                                            <h3>Transfer</h3>
                                            If you have an active squad in a competition you can transfer one player
                                            every week from outside of the
                                            squad.
                                            <img src={Transfer} className="img-fluid"
                                                 alt="Responsive image"/>


            </div>


        </div>
    );
};

export default HowToUse;