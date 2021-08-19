import React,{useState,useEffect} from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function FundingCard(props) {
  const classes = useStyles();
  
  const [funding,setFunding] = useState(
      {
          id:props.id,
          title:props.title,
          imgUrl:props.imgUrl,
          summary:props.summary
      }
  );
  
  return (
    <Card style={{width: "20rem",margin:"35px"}}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src={funding.imgUrl}
        alt="펀딩 사진"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{funding.title}</h4>
        <p>{funding.summary}</p>
        <Button color="primary">펀딩 참여하기</Button>
      </CardBody>
    </Card>
  );
}