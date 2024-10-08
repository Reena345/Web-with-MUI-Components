import React from "react";
import {
  Box,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import logo from "../assest/Logo.png";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: " #F5F7FA" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <img src={logo} />

          <Box className='d-flex ' >
            <Link href="#" className="text-dark" underline="none">
              <Typography variant="body1">Home</Typography>
            </Link>
            <Link href="#" className="mx-3 text-dark" underline="none">
              <Typography variant="body1">Service</Typography>
            </Link>
            <Link href="#" className="text-dark" underline="none">
              <Typography variant="body1">Feature</Typography>
            </Link>
            <Link href="#" className="mx-3 text-dark" underline="none">
              <Typography variant="body1">Product</Typography>
            </Link>
            <Link href="#" className="text-dark" underline="none">
              <Typography variant="body1">Testimonial</Typography>
            </Link>
            <Link href="#"className="mx-3 text-dark" underline="none">
              <Typography variant="body1">FAQ</Typography>
            </Link>
          </Box>
          <Box>
          <Button sx={{color:'#4CAF4F'}}>Login</Button>
          <Button sx={{backgroundColor:'#4CAF4F',color:'white'}} >Sign up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
