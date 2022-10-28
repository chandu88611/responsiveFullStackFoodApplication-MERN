import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function Cart({ orderedFood }) {

  const [value, setValue] = useState(false)
  
  const [update, setUpdate] = useState(false)
  const [del, setDel] = useState(false)
  
  const [id, setId] = useState(false)
  const [order, setOrder] = useState([])


  const [food, setFood] = useState({ name: 'corba', img: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg' })

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    address: "",
    landMark:'',
    city:'',
    country:'',
    pincode:'',

  })
  const handleChange=(e)=>{
    setInputs((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }));
  } 
const request= async()=>{
  
  const res=await axios.post('http://localhost:5000/api/orders/order',{
    firstName:inputs.firstName,
      lastName:inputs.lastName,
      address:inputs.address,
      
        landMark:inputs.landMark,
      city:inputs.city,
      country:inputs.country,
      pincode:inputs.pincode,
      foodName:food.name
    }).catch((err)=>console.log(err))
    console.warn(res)
    return res
}

const Edit=async (id)=>{
  

  const res= await axios.put(`http://localhost:5000/api/orders/${id}`,{
    firstName:inputs.firstName,
    lastName:inputs.lastName,
    address:inputs.address,
    
      landMark:inputs.landMark,
    city:inputs.city,
    country:inputs.country,
    pincode:inputs.pincode,
    foodName:food.name
    }).catch((err)=>console.log(err))
    const data= await res
    if(data){
      window.location.reload()
    }
    return data

}

const get= async()=>{
  const res= await axios.get('http://localhost:5000/api/orders')
    setOrder( await res.data)
}

const remove=async(id)=>{
 await axios.delete(`http://localhost:5000/api/orders/${id}`)
 
    window.location.reload()
   
}
const handleOrder=()=>{
  
  request().then(data=>console.log(data))
    window.location.reload()
  

}
  const handleSubmit=(e)=>{
    e.preventDefault()
      console.log(inputs)
  }

  useEffect(() => {
    console.warn(orderedFood)
    get()
    console.warn(order)
  }, [])
  return (
    
    <Box sx={{ display: 'flex', flexDirection: 'row', padding: '2%', height: '90vh' }}>
        <Box  sx={{
        width: '65%', borderRadius: '1vw', boxShadow: '2px 2px 5px', height: '80vh', display: 'flex',
        flexDirection: 'column'
      }} className='color'>
      <form onSubmit={handleSubmit} stye={{display:'flex'}}>
      <Box >
        <Box sx={{
          width: '100%', borderRadius: '.5vw', boxShadow: '0px 1px 1px', height: '5vh', display: 'flex'
          , alignItems: 'center', justifyContent: 'center', mb: '4%'
        }}>
          <h4>Shipping Address</h4></Box>
        <Box sx={{
          width: '100%', borderRadius: '1vw'
          , height: '10vh', display: 'flex', flexDirection: 'row'
          , justifyContent: 'center'
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: '4vw' }}>
            {/* <Typography variant="body" fontWeight='bold' >First Name</Typography> */}
            <TextField id="standard-basic" label="First Name" variant="standard"  value={inputs.firstName} name="firstName" onChange={handleChange}/>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* <Typography variant="body" fontWeight='bold' >First Name</Typography> */}
            <TextField id="standard-basic" label="Last Name" variant="standard"   value={inputs.lastName} name="lastName" onChange={handleChange} />
          </Box>
        </Box>
        <Box sx={{
          width: '100%', borderRadius: '1vw', height: '10vh',
          display: 'flex', flexDirection: 'row', justifyContent: 'center'
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: '4vw' }}>
            <Typography variant="body" fontWeight='bold' >Address</Typography>

            <input type="text" className='input' style={{ width: '25vw', background: 'white', 
            borderRadius: '.5vw' }}
            name="address" onChange={handleChange} value={inputs.address}
             />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: '4vw' }}>
            <Typography variant="body2" fontWeight='bold' >Landmark</Typography>
            <input type="text" className='input' style={{
              background: 'white', width: '15vw'
              , borderRadius: '.5vw'
            }}       name="landMark" onChange={handleChange}  value={inputs.landMark}/>
          </Box>

        </Box>
        <Box sx={{
          width: '100%', borderRadius: '1vw',
          display: 'flex', flexDirection: 'row', justifyContent: 'center',
          height: '10vh'
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: '4vw' }}>
            <Typography variant="body" fontWeight='bold' >City</Typography>

            <input type="text" className='input'
             style={{ width: '20vw', background: 'white', borderRadius: '.5vw' }} 
             name="city" onChange={handleChange}  value={inputs.city}
             />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: '4vw' }}>
            <Typography variant="body2" fontWeight='bold' >Country</Typography>
            <input type="text" className='input' style={{
              width: '20vw', background: 'white'
              , borderRadius: '.5vw'  
            }} value={inputs.country}
            name="country" onChange={handleChange}

            />
          </Box>

        </Box>
        <Box sx={{
          width: '100%', borderRadius: '1vw',
          height: '10vh', display: 'flex', flexDirection: 'row', justifyContent: 'center'
        }}>

          <Box sx={{ display: 'flex', flexDirection: 'column', mr: '4vw' }}>
            <Typography variant="body2" fontWeight='bold' >Pincode</Typography>
            <input type="text" className='input' style={{
              width: '9vw', background: 'white'
              , borderRadius: '.5vw'
            }}  name="pincode" onChange={handleChange}   value={inputs.pincode}/> 
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {update?
            <Button variant="contained" sx={{ background: 'black', mr: '2vw' }}
                 type='submit'
            onClick={() => Edit(id)}>update</Button>
          
          :<Button variant="contained" sx={{ background: 'black', mr: '2vw' }}
                 type='submit'
            onClick={() => setValue(true) }>



Save and Continue  </Button>}
          {update?<Button variant="contained"  onClick={()=>setUpdate(false)}>cancel</Button>
          
          :<Button variant="contained" sx={{ background: 'none', mr: '2vw', color: 'red' }}
            onClick={() => setInputs({
            
              firstName: "",
    lastName: "",
    address: "",
    landMark:'',
    city:'',
    country:'',
    pincode:''

            })
            }
          
          >Clear</Button>}
        </Box>

      </Box>
