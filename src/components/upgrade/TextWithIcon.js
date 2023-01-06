import React from 'react'
import "./upgrade.css"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

function TextWithIcon({text,verify}) {
  return (
    <div className='text-head'>
      <span className='text-head-content'>{verify===true ? <DoneIcon style={{color: "green"}}/> : <CloseIcon style={{color: "red"}}/>}</span>
      <span className='text-head-content'>{text}</span>
    </div>
  )
}

export default TextWithIcon
