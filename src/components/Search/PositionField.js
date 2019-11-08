import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { useDispatch,useSelector } from "react-redux";
import {setPlayerPositions,filterByPositionAll} from "../../_actions/searchActions"

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const Positions = [
    'GK',
    'DEF',
    'MID',
    'FWD',
  ];
  
  function getStyles(name, SelectedPositions, theme) {
    return {
      fontWeight:
        SelectedPositions.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

export default function PositionField() {
    const classes = useStyles();
    const theme = useTheme();
    const [SelectedPositions, setSelectedPositions] = React.useState([]);
    const dispatch = useDispatch();
    const posState = useSelector(state => state.searchReducer)
  
    const handleChangeMultiple = event => {
      const  options  = event.target.value;
      console.log("hi i am here",options);
      setSelectedPositions(event.target.value);
      dispatch(setPlayerPositions(options));
      filterByPositionAll(options,posState)
    };

    return (
             <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Positions</InputLabel>
                <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={SelectedPositions}
                onChange={handleChangeMultiple}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                    <div className={classes.chips}>
                    {selected.map(value => (
                        <Chip key={value} label={value} className={classes.chip} />
                    ))}
                    </div>
                )}
                MenuProps={MenuProps}
                >
                    {Positions.map(name => (
                        <MenuItem key={name} value={name} style={getStyles(name, SelectedPositions, theme)}>
                        {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
    )
}
