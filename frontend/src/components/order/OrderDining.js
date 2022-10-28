import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import CardActions from '@mui/material/CardActions';

function OrderDining() {
  return (  <Box marginTop='2vw'   sx={{  marginLeft:"3%"  , flexDirection:'row' ,display: { xs: 'none', md: 'flex' }}}>
  
  <Box sx={{flexGrow:1}}>
    <Card sx={{ maxWidth:360 ,  display: { xs: 'none', md: 'flex' }}}>
      <CardActionArea>
      <Link to="/order"> <CardMedia
          component="img"
          height="150"
          image="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          alt="order"
        
        /></Link>
        <CardContent  sx={{ cursor:'default' }} >
        <CardActions sx={{display:"flex",alignItems:'center' 
        
        
        }}>
          <Typography gutterBottom variant="h5" component="div">
        Order Online
          </Typography>
         
          </CardActions>
          <Typography variant="body2" color="text.secondary">
          Stay home and order to your doorstep
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

</Box>
<Box  sx={{flexGrow:1}}>

    <Card sx={{ maxWidth:360 ,  display: { xs: 'none', md: 'flex' }}}>
      <CardActionArea>
       <Link to='/food'> <CardMedia
          component="img"
          height="150"
          image="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          alt="order"
        
        /></Link>
        <CardContent  sx={{ cursor:'default' }} >
        <CardActions sx={{display:"flex",alignItems:'center' 
        
        
        }}>
          <Typography gutterBottom variant="h5" component="div">
        Food
          </Typography>
         
          </CardActions>
          <Typography variant="body2" color="text.secondary">
Get the best food you wanted
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Box>
   
<Box sx={{flexGrow:1}}>
    <Card sx={{ maxWidth:360 ,  display: { xs: 'none', md: 'flex' }}}>
      <CardActionArea>
      <Link to="/night"> <CardMedia
          component="img"
          height="150"
          image="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          alt="order"
        
        /></Link>
        <CardContent  sx={{ cursor:'default' }}  >
        <CardActions sx={{display:"flex",alignItems:'center' 
        
        
        }}>
          <Typography gutterBottom variant="h5" component="div">
        Nightlife and clubs
          </Typography>
         
          </CardActions>
          <Typography variant="body2" color="text.secondary">
     Explore city's top nightlife outlet's
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Box>
    </Box>
  );
  
}

export default OrderDining