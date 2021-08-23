import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [concert, setConcert] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">카테고리</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={concert}
          onChange={handleChange}
          label="concert"
          style={{width:'300px', height:'50px'}}
        >
          <MenuItem value={10}>무용</MenuItem>
          <MenuItem value={20}>연극</MenuItem>
          <MenuItem value={30}>뮤지컬</MenuItem>
          <MenuItem value={40}>연주</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
