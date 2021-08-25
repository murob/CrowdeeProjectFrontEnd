import React,{useState} from 'react';
import { Container } from '@material-ui/core';
import SimpleSelect from 'components/CrowdeeComponents/SimpleSelect';

export default function WriteDefault(props) {
    const [form,setForm] = useState({

    });
    const CategoryControl= (data)=>{
        setForm({
            ...form,
            category : data
        })
  
    }
    const FormValueHandler = (e) =>{
        setFirstForm({
            ...form,
            [e.target.name] : [e.target.value]
        })
       props.save(form)
    }
    return (
        <div style={{paddingTop:'30px', paddingBottom:'30px', backgroundColor:'#FCFCFC',}}>
                <Container maxWidth="md">
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>프로젝트 카테고리</h4>
                            <h6>프로젝트 성격상 가장 일치하는 카테고리를 선택해주세요.</h6>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <SimpleSelect handleState={CategoryControl} />
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>프로젝트 제목</h4>
                            <h6>프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요.</h6>
                        </div>
                        <div>
                            <h5 style={{fontWeight:'bold'}}>긴 제목</h5>
                            <input name="title" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'450px', height:'40px'}} placeholder={'긴 제목을 입력해주세요'}></input>
                            <h5 style={{fontWeight:'bold'}}>짧은 제목</h5>
                            <input name="subTitle" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'450px', height:'40px'}} placeholder={'짧은 제목을 입력해주세요'}></input>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>프로젝트 요약</h4>
                            <h6>후원자 분들이 프로젝트를 빠르게 이해할 수 있도록<br/>명확하고 간략하게 소개해주세요.</h6>
                        </div>
                        <div>
                            <input name="summary" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'450px', height:'100px'}} placeholder={'프로젝트에 대해 요약해서 입력해주세요'}></input>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>프로젝트 대표이미지</h4>
                            <h6>후원자들이 프로젝트의 내용을 쉽게 파악하고<br/>좋은 인상을 받을 수 있도록 이미지 가이드라인을 따라주세요.</h6>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <input type="file"></input>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>검색태그</h4>
                            <h6>잠재 후원자의 관심사를 고려한 검색 태그를 입력해주세요.</h6>
                        </div>
                        <div>
                            <input name="hashtag" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'450px', height:'80px'}} placeholder={'예시) 피아노,사극,현대무용 (# 또는 , 로 구분)'}></input>
                        </div>
                    </div>

                </Container>    
            </div> 
    );
};