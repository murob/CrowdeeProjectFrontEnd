/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";


// @material-ui/icons

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// core components

import Button from "components/CustomButtons/Button.js";
import LoadingButton from "components/CrowdeeComponents/LoadingButton";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  
  const history = useHistory();

  const buttonClick = (url) =>{
    
    history.push(url);
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <LoadingButton
            color="transparent"
            className={classes.navLink}
            onClick={()=>buttonClick("/search")}>
            <SearchRoundedIcon className={classes.inputIconsColor} />
          </LoadingButton>
      </ListItem>
      <ListItem className={classes.listItem}> 
        <LoadingButton
          color="transparent"
          className={classes.navLink}
          onClick={()=>buttonClick("/login-page")}>
          <AccountCircleRoundedIcon	 className={classes.inputIconsColor} />
        </LoadingButton>
      </ListItem>
      <ListItem className={classes.listItem}> 
        <LoadingButton
          color="transparent"
          className={classes.navLink}
          onClick={()=>buttonClick("/notification")}>
          <NotificationsActiveIcon className={classes.inputIconsColor} />
        </LoadingButton>
      </ListItem>
    </List>
  );
}
