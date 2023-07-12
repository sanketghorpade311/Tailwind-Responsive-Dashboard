import React, { useState } from 'react'
import Ham from '../components/Ham';
import { SignUp } from './SignUp';

const Navbar = () => {
    let Links =[
      {name:"Home",link:"/SignUp"},
      {name:"Login",link:"/"},
      {name:"About",link:"/"},
      {name:"Contact",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        </span>
        iDea - Too
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <Ham  name={open ? 'close':'menu'}></Ham>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        
      </ul>
      </div>
    </div>
  )
}

export default Navbar