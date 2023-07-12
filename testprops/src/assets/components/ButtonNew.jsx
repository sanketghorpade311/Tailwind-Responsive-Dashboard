import React, { useState } from 'react'
import CrossMark from './CrossMark'

const ButtonNew = ({ onWidthChange }) => {
  const [open, setOpen] = useState(false);
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    onWidthChange(!open);
    console.log(open)
  };

  const handleRotate=()=>{
    setRotated(!rotated);
  }
  return (
    <button onClick={handleClick} className='fixed z-[0] top-16 left-0 bg-indigo-600 h-12 text-white p-2 rounded  hover:bg-indigo-400 duration-500'>
   <CrossMark></CrossMark>
    </button>
  )
}

export default ButtonNew