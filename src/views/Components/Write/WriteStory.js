import { Container } from '@material-ui/core';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Write from 'views/Components/Editor/Write';

export default function WriteStory() {
    return (
        <div style={{paddingTop:'30px', paddingBottom:'30px', backgroundColor:'#FCFCFC',}}>
                <Container maxWidth="sm">
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', }}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 내용</h3>
                        <h5>무엇을 만들기 위한 프로젝트인지 분명히 알려주세요.</h5>
                        <Write></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 예산</h3>
                        <h5>프로젝트를 소개내용을 요약해주세요.</h5>
                        <Write></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 일정</h3>
                        <h5>프로젝트 팀 소개내용을 입력해주세요.</h5>
                        <Write></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 팀소개</h3>
                        <h5>프로젝트 팀 소개내용을 입력해주세요.</h5>
                        <Write></Write>
                    </div>
                </Container>    
            </div> 
    );
};