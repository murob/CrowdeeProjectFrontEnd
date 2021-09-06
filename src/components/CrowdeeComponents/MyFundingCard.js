import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';
import LinearWithValueLabel from "./LinearProgressWithLabel";

import ViewDetails from "views/ViewPage/ViewDetails";


export default function MyFundingCard(props) {
  const useStyles = makeStyles((theme)=>({
    root: {
      width : 250,
      maxWidth: 250,
      maxHeight: 375,
      margin:20
    },
    media: {
      height: 140,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height : '850px',
      marginTop:'7%'
      // backgroundImage : `url(${props.imgUrl})`
    },
    paper: {
      
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      transition: 'transform 0.7s,opacity 1s'
    },
  }));
  const [open, setOpen] = React.useState(false);
  const [totalFundraising,setTotalFundraising] = useState();
  const [goalFundraising,setGoalFundraising] = useState();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  
  const comma = (obj) => {
    var regx = new RegExp(/(-?\d+)(\d{3})/);
   
    var strArr = `${obj}`.split('.');
    while (regx.test(strArr[0])) {//문자열에 정규식 특수문자가 포함되어 있는지 체크
        //정수 부분에만 콤마 달기 
        strArr[0] = strArr[0].replace(regx, "$1,$2");//콤마추가하기
    }
        obj = strArr[0];
    return obj;//문자열 반환
  }
  
  const [funding,setFunding] = useState({
    imgUrl : props.imgUrl,
    rateOfAchievement:props.ROA,
    id:props.id,
    title:props.title,
    summary:props.summary,
    restDate:props.restDate,
    category:props.category,
    projectUrl:props.projectUrl,
    totalFundraising:comma(props.totalFundraising),
    goalFundraising:comma(props.goalFundraising),
  }
  );
  

  

  return (
    <div>
      <Card 
      onClick={handleOpen}
      className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="펀딩 사진"
            height="160"
            image={funding.imgUrl}
            title="펀딩 사진"
          />
          <CardContent >
            <Typography gutterBottom variant="h6" component="h6">
              {funding.title}
            </Typography>
            <div style={{maxHeight:"25px",overflow:"hidden",textOverflow:"ellipsis",display:"block"}}>
              <p style={{maxHeight:"25px",overflow:"hidden",textOverflow:"ellipsis",display:"block"}}>
                {funding.summary}
              </p>
            </div>
            
            <Typography style={{maxHeight:"25px",overflow:"hidden",textOverflow:"ellipsis"}} variant="caption" display="block" gutterBottom>
             
             
            
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              카테고리 : {funding.category}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              남은날짜 : {funding.restDate}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              목표금액 : {funding.goalFundraising} 원
            </Typography>
            <LinearWithValueLabel value={funding.rateOfAchievement} />
          </CardContent>
        </CardActionArea>
        <CardActions>
        {/* <Button size ='small' variant="outlined" color="secondary">
          <FavoriteBorderIcon />찜하기
        </Button>
          <Button size="small" variant="outlined" color="primary">
            상세보기
          </Button> */}
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
          <ViewDetails
             id={funding.funding_id}
             title={funding.title}
             imgUrl={funding.imgUrl}
             summary={funding.summary}
             restDate={funding.restDate}
             category={funding.category}
             totalFundraising={funding.totalFundraising}
             goalFundraising={funding.goalFundraising}
             rateOfAchievment={funding.rateOfAchievement}
             projectUrl={funding.projectUrl}
          />
      </Modal>
    </div>
  );
}