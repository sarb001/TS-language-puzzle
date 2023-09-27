import { Container ,Typography ,Stack ,Button } from '@mui/material' ;
import { useNavigate } from 'react-router-dom' ;

const languages = [
  {
    name : 'Japanese',
    code : 'ja',
  },
  {
    name : 'Hindi',
    code : 'hi',
  },
  {
    name : 'Spanish',
    code : 'es',
  },
  {
    name : 'French',
    code : 'fr',
  },
]

const Home = () => {

    const navigate = useNavigate();
    const languageselector = ( language:string ) => {
       navigate(`/learn?language=${language}`);     
    };

  return (
    <>
     <div className="home-container" style={{paddingTop:'5%'}}>
       <Container maxWidth = {'sm'} >
        <Typography variant = "h4" p = {"2rem"} textAlign={'center'}> 
          Welcome Begin Journey 
        </Typography>
          <Stack direction = {'row'}
            spacing={'2rem'}
            p = {'2rem'}
            alignItems = {'center'}
            justifyContent = {'center'}
          >
          {languages.map((i) => (
            <Button onClick={() => languageselector(i.code)}
            key = {i.code}
            variant = 'contained'>
              {i.name}
            </Button>
          ))}
        </Stack>

            <Typography textAlign = {'center'}> 
              Choose one Languages from Above 
            </Typography>

       </Container>
     </div>
    </>
  )
}

export default Home