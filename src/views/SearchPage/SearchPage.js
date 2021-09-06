import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Container } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuLink from 'components/Header/MenuLink';
import Header from 'components/Header/Header';
import MenuIcon from '@material-ui/icons/Menu';
import GridContainer from 'components/Grid/GridContainer';
import MyFundingCard from 'components/CrowdeeComponents/MyFundingCard';
import FundingCard from 'components/CrowdeeComponents/FundingCard';
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { useState } from 'react';
import Footer from 'components/Footer/Footer';

export default function SearchPage(props) {
    const classes = useStyles();

    const history = useHistory();

    const buttonClick = (url) =>{
    
        history.push(url);
    };

    const [text, setText] = useState()
    const [funding, setFunding] = useState([])
    const [result, setResult] = useState()

    const enterKey = (e) =>{
        if(window.event.keyCode == 13){
            setResult()
            // setText(e.target.value)
            // alert(text.value)
            fetch("http://localhost:8081/contents/search", {
                method:"POST",
                headers : {
                    "content-type":"application/json"
                },
                body:text.value
            }).
            then((res)=>{
                if(res.status==200){
                    return res.json()
                }
                else{
                    throw Error("에러")
                }
            }).
            then((res)=>{
                setFunding(res)
            })
            .catch((e) => {
                setResult(
                    <div>
                        <h3>검색결과가 없습니다.</h3>
                    </div>
                )
            })
        }
    }

    const onChange = (e) => {
        // const {value} = e.target
        setText(e.target)
        // console.log({value})
    }

    useEffect(() => {
        if(funding.length>0){ 
             setResult(
                <div className={classes.section}>
                     <GridContainer justify="center">
                         {funding.map((funding)=>(
                         <FundingCard 
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
        }
    }, [funding])

    return (
        <div style={{backgroundColor:'white', height:'100%'}}>
            
            <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', borderBottom:'2px solid #F0F1EC', height:'10%', width:'100%', backgroundColor:'white', position:'fixed', zIndex:'1'}}>
                <div style={{display:'flex'}}>
                    <MenuIcon
                        color="white"
                        className={classes.navLink}
                        onClick={()=>buttonClick("/menu-page")}
                        style={{
                        cursor:"pointer",
                        fontSize:35
                        }}
                    >
                        <AccountCircleRoundedIcon className={classes.inputIconsColor} />
                    </MenuIcon>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <SearchIcon style={{fontSize:35}}/>
                    {/* <input style={{height:'40px', fontSize:'25px', width:'', marginLeft:'', border:'1px solid white'}} placeholder={'검색어를 입력해주세요.'} onKeyPress={()=>enterKey()}></input> */}
                    <input style={{height:'40px', fontSize:'25px', width:'', marginLeft:'', border:'1px solid white'}} placeholder={'검색어를 입력해주세요.'} name="name" onKeyPress={()=>enterKey()} onChange={onChange} ></input>
                </div>
                <div>
                    <Button onClick={()=>buttonClick("/")}>
                        <CloseIcon fontSize={'large'}/>
                    </Button>
                </div>
            </div>
            {/* <Container>
                <div style={{display:'flex', height:'63%', width:'92%', paddingTop:'150px'}}>
                    {result}
                </div>
            </Container> */}
            <Container style={{backgroundColor:'white', minHeight:'100vh', maxHeight:'100%', paddingTop:'100px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', zIndex:'0', marginBottom:'50px'}}>
                <div className={classNames(classes.main, classes.mainRaised)} style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', minHeight:'300px', maxHeight:'100%', marginTop:'60px', zIndex:'0'}}>
                    {result}
                </div>
            </Container>   
            <Footer/>
        </div>
    );
};