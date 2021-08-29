import React,{useState,useEffect} from 'react';
import { Container } from '@material-ui/core';
import SimpleSelect from 'components/CrowdeeComponents/SimpleSelect';
import { makeStyles } from "@material-ui/core/styles";
export default function WriteDefault(props) {
    const [form,setForm] = useState({

    });
    const CategoryControl= (data)=>{
        setForm({
            ...form,
            category : data
        })
  
    }
    const FormValueHandler = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
       props.save(form)
    }
    const useStyles = makeStyles((theme)=>({
        imgContent : {
            flex: '1 1 0%'
        },
        imgContentBox :{
           //border : '1px solid black',
            display: 'flex',
            width: 500,
            flexWrap: 'wrap',
            overflowX: 'hidden'
        },
        inputBox : {
            
            width: 180,
            height: 180,
            position: 'relative',
            border: '1px solid rgb(230, 229, 239)',
            background: 'rgb(250, 250, 253)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'rgb(155, 153, 169)',
            fontSize: '1rem',
            marginLeft : 50,
            marginRight: 50,
            marginBottom: 0,
        },
        imageUploadBox: {
            color: 'rgb(155, 153, 169)',
            content: "",
            backgroundPosition: 'center center',
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
            width: 100,
            height: 100,
            backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0RCRTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI4LjQ3MSAzMkgzLjUzYy0uOTcxIDAtMS44OTQtLjQyMi0yLjUyOS0xLjE1N2wtLjAyNi0uMDNBNCA0IDAgMCAxIDAgMjguMTk4VjguNjA3QTQgNCAwIDAgMSAuOTc0IDUuOTlMMSA1Ljk2YTMuMzQzIDMuMzQzIDAgMCAxIDIuNTI5LTEuMTU2aDIuNTM0YTIgMiAwIDAgMCAxLjUzNy0uNzJMMTAuNC43MkEyIDIgMCAwIDEgMTEuOTM3IDBoOC4xMjZBMiAyIDAgMCAxIDIxLjYuNzJsMi44IDMuMzYzYTIgMiAwIDAgMCAxLjUzNy43MmgyLjUzNGMuOTcxIDAgMS44OTQuNDIzIDIuNTI5IDEuMTU3bC4wMjYuMDNBNCA0IDAgMCAxIDMyIDguNjA2djE5LjU5MWE0IDQgMCAwIDEtLjk3NCAyLjYxN2wtLjAyNi4wM0EzLjM0MyAzLjM0MyAwIDAgMSAyOC40NzEgMzJ6TTE2IDkuNmE4IDggMCAxIDEgMCAxNiA4IDggMCAwIDEgMC0xNnptMCAxMi44YzIuNjQ3IDAgNC44LTIuMTUzIDQuOC00LjhzLTIuMTUzLTQuOC00LjgtNC44YTQuODA1IDQuODA1IDAgMCAwLTQuOCA0LjhjMCAyLjY0NyAyLjE1MyA0LjggNC44IDQuOHoiLz4KPC9zdmc+Cg==)',
            marginBottom: 20
        },
        fileInput : {
           
            border: '1px solid rgb(195, 194, 204)',
            width : '100%',
            height: '100%',
            //position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
            cursor: 'pointer',
            fontSize : 0
        },
        appendBox : {
            display : 'flex',
            border : '1px solid black',
            width : 180,
            height : 180
        },
        appendImg : {
            width: 180,
            height: 180,
            border: '1px solid rgb(230, 229, 239)',
            marginRight: 0,
            marginBottom: 0,
            position: 'relative',
            display: 'inlineBlock',
            cursor: 'pointer',
        },
        img : {
            width : '100%',
            height : '100%'
        }
      }));
      const classes = useStyles();
      const [imgUrl,setImgUrl] = useState();
      const putImage = () =>{
          const input = document.querySelector('input[type="file"]')
          var data = new FormData();
          data.append("file",input.files[0])
          fetch("http://localhost:8081/api/thumbnail",{
              method : 'post',
            //   headers :{
            //     'Content-Type': 'multipart/form-data'
            //      Authorization : {
        //              Bearer ${token}
            //        }
            //   },
              body : data
                
              
          }).
          then((res)=>{
              if(!res.status==200){
                throw new Error('http 오류');
              }
              return res.json();
          }).
          then((res)=>{
            setImgUrl(res.url)
          })
      }
      
    return (
        <div style={{paddingTop:'30px', paddingBottom:'30px', backgroundColor:'#FCFCFC',}}>
                <Container maxWidth="md">
                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>프로젝트 카테고리</h4>
                            <h6>프로젝트 성격상 가장 일치하는 카테고리를 선택해주세요.</h6>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <SimpleSelect handleState={CategoryControl} />
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>프로젝트 제목</h4>
                            <h6>프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요.</h6>
                        </div>
                        <div>
                            <h5 style={{fontWeight:'bold'}}>긴 제목</h5>
                            <input name="title" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'450px', height:'40px'}} placeholder={'긴 제목을 입력해주세요'}></input>
                            <h5 style={{fontWeight:'bold'}}>짧은 제목</h5>
                            <input name="subTitle" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'450px', height:'40px'}} placeholder={'짧은 제목을 입력해주세요'}></input>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>프로젝트 요약</h4>
                            <h6>후원자 분들이 프로젝트를 빠르게 이해할 수 있도록<br/>명확하고 간략하게 소개해주세요.</h6>
                        </div>
                        <div>
                            <input name="summary" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'450px', height:'100px'}} placeholder={'프로젝트에 대해 요약해서 입력해주세요'}></input>
                        </div>
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>프로젝트 대표이미지</h4>
                            <h6>후원자들이 프로젝트의 내용을 쉽게 파악하고<br/>좋은 인상을 받을 수 있도록 이미지 가이드라인을 따라주세요.<br/>(사진 용량은 3MB 이하만 등록 가능합니다.)</h6>
                        </div>
                        
                        <div className={classes.imgContentBox}>
                            <div className={classes.inputBox}>
                                <label> 
                                    <div className={classes.imageUploadBox}>
                                    <input className={classes.fileInput} onChange={putImage} type="file" accept="image/*" required ></input>
                                    </div>
                                    
                                </label>
                            </div>
                            <div className={classes.appendBox}>
                                <div className={classes.appendImg}>
                                    <img className={classes.img} src={imgUrl} ></img>
                                </div>
                            </div>
                            
                        </div>
                        
                       
                    </div>

                    <div style={{borderBottom:'1px solid #CECECE', paddingBottom:'40px', marginBottom:'40px', display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h4 style={{fontWeight:'bold'}}>검색태그</h4>
                            <h6>잠재 후원자의 관심사를 고려한 검색 태그를 입력해주세요.</h6>
                        </div>
                        <div>
                            <input name="tag" onChange={FormValueHandler} style={{border:'1px solid #B6B7B9', borderRadius:'3px', width:'450px', height:'80px'}} placeholder={'예시) 피아노,사극,현대무용 (# 또는 , 로 구분)'}></input>
                        </div>
                    </div>

                </Container>    
            </div> 
    );
};