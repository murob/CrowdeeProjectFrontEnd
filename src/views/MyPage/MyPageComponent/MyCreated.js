// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { useEffect, useState } from "react";
import MyFundingCard from "components/CrowdeeComponents/MyFundingCard";

const useStyles = makeStyles(styles);

export default function MyCreated() {

    const classes = useStyles();
    const fund = []
    const [fundings, setFundings] = useState([]);
    const [fundingsKey,setFundingsKey] = useState([]);
    const [result,setResult] = useState()
    
    //함수 실행시 최초 한번 실행되는 것
    useEffect(() => {
        fetch("http://localhost:8081/contents")
        .then((res)=>{
        
        if(!res.status==200){
            throw new Error('http 오류');
        }
        return res.json()})
        .then((res)=>{
            if(res){
                setFundings(res);
                setResult(
                    <div className={classes.section}>
                        <GridContainer justify="center">
                            {fundings.map((funding)=>(
                            <MyFundingCard 
                            id={funding.funding_id}
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
            }else{
                setResult(
                    <div>
                        <h5 style={{fontWeight:'bold', color:'gray'}}>
                            진행중인 프로젝트가 없습니다.
                        </h5>
                    </div>
                )
            }  
        })
        .catch((e) =>{
            alert("게시물 조회 중 에러발생 "+ e.message);
        });
    },[])
    console.log(fundings)

    return (
        <div>
            {result}
        </div>
    );
};