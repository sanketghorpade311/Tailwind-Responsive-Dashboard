import React, { useState } from 'react'
import './App.css'
import Navbar from './assets/pages/Navbar'
import BodyMain from './assets/pages/BodyMain'
import Sidebar from './assets/pages/Sidebar'
import { SignUp } from './assets/pages/SignUp'



function App() {
  const [width, setWidth] = useState(true);

  const handleWidthChange = (newWidth) => {
    setWidth(newWidth);
  };

  return (
    <div className='flex flex-col h-screen'>
      <div className='z-30'><Navbar></Navbar></div>

      <div className='flex flex-row mt-18' >
        <div className={` ${width ? "w-1/6" : "w-10 "} duration-300 z-20`}><Sidebar onWidthChange={handleWidthChange}></Sidebar></div>
        <div className={` ${width ? "w-5/6" : "w-full"} duration-300 z-20`}><BodyMain></BodyMain></div>
      </div>
      

    </div>
  )
}

export default App
