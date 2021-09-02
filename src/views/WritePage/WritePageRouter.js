import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WriteDefault from './WriteComponent/WriteDefault';
import WriteFunding from './WriteComponent/WriteFunding';
import WriteStory from './WriteComponent/WriteStory';

function WritePageRouter(props){
  return (
    <Switch>
        <Route exact path="/write-page/:manageUrl" render={()=><WriteDefault save={props.form} data={props.data} />} />
        <Route path="/write-page/funding/:manageUrl" render={()=><WriteFunding save={props.form} data={props.data} />} />
        <Route path="/write-page/story/:manageUrl" render={()=><WriteStory save={props.form} data={props.data} />} />
    </Switch>
  );
};

export default WritePageRouter;