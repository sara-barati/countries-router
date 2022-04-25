import React,{useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link,Outlet} from 'react-router-dom'
import CheckLogin from "./checkLogin";

 

export default function Header() {



  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar sx={{justifyContent: 'space-between'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        
        
            <Typography variant="h6" component="div"  sx={{ flexGrow: 1, ml:12 }}>
            <Typography> my skills within</Typography>
            Material UI
          </Typography>
        
          <Button color="inherit"><Link to="/login">Login</Link></Button>
          <Button color="inherit"><Link to="/dashbord">dashbord</Link></Button>
          <Button color="inherit"><Link to="/addItem">+</Link></Button>
      
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet/>
    </>
  );
}