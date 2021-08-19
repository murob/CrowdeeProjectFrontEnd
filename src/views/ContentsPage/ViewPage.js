import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import studio1 from "assets/img/examples/studio-1.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ViewPage(props) {
  const id = props.match.params.id;

  const[View, setView] = useState({
      id:"",
      title:"",
      creator:"",
      thumbnail:"",
      currentamount:"",
      targetamount:"",
      deadline:"",
      sponser:"",
      contents:"",
      mindonation:"",
      selfdonation:""
  });
      
    // useEffect(() => {
    //   fetch("http://localhost:8081/contents/"+id).then(res=>res.json()).then(res=>{
    //       setView(res);
    //   })
    // },[])

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);



  return (
    <div>
      <Header
        color="transparent"
        brand="Crowdee"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>펀딩 상세보기 페이지</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                펀딩상세보기 페이지로 쓰자꾸나{" "}
              </p>
            </div>
            <GridContainer justify="left">
              <GridContainer>  
                <GridItem xs={6} className={classes.navWrapper}>
                    <img alt="..." src={studio1} className={navImageClasses} />
                </GridItem>
              </GridContainer>
            </GridContainer>
            <GridContainer justify="flex">
              <GridContainer>  
                <GridItem xs={6}  className={classes.navWrapper}>
                <img alt="..." src={studio1} className={navImageClasses} />
                    <h3>{View.title}</h3>
                    <h1>{View.creator}</h1>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}