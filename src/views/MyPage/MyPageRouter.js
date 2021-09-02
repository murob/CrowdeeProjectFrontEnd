import React,{useState,useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import MyIntro from './MyPageComponent/MyIntro';
import MyBacked from './MyPageComponent/MyBacked';
import MyCreated from './MyPageComponent/MyCreated';
import MyWish from './MyPageComponent/MyWish';

function WritePageRouter(props){
  const [wishFunding,setWishFunding] = useState([]);
  const [wishResult,setWishResult] = useState();
  const [partiFunding,setPartiFunding] = useState([]);
  const [partiResult,setPartiResult] = useState();
  const [waitingFunding,setWaitingFunding] = useState([])
  const [waitingResult,setWaitingResult] = useState();
  const [token,setToken] = useState(localStorage.getItem("token"))
  const wish = () =>{
    fetch("http://localhost:8081/member/myPage/wishList", {
        headers : {
          "Authorization" : `Bearer ${token}`}
        }).
        then((res) =>{
            if(res.status==200){
                return res.json()
            }
           else{
               throw Error("에러")
           }
        })
        .then(res=>{
            setWishFunding(res);
            setWishResult(
              <div className={classes.section}>
                  <GridContainer justify="center">
                      {funding.map((funding)=>(
                      <MyFundingCard 
                      id={funding.fundingId}
                      title={funding.title}
                      imgUrl={funding.thumbNailUrl}
                      summary={funding.summary}
                      restDate={funding.restDate}
                      category={funding.category}
                      totalFundraising={funding.totalFundraising}
                      goalFundraising={funding.goalFundraising}
                      ROA={funding.rateOfAchievement}
                      projectUrl={funding.projectUrl} />
                      ))}
                  </GridContainer>
              </div>
            )
        })
        .catch((e) =>{
            setWishResult(
                <div>
                    <h5 style={{fontWeight:'bold', color:'gray'}}>
                        찜한 프로젝트가 없습니다.
                    </h5>
                </div>
            )
        });
  }

  const participant = () =>{
    fetch("http://localhost:8081/member/myPage/fundingList", {
        headers : {
          "Authorization" : `Bearer ${token}`}
        }).
        then((res) =>{
            if(res.status==200){
                return res.json()
            }
           else{
               throw Error("에러")
           }
        })
        .then(res=>{
            setPartiFunding(res);
            setPartiResult(
              <div className={classes.section}>
                  <GridContainer justify="center">
                      {funding.map((funding)=>(
                      <MyFundingCard 
                      id={funding.fundingId}
                      title={funding.title}
                      imgUrl={funding.thumbNailUrl}
                      summary={funding.summary}
                      restDate={funding.restDate}
                      category={funding.category}
                      totalFundraising={funding.totalFundraising}
                      goalFundraising={funding.goalFundraising}
                      ROA={funding.rateOfAchievement}
                      projectUrl={funding.projectUrl} />
                      ))}
                  </GridContainer>
              </div>
            )
        })
        .catch((e) =>{
            setPartiResult(
                <div>
                    <h5 style={{fontWeight:'bold', color:'gray'}}>
                        후원한 프로젝트가 없습니다.
                    </h5>
                </div>
            )
        });
  }
  
  const waiting = () =>{
    fetch("http://localhost:8081/member/myPage/waitingForPayment", {
        headers : {
          "Authorization" : `Bearer ${token}`}
        }).
        then((res) =>{
            if(res.status==200){
                return res.json()
            }
           else{
               throw Error("에러")
           }
        })
        .then(res=>{
            setWaitingFunding(res);
            setWaitingResult(
              <div className={classes.section}>
                  <GridContainer justify="center">
                      {funding.map((funding)=>(
                      <MyFundingCard 
                      id={funding.fundingId}
                      title={funding.title}
                      imgUrl={funding.thumbNailUrl}
                      summary={funding.summary}
                      restDate={funding.restDate}
                      category={funding.category}
                      totalFundraising={funding.totalFundraising}
                      goalFundraising={funding.goalFundraising}
                      ROA={funding.rateOfAchievement}
                      projectUrl={funding.projectUrl} />
                      ))}
                  </GridContainer>
              </div>
            )
        })
        .catch((e) =>{
            setPartiResult(
                <div>
                    <h5 style={{fontWeight:'bold', color:'gray'}}>
                        진행중인 프로젝트가 없습니다.
                    </h5>
                </div>
            )
        });
  }
  

  useEffect(() => {
    wish(),
    participant()
    
  
  }, [])

  return (
    <Switch>
        <Route exact path="/my/intro" render={()=><MyIntro/>} />
        <Route path="/my/backed" render={()=><MyBacked data={partiResult} />} />
        <Route path="/my/created" render={()=><MyCreated data={waitingResult} />} />
        <Route path="/my/wish"  render={()=><MyWish data={wishResult} />} />
    </Switch>
  );
};

export default WritePageRouter;