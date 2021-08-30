import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MyIntro from './MyPageComponent/MyIntro';
import MyBacked from './MyPageComponent/MyBacked';
import MyCreated from './MyPageComponent/MyCreated';
import MyWish from './MyPageComponent/MyWish';

function WritePageRouter(props){
  return (
    <Switch>
        <Route exact path="/my/intro/:memberId" render={()=><MyIntro save={props.form} />} />
        <Route path="/my/backed/:memberId" render={()=><MyBacked save={props.form} />} />
        <Route path="/my/created/:memberId" render={()=><MyCreated save={props.form} />} />
        <Route path="/my/wish/:memberId"  render={()=><MyWish save={props.form} />} />
    </Switch>
  );
};

export default WritePageRouter;