import React , {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import WritePageRouter from './WritePageRouter';
import { Button } from '@material-ui/core'; 
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Box } from '@material-ui/core';
import WritePageNav from './WritePageNav';
import Modal from '@material-ui/core/Modal';
import PreviewPage from 'views/ViewPage/PreviewPage';
export default function WritePage(props) {
 
    var saveCheck = 0;

    const [token,setToken] = useState(localStorage.getItem("token"))
    const [manageUrl,setManageUrl] = useState(props.match.params.manageUrl)
    
    
    const [path,setPath] = useState(`/creator/create/thumbNail/${manageUrl}`);
    const [nextPath,setNextPath] = useState(`/write-page/funding/${manageUrl}`);
    const [formData,setFormData] = useState();
    const [open, setOpen] =useState(false);
    const [modalData,setModalData] = useState();
    const [first,setFirst] = useState(true)
    const [second,setSecond] = useState(false)
    const [third,setThird] = useState(false)

    const useStyles = makeStyles((theme)=>({
       
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height : '850px',
        
        },
      }));
      
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const classes = useStyles();

    const changeDef = () =>{
        if(saveCheck){
            setFirst(true)
            setPath(`/creator/create/thumbNail/${manageUrl}`)
            props.history.push(`/write-page/${manageUrl}`)
        }
        else{
            if(confirm("입력하신 내용이 저장되지 않았습니다. 저장하지 않고 넘어가시겠습니까?")){
                props.history.push(`/write-page/${manageUrl}`)
            }
        }
        saveCheck =0
    }
    const changeFun = () =>{
        if(saveCheck){
            setSecond(true)
            setPath(`/creator/create/fundingPlan/${manageUrl}`)
            props.history.push(`/write-page/funding/${manageUrl}`)
        }
        else{
            if(confirm("입력하신 내용이 저장되지 않았습니다. 저장하지 않고 넘어가시겠습니까?")){
                props.history.push(`/write-page/funding/${manageUrl}`)
            }
        }
     
        saveCheck =0
    }
    const changeSto = () =>{
        if(saveCheck){
            setThird(true)
            setPath(`/creator/create/detail/${manageUrl}`)
            props.history.push(`/write-page/story/${manageUrl}`)
        }
        else{
            if(confirm("입력하신 내용이 저장되지 않았습니다. 저장하지 않고 넘어가시겠습니까?")){
                props.history.push(`/write-page/story/${manageUrl}`)
            }
        }
        saveCheck =0
    }
    const move = () =>{
        props.history.push("/")
    }
    const form = data =>{
        
        setFormData(data)
    }

    
    const preview = () =>{
       
        fetch(`http://localhost:8081/creator/create/preview/${manageUrl}`,{
            
            headers : {
                "Authorization" : `Bearer ${token}`
            }

        }).
        then((res)=>{
            if(res.status==200){
                return res.json();
            }
            else{
                throw new Error("미리보기 조회 중 에러 발생")
            }
            
        }).then((res)=>{
            setModalData(res)
            setOpen(true);
        }).catch(e=>{
            alert("미리보기 조회 중 에러 발생" + e.message)
        })
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
                
                if(!res.status==200){
                    throw new Error('http에러')
                }
               saveCheck=1;
               if({first}&&{second}&&{third}){
                alert("저장하신 펀딩은 관리자의 검수 후 등록 될 예정입니다!")
                props.history.push("/")
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
                        {/* <Button variant="outlined" size='large'>취소</Button>{' '} */}
                        <Button variant="contained" color="secondary" size='large' onClick={onSubmit}>저장</Button>{' '}
                        <Button variant="contained" color="secondary" size='large' onClick={preview}>미리보기</Button>{' '}
                        <Modal
                            open={open}
                            onClose={handleClose}
                            className={classes.modal}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description">
                        <PreviewPage 
                            data={modalData}
                        ></PreviewPage>
                    </Modal>
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
                        <h4 style={{fontWeight:'bold'}} onClick={changeSto}>프로젝트 계획</h4>
                    </Button>
                </div>
            </div>
               <WritePageRouter form={form} />
        </div>
        </Container>
       
    </div>
    
    );
};