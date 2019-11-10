import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange,filterByRangeAll } from "../../_actions/searchActions"


const useStyles = makeStyles({
  root: {
    marginTop: '1rem',
    width: '100%',
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceRange() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 12]);
  const dispatch = useDispatch();
  const priceState = useSelector(state => state.searchReducer);  

  const handleChange = (event, newValue) => {
    // console.log("fucking range is",newValue)
    setValue(newValue);
    dispatch(setPriceRange(newValue));
    dispatch(filterByRangeAll(newValue,priceState));
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={12}
        step={1}
        marks
      />
    </div>
  );
}