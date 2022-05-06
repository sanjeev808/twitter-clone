import React from 'react'
import './Post.css'
import {Button , Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

export default function Post({ displayName ,userName,verified ,text ,image ,avatar }) {
  return (
    <div className='post'>
        <div className='post_avatar'>
            <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png '></Avatar>
        </div>
        <div className='post_body'>
            <div className="post_header">
                <div className="post_headertext">
                    <h3>
                        Sanjeev Maurya <span className='post_headerSpecial'>
                    < VerifiedUserIcon className='post_badge'/>
                       <span>@sanju808</span>
                        </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora minus nulla dolore ullam inventore numquam rem possimus quae aut eaque?</p>
                </div>
            </div>
            <img src='https://media.giphy.com/media/26gsr1DpFvpzXNtFm/giphy.gif' alt="this slowpoke moves" />
            <div className="post_footer">
                   <ChatBubbleOutlineOutlinedIcon/> 
                   <RepeatOutlinedIcon/> 
                   <FavoriteBorderOutlinedIcon/> 
                   <PublishOutlinedIcon/> 
            </div>
        </div>
    </div>
  )
}
