import React, {useState, useEffect} from 'react';

import { useHistory } from 'react-router';
import { Button, Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

export default function CategoryPage(props) {

    const category = props.match.params;


    const [search, setSearch] = useState();

    // useEffect(() => {
        
    //     fetch("http://localhost:8081/cotents/search", {
    //         body : search
    //     }).
    //     then((res) =>{
    //         if(res.status==200){
    //             return res.json()
    //         }
    //        else{
    //            throw Error("에러")
    //        }

    //     }
    //     )
    //     .then(res=>{
    //         console.log(res)
           
    //             setFunding(res);
    //             setResult(
    //                 <div className={classes.section}>
    //                     <GridContainer justify="center">
    //                         {funding.map((funding)=>(
    //                         <MyFundingCard 
    //                         id={funding.fundingId}
    //                         title={funding.title}
    //                         imgUrl={funding.thumbNailUrl}
    //                         summary={funding.summary}
    //                         restDate={funding.restDate}
    //                         category={funding.category}
    //                         totalFundraising={funding.totalFundraising}
    //                         goalFundraising={funding.goalFundraising}
    //                         ROA={funding.rateOfAchievement}
    //                         projectUrl={funding.projectUrl} />
    //                         ))}
    //                     </GridContainer>
    //                 </div>
    //             )
    //             console.log(result)
    //     })
    //     .catch((e) =>{
    //         setResult(
    //             <div>
    //                 <h5 style={{fontWeight:'bold', color:'gray'}}>
    //                     찜한 프로젝트가 없습니다.
    //                 </h5>
    //             </div>
    //         )
    //     });
    // },[])

    return (
        <div style={{backgroundColor:'white'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:'2px solid #F0F1EC', height:'10%', width:'100%', backgroundColor:'white', position:'fixed', zIndex:'1'}}>
                <div style={{marginLeft:'-90%', position:'fixed'}}>
                    <Button onClick={()=>buttonClick("/")}>
                        <CloseIcon/>
                    </Button>
                </div>
                <div style={{position:'fixed'}}>
                    <Button onClick={()=>buttonClick("/")}>
                    <img src={require('components/Header/CrowdeeLogoFinal2.png').default}/>
                    </Button>
                </div>
                <div style={{marginRight:'-70%', position:'fixed'}}>
                    <Button onClick={()=>buttonClick("/search")}>
                    <SearchIcon/>
                    </Button>
                </div>
                <div style={{marginRight:'-85%', display:'flex', alignItems:'center'}}>
                    <Button onClick={()=>buttonClick("/my")}>
                    <Avatar style={{width:'20px', height:'20px', fontSize:'12px', fontWeight:'bold', marginRight:'5px'}}></Avatar>
                    
                    </Button>
                </div>
            </div>
            <Container style={{backgroundColor:'white', height:'100vh'}}>
                <div>

                </div>
            </Container>    
        </div>
    );
};