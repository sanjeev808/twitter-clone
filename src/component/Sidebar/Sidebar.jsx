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



export default function Sidebar() {
  return (
    <div className='sidebar'>

        {/* twitter icon */}
        <TwitterIcon className='sidebar_twitterIcon'/>
        {/* sidebarOption  */}
        <SidebarOptions active Icons={HomeIcon} text="Home"/>
        <SidebarOptions Icons={SearchIcon} text="Explore"/>
        <SidebarOptions Icons={NotificationsIcon} text="Notification"/>
        <SidebarOptions Icons={MailOutlineIcon} text="Messages"/>
        <SidebarOptions Icons={BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOptions Icons={ListAltIcon} text="List"/>
        <SidebarOptions Icons={PersonOutlinedIcon} text="Profile"/>
        <SidebarOptions Icons={MoreHorizOutlinedIcon} text="More"/>
        
        <Button variant='outlined' className='sidebar-tweet' fullWidth>Tweet</Button>
       

       

    </div>
  )
}
