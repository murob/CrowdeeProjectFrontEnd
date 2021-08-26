import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  const [color,setColor] = useState("primary")
  const [textColor , setTextColor] = useState("primary")
  useEffect(() => {
    if(props.value>=100){
      setColor("secondary")
      setTextColor("error")
    }
    
  }, [])
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress height="20" color={color} variant="determinate" value={props.labelValue} />
      </Box>
      <Box minWidth={35}>
        <Typography  variant="body2" color={textColor}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(props.value);
  const [labelPercent, setLabelPercent] = useState()
  useEffect(() => {
    if(props.value>=100){
      setLabelPercent(100)
    }
    else{
      setLabelPercent(props.value)
    }
  }, [])
  

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} labelValue={labelPercent} />
    </div>
  );
}
