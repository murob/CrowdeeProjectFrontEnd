import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WriteDefault from './WriteComponent/WriteDefault';
import WriteFunding from './WriteComponent/WriteFunding';
import WriteStory from './WriteComponent/WriteStory';

function WritePageRouter(props){
  return (
    <Switch>
        <Route exact path={"/write-page"} render={()=><WriteDefault save={props.first} />} />
        <Route path="/write-page/funding" render={()=><WriteFunding save={props.second} />} />
        <Route path="/write-page/story" render={()=><WriteStory save={props.last} />} />
    </Switch>
  );
};

export default WritePageRouter;