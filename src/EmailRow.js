import React from 'react'
import './EmailRow.css'
import { IconButton } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {useNavigate } from 'react-router-dom';

function EmailRow({title,subject,description,id,time}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/mail")} className='emailRow'>

      <div className="emailRow__options">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarBorderIcon/>
        </IconButton>
        <IconButton>
          <LabelImportantIcon/>
        </IconButton>

      </div>

      <h3 className="emailRow__title">
          {title}
        </h3>

      <div className="emailRow__message">
        <h4>
          {subject} {" "}
          <span className="emailRow__description">
           -{" "}{description}
          </span>
        </h4>

      </div>

      <p className="emailRow__time">
          {time}
      </p>


      
    </div>
  )
}

export default EmailRow
