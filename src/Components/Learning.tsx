import {useState} from 'react' ;
import  { useSearchParams , useNavigate } from 'react-router-dom' ;
import { ArrowBack  , VolumeUp } from '@mui/icons-material' ;
import { Container ,Button  ,Typography ,Stack } from '@mui/material' ;

const Learning = () => {

    const [count,setCount] = useState<number>(0);
    const params   = useSearchParams()[0].get("language") as LangType;
    const navigate = useNavigate();

     const nextHandler = (): void => {
        setCount((prev) =>  prev + 1);
     }

  return (
    <div className="learning-container" style = {{paddingTop:'10%'}}>
         <Container maxWidth = "sm" sx = {{'padding' : '1rem'}}>
           <Button onClick = {count === 0 ? () => navigate("/") : () => setCount((prev) => prev - 1)} >
              <ArrowBack />
           </Button>

            <Stack direction={'row'}  spacing={'1rem'}>
                <Typography variant = {'h4'}>
                    {count + 1} - {"Sample"}
                </Typography>
              <Typography color = {'black'} variant = {'h4'}> : {"Lol"}
                  {count + 1} - {"Sample"}
              </Typography>
              <Button sx = {{borderRadius : '50%'}}>
                  <VolumeUp />
              </Button>   
           </Stack>

            <Button  onClick = {count === 7 ? () => navigate('/quiz') : nextHandler} 
            sx = {{margin:'3rem 0'}} variant='contained'  fullWidth>
               {count === 7 ? "Test" : "Next"}
            </Button>
         </Container>
    </div>
  )
}

export default Learning