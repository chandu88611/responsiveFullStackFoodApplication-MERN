import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Restaurent() {

  const [inputs ,setInputs]=useState(
    {
      restaurentName:"",
      location:"",
      pin:'',
      ownerName:'',
      email:'',
      phone:""
    }
  )
  const request= async ()=>{
    const res= await axios.post('http://localhost:5000/api/restaurents/post',{
      ownerName:inputs.ownerName,
      location:inputs.location,
      restaurentName:inputs.restaurentName,
        email:inputs.email,
        phone:inputs.phone,
        pin:inputs.pin
        // ,user:'631c387911912277e933510e'
      }).catch((err)=>console.log(err))
      const data= await res
      return data
  
    }

const handleChange=(e)=>{
  setInputs((prev)=>({
    ...prev,[e.target.name]:e.target.value
  }))
}

function handleSubmit(e){
  e.preventDefault()
request().then((data)=>console.log(data))
if(request().then((data)=>console.log(data))){
  window.location.reload()}
console.log(inputs)
}

  return (
    <div className='addblog' style={{marginTop:"6vw"}} >
   <form  onSubmit={handleSubmit} >
     <Box  borderRadius={10} boxShadow='10px 10px 20px #ccc' width='70%'
  margin={"auto"} display='flex' flexDirection={"column" }  alignItems={"center"} padding={2}

     
     >

    <Typography  variant={"h6"} 
 color='red'  
    
    >Partner With US</Typography>
    <Box>
    <InputLabel     sx={{   
    fontWeight:"bold" ,mt:"1",mb:"1",fontSize:"2fr"


    }}>Restaurent Details</InputLabel>
    <TextField   sx={{width:"100%"}}   variant="outlined"      

      value={inputs.restaurentName} name="restaurentName" onChange={handleChange}
      placeholder="Restaurent Name"
    />
    <Box  display="flex" flexDirection={"row"}><TextField   sx={{width:"100%"}}   variant="outlined"      

value={inputs.location} name="location" onChange={handleChange}
placeholder="location"
/><TextField   sx={{width:"100%"}}   variant="outlined"      

value={inputs.pin} name="pin" onChange={handleChange}
placeholder="pin"
/></Box>
    </Box>
    <Box>

    <InputLabel     sx={{   
    fontWeight:"bold" ,mt:"1",mb:"1",fontSize:"2fr"


    }}>Owner Details</InputLabel>
    <TextField   sx={{width:"100%"}}   variant="outlined"      

      value={inputs.ownerName} name="ownerName" onChange={handleChange}
      placeholder="Owner Name"
    />
    <Box  display="flex" flexDirection={"row"}><TextField   sx={{width:"100%"}}   variant="outlined"      

value={inputs.email} name="email" onChange={handleChange}
placeholder="Email"
/><TextField   sx={{width:"100%"}}   variant="outlined"      

value={inputs.phone} name="phone" onChange={handleChange}
placeholder="Phone"
/></Box>
    </Box>

  
     
    <Button variant='contained' sx={{mt:3}} type="submit" >Submit</Button>
     </Box>




   </form>



    </div>
  )
}

export default Restaurent