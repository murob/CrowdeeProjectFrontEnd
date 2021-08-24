import React , {useState,useEffect} from 'react';
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

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
  
    setCategory(event.target.value);
    props.handleState(category);  

  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">카테고리</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={category}
          onChange={handleChange}
          label="concert"
          style={{width:'300px', height:'50px'}}
        >
          <MenuItem value="dance">무용</MenuItem>
          <MenuItem value="theater">연극</MenuItem>
          <MenuItem value="musical">뮤지컬</MenuItem>
          <MenuItem value="concert">연주</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
