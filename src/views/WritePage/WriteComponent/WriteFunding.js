import { Container, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";



export default function WriteFunding() {
    // const useStyles = makeStyles((theme)=>({
    //     imageuploadbox{
    //         width: '202'
    //         height: 202px;
    //         position: relative;
    //         border: 1px solid rgb(230, 229, 239);
    //         background: rgb(250, 250, 253);
    //         display: flex;
    //         -webkit-box-align: center;
    //         align-items: center;
    //         -webkit-box-pack: center;
    //         justify-content: center;
    //         flex-direction: column;
    //         color: rgb(155, 153, 169);
    //         font-size: 1rem;
    //         margin-right: 1rem;
    //         margin-bottom: 0px;
    //     },
    //     image-upload-box::before{
    //         content: "";
    //         background-position: center center;
    //         background-repeat: no-repeat;
    //         background-size: cover;
    //         width: 2rem;
    //         height: 2rem;
    //         background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0RCRTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI4LjQ3MSAzMkgzLjUzYy0uOTcxIDAtMS44OTQtLjQyMi0yLjUyOS0xLjE1N2wtLjAyNi0uMDNBNCA0IDAgMCAxIDAgMjguMTk4VjguNjA3QTQgNCAwIDAgMSAuOTc0IDUuOTlMMSA1Ljk2YTMuMzQzIDMuMzQzIDAgMCAxIDIuNTI5LTEuMTU2aDIuNTM0YTIgMiAwIDAgMCAxLjUzNy0uNzJMMTAuNC43MkEyIDIgMCAwIDEgMTEuOTM3IDBoOC4xMjZBMiAyIDAgMCAxIDIxLjYuNzJsMi44IDMuMzYzYTIgMiAwIDAgMCAxLjUzNy43MmgyLjUzNGMuOTcxIDAgMS44OTQuNDIzIDIuNTI5IDEuMTU3bC4wMjYuMDNBNCA0IDAgMCAxIDMyIDguNjA2djE5LjU5MWE0IDQgMCAwIDEtLjk3NCAyLjYxN2wtLjAyNi4wM0EzLjM0MyAzLjM0MyAwIDAgMSAyOC40NzEgMzJ6TTE2IDkuNmE4IDggMCAxIDEgMCAxNiA4IDggMCAwIDEgMC0xNnptMCAxMi44YzIuNjQ3IDAgNC44LTIuMTUzIDQuOC00LjhzLTIuMTUzLTQuOC00LjgtNC44YTQuODA1IDQuODA1IDAgMCAwLTQuOCA0LjhjMCAyLjY0NyAyLjE1MyA0LjggNC44IDQuOHoiLz4KPC9zdmc+Cg==);
    //         margin-bottom: 1rem;
    //     },
    //     image-upload-box input{
    //         border: 1px solid rgb(195, 194, 204);
    //         width: 100%;
    //         height: 100%;
    //         position: absolute;
    //         top: 0px;
    //         left: 0px;
    //         opacity: 0;
    //         cursor: pointer;
    //         font-size: 0px;
    //     }



    //   }));
    const [form,setForm] = useState({

    });
    const FormValueHandler = (e) =>{
        setForm({
            ...form,
            [e.target.name] : [e.target.value]
        })
       props.save(form)
    }
   
    return (
        <div style={{paddingTop:'30px', paddingBottom:'30px', backgroundColor:'#FCFCFC',}}>
                <Container maxWidth="md">
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>목표 금액</h4>
                            <h6>프로젝트를 완수하기 위해 필요한 금액을 설정해주세요.</h6>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            
                            <input name="goalFundraising" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'150px', height:'40px', marginRight:'10px'}} placeholder={'목표 금액'}></input>
                             <Typography variant="h6" display="block" gutterBottom>원</Typography>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>펀딩 일정</h4>
                            <h6>설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지<br/>날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.</h6>
                        </div>
                        <div>
                       
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>최소 펀딩금액</h4>
                            <h6>설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지<br/>날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.</h6>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <input name="minFundraising" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'150px', height:'40px', marginRight:'10px'}} placeholder={'최소 펀딩 금액을 입력'}></input>
                             <Typography variant="h6" display="block" gutterBottom>원</Typography>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>최대 후원자 수</h4>
                            <h6>설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지<br/>날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.</h6>
                        </div>
                        <div style={{display:'flex', alignItems:'center' }}>
                            <input name="maxBacker" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'150px', height:'40px', marginRight:'10px'}} placeholder={'최대 후원자 수를 입력'}></input>
                             <Typography variant="h6" display="block" gutterBottom>명</Typography>
                        </div>
                    </div>
                </Container>  
            </div> 
    );
};