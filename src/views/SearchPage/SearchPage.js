import React from 'react';
import { useHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Container } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuLink from 'components/Header/MenuLink';
import Header from 'components/Header/Header';
import MenuIcon from '@material-ui/icons/Menu';

import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { useState } from 'react';

const useStyles = makeStyles(styles);

export default function SearchPage(props) {
    const classes = useStyles();

    const history = useHistory();

    const buttonClick = (url) =>{
    
        history.push(url);
    };

    const [text, setText] = useState()

    // const enterKey = (e) =>{
    //     if(window.event.keyCode == 13){
    //         // setText(e.target.value)
    //         alert(value)
    //     }
    // }

    const onChange = (e) => {
        const {value} = e.target
        console.log({value})
        if(window.event.keyCode == 13){
            alert({value})
        }
    }

    return (
        <div style={{backgroundColor:'white', height:'1000px'}}>
            
            <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', borderBottom:'2px solid #F0F1EC', height:'10%', width:'100%', backgroundColor:'white', position:'fixed', zIndex:'1'}}>
                <div style={{display:'flex'}}>
                    <MenuIcon
                        color="white"
                        className={classes.navLink}
                        onClick={()=>buttonClick("/menu-page")}
                        style={{
                        cursor:"pointer",
                        fontSize:35
                        }}
                    >
                        <AccountCircleRoundedIcon className={classes.inputIconsColor} />
                    </MenuIcon>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <Button onClick={()=>buttonClick("/")}>
                        <SearchIcon style={{fontSize:35}}/>
                    </Button>
                    {/* <input style={{height:'40px', fontSize:'25px', width:'', marginLeft:'', border:'1px solid white'}} placeholder={'검색어를 입력해주세요.'} onKeyPress={()=>enterKey()}></input> */}
                    <input style={{height:'40px', fontSize:'25px', width:'', marginLeft:'', border:'1px solid white'}} placeholder={'검색어를 입력해주세요.'} name="name" onChange={onChange} ></input>
                </div>
                <div>
                    <Button onClick={()=>buttonClick("/")}>
                        <CloseIcon fontSize={'large'}/>
                    </Button>
                </div>
            </div>
            <div style={{display:'flex', height:'63%', width:'92%'}}></div>
        </div>
    );
};