// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { useEffect, useState } from "react";
import MyFundingCard from "components/CrowdeeComponents/MyFundingCard";

const useStyles = makeStyles(styles);


export default function MyCreated(props) {

    return (
        <div>
            {props.data}
        </div>
    );
};