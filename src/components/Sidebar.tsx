import React from 'react'
import { Link } from 'react-router-dom'
import { BsChevronRight, BsFillArrowDownCircleFill, BsFillArrowUpCircleFill, BsFillHouseFill, BsGraphUp, BsTools } from "react-icons/bs"
import { RiLogoutCircleRLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className='xl:h-[100vh] fixed xl:static w-full h-full -left-full p-5 top-0 flex flex-col justify-between bg-gray4' >
      <div>
        <h1 className='text-center text-2xl font-bol text-white mb-10'>
          ADMIN<span className='text-green-500 text-4xl'>@</span>
        </h1>
        <ul>
          <li>
            <Link to="/home" className='flex items-center gap-2 py-2 px-4 rounded-lg text-slate-200 hover:bg-primary transition-colors'>
              <BsFillHouseFill className='text-green-500 ' />Home
            </Link>
          </li>
         <li>
            <Link to="/dashboard" className='flex items-center gap-2 py-2 px-4 rounded-lg text-slate-200 hover:bg-primary transition-colors'>
              <BsGraphUp className='text-green-500 ' />Dashboard
            </Link>
         </li>
         <li>
            <Link to="/dashboard" className='flex items-center gap-2 py-2 px-4 rounded-lg text-slate-200 hover:bg-primary transition-colors'>
              <BsFillArrowUpCircleFill className='text-green-500 ' />Receita
            </Link>
         </li>
         <li>
            <Link to="/dashboard" className='flex items-center gap-2 py-2 px-4 rounded-lg text-slate-200 hover:bg-primary transition-colors'>
              <BsFillArrowDownCircleFill className='text-green-500 ' />Despesas
            </Link>
         </li>
         <li>
            <button className='flex items-center justify-between py-2 px-4 rounded-lg text-slate-200 hover:bg-primary transition-colors'>
              <span className=' flex items-center gap-2'>
                <BsTools className='text-green-500 ' />Comfiguração
              </span>
              <BsChevronRight />
            </button>
            <ul className='my-2'>
              <li> 
                  <Link to="/#" className='py-2 px-4 border-l text-gray-100 rounded-lg hover:bg-primary transition-colors border-green-300 ml-6 block
                  relative before:w-3 before:h-3 before:absolute before:bg-green-400 before:rounded-full 
                  before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-green-500 '>
                    Perfil
                  </Link>
              </li>
              <li> 
                  <Link to="/#" className='py-2 px-4 border-l text-gray-400 rounded-lg hover:bg-primary transition-colors border-green-300 ml-6 block
                  relative before:w-3 before:h-3 before:absolute before:bg-gray3 before:rounded-full 
                  before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-gray3 '>
                    Usuarios
                  </Link>
              </li>
            </ul>
           </li>
        </ul>
      </div>
      <nav>
      <Link to="/dashboard" className='flex items-center gap-2 py-2 px-4 rounded-lg text-slate-200 hover:bg-primary transition-colors'>
            <RiLogoutCircleRLine className='text-green-500 ' />Sair
          </Link>
      </nav>
    </div>
  )
}

export default Sidebar