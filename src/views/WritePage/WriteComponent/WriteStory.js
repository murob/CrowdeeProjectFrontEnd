import { Container } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import Write from 'views/Components/Editor/Write';

export default function WriteStory(props) {

   
    const {manageUrl} = useParams();
    
    const [token,setToken] = useState(localStorage.getItem("token"))
    const [totalForm,setTotalForm] = useState("");

   
    
  
    const contentValueHandler =(data) =>{
        
        
        setTotalForm({
             ...totalForm,
             "content" : data})
        props.save(totalForm)
        console.log(totalForm)
    }
    
    const budgetValueHandler = (data) =>{
       
        
        setTotalForm({
            ...totalForm,
            "budget" : data
        })
       props.save(totalForm)
       console.log(totalForm)
    }
    const scheduleValueHandler = (data) =>{
      
       
        setTotalForm(
            {
                ...totalForm,
                "schedule" : data
            })
       props.save(totalForm)
       console.log(totalForm)
    }
    const aboutUsValueHandler = (data) =>{
        setTotalForm({
                ...totalForm,
                "aboutUs" : data
            })
        props.save(totalForm)
    }
    useEffect(() => {
        console.log("asdasd,",props.data)
        setTotalForm(props.data)
        fetch(`http://localhost:8081/creator/edit/${manageUrl}`,{
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        }).then((res)=>{
            if(!res.status==200){
                throw new Error("http에러")
            }
            return res.json()
        }).then((res)=>{
            console.log("writeStory",res)
            setTotalForm({
                "content" : res.content,
                "budget" : res.budget,
                "schedule" :res.schedule,
                "aboutUs" : res.aboutUs
            })
            
        }).catch((e)=>{
            console.log(e.message)
        })
        
    },[])

    return (
        <div style={{paddingTop:'30px', paddingBottom:'30px', backgroundColor:'#FCFCFC',}}>
                <Container maxWidth="sm">
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', }}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 내용</h3>
                        <h5>무엇을 만들기 위한 프로젝트인지 분명히 알려주세요.</h5>
                        <Write onSave={contentValueHandler} data={totalForm.content}></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 예산</h3>
                        <h5>프로젝트를 소개내용을 요약해주세요.</h5>
                        <Write api="budget" onSave={budgetValueHandler} data={totalForm.budget}></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 일정</h3>
                        <h5>프로젝트 팀 소개내용을 입력해주세요.</h5>
                        <Write api="schedule" onSave={scheduleValueHandler} data={totalForm.schedule}></Write>
                    </div>
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px'}}>
                        <h3 style={{fontWeight:'bold'}}>프로젝트 팀소개</h3>
                        <h5>프로젝트 팀 소개내용을 입력해주세요.</h5>
                        <Write api="aboutUs"  onSave={aboutUsValueHandler} data={totalForm.aboutUs}></Write>
                    </div>
                </Container>    
            </div> 
    );
};