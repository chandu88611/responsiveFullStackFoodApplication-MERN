import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import cheerio from 'cheerio'
import { Box ,Button, Typography} from '@mui/material'
import axios from 'axios'
import Cart from '../order/Cart'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom'
function Food({menu}) {
    const[food,setFood]=useState([{name:'chandan'}])
    
    const[orderedFood,setOrderedFood]=useState([])
   const [s ,setS ]=useState(true)
 //`https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`




    const request=async()=>{
        const res=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        const data=await res.data
      
setFood(data.meals)
    }

  //   useEffect(()=>{
  //     if(food.length<1){
  //       setS(false)
  //     }
  // },[menu])
    useEffect(()=>{
        request()
     
    },[])
  return (
   <Box sx={{display:'grid',gridTemplateColumns:"30% 30% 30%" ,rowGap:'5%',mt:'3%',mb:'3%',ml:"6%",mr:'-3%'
   ,width:'90%',height:'35vh'
   }}>

{
 s? food.map((data)=>(
<Box  sx={{width:'90%',ml:'13%' ,height:"24vh",display:'flex',flexDirection:'row',boxShadow:'-3px 3px 10px'
,borderRadius:'1vw'
}}>
<Box sx={{width:'46%' }}> <ImageListItem>
<img
            src={data.strMealThumb}
            alt={data.strMeal}
     style={{width:'100%',height:'24vh',borderRadius:'1vw'}}
         
          />
          <ImageListItemBar
            title={data.strMeal}
            subtitle={data.strCategory
}
        
   /> </ImageListItem>




</Box>
<Box   sx={{display:'flex',flexDirection:'column',width:'54%',alignItems:'center' ,
justifyContent:'center'
 }}>
<Button  variant="contained" sx={{background:'red',height:'4vw',width:'90%',mb:"3%"}} >AddToCart</Button>

<Button   variant="contained" sx={{background:'red',height:'4vw',width:'90%'}} 

onClick={()=>{setOrderedFood(data)
console.log(orderedFood)}
} >  <Link to='/ordr' 
>Order</Link></Button>
</Box>

</Box>

  )):<Box>

  <Typography  color='red'> Food not found</Typography>

  </Box>
}

<Box sx={{display:{xs:'none',md:'none'}}}>  <Cart orderedFood={orderedFood}/></Box>
   </Box>
  )
}

export default Food