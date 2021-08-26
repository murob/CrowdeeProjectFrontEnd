import React, {useState} from 'react';
import Header from "components/Header/Header.js";
import HeaderLinks from 'components/Header/HeaderLinks';
import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";
import Footer from 'components/Footer/Footer';
import Card from 'components/Card/Card';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { Button } from '@material-ui/core';
import { request } from "Utils/Utils";
import { Link, Switch } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function ProjectStartPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const [manageUrl,setManageUrl] = useState()
    const [projectUrl,setProjectUrl] = useState({projectUrl:""})

    const urlChange = (e) => {
        setProjectUrl(
            e.target.value
        );
        console.log(projectUrl)
    }

    const doubleCheck = () => {
        console.log('중복확인')
        fetch(`http://localhost:8081/creator/checkUrl/${projectUrl}`, {
            headers:{
              
            }
        }).then((res)=>{
            if(res.status==200){
                console.log('중복URL 없음')
                submitStart()
            }
            else if(res.status==400||res.status==401||res.status==403||res.status==404){
                console.log('URL이 중복됩니다.')
            }
        })
    }

    const submitStart = () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        fetch(`http://localhost:8081/create/funding/${projectUrl}`, {
            headers:{
              "Authorization" : token
            }
        }).
        then((res)=>{
            if(!res.status==200){
                throw new Error("에러임")
            }
            res.json();
        }).
        then((res)=>{
            setManageUrl(res.tempFundingDTO.manageUrl)
            props.history.push(`/write-page/${manageUrl}`)
        })
    }
    const subStart = () => {
        console.log('default페이지로 이동')       
        props.history.push("/write-page")
        
    }
    return (
        <div style={{backgroundColor:'white'}}>
            <Header
                brand="Crowdee"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                height: 347,
                color: "white",
                }}
                {...rest}
            />

            <div style={{marginTop:'5%', marginLeft:'-100px', width:'100%', height:'700px', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <div style={{marginLeft:'100px',width:'100px', display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
                    <img style={{width:'400px'}} src={require('./crowdee-logo.png').default} />
                </div>
                <div style={{}}>
                    <div style={{width:'300px'}}>
                        <h6 style={{fontWeight:'bold', color:'red'}}><FeedbackIcon fontSize="small"/> 작성 중인 프로젝트가 있습니다.</h6>
                        <Card style={{height:'80px', width:'500px', display:'flex', justifyContent:'center', marginTop:'10px'}}>
                            <Button style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                                <img src={require('./apple-icon.png').default}/>
                                <h5 style={{fontWeight:'bold'}}>누구의 프로젝트</h5>
                            </Button>
                        </Card>
                    </div>
                    <div style={{marginTop:'100px'}}>
                        <div>
                            <h3 style={{fontWeight:'bold'}}>프로젝트 페이지 주소</h3>
                            <h6>프로젝트 페이지로 접속하기 위한 웹페이지 주소(URL)를 설정 해주세요.</h6>
                        </div>
                        <div>
                            <input type="text" name="projectUrl" onChange={urlChange} style={{border:'1px solid #EDEBEB', borderRadius:'3px', width:'200px', height:'40px'}} placeholder={'URL을 입력해주세요'}></input>
                            <Button variant="contained" style={{marginLeft:'10px'}} onClick={doubleCheck}>중복확인</Button>
                        </div>
                        <div style={{display:'flex', justifyContent:'', paddingTop:'50px'}}>
                            <Button style={{fontWeight:'bold'}} variant="contained" color="secondary" onClick={submitStart}>시작하기</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};