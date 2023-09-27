
import { AppBar , Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom' ;

const Header = () => {

  const styles = {
     color :'white' ,
     margin: '0.5rem',
     textDecoration : 'none',
  }

  return (
    <AppBar>
       <Toolbar >
          <Typography variant="h6" mr = {'auto'}  textTransform = {'uppercase'}  bgcolor={'lightgrey'} >
            Learning Language 
          </Typography>
          <Link to = "/"       style = {styles} > Home </Link>
          <Link to = '/login'  style = {styles}> Login </Link>
       </Toolbar>
    </AppBar>
  )
}

export default Header