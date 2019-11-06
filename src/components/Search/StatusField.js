import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { useDispatch, useSelector } from "react-redux";
import {setPlayerStatusSuccess} from "../../_actions/searchActions"

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
  
  const Status = [
    'Injured',
    'Suspended',
  ];
  
  function getStyles(name, selectedStatus, theme) {
    return {
      fontWeight:
        selectedStatus.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

export default function StatusField() {
    const classes = useStyles();
    const theme = useTheme();
    const [selectedStatus, setselectedStatus] = React.useState([]);
    const playerStatus = useSelector(state => state.status);
    const dispatch = useDispatch();
  
    const handleChangeMultiple = event => {
      const  options  = event.target.value;
        console.log("hi i am here",options);
        setselectedStatus(event.target.value);
      dispatch(setPlayerStatusSuccess(options));
    };

    return (
             <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Status</InputLabel>
                <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={selectedStatus}
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
                    {Status.map(name => (
                        <MenuItem key={name} value={name} style={getStyles(name, selectedStatus, theme)}>
                        {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
    )
}
