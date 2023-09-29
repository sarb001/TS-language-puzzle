import { Button, Container, List, ListItem, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import { useDispatch ,useSelector } from 'react-redux' ;
import { clearState } from "../Redux/Slices";
import { countMatchingElements } from "../utils/Feature";

const Result = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();

  const { words , results } = useSelector((state : { root : StateType }) => state.root); 

   const CorrectAns = countMatchingElements(results,words.map((i) => i.meaning));
   const Percentage = (CorrectAns / words.length) * 100 ;

   const resetHandler = () : void => {
      navigate("/");
      dispatch(clearState());
   }

  return (
    <div className="result-container" style = {{paddingTop:'5%'}}>  
        <Container maxWidth = {'sm'}>
           <Typography variant = "h3" color={'primary'}  m = {'2rem 0'}>
              Result 
           </Typography>
           <Typography>
              You got {CorrectAns} right out of {words?.length}
           </Typography>

          <Stack direction={'row'}  justifyContent={'space-evenly'}>
             <Stack>
                <Typography m = {'1rem 0'} variant = "h5"> Your Ans </Typography>
                <List> 
                   {results.map((i,idx) => (
                      <ListItem key = {idx}>
                         {idx + 1} - {i}
                      </ListItem>
                   ))}
                </List>
             </Stack>
         
           <Stack>
              <Typography m = {'1rem 0'} variant = "h5">
                Correct ans
              </Typography>
                <List>
                  {words?.map((i,idx) => (
                      <ListItem key = {idx}>
                          {idx + 1} - {i.meaning}
                      </ListItem>
                  ))}
                </List>
           </Stack>
          </Stack>

            <Typography m = {'1rem'} variant="h5"  color = {Percentage > 50 ? "green" : "red"}>
                    {Percentage > 50 ? "Pass" : "Fail"} 
            </Typography>

              <Button  onClick = {resetHandler} sx = {{margin : '1rem'}} variant = "contained"> 
                 Reset
              </Button>
        </Container>
    </div>
  )
}

export default Result