import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'

function Navbar() {
   return (
      <>
         <Box sx={{ flexGrow: 1 }}>

            <AppBar position="sticky" sx={{
               boxSizing: "border-box",
               background: "#55516E",
               border: "1px solid #000000",
               boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
               height: "10vh",
               margin: "0"
            }}>

               <Toolbar>
                  <Typography variant="h6" component="div"
                     sx={{
                        flexGrow: 1,
                        padding: "0 5rem"
                     }}>
                        
                     TODO LIST
                  </Typography>
               </Toolbar>
            </AppBar>
         </Box >

         {/* <Toolbar /> */}
      </>
   );
}

export default Navbar