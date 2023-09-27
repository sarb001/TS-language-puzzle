import { Container  ,Typography ,FormControl ,
  FormLabel ,RadioGroup ,Button , FormControlLabel ,
  Radio 
} from '@mui/material' ;
import { useState } from 'react';

import {  useNavigate } from 'react-router-dom' ;

const Quiz = () => {

    const [count,setCount]   = useState<number>(0);
    const [ans,setAns]       = useState<string>("");
    const [result,setResult] = useState<string[]>([]);

     const navigate = useNavigate();

     const nextHandler = () : void  => {
        if(count === 7){
          navigate('/result')
        }else {
          setResult((prev) => [...prev , ans]);
          setCount((prev) => prev + 1);
          setAns("");
          }
        };

  return (
    <div className = "quiz-container" style = {{paddingTop:'5%'}}>
         <Container maxWidth = "sm" sx = {{padding : '1rem'}}>
            <Typography m = {'2rem 0'}>  Quiz  </Typography>
            <Typography variant={'h3'}>
                 {count + 1} - {'Randoms'}
            </Typography>
            <FormControl>
               <FormLabel sx = {{mt : '2rem' , mb : '1rem'}}> Meaning </FormLabel>
               <RadioGroup value = {ans}  onChange={(e) => setAns(e.target.value)}>
                  <FormControlLabel  
                  value = {'Lol'}
                  control = { <Radio /> }
                  label = {"Option 1"}
                  />
               </RadioGroup>
            </FormControl>

            <Button sx = {{margin:'3rem 0'}}
            variant = 'contained' 
            fullWidth 
            onClick  = {nextHandler}
            disabled = {ans === ""}>
                 {count === 7 ? "Submit" : "Next"}
            </Button>
         </Container>
    </div>
  )
}

export default Quiz