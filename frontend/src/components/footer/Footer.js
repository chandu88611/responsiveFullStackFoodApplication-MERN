import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
// import Menu from '@mui/material/Menu';

function Footer() {
  return (
    <Box sx={{background:'rgb(224, 220, 220)',display:{xs:'none',md:'flex'},flexDirection:'column'}}>
    <Typography variant='h3' sx={{ml:'12vw' ,mb:'1vw'}} fontWeight={'bold'} >App</Typography>
   <Box sx={{display:'flex',flexDirection:'row' ,width:'100%',height:'30vh',justifyContent:'center'}}>
    
    <Box sx={{width:'16%'}}>
    <Typography fontWeight={'bold'} sx={{ml:'3vw',fontSize:'1.3vw'}}> ABOUT ZOMATO</Typography>
    <ul>
        
        <li style={{listStyle: "none",fontSize:'90%'}}>WHO WE ARE</li>
        <li style={{listStyle: "none",fontSize:'90%'}}>BLOG</li>
        <li style={{listStyle: "none",fontSize:'90%'}}>WORK WITH US</li>
        <li style={{listStyle: "none",fontSize:'90%'}}>INVESTOR RELATIONS</li>
        <li style={{listStyle: "none",fontSize:'90%'}}>REPORT FRAUD</li>
        <li style={{listStyle: "none",fontSize:'90%'}}>CONTACT US</li>
    </ul>
    </Box>
    <Box  sx={{width:'16%'}}>
    <Typography fontWeight={'bold'}  sx={{ml:'3vw',fontSize:'1.3vw'}}>ZOMAVERSE
</Typography>
<ul>
        
        <li style={{listStyle: "none",fontSize:'100%'}}>Feeding Banglore</li>
        <li style={{listStyle: "none",fontSize:'100%'}}>app</li>
        <li style={{listStyle: "none",fontSize:'100%'}}>Hypercure</li>
        <li style={{listStyle: "none",fontSize:'100%'}}>Zomaland</li>
    </ul>
    </Box>
    <Box  sx={{width:'16%'}}>
    <Box>
    <Typography fontWeight={'bold'}  sx={{ml:'3vw',fontSize:'1.3vw'}}>FOR RESTAURANTS</Typography>
    <ul>
        
        <li style={{listStyle: "none",fontSize:'100%'}}>Partner With Us</li>
        <li style={{listStyle: "none",fontSize:'100%'}}>Apps For You</li>
    </ul>
    <Typography fontWeight={'bold'}  sx={{ml:'3vw',fontSize:'1.3vw'}}>FOR ENTERPRISES</Typography>
    <ul>
        
        <li style={{listStyle: "none",fontSize:'100%'}}>App For Work</li>
    </ul>
    </Box>
    </Box>
    <Box  sx={{width:'16%'}}>
    <Typography fontWeight={'bold'}  sx={{ml:'3vw',fontSize:'1.3vw'}}>LEARN MORE</Typography>
    <ul>
        
        <li style={{listStyle: "none",fontSize:'100%'}}>Privacy</li>
        <li style={{listStyle: "none",fontSize:'100%'}}>Security</li>
        <li style={{listStyle: "none",fontSize:'100%'}}>Terms</li>
        <li style={{listStyle: "none",fontSize:'100%'}}>Site Map</li>
    </ul>
    </Box>
    <Box  sx={{width:'20%'}}>
    <Typography  fontWeight={'bold'} sx={{ml:'3vw',fontSize:'1.3vw'}}>SOCIAL LINKS</Typography>
    <Box sx={{display:"flex",flexDirection:'row',ml:'3vw'}}><LinkedInIcon/> <InstagramIcon/>
    <TwitterIcon/><YouTubeIcon/><FacebookIcon />
    </Box>
    </Box>
   </Box>
   <hr  style={{width:'90%'}} />
   <Box  sx={{padding:'.5%'}}
   >By continuing past this page, you agree to
    our Terms of Service, Cookie Policy, Privacy 
    Policy and Content Policies. All trademarks are
     properties of their respective owners. 2008-2022
      © Zomato™ Ltd. All rights reserved.</Box>
   </Box>
  )
}

export default Footer
