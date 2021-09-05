import React,{useState,useEffect} from "react";
import { useHistory } from 'react-router';
import { makeStyles } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { Fade } from "@material-ui/core";

import Button from '@material-ui/core/Button';
import LinearWithValueLabel from "components/CrowdeeComponents/LinearProgressWithLabel";
//아이콘임포트

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

//달성률버튼 퍼센트

const marks = [
{
    value: 0,
    label: '0%',
},
{
    value: 50,
    label: '50%',
},

{
    value: 100,
    label: '100%',
},
];
function valuetext(value) {
    return `${value}°C`;
  }
  
export default function ViewDetails(props) {
    
    const useStyles = makeStyles((theme)=>({
        grapbutton: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              margin: theme.spacing(1),
            },
          },
        root: {
          maxWidth: 1000,
          margin:20,
          flexGrow: 1,
          
        },
        paper: {
          width : 1000,
          maxWidth : 1000,
          height : 620,
          backgroundColor: theme.palette.background.paper,
          borderRadius:'15px',
          border: '0px solid #000',
          boxShadow: theme.shadows[20],
          padding: theme.spacing(2, 4, 3),
          textAlign: 'center',
          transition: 'transform 2s,opacity 5s',
          overflowY: 'auto',
          padding: theme.spacing(2),
          marginBottom : 50,
        },
        topmain: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(3),
            textAlign: 'center',
        
        },

        bottom: {
            padding: theme.spacing(2),
            textAlign: 'center',

        },
        fundingButton : {
            margin: theme.spacing(1),
            justifyContent:'space-between'
        },
        
      }));
      
      const classes = useStyles();

      const history = useHistory();

      const buttonClick = (url) =>{
      
          history.push(url);
      };
  
   
    return (
    <Fade 
        in='checked' 
        timeout={{
            appear: 1000, 
            enter: 500, 
            exit: 1000
        }}>
        <div className={classes.paper}>
            <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Paper className={classes.topmain}>
                    <CardMedia
                        component="img"
                        alt="펀딩 사진"
                        height="368"
                        image={props.imgUrl}
                        title="펀딩 사진"
            />
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.topmain}>
                        <h4>
                        {props.title}
                        </h4>
                            
                        
                        <h5>
                        남은 기간  {props.restDate}일
                        </h5>
                        
                        
                        
                        <h6 style={{marginTop:"15px" ,display:"block"}} >
                            이만큼 모였어요.  /  이만큼 모아야 해요.
                        </h6>
                        <h6 style={{marginTop:"15px" ,display:"block"}} >
                        {props.totalFundraising} 원  /  {props.goalFundraising} 원 
                        </h6>
                        <div style={{marginTop:"65px"}}>
                        <LinearWithValueLabel  value={props.rateOfAchievment} />
                        </div>
                        
                        <div className={classes.fundingButton} style={{marginTop:"100px"}}>
                
                            
                            
                            <Button variant="outlined"  color="primary"  onClick={()=>buttonClick(`/view/${props.projectUrl}`)}>
                                자세히보기
                            </Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.bottom}>
                        <Button  size="large"  >
                            프로젝트스토리  프로젝트 안내
                        </Button>
                        <h6>{props.summary}</h6>
                    </Paper>
                </Grid>
                
            </Grid> 
            </div>
            
        </div>
    </Fade>
    );
};