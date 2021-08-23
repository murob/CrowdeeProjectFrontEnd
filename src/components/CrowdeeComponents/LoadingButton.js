import React,{useState} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
// core components

import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle.js";

const makeComponentStyles = makeStyles((theme) => ({
  ...buttonStyle,
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

}));
//const [open,setOpen] = useState(false);
const RegularButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });

    const handleToggle = () => {
        setOpen(true);
        props.onClick();
    };
    const [open,setOpen] = useState(false);
    useEffect(() => {
        setOpen(false)
       
    }, [props.open])
    return (
    <div>
      <Button {...rest} ref={ref} className={btnClasses} onClick={handleToggle}>
      {children}
      </Button>
      <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    
  );
});

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default RegularButton;
