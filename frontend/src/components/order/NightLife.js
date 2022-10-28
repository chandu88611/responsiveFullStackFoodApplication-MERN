import { Box } from '@mui/material'
import React from 'react'
import {Typography,CardActionArea,Card ,CardActions,CardContent,CardMedia} from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
function NightLife() {


    const collectionList = [
        {
          id: 1,
          title: "Microbreweries",
          cover:
            "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
          places: "29 Places",
        },
        {
          id: 2,
          title: "Best Bars & Pubs",
          cover:
            "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
          places: "22 Places",
        },
        {
          id: 3,
          title: "Artisan Cocktails",
          cover:
            "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
          places: "20 Places",
        },
        {
          id: 4,
          title: "Happy Hours",
          cover:
            "https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg",
          places: "12 Places",
        },
        {
          id: 5,
          title: "Beer in a Bar",
          cover:
            "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg",
          places: "5 Places",
        },
        {
          id: 6,
          title: "Bar-gain",
          cover:
            "https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg",
          places: "9 Places",
        },
      ];
  return (
   <Box sx={{display:'grid',gridTemplateColumns:"30% 30% 30%" ,gridGap:'2%',mt:'3%',mb:'3%'}}>
    {
        collectionList.map((data)=>(
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

export default NightLife