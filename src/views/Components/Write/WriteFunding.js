import { Container } from '@material-ui/core';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Write from 'views/Components/Editor/Write';

export default function WriteFunding() {
    return (
        <div style={{paddingTop:'30px', paddingBottom:'30px', backgroundColor:'#FCFCFC',}}>
                <Container maxWidth="md">
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>목표 금액</h4>
                            <h6>프로젝트를 완수하기 위해 필요한 금액을 설정해주세요.</h6>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <h3 style={{fontWeight:'bold'}}>목표 금액</h3>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>펀딩 일정</h4>
                            <h6>설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지<br/>날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.</h6>
                        </div>
                        <div>
                            <h3 style={{fontWeight:'bold'}}>펀딩 기간</h3>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>최소 펀딩금액</h4>
                            <h6>설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지<br/>날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.</h6>
                        </div>
                        <div>
                            <h3 style={{fontWeight:'bold'}}>펀딩금액</h3>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>최대 후원자 수</h4>
                            <h6>설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지<br/>날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.</h6>
                        </div>
                        <div>
                            <h3 style={{fontWeight:'bold'}}>후원자 수</h3>
                        </div>
                    </div>
                </Container>  
            </div> 
    );
};