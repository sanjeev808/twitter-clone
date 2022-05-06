import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Bookmarks from './component/Bookmarks/Bookmarks'
import Explore from './component/Explore/Explore'
import Home from './component/Home/Home'
import List from './component/List/List'
import Messages from './component/Messages/Messages'
import Notification from './component/Notification/Notification'
import Profile from './component/Profile/Profile'
// import Sidebar from './component/Sidebar/Sidebar'
import './App.css';
import Login from './Login/Login'

          
export default function Routing() {
  return (
<>
<BrowserRouter>
<div className=''>

<Routes>
  <Route path='/' element={<Login/>}/>
      {/* <Sidebar/> */}
      <Route path="/home" element={ <Home/> } />
      <Route path="/explore" element={ <Explore/> } />
      <Route path="/notification" element={ <Notification/> } />
      <Route path="/messages" element={ <Messages/> } />
      <Route path="/bookmarks" element={ <Bookmarks/> } />
      <Route path="/list" element={ <List/> } />
      <Route path="/profile" element={ <Profile/> } />
</Routes>
</div>
</BrowserRouter>
</>
  )
}
