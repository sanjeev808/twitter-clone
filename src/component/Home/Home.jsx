import React from 'react'
import './Home.css'
import Feed from '../Feed/Feed'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'

export default function Home() {
  return (
    <div className='home'>
<Sidebar/>
<Feed/>
<Widgets/>
    </div>
  )
}
