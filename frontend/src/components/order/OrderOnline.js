import { Box } from '@mui/material'
import React from 'react'
import {Typography,CardActionArea,Card ,CardActions,CardContent,CardMedia} from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
function OrderOnline() {


    const collectionList = [
        {
          id: 1,
          title: "Live Sports Screenings",
          cover:
            "https://b.zmtcdn.com/data/collections/7e296d5b75ca7b0f88e451b49e41ba99_1618208591.jpg",
          places: "12 Places",
        },
        {
          id: 2,
          title: "Newly Opened",
          cover:
            "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015789.jpg",
          places: "12 Places",
        },
        {
          id: 3,
          title: "Veggie Friendly",
          cover:
            "https://b.zmtcdn.com/data/collections/5d13e5bef6e5a44cfb7ea19fb915a9ba_1616407816.jpg",
          places: "23 Places",
        },
        {
          id: 4,
          title: "Trending This Week",
          cover:
            "https://b.zmtcdn.com/data/collections/83fed288b6d32c932b7d3a0034c4f947_1625650348.png",
          places: "30 Places",
        },
        {
          id: 5,
          title: "Best of Bengaluru",
          cover:
            "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg",
          places: "116 Places",
        },
        {
          id: 6,
          title: "Outdoor Seating",
          cover:
            "https://b.zmtcdn.com/data/collections/b1d388518012c80696487c08ca08e325_1582201041.jpg",
          places: "24 Places",
        },
        {
          id: 7,
          title: "Brilliant Biryanis",
          cover:
            "https://b.zmtcdn.com/data/collections/81dc179878a8d9e8b2ab03e4eaeab0df_1459434256.jpg",
          places: "16 Places",
        },
        {
          id: 8,
          title: "Best Pizza Places ",
          cover:
            "https://b.zmtcdn.com/data/collections/6398cf5475ba51e532003912a8151436_1616403332.jpg",
          places: "22 Places",
        },
      ];
  return (
   <Box sx={{display:'grid',gridTemplateColumns:"30% 30% 30%" ,gridGap:'2%',mt:'3%',mb:'3%',ml:"6%",mr:'-3%'}}>
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
        <CardContent  sx={{background:'rgb(243, 14, 14)',color:'white'}}>
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

export default OrderOnline