import React from 'react'
import './Tweetbox.css'
import {Button , Avatar} from '@material-ui/core'


export default function Tweetbox() {
  return (
    <div className='tweetbox'>
        <form action="">
            <div className='tweetbox_input'>
                <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'></Avatar>
                <input type="text" placeholder="What's happening ?"  />
            </div>
            <input type="text" className='tweetbox_imageInput'placeholder=' Optional : Enter image URl' />
            <Button className='tweetbox_tweetbutton'>Tweet</Button>
        </form>
    </div>
  )
}
