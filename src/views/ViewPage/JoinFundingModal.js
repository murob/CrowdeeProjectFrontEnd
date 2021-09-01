import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes

// @material-ui/core components

// core components


import { Container } from "@material-ui/core";
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import FavoriteIcon from '@material-ui/icons/Favorite';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';

import styles from "assets/jss/material-kit-react/views/profilePage.js";



export default function JoinFundingModal (props) {
    const history = useHistory();
    const [form,setForm] = useState({})
    const FormValueHandler = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const buttonClick = (url) =>{
    
        history.push(url);
    };

  return (
    <Container>
         <div style={{backgroundColor:'white',width:"75%",height:"100%"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <h3>펀딩 참여하기</h3>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{marginLeft:"100px"}}><h4>참여하시는 펀딩</h4></div>
                <div style={{display:'flex', alignItems:'center',marginRight:"100px"}}>
                    <h4>{props.title}</h4>
                </div>

            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{marginLeft:"100px"}}><h4>크리에이터 정보</h4></div>
                <div style={{display:'flex', alignItems:'center',marginRight:"100px"}}>
                    <h4
                    style={{
                        cursor:"pointer",
                        color:"gray"
                    }}
                    onClick={()=>{buttonClick(`/myPage/${props.creatorNickName}`)}}>{props.creatorNickName}</h4>      
                </div>

            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{marginLeft:"100px"}}><h4>남은 티켓</h4></div>
                <div style={{display:'flex', alignItems:'center',marginRight:"100px"}}>
                    <h4>{props.maxBacker-props.totalBacker} 장</h4>      
                </div>

            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{marginLeft:"100px"}}><h4>총 모인 금액</h4></div>
                <div style={{display:'flex', alignItems:'center',marginRight:"100px"}}>
                    <h4>{props.totalFundraising} 원</h4>      
                </div>

            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}>
                
                <div style={{marginLeft:"100px"}}><h4>펀딩 참여 금액</h4></div>
                <div style={{display:'flex', alignItems:'center',marginRight:"100px"}}>
                <input name="fundraising" 
                onChange={FormValueHandler}
                style={{border:'1px solid #B6B7B9',
                
                borderRadius:'3px', 
                width:'150px',
                height:'40px', marginRight:'10px'}} 
                placeholder={' 펀딩 금액을 입력해주세요.'} />
                <p>원</p>        
                </div>

            </div>

        </div>
    </Container>
   
  );
}