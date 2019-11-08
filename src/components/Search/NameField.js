import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { useDispatch,useSelector } from "react-redux";
import {filterByNameAll,setPlayerName} from "../../_actions/searchActions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function NameFiled() {
  const classes = useStyles();
  const state = useSelector(state => state.searchReducer);
  const [SelectedName, setSelectedName] = React.useState([]);
  const searchState = useSelector(state => state.searchReducer);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSelectedName(event.target.value)
    dispatch(setPlayerName(event.target.value))
    filterByNameAll(event.target.value,searchState)    
  };
  // const handleSubmit = () => {
  //   console.log(state)
  //   // dispatch(playerSearchRequest(state,SelectedName));
  // };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Player"
        inputProps={{ 'aria-label': 'Search Player' }}
        onChange={handleChange}
      />
    </Paper>
  );
}