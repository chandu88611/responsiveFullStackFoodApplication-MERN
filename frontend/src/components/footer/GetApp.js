import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import TextField from '@mui/material/TextField';

function GetApp() {
    const [state,setState]=useState(true)
    
    const [state1,setState1]=useState(null)
  return (
   <Box sx={{background:'rgb(250, 233, 233)',width:'100%',
   display: { xs: 'none', md: 'flex' },
   height:'60vh',marginTop:'3vw',flexDirection:'row'}}>
  

  <Box sx={{width:'40%',height:'50vh',marginTop:'3vw'}}>
<img src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png" style={{width:'58%',float:'right'}}  alt="" />
</Box>
 <Box sx={{width:'60%',height:'55vh',}}>
<Typography variant='h4' >Get The App</Typography>
<Typography variant="body1" >We will send you a link, open it on your phone to download the app
          </Typography>
      <Box sx={{flexDirection:'row' , ml: "3vw", mt: "3vw",display:'flex' ,width:'30%'}}  > 
      <Box sx={{flexGrow:1 ,display:'flex',alignItems:'center'}}>{state?
      <RadioButtonCheckedIcon  sx={{color:'red'}}  onClick={()=>{setState(null)
      setState1(null)
      }}/>:
      <RadioButtonUncheckedIcon onClick={()=>{setState(true)
        setState1(null)
      }} />}  Email  </Box>  
      <Box sx={{flexGrow:1,display:'flex',alignItems:'center'}} >{state1?
      <RadioButtonCheckedIcon sx={{color:'red'}} onClick={()=>{setState1(null)
      setState(null)
      }}/>:
      <RadioButtonUncheckedIcon onClick={()=>{setState1(true)
  setState(null)
      }}/>}  Phone </Box>   
      </Box>   
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
 
        <div style={{display:'flex',alignItems:'center'}}>
        <TextField
          error
          id="outlined-error-helper-text"
          label={state1?"phone":"Email"}
          placeholder={state1?"phone":"Email"}
        //   helperText="Incorrect entry."
        
        />
        <Button variant="contained" sx={{background:'red',height:'4.3vw'}}>Share App link</Button>
    </div>
  
     
    </Box>
</Box>
   </Box>
  )
}

export default GetApp