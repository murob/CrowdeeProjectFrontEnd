import React,{useState} from 'react';
import Button from "components/CustomButtons/Button.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory,Link } from "react-router-dom";
export default function WritePageNav(props){


    const history = useHistory();

    const buttonClick = () =>{
       
    };

    
    return(

        <div style={{display:'flex', paddingTop:'20px', justifyContent:'space-between'}}>
            <div>
               <Button fontSize="large" size='large' onClick={buttonClick} ><ArrowBackIcon fontSize="large"/></Button>
            </div>
            <div>
                
                <Button variant="outlined" size='large'>취소</Button>{' '}
                <Button variant="contained" color="secondary" size='large'>저장</Button>{' '}
               
            </div>
        </div>
    )
}