import { Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar'
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div className='sticky top-0 px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between items-center'>
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li className='logo font-semibold text-gray-300 text-2xl'>
                FoodOra
            </li>
        </div>

        <div className='flex items-center space-x-2 lg:space-x-10'>
            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
            <div>
                {false? <Avatar sx={{bgcolor:"white",color:"#e91e63"}}>P</Avatar>:<IconButton onClick={()=>navigate("/account/login")}><PersonIcon/></IconButton>}
            </div>
            <div className=''>
                <IconButton>
                    <Badge color="secondary" badgeContent={3}>
                        <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                    </Badge>
                    
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Navbar
