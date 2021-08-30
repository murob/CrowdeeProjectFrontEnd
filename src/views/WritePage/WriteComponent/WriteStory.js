import { Container } from '@material-ui/core';
import React,{useState,useEffect} from 'react';

import Write from 'views/Components/Editor/Write';

export default function WriteStory(props) {

    const [content,setContent] = useState();
    const [budget,setBudget] = useState();
    const [schedule,setSchedule] = useState();
    const [aboutUs,setAboutUs] = useState();
    //const [data,setData] = useState();
    const [totalForm,setTotalForm] = useState("");

    // const FormValueHandler = (formData) =>{
    //     setData({
    //         ...data,
    //         formData,
    //     })
    //     console.log(data)
    //     props.save(data)      
    // }

    

    const contentValueHandler =(data) =>{
        
        console.log("핸들러 data" + data)
        setContent(
            data
        )
   
  
      
        setTotalForm({
             ...totalForm,
             "content" : data})


        props.save(totalForm)
        console.log(totalForm)
    }
    
    const budgetValueHandler = (data) =>{
       
        setBudget(
            data
        )
        setTotalForm({
            ...totalForm,
            "budget" : data
        })
       props.save(totalForm)
       console.log(totalForm)
    }
    const scheduleValueHandler = (data) =>{
      
        setSchedule(
          data
        )
        setTotalForm(
            {
                ...totalForm,
                "schedule" : data
            })
       props.save(totalForm)
       console.log(totalForm)
    }
    const aboutUsValueHandler = (data) =>{
      
        setAboutUs(
           data
        )
        setTotalForm(
            {
                ...totalForm,
                "aboutUs" : data
            }
            )
       props.save(totalForm)
       console.log(totalForm)
    }
    return (
        <div style={{paddingTop:'30px', paddingBottom:'30px', backgroundColor:'#FCFCFC',}}>
                <Container maxWidth="sm">
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', }}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 내용</h3>
                        <h5>무엇을 만들기 위한 프로젝트인지 분명히 알려주세요.</h5>
                        <Write onSave={contentValueHandler}></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 예산</h3>
                        <h5>프로젝트를 소개내용을 요약해주세요.</h5>
                        <Write api="budget" onSave={budgetValueHandler}></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 일정</h3>
                        <h5>프로젝트 팀 소개내용을 입력해주세요.</h5>
                        <Write api="schedule" onSave={scheduleValueHandler}></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 팀소개</h3>
                        <h5>프로젝트 팀 소개내용을 입력해주세요.</h5>
                        <Write api="aboutUs"  onSave={aboutUsValueHandler}></Write>
                    </div>
                </Container>    
            </div> 
    );
};