import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "components/CustomButtons/Button.js";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Story from 'views/ViewPage/Story'
//아이콘임포트
import AddIcCallSharpIcon from '@material-ui/icons/AddIcCallSharp';


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
      }));
      
      const classes = useStyles();

     
   
    return (
    <div className={classes.paper}>
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper >
                    <h2> {props.title}</h2>
                </Paper>
            </Grid>
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
                    <h3>남은 기간  {props.restDate}일</h3> 
                    <Typography variant="caption" display="block" gutterBottom>
                        이만큼 모였어요.  /  이만큼 모아야 해요.
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                    {totalFundraising} 원  /  {goalFundraising} 원 / {props.rateOfAchievment} %
                    </Typography>
                    
                    <Slider
                        defaultValue={props.rateOfAchievment}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-custom"
                        step={10}
                        valueLabelDisplay="auto"
                        marks={marks}
                        disabled
                    />
                    <div className={classes.grapbutton}>
                        <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                    >
                        <IconButton color="primary" aria-label="add to shopping cart">
                            펀딩하기
                            <AddShoppingCartIcon/>
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            문의하기
                        <AddIcCallSharpIcon/>
                        </IconButton>
                        </ButtonGroup>
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