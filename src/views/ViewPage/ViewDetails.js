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
    console.log(props.imgUrl);
    console.log(props.title);
    console.log(props.rateOfAchievement);
   
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
          maxWidth : 1200,
          height : 1000,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          textAlign: 'center',
          transition: 'transform 0.7s,opacity 1s',
          overflowY: 'auto',
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
                    <h2>펀딩 D-Day : {props.restDate}<AccessAlarmsIcon></AccessAlarmsIcon></h2> 
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
            <Grid item xs={12}>
                <Paper className={classes.bottom}>
                    <Button  size="large"  >
                       프로젝트스토리  프로젝트 안내
                    </Button>
                    <Typography>이 프로젝트의 정보 및 정책을
    반드시 확인하세요.
    펀딩 취소 및 리워드 옵션 변경, 배송지 변경 안내
    펀딩 결제는 예약 상태로 유지되다가, 펀딩 마감일 다음 영업일 2021.09.07 17시에 모두 함께 진행됩니다. 결제 정보 변경은 결제가 진행되기 전까지 언제나 가능합니다. 참여한 펀딩 정보 변경은 펀딩 내역에서 진행해주세요. 마감일 이후에는 펀딩에 대한 리워드 제작 및 배송이 시작되어, 취소와 더불어 배송지 및 리워드 옵션 변경은 2021.09.06 이후로는 불가합니다.
    
    리워드 정보 제공 고시
    리워드 상세정보
    귀금속/보석/시계류
    
    품명 및 모델명
    ROSEFIELD-OCTAGON
    소재/순도/밴드재질
    24K GOLD / Stainless steel / Genuine leather / Japanese miyota movement
    중량
    52g
    제조자, 수입품의 경우 수입자를 함께 표기
    ROSEFIELD / 블루게이트 (BLEUGATE)
    제조국
    CHINA
    치수
    Face: 23x29 / Strap: 14mm
    착용 시 주의사항
    생활방수입니다. 물에서의 사용은 주의해주세요.
    귀금속 보석류 주요 사양
    24K 골드 도금
    시계 주요 사양
    생활 방수 기능
    보증서 제공 여부
    2년 무상 보증 제공
    품질보증기준
    관련법 및 소비자분쟁해결 기준에 따름
    A/S 책임자와 전화번호
    블루게이트 (BLEUGATE) / 1544-5604
    더보기
    펀딩금 반환 안내
    펀딩 종료 후, 아래 정책에 따라 펀딩금 반환 신청을 할 수 있습니다. 펀딩금 반환은 서포터가 펀딩한 카드 결제 건을 취소하는 방식으로 이뤄집니다.
    펀딩금 반환은 나의 펀딩  펀딩 내역에서 신청하실 수 있습니다.
    
    1) 리워드가 지연될 경우
    메이커가 리워드 발송 시작 예정일까지 리워드를 발송하지 않을 경우, 서포터는 펀딩금 반환 신청을 할 수 있습니다.
    리워드 별 발송 시작 예정일은 다를 수 있으니, 나의 펀딩 - 펀딩 내역에서 펀딩한 리워드의 발송 시작 예정일을 확인하세요.
    
    2) 리워드에 하자가 있을 경우
    서포터가 수령한 리워드가 아래 하자 기준에 해당할 경우, 배송 완료일로부터 7일 이내에 펀딩금 반환 신청을 할 수 있습니다. 이때 메이커는 하자 판단을 위한 증빙자료, 리워드 반송을 서포터에게 요청할 수 있습니다.
    
    ・ 리워드의 품질에 아래와 같은 하자가 발생한 경우
    예)
    
    공산품, 공예품 등
    제품 흠집, 휨, 백화현상 및 도장 불량, 악취 등 자극성 냄새, 좀 등의 벌레 발생, 균열, 뒤틀림 또는 변색, 녹, 누수, 오염
    신발, 의류, 패션 잡화 등
    봉제 불량, 접착 불량, 염색 불량, 원단 불량(제직, 세탁 후 변색, 탈색, 수축 등), 부자재 불량(단추, 지퍼, 천조각, 실오라기 등), 치수(사이즈)의 부정확
    식품, 의약품, 의약외품, 생활위생용품, 화장품 등
    이물혼입, 함량 부적합, 변질, 부패, 성분이상
    그 외 품목
    소비자분쟁해결 기준을 따름
    ・ 정상적인 사용상태에서 리워드의 기능/성능상 오작동 또는 미작동 되는 경우
    ・ 리워드로 인해 아래와 같은 피해를 입은 경우
    ・ 부작용으로 인해 신체상의 피해가 발생한 경우
    ・ 용기 불량, 파손 등으로 인한 상해, 피해사고를 입은 경우
    자세한 하자 반환 기준은 펀딩금 반환 정책을 확인하세요.
    단, 아래 어느 하나에 해당될 경우 펀딩금 반환은 불가합니다.
    
    메이커가 프로젝트 페이지 내에 명시적으로 고지한 하자 불인정 사유에 해당하는 경우
    (예) 공장 제작 과정상 벌어짐 방지를 위해 봉제되어 제공되는 포켓은 하자 사유가 되지 않습니다.
    서포터의 귀책 사유로 리워드의 일부 혹은 전체가 분실/파손/고장/오염/훼손이 발생된 경우
    모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 다른 경우
    공연, 디지털컨텐츠, 여행 패키지 상품, 무형 서비스 및 컨텐츠의 제공이 완료되었을 경우
    3) 기타 주의 사항
    크라우드펀딩의 특성상 프로젝트 종료 후 서포터의 단순변심으로 인한 펀딩금 반환은 불가합니다.
    회사는 메이커와 상호 협의 하에 프로젝트를 취소할 수 있으며, 펀딩 종료 후 프로젝트가 취소될 경우에는 펀딩금이 반환됩니다.
    하자가 있는 경우, 리워드 반송을 위한 배송비는 메이커가 부담하여야 하고 하자가 없는 경우에는 리워드 반송 및 재반송에 대한 배송비를 서포터에게 청구될 수 있습니다.</Typography>
                </Paper>
            </Grid>
           
        </Grid> 
        </div>
       
    </div>

    );
};