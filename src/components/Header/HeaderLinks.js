/*eslint-disable*/
import React,{useState,useEffect} from "react";

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
  const [checkLogin,setCheckLogin] = useState();
  useEffect(() => {
    if(localStorage.getItem("token")){
      setCheckLogin(
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={()=>buttonClick("/my")}>
          <AccountCircleRoundedIcon	 className={classes.inputIconsColor} />
        </Button>
      )
    }
    else{
      setCheckLogin(
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={()=>buttonClick("/login-page")}>
          <AccountCircleRoundedIcon	 className={classes.inputIconsColor} />
        </Button>
      )
    }
    
  }, [])
  
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
            color="transparent"
            className={classes.navLink}
            onClick={()=>buttonClick("/search")}>
            <SearchRoundedIcon className={classes.inputIconsColor} />
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}> 
        {checkLogin}
      </ListItem>
      <ListItem className={classes.listItem}> 
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={()=>buttonClick("/notification")}>
          <NotificationsActiveIcon className={classes.inputIconsColor} />
        </Button>
      </ListItem>
    </List>
  );
}