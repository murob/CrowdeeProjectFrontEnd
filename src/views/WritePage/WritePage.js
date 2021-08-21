import { Container, Grid } from '@material-ui/core';
import GridContainer from 'components/Grid/GridContainer';
import React from 'react';
import Write from 'views/Components/Editor/Write';
import { Button } from '@material-ui/core'; 
import { Box } from '@material-ui/core';
import { red } from '../../../ckeditor5 final/node_modules/chalk';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function WritePage() {

    return (
    <div style={{height:'2000px'}}>
        <Container>
         <div style={{backgroundColor:'write'}}>
            <div style={{borderBottom: '1px solid #CECECE', height:'230px'}}>
                <div style={{display:'flex', paddingTop:'20px', justifyContent:'space-between'}}>
                    <div>
                        <Button fontSize="large" size='large'><ArrowBackIcon fontSize="large"/></Button>{' '}
                    </div>
                    <div>
                        <Button variant="outlined" size='large'>취소</Button>{' '}
                        <Button variant="contained" color="secondary" size='large'>저장</Button>{' '}
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'30px', paddingTop:'80px'}}>
                    <Box fontSize={30} fontWeight="fontWeightBold">프로젝트 등록</Box>
                </div>
            </div>
            <div style={{paddingTop:'30px', paddingBottom:'30px', backgroundColor:'#F8F8F8',}}>
                <Container maxWidth="sm">
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', }}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 목적</h3>
                        <h5>무엇을 만들기 위한 프로젝트인지 분명히 알려주세요.</h5>
                        <Write></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 요약</h3>
                        <h5>프로젝트를 소개내용을 요약해주세요.</h5>
                        <Write></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 팀소개</h3>
                        <h5>프로젝트 팀 소개내용을 입력해주세요.</h5>
                        <Write></Write>
                    </div>
                </Container>    
            </div> 
        </div>
        </Container>
      
    </div>
     
    );
};
