// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import React,{ useEffect, useState,useMemo } from "react";
import MyFundingCard from "components/CrowdeeComponents/MyFundingCard";

const useStyles = makeStyles(styles);

export default function MyWish(props) {

    const classes = useStyles();
   
    const [result,setResult] = useState()
    const [token,setToken] = useState(localStorage.getItem("token"))
    
    const [funding, setFunding] = useState();
  
    return (
        <div>
         
        </div>
    );
};