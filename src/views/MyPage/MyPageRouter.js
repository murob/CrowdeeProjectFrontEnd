import React,{useState,useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import MyIntro from './MyPageComponent/MyIntro';
import MyBacked from './MyPageComponent/MyBacked';
import MyCreated from './MyPageComponent/MyCreated';
import MyWish from './MyPageComponent/MyWish';

function WritePageRouter(props){
 
  return (
    <Switch>
        <Route exact path="/my/intro" render={()=><MyIntro/>} />
        <Route path="/my/backed" render={()=><MyBacked />} />
        <Route path="/my/created" render={()=><MyCreated />} />
        <Route path="/my/wish"  render={()=><MyWish />} />
    </Switch>
  );
};

export default WritePageRouter;