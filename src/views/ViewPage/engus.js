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
import Guide from 'views/ViewPage/Guide'
import Components from "views/Components/Components";
//아이콘임포트
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CallMadeIcon from '@material-ui/icons/CallMade';
import AddIcCallSharpIcon from '@material-ui/icons/AddIcCallSharp';
import FundingCard from "components/CrowdeeComponents/FundingCard";
import { title } from "assets/jss/material-kit-react";
import { blue } from '@material-ui/core/colors';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
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
          width : '100%',
          height : '100%',
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          textAlign: 'center',
          transition: 'transform 0.7s,opacity 1s',
        
          padding: theme.spacing(2),
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
                    <h1>타이틀: {props.title}</h1>
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
                    <h2>펀딩 D-Day : {props.restDate}<AccessAlarmsIcon /></h2> 
                    <h3>목표금액 : {props.goalFundraising} </h3>
                    <h3>펀딩달성률: {props.rateOfAchievment}</h3>   
                    <Typography id="discrete-slider-custom" gutterBottom>
                    </Typography>
                    <Slider
                        defaultValue={50}
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
                <div></div>
            <Grid item xs={7}>
                <Paper className={classes.bottom}>
                    <Button  size="large"  >
                       프로젝트스토리
                    </Button>
                    <Story/> 
                </Paper>
            </Grid>
            <Grid item xs={5}>
                <Paper className={classes.bottom}> 
                    <Button size="large" >
                      프로젝트 안내
                    </Button>
                    <Guide/>
                </Paper>
            </Grid>
        </Grid> 
        </div>
       
    </div>
  

    );
};