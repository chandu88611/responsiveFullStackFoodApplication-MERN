import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import axios from "axios"
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MainPage() {
  
const [restaurent,setRestaurents]=useState([])



const getRestaurents= async()=>{
  const res=await axios.get()
  console.log("me"+res)
}
useEffect(()=>{
  getRestaurents()
},[])

  return (
    <>
    <Card sx={{ maxWidth: 310 ,  display: { xs: 'none', md: 'flex' }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image=""
          alt="green iguana"
        />
        <CardContent>
        <CardActions sx={{display:"flex",alignItems:'center' 
        
        
        }}>
          <Typography gutterBottom variant="h5" component="div">
        Dosa
          </Typography>
          <Box   sx={{ maxWidth: 40 ,maxHeight:25,background:'green' ,color:'white', 
    borderRadius:'20%',padding:'.5%',display:"flex",alignItems:'center' 
          }}
       
          >4.5 <StarIcon  fontSize='smaller' sx={{color:'white'
        
        
    }}/> </Box>
          </CardActions>
          <Typography variant="body2" color="text.secondary">
          dfeferfer
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    {/* <Typography variant="body2" color="text.secondary">
          Number of orders placed
          </Typography> */}
    </>
  );
}
