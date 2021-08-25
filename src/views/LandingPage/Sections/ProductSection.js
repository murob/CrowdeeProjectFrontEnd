// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { useEffect, useState } from "react";
import FundingCard from "components/CrowdeeComponents/FundingCard";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const [fundings, setFundings] = useState([]);

  //함수 실행시 최초 한번 실행되는 것
  useEffect(() => {
    fetch("http://localhost:8081/contents")
    .then((res)=>{
      console.log(res)
      if(!res.status==200){
        throw new Error('http 오류');
      }
      return res.json()})
      .then((res)=>{
      setFundings(res);
      console.log(res[0].rateOfAchievement)
      })
      .catch((e) =>{
        alert("게시물 조회 중 에러발생 "+ e.message);
      });
  },[])
  const [title,setTitle] = useState();
  const modalControl = (funding) =>{
    
  }
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Typography>주목할 만한 펀딩</Typography>
          </GridItem>
        </GridContainer>
      
          <GridContainer justify="center">
            <GridItem>
              <GridContainer justify="center">
              {fundings.map((funding) => (
                <FundingCard 
                  id={funding.funding_id}
                  title={funding.title}
                  imgUrl={funding.thumbNailUrl}
                  summary={funding.summary}
                  restDate={funding.restDate}
                  category={funding.category}
                  totalFundraising={funding.totalFundraising}
                  goalFundraising={funding.goalFundraising}
                  ROA={funding.rateOfAchievement}
                ></FundingCard>
              ))} 
              </GridContainer>
            </GridItem>
          </GridContainer>
      </div>
    </div>
  );
}