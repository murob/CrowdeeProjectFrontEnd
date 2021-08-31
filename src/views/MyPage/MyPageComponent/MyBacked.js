import React from 'react';
import { Button } from '@material-ui/core';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import FundingCard from "components/CrowdeeComponents/FundingCard";
import { Typography } from "@material-ui/core";

export default function MyBacked() {
    return (
        <div>
            <h5 style={{fontWeight:'bold', color:'gray'}}>
                후원중인 프로젝트가 없습니다.
            </h5>
            <div>
                꺄르르
                <div style={{width:'330px', height:'465px'}}>
                    <div style={{border:'1px solid black', borderRadius:'5px', width:'330px', height:'245px'}}>
                        여긴뭐지
                    </div>
                    <div style={{border:'1px solid black', width:'330px', height:'220px'}}>
                        <div>                            
                            <h4 style={{fontWeight:'bold', color:'black', fontSize:'20px'}}>(불안과 경쟁 없는 이곳에서) 자연농 농부 인터뷰집</h4>
                        </div>
                        <div style={{display:'flex', alignItems:'center', height:'25px'}}>
                            <h6>카테고리</h6>
                            <h6>&nbsp;|&nbsp;</h6>
                            <h6>크리에이터닉네임</h6>
                        </div>
                        <div style={{display:'flex', alignItems:'center', minHeight:'50px', maxHeight:'100%'}}>
                            <h5 style={{fontWeight:'bold', fontSize:'15px'}}>
                                프로젝트 요약입니다. 한국, 미국, 일본의 자연농 농부들에게 '지구에서 즐겁게 사는 법'을 듣습니다.
                            </h5>
                        </div>
                        <div style={{border:'1px solid black'}}>
                            펀딩진행률
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};