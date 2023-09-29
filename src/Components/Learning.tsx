import {useState ,useEffect} from 'react' ;
import  { useSearchParams , useNavigate  } from 'react-router-dom' ;
import { ArrowBack  , VolumeUp } from '@mui/icons-material' ;
import { Container ,Button  ,Typography ,Stack } from '@mui/material' ;
import translateWords from '../utils/Feature';
import {  useDispatch ,useSelector } from 'react-redux' ;  
import { getWordsFail, getWordsRequest, getWordsSuccess } from '../Redux/Slices';
import Loader from './Loader';

const Learning = () => {

    const [count,setCount] = useState<number>(0);
    const params   = useSearchParams()[0].get("language") as LangType;
    const  navigate  = useNavigate();
    const  dispatch = useDispatch();

    const { loading , error , results , words } = useSelector((state : { root : StateType }) => state.root); 

     const nextHandler = (): void => {
        setCount((prev) =>  prev + 1);
     }

      useEffect(() => {
         dispatch(getWordsRequest());
         translateWords(params || "hi")
         .then((arr) => dispatch(getWordsSuccess(arr)))
         .catch((err) => dispatch(getWordsFail(err)));
      }, [])

       if(loading) return <Loader />;

  return (
    <div className="learning-container" style = {{paddingTop:'10%'}}>
         <Container maxWidth = "sm" sx = {{'padding' : '1rem'}}>
           <Button onClick = {count === 0 ? () => navigate("/") : () => setCount((prev) => prev - 1)} >
              <ArrowBack />
           </Button>

            <Stack direction={'row'}  spacing={'1rem'}>
                <Typography variant = {'h4'}>
                    {count + 1} - {words[count]?.word}
                </Typography>
              <Typography color = {'black'} variant = {'h4'}> 
                   : {words[count]?.meaning}
              </Typography>
              <Button sx = {{borderRadius : '50%'}}>
                  <VolumeUp />
              </Button>   
           </Stack>

            <Button  onClick = {count === words.length - 1 ? () => navigate('/quiz') : nextHandler} 
            sx = {{margin:'3rem 0'}} variant='contained'  fullWidth>
               {count === words.length - 1  ? "Test" : "Next"}
            </Button>
          
         </Container>
    </div>
  )
}

export default Learning