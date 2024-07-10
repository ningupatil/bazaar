
import AppBar from '@mui/material/AppBar';

  import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import Button from '@mui/material/Button';
    import IconButton from '@mui/material/IconButton';
    import MenuIcon from '@mui/icons-material/Menu';
import { SignUp } from '../../SignUp/Components/SignUpComponent';

import ButtonComp from '../../../Common/Button';
import { useContext, useState } from 'react';
import ToggleButtonComponent from '../../../Common/ToggleButton';
import { UserContext } from '../../../Context/UserContext/UserContext';



const pages = ['Homes', 'Products', 'Cart'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MenuAppBar() {

  const[isSignIn, setIsSignIn] = useState(true);
  const {userDetails} = useContext(UserContext);
  
  const onSignUp = () => {
    console.log("hiiiiii")
    window.location.href= "/signup"
  }

  const onSignIn = () => {
    window.location.href = "/signin"
  }

  const handleProfile = () => {
    setIsSignIn(!isSignIn)
  }

  console.log('inappbar----- userDetails ', userDetails)

  return (
 
    
    
     
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bazaar
              </Typography>
             
             {(userDetails && userDetails.id)
             ? null
             : <>
             <ButtonComp color="inherit" onButtonClick={onSignIn} buttonName={"SignIn"}  />
              <ButtonComp color="inherit" onButtonClick={onSignUp} buttonName={"Signup"} />
             </>}
              
              {/* <ToggleButtonComponent value= "isSignIn" selected= {handleProfile}/> */}
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
    
  

export default MenuAppBar;
