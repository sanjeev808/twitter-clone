import React from 'react'
import './SidebarOptions.css'

export default function SidebarOptions({active ,text ,Icons}) {
  return (
    <div className={`sidebarOption ${active &&  `sidebarOption--active` }`}>
    <Icons/>
    <h2>{text}</h2>
    </div>
  )
}
