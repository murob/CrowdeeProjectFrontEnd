import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WriteDefault from './WriteComponent/WriteDefault';
import WriteFunding from './WriteComponent/WriteFunding';
import WriteStory from './WriteComponent/WriteStory';

function WritePageRouter(){
  return (
    <Switch>
        <Route exact path={"/write-page"} component={WriteDefault} />
        <Route path="/write-page/funding" component={WriteFunding} />
        <Route path="/write-page/story" component={WriteStory} />
    </Switch>
  );
};

export default WritePageRouter;