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
    const [result,setResult] = useState();
    const [token,setToken] = useState(localStorage.getItem("token"))
   

    const [funding, setFunding] = useState({
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
    });
    
    //함수 실행시 최초 한번 실행되는 것
    useEffect(() => {
        console.log("asdlkj"+localStorage.getItem("token"))
        fetch("http://localhost:8081/member/myPage/fundingList", {
        headers : {
          "Authorization" : `Bearer ${token}`
        }
        }).
        then(
            res=>res.json(),
        )
        .then(res=>{
            console.log(res)
            if(res){
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
            }else{
                setResult(
                    <div>
                        <h5 style={{fontWeight:'bold', color:'gray'}}>
                            후원한 프로젝트가 없습니다.
                        </h5>
                    </div>
                )
            }  
        })
        .catch((e) =>{
            alert("게시물 조회 중 에러발생 "+ e.message);
        });
    },[])
    console.log(funding)

    return (
        <div>
            {result}
        </div>
    );
};