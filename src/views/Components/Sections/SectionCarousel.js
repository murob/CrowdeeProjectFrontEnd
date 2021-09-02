import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/components/parallaxStyle.js";
// import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";


const useStyles = makeStyles(styles);
export default function SectionCarousel(props) {
  const { filter, className, children, style, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined,
    
    
  
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.parallaxClasses} style={{
      ...styles,
        marginTop:"77px",
        maxWidth : "100%",
        maxHeight : "550px",
        position : "relative",
        display : "flex",
    }}>
      
            <Card carousel>
              <Carousel {...settings}>
                {props.image.map((image,index)=>(
                  <div>
                    
                  <img src={image} alt={`${index} slide`} className="slick-image" />
                  <div className="slick-caption" style={{
                    
                    paddingBottom : "400px",
                    marginRight : "400px",
                    marginLeft : "-100px"
                  }}>
                    <h1>Crowdee</h1>
                  </div>
                </div>
                ))}
            
              </Carousel>
            </Card>
    </div>
  );
}
