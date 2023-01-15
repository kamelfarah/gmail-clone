
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SidebarOption.css'

function SidebarOption({Icon,title,number, Selected,onClick}) {

  return (
    <div  onClick= {onClick} className={`sidebarOption ${ Selected && "sidebarOption--active"}`}> 
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption
