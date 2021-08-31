import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import Footer from 'components/Footer/Footer';
import MyPageRouter from './MyPageRouter';

export default function MyPage(props) {

    const [path,setPath] = useState('/my/intro/:memberId');

    // const [path,setPath] = useState(`/my/${memberId}`);

    const history = useHistory();

    const [formData,setFormData] = useState();

    const buttonClick = (url) =>{
    
        history.push(url);
    };
    
    const changeIntro = () =>{
        setPath('/my/intro/:memberId')
        props.history.push('/my/intro/:memberId')
    }
    const changeBacked = () =>{
        setPath('/my/backed/:memberId')
        props.history.push('/my/backed/:memberId')
    }
    const changeCreated = () =>{
        setPath('/my/created/:memberId')
        props.history.push('/my/created/:memberId')
    }
    const changeWish = () =>{
        setPath('/my/wish/:memberId')  
        props.history.push('/my/wish/:memberId')
    }

    // const changeIntro = () =>{
    //     setPath(`/my/intro/${memberId}`)
        
       
    //      props.history.push(`/my/intro/${memberId}`)
        
    // }
    // const changeBacked = () =>{
    //     setPath(`/my/backed/${memberId}`)
        
      
    //     props.history.push(`/my/backed/${memberId}`)
    // }
    // const changeCreated = () =>{
    //     setPath(`/my/created/${memberId}`)
       
       
    //      props.history.push(`/my/created/${memberId}`)
    // }
    const form = data =>{
        setFormData(data)
    }

    return (
        <div style={{backgroundColor:'white', width:'100%', height:'100%'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:'2px solid #F0F1EC', height:'10%', width:'100%', backgroundColor:'white', position:'fixed', zIndex:'1'}}>
                <div style={{marginLeft:'-80%', position:'fixed'}}>
                    <Button onClick={()=>buttonClick("/")}>
                        <CloseIcon/>
                    </Button>
                </div>
                <div style={{position:'fixed'}}>
                    <Button onClick={()=>buttonClick("/")}>
                        <h4 style={{fontWeight:'bold'}}>Crowdee</h4>
                    </Button>
                </div>
                <div style={{marginRight:'-65%', position:'fixed'}}>
                    <Button onClick={()=>buttonClick("/search")}>
                    <SearchIcon/>
                    </Button>
                </div>
                <div style={{marginRight:'-75%', display:'flex', alignItems:'center'}}>
                    <Button onClick={()=>buttonClick(`/my/${memberId}`)}>
                    <Avatar style={{width:'20px', height:'20px', fontSize:'12px', fontWeight:'bold', marginRight:'5px'}}>C</Avatar>
                    </Button>
                </div>
            </div>
            <div style={{backgroundColor:'white', width:'100%', minHeight:'1000px', maxHeight:'100%'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'130px'}}>
                    <Avatar alt="Remy Sharp" src={require('./sung.png').default} style={{width:"150px",height:"150px"}} />
                    <h2 style={{fontWeight:'bold', fontSize:'35px'}}>성승현</h2>
                </div>
                <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'45px', borderBottom:'1.8px solid #F0F1EC'}}>
                    <Button style={{fontSize:'25px', color:'gray'}} onClick={changeIntro}>소개</Button>
                    <Button style={{fontSize:'25px', color:'gray'}} onClick={changeBacked}>후원한 프로젝트</Button>
                    <Button style={{fontSize:'25px', color:'gray'}} onClick={changeCreated}>진행중인 프로젝트</Button>
                    <Button style={{fontSize:'25px', color:'gray'}} onClick={changeWish}>찜한 프로젝트</Button>
                </div>
                <div style={{padding:'40px'}}>
                    <MyPageRouter form={form} />
                </div>
            </div>
            <Footer />
        </div>    
    );
};