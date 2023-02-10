import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { BsChevronRight, BsFillArrowDownCircleFill, BsFillArrowUpCircleFill, BsFillGridFill, BsFillHouseFill, BsPieChartFill, BsTools } from "react-icons/bs"
import { RiCloseLine, RiLogoutCircleRLine, RiMenuLine,} from "react-icons/ri";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)
  return (
    <>
    <div className={`xl:h-[100vh] fixed xl:static w-[70%] md:w-[40%] lg:w[30%] xl:w-auto h-full p-5 top-0 flex flex-col justify-between z-50 bg-gray4
    ${showMenu ? "left-0" : "left-full"} transition-all`} >
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
              <BsPieChartFill className='text-green-500 ' />Dashboard
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
            <Link to="/dashboard" className='flex items-center gap-2 py-2 px-4 rounded-lg text-slate-200 hover:bg-primary transition-colors'>
              <BsFillGridFill className='text-green-500 ' />Categorias
            </Link>
         </li>
         <li>
            <button onClick={() => setShowSubmenu(!showSubmenu)} className='flex items-center justify-between py-2 px-4 rounded-lg 
            text-slate-200 hover:bg-primary transition-colors'>
              <span className=' flex items-center gap-2'>
                <BsTools className='text-green-500 ' />Comfiguração
              </span>
              <BsChevronRight className={`${showSubmenu && "rotate-90"} transition-all `} />
            </button>
            <ul className={`my-2 ${!showSubmenu && "hidden"}`}>
              <li> 
                  <Link to="/#" className='py-2 px-4 border-l text-gray-100 rounded-lg hover:bg-primary transition-colors 
                  border-green-300 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-green-400 
                  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-green-500 '>
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
    <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full z-50'>
     {showMenu ? <RiCloseLine /> : <RiMenuLine /> } 
    </button>
    </>
  )
}

export default Sidebar