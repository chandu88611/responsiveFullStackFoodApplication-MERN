import React, { useState } from 'react'
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import "../Header/Header.css"
import { useEffect } from 'react';




function FavorateFood() {
  const[food,setFood]=useState([{foodName:'Burger',image:"./images/abstract-gf4779081c_1920.jpg"},
  {foodName:'Sandwitch',image:"./images/bread-g5f08c0454_1920.jpg"},
  {foodName:'Biryani',image:"./images/dish-g20e7622d7_1920.jpg"},
  {foodName:'Thali',image:"./images/indian-food-g05f175b02_1920.jpg"},
  {foodName:'Parota',image:"./images/indian-food-gba97e5365_1920.jpg"},
  {foodName:'Roll',image:"./images/indian-food-gcaffd51f8_1920.jpg"},
  {foodName:'MasalaDosa',image:"./images/masala-dosa-g687fa5948_1920.jpg"},
  
  {foodName:'Pizza',image:"./images/pizza-g78671e5eb_1920.jpg"},
  {foodName:'Chicken',image:"./images/republic-of-korea-g8b864388c_1920.jpg"},
  
  {foodName:'Kabab',image:"./images/skewer-g741f39466_1920.jpg"},
  ])
//   const anime=()=>{  setInterval(()=>{

//  let arr=[ food[food.length - 1] ,food.splice(0,food.length-2)]
//     setFood(arr)
//   },2000)}
//  useEffect(()=>{
//   anime()
//  })
// const handleChange = (event: SelectChangeEvent) => {
//   (event.target.value);
// }
  return (
    <>
    <Typography variant="h6" fontSize="1fr">Your favorate foods</Typography>
    <Box  sx={{height:'21vh',padding:"1%" ,display:'flex'
    ,flexDirection:'row',overflow:'auto',  display: { xs: 'none', md: 'flex' } }}>
   {food.map((data,index)=>(
    <Box sx={{ key:'index',
display:'flex'
    ,flexDirection:'column',
    // justifyContent:'center',
    alignItems:'center'
    ,marginLeft:'1.5vw'
    }}>
    <Avatar
  alt="Remy Sharp"
  src={data.image}
  sx={{ width: 120, height: 120 }}
/>
    <Typography color="red" sx={{}}>{data.foodName}
        </Typography></Box>


   ))}
      </Box>
      
      
      <Box  sx={{padding:"1%" ,display:'flex'
    ,flexDirection:'row',overflow:'auto',  display: { xs: 'flex', md: 'none' } }}>
   {food.map((data,index)=>(
    <Box sx={{ key:'index',
display:'flex'
    ,flexDirection:'column',
    // justifyContent:'center',
    alignItems:'center'
    ,marginLeft:'1.5vw'
    }}>
    <Avatar
  alt="Remy Sharp"
  src={data.image}
  sx={{ width: 60, height: 60 }}
/>
    <Typography color="red" sx={{}}>{data.foodName}
        </Typography></Box>


   ))}
      </Box>
      
      
      
      
      
      </>
  )
}

export default FavorateFood
