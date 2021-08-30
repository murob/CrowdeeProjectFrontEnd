/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh

import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import { Icon } from "@material-ui/core";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function MenuLink(props) {
  const classes = useStyles();
  
  const history = useHistory();

  const buttonClick = (url) =>{
    
    history.push(url);
  };

  return (
    <Icon>
      <MenuIcon
        color="white"
        className={classes.navLink}
        onClick={()=>buttonClick("/menu-page")}>
        <AccountCircleRoundedIcon	 className={classes.inputIconsColor} />
      </MenuIcon>
    </Icon>
      
  );
}