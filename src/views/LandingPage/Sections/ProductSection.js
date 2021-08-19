// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { useEffect, useState } from "react";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const [contents, setContents] = useState([]);

  //함수 실행시 최초 한번 실행되는 것
  useEffect(() => {
    fetch("http://localhost:8081/contents", {
      method:"GET"
    }).then(res=>res.json()).then(res=>{
      console.log(1,res);
      setContents(res);
    });
  },[])

  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>주목할 만한 펀딩</h2>
          </GridItem>
        </GridContainer>
        <div>

          <GridContainer>
            {contents.map((content) => (
              <ContentsItem key={content.id} content={content}/>
            ))}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}