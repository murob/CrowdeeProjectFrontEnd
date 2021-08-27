import React from 'react';
import Header from 'components/Header/Header';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import Footer from 'components/Footer/Footer';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
export default function MenuPage() {

    const history = useHistory();

    const buttonClick = (url) =>{
    
        history.push(url);
    };

    return (
        <div style={{backgroundColor:'white'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:'2px solid #F0F1EC', height:'10%', width:'100%', backgroundColor:'white', position:'fixed', zIndex:'1'}}>
                <div style={{marginLeft:'-90%'}}>
                    <Button onClick={()=>buttonClick("/")}>
                        <CloseIcon/>
                    </Button>
                </div>
                <div style={{position:'fixed'}}>
                    <h4 style={{fontWeight:'bold'}}>프로젝트 메뉴</h4>
                </div>
            </div>
            <div style={{height:'920px', width:'100%', paddingTop:'100px'}}>
                <div style={{paddingLeft:'55px'}}>
                    <div>
                        <Button style={{marginBottom:'-30px'}}
                            onClick={()=>buttonClick("/category/:param")}>
                            <h3 style={{fontWeight:'bold'}}>신규 등록 펀딩</h3>
                        </Button>
                    </div>
                    <div>
                        <Button style={{marginBottom:'-30px'}}
                            onClick={()=>buttonClick("/category/:param")}>
                            <h3 style={{fontWeight:'bold'}}>방문자가 많은 펀딩</h3>
                        </Button>
                    </div>
                    <div>
                        <Button style={{marginBottom:'-30px'}}
                            onClick={()=>buttonClick("/category/:param")}>
                            <h3 style={{fontWeight:'bold'}}>마감임박 펀딩</h3>
                        </Button>
                    </div>
                    <div>
                        <Button style={{marginBottom:'-30px'}} 
                            onClick={()=>buttonClick("/category/:param")}>
                            <h3 style={{fontWeight:'bold'}}>성공임박 펀딩</h3>
                        </Button>
                    </div>
                    <div>
                        <Button style={{marginBottom:'-30px'}} 
                            onClick={()=>buttonClick("/category/:param")}>
                            <h3 style={{fontWeight:'bold'}}>초과달성 펀딩</h3>
                        </Button>
                    </div>
                    <div style={{marginTop:'100px'}}>
                        <h5 style={{marginLeft:'10px', fontWeight:'bold', color:'#B2B2B2'}}>카테고리</h5>
                        <div style={{display:'flex', justifyContent:'space-evenly', marginLeft:'-50px'}}>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <Button onClick={()=>buttonClick("/category/:param")}><Avatar alt="Remy Sharp" src={require('./dancing.png').default} style={{width:"150px",height:"150px"}} /></Button>
                                <h4 style={{fontWeight:'bold'}}>무용</h4>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <Button onClick={()=>buttonClick("/category/:param")}><Avatar alt="Remy Sharp" src={require('./theatre.png').default} style={{width:"150px",height:"150px"}} /></Button>
                                <h4 style={{fontWeight:'bold'}}>연극</h4>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <Button onClick={()=>buttonClick("/category/:param")}><Avatar alt="Remy Sharp" src={require('./musical.png').default} style={{width:"150px",height:"150px"}} /></Button>
                                <h4 style={{fontWeight:'bold'}}>뮤지컬</h4>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <Button onClick={()=>buttonClick("/category/:param")}><Avatar alt="Remy Sharp" src={require('./concert.png').default} style={{width:"150px",height:"150px"}} /></Button>
                                <h4 style={{fontWeight:'bold'}}>연주</h4>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <Footer />
        </div>
    );
};