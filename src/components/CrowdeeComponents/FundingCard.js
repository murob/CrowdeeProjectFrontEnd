import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Modal from '@material-ui/core/Modal';
import LinearWithValueLabel from "./LinearProgressWithLabel";

import ViewDetails from "views/ViewPage/ViewDetails";
const useStyles = makeStyles((theme)=>({
  root: {
    width : 200,
    maxWidth: 345,
    margin:20
  },
  media: {
    height: 140,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper: {
    
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transition: 'transform 0.7s,opacity 1s'
  },
}));

export default function FundingCard(props) {
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  
  const [funding,setFunding] = useState(
      {
          id:props.id,
          title:props.title,
          imgUrl:props.imgUrl,
          summary:props.summary,
          restDate:props.restDate,
          category:props.category,
          goalFundraising:props.goalFundraising,
          rateOfAchievement:props.rateOfAchievement
        
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
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {funding.title}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {funding.summary}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            카테고리 : {funding.category}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            남은날짜 : {funding.restDate}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
           목표금액 : {funding.goalFundraising}
          </Typography>
          <LinearWithValueLabel value={70} />
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
             summary={funding.summery}
             restDate={funding.restDate}
             category={funding.category}
             goalFundraising={funding.goalFundraising}
             rateOfAchievment={funding.rateOfAchievement}
          ></ViewDetails>
         
      </Modal>
    </div>
     
    
  );

}