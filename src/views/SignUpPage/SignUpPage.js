import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Phone from '@material-ui/icons/PhoneIphone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FaceIcon from '@material-ui/icons/Face';
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {Link} from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Button from 'components/CustomButtons/Button.js';
import image from "assets/img/bg7.jpg";
import LockOpenIcon from '@material-ui/icons/LockOpen';
const useStyles = makeStyles(styles);

export default function SignUpPage(props) {
  var index =0;
  const [authKey,setAuthKey] = useState("");
  const [badRequest,setBadRequest] = useState("이메일 입력");
  const [passLabel,setPassLabel] = useState("비밀번호 입력");
  const [user,setUser] = useState({
    email : "",
    password : "",
    userName : "",
    emailCert : "",
    nickName : "",
    mobile : ""
  })
  const [cardAnimaton, setCardAnimation ] = React.useState("cardHidden");
  const [certAttribute,setCertAttribute] = useState({
    display : "none",
    opacity : "0",
  });
  const [passPolicy , setPassPolicy] = useState(Boolean);
  const [confirmPassword,setConfirmPassword] = useState(Boolean);
  
  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();
  const { ...rest } = props;
 
  const ChangeValue = (e)=>{
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
   console.log(user);
  }

  

  const passwordPolicy = () =>{
    var password = document.querySelector("#password").value;
    if(password.length<8 ||password.length>16){
      setPassPolicy(true)
      setPassLabel("8자리 이상 16자리 이하로 입력해주세요.")
    }
    else{
      setPassPolicy(false)
      setPassLabel("비밀번호 입력");
    }
  }

  const inputPassHandler = (e) =>{
    ChangeValue(e);
    passwordPolicy();
  }

  const changeinputColor = () =>{
    var passCheck = document.querySelector("#passwordCheck").value;
    if(user.password != passCheck){
      setConfirmPassword(true);
    }
    else{
      setConfirmPassword(false);
    }
  }

  const emailCert = () =>{
    
    fetch("http://localhost:8081/member/emailCert?email="+user.email,{
      method: "POST"
    }).
      then((res)=>{
      if(res.status==200){
        return res.json()
      }
      else{
        index++;
        return null
      }
    }).then((res)=>{
      if(res!=null){
        setAuthKey(res.authKey);
        console.log(res.authKey);
       
      }
      else{
        
        setBadRequest("이메일을 확인해주세요.");
      }
      
    });
  }


  const checkEmailCert = () =>{
    var certNum = document.querySelector('#emailCert')
    console.log(certNum.value);
    if(authKey === certNum.value ){
      return true;
    }
    else{
      return false;
    }
  }

  const submitSignUp = (e) =>{
    if(checkEmailCert){
      e.preventDefault();

      fetch("http://localhost:8081/member/signUp",{
        method: "POST",
        headers: {
          "Content-type":"application/json;charset=utf-8"
        },
        body:JSON.stringify(user)
      }).then((res)=>{
        if(res.status==201){
          console.log("http 201")
          return res
        }
        else{
          return null
        }
      }).then((res)=>{
        if(res != null){
          //alert("회원가입을 축하합니다.");
          e.preventDefault();
          props.history.push("/login-page");
        }
        else{
          alert("회원가입에 실패했습니다.");
        }
      });
    }
    else{
      alert("이메일 인증번호를 확인해주세요.");
    }
  }

  const showCert = () =>{
      setCertAttribute({
        display : "flex",
        opacity : "0"
      });
      setTimeout(() => {
        setCertAttribute({
          opacity : "1",
          transition: "transform 0.7s, opacity 1s"
        })
      }, 10);
  }

  const showEmailCert =(e) => {
    
    e.preventDefault();
    emailCert();
    showCert();
    console.log(index)

    setTimeout(() => {
      if(index!=0){
        setCertAttribute({
          display : "none",
          opacity : "0"
        })
      }
    }, 10);


   
  }
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Crowdee"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>회원가입</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}> 또는 </p>
                  <CardBody>

                  <CustomInput
                      labelText="이름 입력"
                      id="userName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "string",
                        onChange: ChangeValue,
                        endAdornment: (
                          <InputAdornment position="end">
                            <AccountCircleIcon className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <CustomInput
                      labelText= {badRequest}
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        onChange: ChangeValue,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button type="button" color="success" onClick={showEmailCert} >인증하기</Button>
                          </InputAdornment>
                        ),
                      }}
                    />

                  <CustomInput
                      labelText="인증번호 입력"
                      id="emailCert"
                      hidden = "true"
                      formControlProps={{
                        fullWidth: true,
                        style : certAttribute            
                        
                      }}
                      inputProps={{
                        type: "string",
                        onChange: ChangeValue,
                        style : certAttribute,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <CustomInput
                      labelText={passLabel}
                      id="password"
                      error={passPolicy}
                      inputRootCustomClasses= "labelClasses"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: inputPassHandler,
                       
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOpenIcon></LockOpenIcon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="비밀번호 확인"
                      error ={confirmPassword}
                      id="passwordCheck"
                      underlineClasses={classes.underlineSuccess}
                      formControlProps={{
                        fullWidth: true,
                        style :{hidden:"true"}
                      }}
                      inputProps={{
                        type: "password",
                        
                        onChange: changeinputColor,
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOpenIcon></LockOpenIcon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />

                    <CustomInput
                      labelText="닉네임 입력"
                      id="nickName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "string",
                        onChange: ChangeValue,
                        endAdornment: (
                          <InputAdornment position="end">
                            <FaceIcon className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <CustomInput
                      labelText="핸드폰 입력"
                      id="mobile"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "string",
                        onChange: ChangeValue,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                      }}
                    />

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={submitSignUp} simple color="primary" size="lg">
                      회원가입
                    </Button>
                     
                     
                  </CardFooter>
                  
                  <CardFooter className={classes.cardFooter}>
                  <Link to="/login-page">이미 Crowdee 계정이 있으신가요?</Link>
                  </CardFooter>
                  
                  
                  
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
