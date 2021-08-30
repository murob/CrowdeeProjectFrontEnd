import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ViewPage(props) {
  
  const projectUrl = props.match.params.projectUrl;
  const memberId = props.match.params.memberId;

  const history = useHistory();

    const buttonClick = (url) =>{
    
        history.push(url);
    };

  const[View, setView] = useState({
      creatorNickName:"",
      creatorId:"",
      title:"",
      summary:"",
      thumbNailUrl:"",
      category:"",
      content:"",
      schedule:"",
      aboutUs:"",
      goalFundraising:0,
      minFundraising:0,
      startDate:"",
      endDate:"",
      maxBacker:0,
      totalBacker:0,
      totalFundraising:0
  });
      
    useEffect(() => {
      fetch(`http://localhost:8081/view/${projectUrl}`).
        then(res=>res.json()).
        then(res=>{
          setView(res);
      })
    },[])

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);



  return (
    <div style={{backgroundColor:'white'}}>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:'2px solid #F0F1EC', height:'10%', width:'100%', backgroundColor:'white', position:'fixed', zIndex:'1'}}>
          <div style={{marginLeft:'-90%', position:'fixed'}}>
              <Button onClick={()=>buttonClick("/")}>
                  <CloseIcon/>
              </Button>
          </div>
          <div style={{position:'fixed'}}>
              <Button onClick={()=>buttonClick("/")}>
                <h4 style={{fontWeight:'bold'}}>Crowdee</h4>
              </Button>
          </div>
          <div style={{marginRight:'-70%', position:'fixed'}}>
            <Button onClick={()=>buttonClick("/search")}>
              <SearchIcon/>
            </Button>
          </div>
          <div style={{marginRight:'-85%', display:'flex', alignItems:'center'}}>
            <Button onClick={()=>buttonClick(`/my/${memberId}`)}>
              <Avatar style={{width:'20px', height:'20px', fontSize:'12px', fontWeight:'bold', marginRight:'5px'}}>C</Avatar>
              <h5 style={{fontWeight:'bold'}}>성승현</h5>
              {/* <h5 style={{fontWeight:'bold'}}>${memberId}</h5> */}
            </Button>
          </div>
      </div>
      <div style={{display:'flex', alignItems:'center', flexDirection:'column', height:'850px', width:'100%', paddingTop:'130px'}}>
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', height:'25%', width:'92%'}}>
          <Button onClick={()=>buttonClick(`/category/${category}`)} style={{marginBottom:'-20px'}}>
            <div style={{fontWeight:'bold', color:'gray', fontSize:'18px'}}>연극</div>
          </Button>
          {/* <div style={{fontWeight:'bold', color:'gray'}}>${category}</div> */}
          <div style={{marginBottom:'-15px'}}>
            <h2 style={{fontWeight:'bold'}}>람보르기 펀딩 가즈아아아아우와와앙</h2>
            {/* <h2 style={{fontWeight:'bold'}}>${title}</h2> */}
          </div>
          <div style={{display:'flex', alignItems:'center'}}>
            <Avatar style={{width:'20px', height:'20px', fontSize:'12px', fontWeight:'bold', marginRight:'-2px'}}>C</Avatar>
            <Button onClick={()=>buttonClick(`/my/:creatorId`)}>
              <h6 style={{fontWeight:'bold', fontSize:'15px'}}>기모찌맨</h6>
            </Button>
            {/* <h5 style={{fontWeight:'bold'}}>${creatorNickName}</h5> */}
          </div>
        </div>
        <div style={{display:'flex', height:'63%', width:'92%'}}>
          <div style={{border:'1px solid black', height:'495px', width:'650px'}}>
            <img style={{width:'100%', height:'100%'}} src={require('./dummyImg.png').default} />
            {/* <img style={{width:'100%', height:'100%'}} src={require(`${thumbNailUrl}`).default} /> */}
          </div>
          <div style={{paddingLeft:'30px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <div style={{marginBottom:'-25px'}}>
              <h4 style={{fontWeight:'bold', color:'gray'}}>펀딩상황</h4>
            </div>

            <div style={{display:'flex', alignItems:'center'}}>
              <h2 style={{fontWeight:'bold'}}>1,280,000</h2>
              {/* <h2 style={{fontWeight:'bold'}}>${totalFundraising}</h2> */}
              <h2 style={{fontWeight:'bold'}}>원</h2>
              <h5 style={{fontWeight:'bold', marginLeft:'5px', paddingTop:'22px'}}>펀딩 중</h5>
            </div>

            <h5 style={{fontWeight:'bold', marginBottom:'-20px', color:'gray'}}>남은시간</h5>
            <div style={{display:'flex', alignItems:'center'}}>
              <h2 style={{fontWeight:'bold'}}>13</h2>
              {/* <h2 style={{fontWeight:'bold'}}>${endDate}</h2> */}
              <h5 style={{fontWeight:'bold', marginLeft:'5px', paddingTop:'17px'}}>일</h5>
            </div>

            <h5 style={{fontWeight:'bold', marginBottom:'-20px', color:'gray'}}>후원자</h5>
            <div style={{display:'flex', alignItems:'center'}}>
              <h2 style={{fontWeight:'bold'}}>1,273</h2>
              {/* <h2 style={{fontWeight:'bold'}}>${totalBacker}</h2> */}
              <h5 style={{fontWeight:'bold', marginLeft:'5px', paddingTop:'17px'}}>명</h5>
            </div>

            <div style={{display:'flex', justifyContent:'center', width:'300px', paddingTop:'100px'}}>
              <Button 
              size="small"
              variant="outlined"
              style={{height:'50px', width:'50px', marginRight:'10px'}}
              ><FavoriteBorderIcon/>
              </Button>
              <Button
              variant="contained"
              color="secondary"
              style={{height:'50px'}}
              >
                <h4 style={{fontWeight:'bold'}}>펀딩하기</h4>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderTop:'1.9px solid #E9E9E5',  borderBottom:'2px solid #F0F1EC', height:'10%', width:'100%', backgroundColor:'white'}}>
        <div>
          <h4 style={{fontWeight:'bold'}}>프로젝트 계획</h4>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', height:'100%', width:'100%', paddingTop:'30px'}}>
        <div style={{width:'65%', paddingLeft:'30px'}}>
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 컨텐츠는 여기에 뿌릴겁니다. 
          {/* ${contents} */}
        </div>
        <div style={{width:'35%', paddingLeft:'10px', paddingRight:'30px'}}>
          <div style={{border:'1px solid #E9E9E5', borderBottom:'2px solid #F0F1EC', borderRadius:'5px', padding:'20px', position:'sticky', top:'80px'}}>
            <h5 style={{fontWeight:'bold'}}>크리에이터 소개</h5>
            <div style={{display:'flex', alignItems:'center'}}>
              <Button onClick={()=>buttonClick(`/my/:creatorId`)}>
                <Avatar style={{width:'40px', height:'40px', fontSize:'12px', fontWeight:'bold', marginRight:'10px'}}>E</Avatar>
                <h5 style={{fontWeight:'bold', fontSize:'15px'}}>기모찌맨</h5>
                {/* <h5 style={{fontWeight:'bold'}}>${creatorNickName}</h5> */}
              </Button>
            </div>
            <div style={{marginTop:'15px'}}>
              <p style={{fontWeight:'normal', color:'gray'}}>크리에이터 소개는 어떻게 써야 이쁠까요 람보르기니 가으자!!! 벤틀리 가즈아!! 포르쉐 페라리 가즈아!!!!!</p>
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
              {/* {View.map((url)=>(
                <Button onClick={()=>buttonClick(`/view/{url.projectUrl}`)}>
                  <Avatar alt="Remy Sharp" src={require({url.thumbNailUrl}).default} style={{width:"70px",height:"70px"}} />
                </Button>
              ))} */}
              <Button onClick={()=>buttonClick(`/view/${projectUrl}`)}>
                <Avatar alt="Remy Sharp" src={require('./dummyImg.png').default} style={{width:"70px",height:"70px"}} />
              </Button>
              <Button><Avatar alt="Remy Sharp" src={require('./dummyImg.png').default} style={{width:"70px",height:"70px"}} /></Button>
              <Button><Avatar alt="Remy Sharp" src={require('./dummyImg.png').default} style={{width:"70px",height:"70px"}} /></Button>
              <Button onClick={()=>buttonClick(`/my/:creatorId`)}>
              {/* <Button onClick={()=>buttonClick(`/my/${creatorId}`)}> */}
                <ArrowForwardIosIcon/>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}