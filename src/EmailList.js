import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material'
import React from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import GroupIcon from '@mui/icons-material/Group';
import SellIcon from '@mui/icons-material/Sell';
import EmailRow from './EmailRow';


function EmailList() {
  return (
   <div className="emailList">
     <div className='emailList__settings'>
        <div className="emailList__settingsLeft">
            
            <IconButton>
               <CheckBoxOutlineBlankIcon />
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RedoIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>

        </div>
        <div className="emailList__settingsRight">
            <IconButton>
               <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
            <IconButton>
                <KeyboardHideIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>

        </div>  
    </div>
    <div className="emailList__sections">
            <Section Icon={InboxIcon} title='Primary' color='#0B57D0' selected />
            <Section Icon={GroupIcon} title='Social' color='#0B57D0'/>
            <Section Icon={SellIcon} title='Promtion' color='#0B57D0'/>
   </div>
   <div className="emailList__List">
    <EmailRow
    title='Twitch'
    subject='Hey Fellow Streamer !! '
    description='this is a description'
    time='10pm'
    />   </div>
   </div>
  )
}

export default EmailList
