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
    
    //함수 실행시 최초 한번 실행되는 것
    const [funding, setFunding] = useState(
        
        {
        fundingId:0,
        creatorId:0,
        projectUrl:"",
        thumbNailUrl:"",
        title:"",
        subTitle:"",
        summary:"",
        tag:"",
        rateOfAchievement:0,
        goalFundraising:0,
        totalFundraising:0,
        category:"",
        restDate:0,
        participant:0,
        result:false,
        isWish:false
        }
    
    );
    
    //함수 실행시 최초 한번 실행되는 것
    useEffect(() => {
        
        fetch("http://localhost:8081/member/myPage/wishList", {
        headers : {
          "Authorization" : `Bearer ${token}`
        }
        }).
        then((res) =>{
            if(res.status==200){
                return res.json()
            }
           else{
               throw Error("에러")
           }
        }).
        then(res=>{
            console.log(res)           
                setFunding(res);
                setResult(
                    <div className={classes.section}>
                        <GridContainer justify="center">
                            {funding.map((funding)=>(
                            <MyFundingCard 
                            id={funding.fundingId}
                            title={funding.title}
                            imgUrl={funding.thumbNailUrl}
                            summary={funding.summary}
                            restDate={funding.restDate}
                            category={funding.category}
                            totalFundraising={funding.totalFundraising}
                            goalFundraising={funding.goalFundraising}
                            ROA={funding.rateOfAchievement}
                            projectUrl={funding.projectUrl} />
                            ))}
                        </GridContainer>
                    </div>
                )
                console.log(result)
        })
        .catch((e) =>{
            setResult(
                <div>
                    <h5 style={{fontWeight:'bold', color:'gray'}}>
                        찜한 프로젝트가 없습니다.
                    </h5>
                </div>
            )
        });
    },[])
    console.log(fundings)

    // const [funding, setFunding] = useState();
  
    return (
        <div>
            {result}
        </div>
    );
};