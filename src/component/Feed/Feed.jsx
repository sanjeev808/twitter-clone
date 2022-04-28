import React from 'react'
import './Feed.css'
import Post from './Post/Post'
import Tweetbox from './Tweetbox/Tweetbox'

export default function Feed() {
  return (
    <div className='feed'>
      {/* header */}
      <div className='feed_header'>
      <h2>home</h2>

      </div>
      {/* tweetbox  */}

        <Tweetbox/>

      {/* post */}
      <Post/>
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}

         </div>
  )
}
