import React from 'react'
import { RiArrowDownSLine, RiNotification3Line } from 'react-icons/ri';
import avatar from '../data/avatar.jpg'

function Header() {
  return (
    <header className="h-[9vh] border-b p-5 border-gray-300 flex items-center justify-end "> 
    <nav className='flex items-center gap-x-4'>
     <button className='relative'>
        <RiNotification3Line  className='w-5 h-5 '/>  
        <span className='absolute -top-2 -right-1 bg-secondary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold'>
         2
        </span>
     </button>
     <button className='flex items-center gap-x-2'>
         <img src={avatar} alt="user" className='w-8 h-8 object-cover rounded-full'/>
         <span>jobson</span>
         <RiArrowDownSLine />
     </button>
     </nav>     
 </header>
  )
}

export default Header