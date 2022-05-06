import React from 'react'
import './Sidebar.css'
//icons importing from material ui start
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SidebarOptions from '../Sidebar/SidebarOption/SidebarOptions.jsx';
//icons importing from material ui end

import {Button} from '@material-ui/core'
import { NavLink } from 'react-router-dom';



export default function Sidebar() {
  return (
    <div className='sidebar'>

        {/* twitter icon */}
        <TwitterIcon className='sidebar_twitterIcon'/>
        {/* sidebarOption  */}
        <NavLink to="/home " className='text-decoration-none'>
        <SidebarOptions active Icons={HomeIcon} text="Home"/>
        </NavLink>
        <NavLink to='/explore' className='text-decoration-none'>
        <SidebarOptions Icons={SearchIcon} text="Explore"/>
        </NavLink>
        <NavLink to='/notification' className='text-decoration-none'>
        <SidebarOptions Icons={NotificationsIcon} text="Notification"/>
        </NavLink>
        <NavLink to='/messages' className='text-decoration-none'>
        <SidebarOptions Icons={MailOutlineIcon} text="Messages"/>
        </NavLink>
        <NavLink to='bookmarks' className='text-decoration-none'>
        <SidebarOptions Icons={BookmarkBorderIcon} text="Bookmarks"/>
        </NavLink>
        <NavLink to='/list' className='text-decoration-none'>
        <SidebarOptions Icons={ListAltIcon} text="List"/>
        </NavLink>
        <NavLink to='profile' className='text-decoration-none'>
        <SidebarOptions Icons={PersonOutlinedIcon} text="Profile"/>
        </NavLink>
        <NavLink to='more' className='text-decoration-none'> 
        <SidebarOptions Icons={MoreHorizOutlinedIcon} text="More"/>
        </NavLink>
        
        <Button variant='outlined' className='sidebar-tweet' fullWidth>Tweet</Button>
       

       

    </div>
  )
}
