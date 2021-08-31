import React from 'react';
import { useHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function SearchPage(props) {

    const history = useHistory();

    const buttonClick = (url) =>{
    
        history.push(url);
    };

    return (
        <div style={{backgroundColor:'white', height:'1000px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingLeft:'50px', borderBottom:'2px solid #F0F1EC', height:'10%', width:'100%', backgroundColor:'white', position:'fixed', zIndex:'1'}}>
                <div style={{marginTop:'10px'}}>
                    <SearchIcon fontSize={'large'}/>
                </div>
                <div style={{marginLeft:'-25%'}}>
                    <input style={{height:'40px', fontSize:'25px', width:'850px', marginLeft:'20px', border:'1px solid white'}} placeholder={'검색어를 입력해주세요.'}></input>
                </div>
                <div style={{paddingRight:'5%'}}>
                    <Button onClick={()=>buttonClick("/")}>
                        <CloseIcon fontSize={'large'}/>
                    </Button>
                </div>
            </div>
            <div style={{display:'flex', height:'63%', width:'92%'}}></div>
        </div>
    );
};