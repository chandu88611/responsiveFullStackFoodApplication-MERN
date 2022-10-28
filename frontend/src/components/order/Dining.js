import { Box } from '@mui/material'
import React from 'react'
import {Typography,CardActionArea,Card ,CardActions,CardContent,CardMedia} from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
function Dining() {


    
  return (
   <Box sx={{display:'grid',gridTemplateColumns:"30% 30% 30%" ,gridGap:'2%',mt:'3%',mb:'3%'}}>
    {
        ''.map((data)=>(
   <Box sx={{width:'80%'}}> 
   <Card sx={{ maxWidth: 310 ,  display: { xs: 'none', md: 'flex' }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={data.cover}
          alt="green iguana"
        />
        <CardContent  sx={{background:'rgb(243, 14, 14)',color:'white'}} >
        <CardActions sx={{display:"flex",alignItems:'center' 
        
        
        }}>
          <Typography gutterBottom variant="h5" component="div">
    {data.title}
          </Typography>
          {/* <Box   sx={{ maxWidth: 40 ,maxHeight:25,background:'green' ,color:'white', 
    borderRadius:'20%',padding:'.5%',display:"flex",alignItems:'center' 
          }}
       
          >4.5 <StarIcon  fontSize='smaller' sx={{color:'white'
        
        
    }}/> </Box> */}
          </CardActions>
         
        </CardContent>
      </CardActionArea>
    </Card>

   </Box>

        ))

    }
   </Box>
  )
}

export default Dining