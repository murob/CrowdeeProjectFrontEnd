import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpPage from "views/SignUpPage/SignUpPage.js";
import WritePage from "views/WritePage/WritePage";
import ViewPage from "views/ViewPage/ViewPage.js";
import MenuPage from "views/MenuPage/MenuPage";
import CategoryPage from "views/CategoryPage/CategoryPage";
import ProjectStartPage from "views/WritePage/ProjectStartPage";
import CategoryPage from "views/CategoryPage/CategoryPage";
import ViewDetails from "views/ViewPage/ViewDetails";

var hist = createBrowserHistory();

// componentDidMount(){

//   if(localStorage.getItem("ACCESS_TOKEN")){
//    this.setState(localStorage.getItem("ACCESS_TOKEN"))
//   };
  
// }

// useEffect(() => {
 
  
// }, [])

ReactDOM.render(
  
    <Router history={hist}>
      
      <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/view/:id" component={ViewPage}/>
      <Route path="/write-page/:manageUrl" component={WritePage} />
      <Route path="/project-start" component={ProjectStartPage} />
      <Route path="/menu-page" component={MenuPage} />
      <Route path="/category/:param" component={CategoryPage} />
      <Route exact path="/" component={Components} />
    </Switch>
  </Router>, 
  document.getElementById("root")
  
  
); 