</form>
</Box>

      <Box sx={{
        width: '35%', borderRadius: '1vw',
        background: 'yellow', display: 'flex', flexDirection: 'column', boxShadow: '2px 2px 5px',
        height: '80vh'
      }}>

        <Box sx={{
          width: '100%', borderRadius: '.5vw', boxShadow: '0px 1px 1px', height: '5vh', display: 'flex'
          , alignItems: 'center', justifyContent: 'center', mb: '4%'
        }}>
          <h4>Your Orders</h4></Box>


        <Box sx={{
          width: '100%', borderRadius: '.5vw', boxShadow: '0px 1px 1px', height: '80vh', display: 'flex'
          , flexDirection: 'column'
          , mb: '1%', overflow: 'auto'
        }} >


          {order.map((data)=>(

            <Box sx={{
            width: '100%', borderRadius: '.5vw', boxShadow: '0px 1px 1px', height: '16vh'
            , mb: '1%', background: 'white' ,display:'flex',flexDirection:'row'
          }} >
            <Box  sx={{ display:'flex',alignItems:'center',color:'red'}}> <h5> {data.foodName} </h5>  </Box>
            <hr />
            <Box> {data.firstName} {data.lastName}<h5  style={{marginBottom:"-3%",marginTop:'-3%'}}>Address</h5>
            {data.landMark} <br />
            {data.address},<br />
            {data.city} ,  {data.country}-  {data.pincode}
              </Box>
            <hr />
            <Box sx={{ display:'flex',alignItems:'center',color:'red'}} > <DeleteIcon  onClick={()=>{setId(data._id)
            setDel(true)
            }}/> </Box>
            <hr />
            <Box sx={{ display:'flex',alignItems:'center',justifyContent:'center' ,width:'10%',
            color:'blue'
            }}> <EditIcon  onClick={()=>{setUpdate(true)
            setId(data._id)
            }} /> </Box>
          </Box>





          ))}
         

        </Box>


      </Box>
{/* order box */}
      {value ? <Box sx={{
        width: '50%', background: 'red', height: '25vh', position: 'absolute', marginLeft: '5%', opacity: '0.99'
        , marginTop: '10%', display: 'flex'
      }}>
        <Box sx={{ width: '30%' }}>

          <ImageListItem>
            <img
              src={food.img}
              alt={food.name}
              style={{ width: '100%', height: '24vh', borderRadius: '1vw', background: 'white' }}

            />
            <ImageListItemBar
              title={food.name}
              subtitle={'data'.strCategory
              }

            /> </ImageListItem>
        </Box>
        <Box sx={{ width: '40%', display: 'flex', flexDirection: 'row', ml: '3%', }}>
          <Typography>Address</Typography><br/>
          {inputs.firstName}{inputs.lastName} <br />
            {inputs.landMark}<br />
             {inputs.address}<br />
             {inputs.city}<br />
             {inputs.country }-{inputs.pincode}

        </Box>
        <Box sx={{ width: '40%', display: 'flex', ml: '3%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >

          <Button variant="contained"  onClick={()=>{
            handleOrder()
          }}>Order</Button>

          <Button variant="contained" sx={{ mt: "1%" }}
            onClick={() => setValue(false)}
          >Cancel</Button>
        </Box>

      </Box> : ""}

{/* delete box */}
        {del?<Box  sx={{ width:'40%' ,height:'30%',  background:'blue',
         display:{xs:'flex',md:'flex'},marginLeft:'30vw',position:'absolute',
         borderRadius:'2vw',boxShadow:'-2px 2px 3px',marginTop:'15vh',
         justifyContent:'center',alignItems:'center',flexDirection:'column',color:'white'

         }}> 
           Are sure want to delete the order
           <Button variant='contained'  sx={{background:'red',color:'white'}}   onClick={()=>remove(id)}>Delete</Button>
           <Button variant='contained'   sx={{background:'white',color:'green',mt:'1vw'
           
           ,hoover:{background:'green'}
           
           }}   onClick={()=>setDel(false)} >cancel</Button>
           

        
        </Box>:''}


    </Box>
  )
}

export default Cart