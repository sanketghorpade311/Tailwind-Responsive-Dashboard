import React from 'react'
import ButtonNew from '../components/ButtonNew'
import CrossMark from '../components/CrossMark'


const Sidebar = ({onWidthChange}) => {

  return (
    <div className=' bg-sky-500 h-screen flex flex-col items-center p-2'>
      <div className='w-full'><ButtonNew onWidthChange={onWidthChange}><CrossMark></CrossMark></ButtonNew></div>
        

    </div>
  )
}

export default Sidebar