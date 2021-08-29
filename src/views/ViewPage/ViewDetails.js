import React,{useState,useEffect} from "react";
import { useHistory } from 'react-router';
import { makeStyles } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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
          height : 800,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          textAlign: 'center',
          transition: 'transform 0.7s,opacity 1s',
          overflowY: 'auto',
          padding: theme.spacing(2),
          marginBottom : 50
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
    <div className={classes.paper}>
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={7}>
                <Paper className={classes.topmain}>
                <CardMedia
                    component="img"
                    alt="펀딩 사진"
                    height="380"
                    image={props.imgUrl}
                    title="펀딩 사진"
        />
                </Paper>
            </Grid>
            <Grid item xs={5}>
                <Paper className={classes.topmain}>
                    <Typography variant="h4" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                     남은 기간  {props.restDate}일
                    </Typography>
                    
                    <Typography style={{marginTop:"15px"}} variant="caption" display="block" gutterBottom>
                        이만큼 모였어요.  /  이만큼 모아야 해요.
                    </Typography>
                    <Typography style={{marginTop:"15px"}} variant="caption" display="block" gutterBottom>
                    {props.totalFundraising} 원  /  {props.goalFundraising} 원 
                    </Typography>
                    <div style={{marginTop:"65px"}}>
                    <LinearWithValueLabel  value={props.rateOfAchievment} />
                    </div>
                    
                    <div className={classes.fundingButton} style={{marginTop:"100px"}}>
            
                        <Button style={{marginRight:"30px"}} variant="outlined" color="secondary"><FavoriteBorderIcon />찜하기</Button>
                        
                        <Button variant="outlined"  color="primary"  onClick={()=>buttonClick(`/view/${projectUrl}`)}>
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
                    <Typography>{props.summary}</Typography>
                </Paper>
            </Grid>
           
        </Grid> 
        </div>
       
    </div>

    );
};