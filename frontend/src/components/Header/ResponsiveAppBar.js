import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import "./Header.css"
import axios from "axios"
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Food from '../Food/Food';
let user=false;

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [cities,setCities]=useState([])
  const [food,setFood]=useState('')
  const[menu,setMenu]=useState(null)
  const navigate=useNavigate()
 const getCities=async ()=>{
 
  const res=await axios.get('https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json')
    
  setCities(res.data)

}
useEffect(()=>{
  getCities()
},[])
useEffect(()=>{
 
  if(menu){
    navigate('/food')
  }
},[menu])
  return (
    <>
    <AppBar position="static" sx={{backgroundColor:"red" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           CFoods
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , }}>
          <FormControl >
        <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:'white'}}>
          location
        </InputLabel>
        <select
          style={{width:'8vw'
          ,height:'4vh',border:'none',background:'none',focus:{border:'none'}
          }}
        >{cities.map((data)=>(
          <option value={data.name}>{data.name}</option>))
       }
        </select>
      </FormControl>
            <Box sx={{display:'flex',flexDirection:'row', border: '1px solid ',width:'40%' 
            ,marginLeft:'5%',background:'white',borderRadius:'10rem',
            alignItems:"center"
            }} >

            <SearchIcon sx={{color:"blue"}}/> <input type="text" className="input"  placeholder='Search Food..' value={menu} onChange={(e)=>setMenu(e.target.value)}  /></Box> 

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton >
                <div onClick={()=>anchorElUser?setAnchorElUser(null):setAnchorElUser(true)} sx={{ p: 0 }}> <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  /></div>
              </IconButton>
            </Tooltip>
           {anchorElUser?<Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={''}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
    
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(true)}
             onClose={()=>setAnchorElUser(null)}
            >
               <MenuItem  onClick={''}>
                  <Button textAlign="center">Profile</Button>
                </MenuItem>
                <MenuItem  onClick={''}>
                  <Button textAlign="center">  <Link to='/AddRes'  underline="none" >Add Restaurent</Link></Button>
                </MenuItem>
                
               <MenuItem  onClick={''}>
                  <Button textAlign="center">  <Link to='/login'  underline="none" >{user?'Logout':'Login'}</Link></Button>
                </MenuItem>
                <MenuItem  onClick={''}>
                  <Button textAlign="center">  <Link to='/'  underline="none" >MainPage</Link></Button>
                </MenuItem>
            
            </Menu>:""}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    





    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } ,width:'40%',marginLeft:"1vw",
    alignItems:"center"}}>
          <FormControl >
        <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:'white'}}>
          location
        </InputLabel>
        <select
          style={{width:'12vw'
          ,height:'4vh',border:'none',background:'none',focus:{border:'none'}
          }}
        >{cities.map((data)=>(
          <option value={data.name}>{data.name}</option>))
       }
        </select>
      </FormControl>
            <Box sx={{display:'flex',flexDirection:'row',width:'40%' ,height:'100%'
            ,marginLeft:'5%',background:'none',borderRadius:'10rem',
            alignItems:"center"
            }} >

            <SearchIcon sx={{color:"blue"}}/> <input type="text" className="input"
            style={{width:"40vw" ,color:'red'}} value={menu} onChange={(e)=>setMenu(e.target.value)}
              placeholder='Search Food..'/></Box> 


              <Box  sx={{display: { xs: 'none', md: 'none'}}}>

                <Food  menu={menu}/>
              </Box>
          </Box>
    </>
  );
}
export default ResponsiveAppBar;
