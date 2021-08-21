// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { useEffect, useState } from "react";
import FundingCard from "components/CrowdeeComponents/FundingCard";
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const [fundings, setFundings] = useState([]);

  //함수 실행시 최초 한번 실행되는 것
  useEffect(() => {
    fetch("http://localhost:8081/contents")
    .then((res)=>{
      if(!res.status==200){
        throw new Error('http 오류');
      }
      return res.json()})
      .then((res)=>{
      console.log(1,res);
      setFundings(res);
      })
      .catch((e) =>{
        alert("게시물 조회 중 에러발생 "+ e.message);
      });
  },[])

  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>주목할 만한 펀딩</h2>
          </GridItem>
        </GridContainer>
        

          <GridContainer justify="center">
            
            {/* {fundings.map((funding) => (
              <FundingCard 
                id={funding.id}
                title={funding.title}
                imgUrl={funding.imgUrl}
                summary={funding.summary}
              ></FundingCard>
            ))} */}
            <GridItem>
              <GridContainer justify="center">
               <FundingCard 
                  id='1'
                  title='펀딩타이틀1'
                  imgUrl='/Users/moon/Crowdee/src/main/resources/file/20210819/0c1aaf6db59540e9805a19cba2057c17.png'
                  summary='펀딩게시물1'
                />
                <FundingCard 
                  id='2'
                  title='펀딩타이틀2'
                  imgUrl='/Users/moon/Crowdee/src/main/resources/file/20210819/0c1aaf6db59540e9805a19cba2057c17.png'
                  summary='펀딩게시물2'
                />
                  <FundingCard 
                  id='3'
                  title='펀딩타이틀3'
                  imgUrl='/Users/moon/Crowdee/src/main/resources/file/20210819/0c1aaf6db59540e9805a19cba2057c17.png'
                  summary='펀딩게시물3'
                />
                <FundingCard 
                  id='3'
                  title='펀딩타이틀3'
                  imgUrl='/Users/moon/Crowdee/src/main/resources/file/20210819/0c1aaf6db59540e9805a19cba2057c17.png'
                  summary='펀딩게시물3'
                />
              </GridContainer>
              
            </GridItem>
            <GridItem>
              <GridContainer justify="center">
               <FundingCard 
                  id='4'
                  title='펀딩타이틀4'
                  imgUrl='/Users/moon/Crowdee/src/main/resources/file/20210819/0c1aaf6db59540e9805a19cba2057c17.png'
                  summary='펀딩게시물4'
                />
                <FundingCard 
                  id='5'
                  title='펀딩타이틀5'
                  imgUrl='/Users/moon/Crowdee/src/main/resources/file/20210819/0c1aaf6db59540e9805a19cba2057c17.png'
                  summary='펀딩게시물5'
                />
                  <FundingCard 
                  id='6'
                  title='펀딩타이틀6'
                  imgUrl='/Users/moon/Crowdee/src/main/resources/file/20210819/0c1aaf6db59540e9805a19cba2057c17.png'
                  summary='펀딩게시물6'
                />
                <FundingCard 
                  id='3'
                  title='펀딩타이틀3'
                  imgUrl='/Users/moon/Crowdee/src/main/resources/file/20210819/0c1aaf6db59540e9805a19cba2057c17.png'
                  summary='펀딩게시물3'
                />
              </GridContainer>
              
            </GridItem>
             
          </GridContainer>
        
      </div>
    </div>
  );
}