import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { useDispatch, useSelector } from "react-redux";
import {setPlayerClubs,clubGetRequest,filterByClubsAll} from "../../_actions/searchActions"
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 265,
      maxWidth: 350,
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
    
  function getStyles(name, ClubNames, theme) {
    return {
      fontWeight:
        ClubNames.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

export default function ClubsField() {
    const classes = useStyles();
    const theme = useTheme();
    const [ClubNames, setClubNames] = React.useState([]);
    const dispatch = useDispatch();
    const ClubsState = useSelector(state => state.searchReducer);
   
    const handleChangeMultiple = event => {
        const  options  = event.target.value;
          console.log("hi i am here",options);
          setClubNames(event.target.value);
          dispatch(setPlayerClubs(options));
          filterByClubsAll(options,ClubsState)
      };
      React.useEffect(() => {
        if(ClubsState.isFetched === false)
        {
          console.log("i am fetching data")
          dispatch(clubGetRequest());
        }
        // document.title = `You clicked ${count} times`;
      });
  

    return (
             <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Clubs</InputLabel>
                <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={ClubNames}
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
                    {ClubsState.fetchedClubs.map(element => (
                        <MenuItem key={element.name} value={element.name} style={getStyles(element.name, ClubNames, theme)}>
                          <div className="row">
                            <div className="col">
                              <div className="row justify-content-start">
                              <img src={element.image}width="30" className="mr-1" /></div>
                              </div>
                              
                            <div className="col">
                              <div className="row justify-content-end">
                                {element.name}
                              </div>
                            </div>

                          </div>
                         {/* <img src={element.image}width="30" className="mr-1" /><Divider/>{element.name} */}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
    )
}
