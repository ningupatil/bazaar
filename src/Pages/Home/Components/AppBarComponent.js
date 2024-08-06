
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
import { Search, ShoppingCart } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, InputBase, alpha, styled } from "@mui/material";
import  BadgeProps  from "@mui/material/Badge"
import NavigationMenuComponent from '../../../Common/NavigationMenuComponent';


const pages = ['Homes', 'Products', 'Cart'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MenuAppBar() {

  const[isSignIn, setIsSignIn] = useState(true);
  const {userDetails} = useContext(UserContext);
  const navigate = useNavigate()
  const onSignUp = () => {
    window.location.href= "/signup"
  }

  const onSignIn = () => {
    window.location.href = "/signin"
  }

  const handleProfile = () => {
    setIsSignIn(!isSignIn)
  }

  const onCartClick = () => {
    navigate("/cart")
  }

  

 const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
 const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
 const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  

  const onSearchClick = () => {

  }
  

  return (
 
    
    
     
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              
              
              <IconButton
              size="large" 
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              >
              <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" sx={{  display: { xs: 'none', sm: 'block' } }}>
                Bazaar
              </Typography>
              <Box sx={{ flexGrow: 1}}>
              <NavigationMenuComponent />
              </Box>
              <Box sx = {{ flexGrow : 1}}>
              <Search onClick={onSearchClick} sx={{ flexGrow: 2}}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              </Box>
             <Box sx = {{ flexgrow : 1 }}>
             {(userDetails && userDetails.id)
             ? <>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon  onClick = {onCartClick} />
                </Badge>
             </>
             
             : <>

             {/* <ButtonComp color="inherit" onButtonClick={onSignIn} buttonName={"SignIn"}  /> */}
              <ButtonComp color="inherit" onButtonClick={onSignUp} buttonName={"Signup"} />
             </>}
              
             </Box>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
    
  

export default MenuAppBar;
