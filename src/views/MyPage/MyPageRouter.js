import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MyIntro from './MyPageComponent/MyIntro';
import MyBacked from './MyPageComponent/MyBacked';
import MyCreated from './MyPageComponent/MyCreated';
import MyWish from './MyPageComponent/MyWish';

function WritePageRouter(props){
  return (
    <Switch>
        <Route exact path="/my/intro" render={()=><MyIntro save={props.form} />} />
        <Route path="/my/backed" render={()=><MyBacked save={props.form} />} />
        <Route path="/my/created" render={()=><MyCreated save={props.form} />} />
        <Route path="/my/wish"  render={()=><MyWish save={props.form} />} />
    </Switch>
  );
};

export default WritePageRouter;