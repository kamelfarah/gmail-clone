import React from 'react'
import './Sidebar.css'
import { Button, IconButton } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SidebarOption from './SidebarOption';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {
  const dispatch = useDispatch();
  
  const navigate =useNavigate();
  return (
    <div className='sidebar'>
        <Button  onClick={() => dispatch(openSendMessage())} className='sidebar__compose' startIcon={<DriveFileRenameOutlineIcon fontSize='large'/>}> Compose</Button> 
         <div className="siderbar__option">
            <SidebarOption title='Inbox' Icon ={InboxIcon} number={54} Selected={true} onClick={() => navigate('/')}/>
            <SidebarOption title='Starred' Icon ={StarBorderIcon}  number={20}/>
            <SidebarOption title='Snoozed' Icon ={AccessTimeIcon} number={20}/>
            <SidebarOption title='Important' Icon ={LabelImportantIcon} number={20}/>
            <SidebarOption title='Sent' Icon ={SendIcon} number={20}/>
            <SidebarOption title='Drafts' Icon ={NoteIcon} number={20}/>
            <SidebarOption title='More' Icon ={ExpandMoreIcon} number={20}/>
         </div>
         <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
                <IconButton>
                 <PersonIcon/>
                </IconButton>
                <IconButton>
                <DuoIcon />
                </IconButton>
                <IconButton>
                 <PhoneIcon />
                </IconButton>
          </div>
         </div>
    </div>
  )
}

export default Sidebar
