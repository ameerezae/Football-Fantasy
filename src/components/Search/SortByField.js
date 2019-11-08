import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch,useSelector } from "react-redux";
import {setPlayerPositions,filterByPositionAll} from "../../_actions/searchActions"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import {setSortValue,sortBy} from '../../_actions/searchActions'

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
      // const handleChangeMultiple = event => {
    //   const  options  = event.target.value;
    //   console.log("hi i am here",options);
    //   setSelectedPositions(event.target.value);
    //   dispatch(setPlayerPositions(options));
    //   dispatch(filterByPositionAll(options,posState));
    // };
  
export default function SortByField() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const sortState = useSelector(state => state.searchReducer)
    const [sortVal, setSortVal] = React.useState('');
  
    const inputLabel = React.useRef('null');
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
      }, []);
    
    const handleChange = event => {
        setSortVal(event.target.value);
        dispatch(setSortValue(event.target.value));
        dispatch(sortBy(event.target.value,sortState));
      };

    return (
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">SortBy</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={sortVal}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Price'}>Price</MenuItem>
          <MenuItem value={'Name'}>Name</MenuItem>
        </Select>
      </FormControl>
    )
}
