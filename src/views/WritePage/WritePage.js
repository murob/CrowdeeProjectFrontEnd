import React , {useEffect,useState} from 'react';
import { Container } from '@material-ui/core';
import WritePageRouter from './WritePageRouter';
import { Button } from '@material-ui/core'; 
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Box } from '@material-ui/core';
import WritePageNav from './WritePageNav';
import WriteDefault from './WriteComponent/WriteDefault';
import WriteFunding from './WriteComponent/WriteFunding';
import WriteStory from './WriteComponent/WriteStory';
import { ACCESS_TOKEN } from 'export/export';
export default function WritePage(props) {
 
    
    const [token,setToken] = useState(localStorage.getItem("token"))
    const [manageUrl,setManageUrl] = useState(props.match.params.manageUrl)
    const [path,setPath] = useState(`/creator/create/thumbNail/${manageUrl}`);
    const [nextPath,setNextPath] = useState(`/write-page/funding/${manageUrl}`);
    const [formData,setFormData] = useState();
    const changeDef = () =>{
        setPath(`/creator/create/thumbNail/${manageUrl}`)
        
       
         props.history.push(`/write-page/${manageUrl}`)
        
    }
    const changeFun = () =>{
        setPath(`/creator/create/fundingPlan/${manageUrl}`)
        
      
        props.history.push(`/write-page/funding/${manageUrl}`)
    }
    const changeSto = () =>{
        setPath(`/creator/create/detail/${manageUrl}`)
       
       
         props.history.push(`/write-page/story/${manageUrl}`)
    }
    const move = () =>{
        props.history.push("/")
    }
    // const firstForm = (data) =>{
    //     setFirstData(data)
    // }

    // const secondForm = (data) =>{
    //     setSecondData(data)
    // }

    // const lastForm = (data) =>{
    //     setLastData(data)
    // }
    const form = data =>{
        setFormData(data)
    }

    

    
    const onSubmit = () =>{
        if(confirm("저장하시겠습니까?")){
            fetch(`http://localhost:8081${path}`,{
                method  : "post",
                headers : {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "application/json;charset=utf-8"
                },
                body : 
                JSON.stringify(formData)
                
    
                
                    
            }).
            then((res)=>{
                console.log(JSON.stringify(formData))
                if(!res.status==200){
                    throw new Error('http에러')
                }
               
    
            }).catch((e)=>{
                alert("데이터 전송 중 에러 발생"+e.message)
            })
        }
       
    }

    return (
    <div style={{height:'1500px'}}>
        <Container>
         <div style={{backgroundColor:'write'}}>
            <div style={{borderBottom: '1px solid #C8C8C8', boxShadow:'4px black', height:'300px'}}>
                <div style={{display:'flex', paddingTop:'20px', justifyContent:'space-between'}}>
                    <div>
                        <Button fontSize="large" size='large' onClick={move}><ArrowBackIcon fontSize="large"/></Button>{' '}
                    </div>
                    <div>
                        <Button variant="outlined" size='large'>취소</Button>{' '}
                        <Button variant="contained" color="secondary" size='large' onClick={onSubmit}>저장</Button>{' '}
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'20px', paddingTop:'80px'}}>
                    <Box fontSize={35} fontWeight="fontWeightBold">프로젝트 기획</Box>
                </div>
                <div style={{display:'flex', justifyContent:'space-around',marginTop:'50px'}}>
                    <Button>
                        <h4 style={{fontWeight:'bold'}} onClick={changeDef}>기본정보</h4>
                    </Button>
                    <Button>
                        <h4 style={{fontWeight:'bold'}} onClick={changeFun}>펀딩 계획</h4>
                    </Button>
                    <Button>
                        <h4 style={{fontWeight:'bold'}} onClick={changeSto}>프로젝트 계획 가나다</h4>
                    </Button>
                </div>
            </div>
               <WritePageRouter form={form} />
        </div>
        </Container>
    </div>
    );
};