
import { Button } from '@material-ui/core'; 
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function WritePageNav(){

    return(
        <div style={{display:'flex', paddingTop:'20px', justifyContent:'space-between'}}>
            <div>
                <Button fontSize="large" size='large'><ArrowBackIcon fontSize="large"/></Button>{' '}
            </div>
            <div>
                <Button variant="outlined" size='large'>취소</Button>{' '}
                <Button variant="contained" color="secondary" size='large'>저장</Button>{' '}
            </div>
        </div>
    )
}