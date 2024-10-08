


import React from "react";
import heroImg from "../assest/Illustration.png";
import { Box, Button, Typography } from "@mui/material";

function HeroSection() {
  return (
    <Box sx={{backgroundColor:'#F5F7FA',display:'flex',justifyContent:'space-evenly',alignItems:'center',padding:'200px 0px'}} >
        <Box>
           <Box>
           <Typography sx={{fontSize:'64px',color:'#4d4d4d'}}>Lessons and insights</Typography>
           </Box>
           <Box>
            <Typography sx={{fontSize:'64px',color:'#4CAF4F'}}> from 8 years</Typography>
           </Box>
           <Box>
            <Typography sx={{fontSize:'16px',color:'#4d4d4d'}}>Where to grow your business as a photographer: site or social media?</Typography>
           </Box>
           <Button sx={{backgroundColor:'#4CAF4F',color:'white', marginTop:'27px', padding:'10px 20px'}}> Register</Button>
        </Box>
        <Box>
            <img className="" src={heroImg} alt="" />
        </Box>
        

    </Box>

  );
}

export default HeroSection;
