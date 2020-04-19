import React from 'react';
import {Route, Switch} from "react-router-dom";
import Dashboard from "../dashboard/dashboard/dashboard";
import Substitution from "./substitution/substitution";
import Transfer from "../transfer/transfer";
import WeeklyGames from "../games/game_list/WeeklyGames";
import LeaderBoard from "../leaderBoard/leaderBoardList/leaderBoardList";


const TabsOption = () => {
    return (
        <Switch>
            <Route exact path={"/manageteam/dashboard"} component={Dashboard} />
            <Route exact path={"/manageteam/substitution"} component={Substitution} />
            <Route exact path={"/manageteam/transfer"} component={Transfer} />
            <Route exact path={"/manageteam/weeklygames"} component={WeeklyGames} />
            <Route exact path={"/manageteam/leaderboard"} component={LeaderBoard} />
        </Switch>
    );
};

export default TabsOption;