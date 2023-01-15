import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar,IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate =useNavigate()
  return (
    <div className="header">
        <div className="header__left">
            <IconButton>
               <MenuIcon />
            </IconButton>
           <img onClick={() => navigate('/')} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="" />
        </div>
        <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder='Search mail' />
                <ArrowDropDownIcon  className='header__inputCaret'/>
        </div>
        <div className="header__right">
            <IconButton>
               <SettingsIcon />
            </IconButton>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar />

        </div>
      
    </div>
  )
}

export default Header
