
// export const MAIN = "http://51.178.215.246:5000/"
export const MAIN = "https://api.rester.ir"


//MAIN is private no need to export it
export const LOGIN = MAIN + "/auth/login"
export const SIGNUP = MAIN + "/auth/registeration"
export const INFORMATION = MAIN + "/user/profile";
export const EDIT_PROFILE = MAIN + "/user/account";
// export const PICKSQUAD = MAIN + "/team/pick-squad"
export const PICKSQUAD_START = MAIN + "/team/";
export const PICKSQUAD_END ="/pick-squad";
// export const MANAGE_TEAM = MAIN + "/team/my-team";
export const MANAGE_TEAM_START = MAIN + "/team/";
export const MANAGE_TEAM_END ="/my-team";
// export const GET_TRANSFERABLE = MAIN + "/team/pick-squad";
export const GET_TRANSFERABLE_START = MAIN + "/team/";
export const GET_TRANSFERABLE_END ="/pick-squad";
// export const POST_TRANSFERABLE = MAIN + "/team/my-team/transfer";
export const POST_TRANSFERABLE_START = MAIN + "/team/";
export const POST_TRANSFERABLE_END ="/my-team/transfer";
// export const CLUBS = MAIN + "/club/2021/clubs"
export const CLUBS_START = MAIN + "/club/"
export const CLUBS_END ="/clubs"
// export const PLAYERS = MAIN + "/player/2021/pick-squad";
export const GAMES_START =MAIN+ "/match/"
export const GAMES_END = "/current-week-matches"
// export const GAMES = MAIN + "/match/2021/current-week-matches";
export const PLAYERS_START = MAIN + "/player/";
export const PLAYERS_END ="/pick-squad";
export const COMPETITIONS = MAIN + "/competition/list";
export const PLAYER_STATISTICS = MAIN + "/statistics/player/";
export const GAME_DETAIL_START = MAIN + "/match/";
export const GAME_DETAIL_END = "/details";
export const USER_RANKS_START= MAIN +"/team/";
export const USER_RANKS_END= "/leaderboard";
export const CARDS_START = MAIN + "/team/";
export const CARDS_END = "/my-team/cards";
export const EMAIL_CONFIRMATION = MAIN + "/auth/registeration/activate/";
