import React from 'react'
import { RiArrowDownSLine, RiChat3Line, RiLogoutCircleRLine, RiNotification3Line, RiSettings3Line, RiThumbUpLine } from 'react-icons/ri';
import avatar from '../data/image/avatar.jpg'
import avatar2 from '../data/image/avatar2.jpg'
import { Menu, MenuItem, MenuButton} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="h-[9vh] border-b p-5 border-gray4-bg flex items-center justify-end ">
      <nav className='flex items-center gap-x-4'>
         
          {/*menu notification */}
        <Menu menuButton={
        <MenuButton className='relative hover:bg-gray2-bg p-1 rounded-lg transition-colors'>
          <RiNotification3Line className='w-5 h-5 ' />
          <span className='absolute -top-2 -right-1 bg-secondary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold'>
            2
          </span>
        </MenuButton> }
          align="end"
          arrow
          transition
          arrowClassName="bg-gay2-bg"
          menuClassName="bg-gay2-bg p-4"
        >
          <h1 className="text-gray4-bg text-center font-bold">
            Notificação (2)
          </h1>
          <hr className="my-6 hover:bg-transparent" />
          
        <MenuItem className='flex flex-col text-sm'>
        <Link to="/"
              className="text-gray4-bg flex flex-1 items-center gap-4 py-2 px-4 hover:bg-gray2-bg transition-colors rounded-lg" >
              <img src={avatar2} alt="user2" className="w-8 h-8 object-cover rounded-full"/>
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Jorge Luis Trejo</span>{" "}
                  <span className="text-[13px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Otimo trabalho...
                </p>
              </div>
            </Link>
        </MenuItem>

        <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray4-bg flex flex-1 items-center gap-4 py-2 px-4 hover:bg-gray2-bg  transition-colors rounded-lg"
            >
              <RiThumbUpLine className="p-2 bg-blue-200 text-blue-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Novo like</span>{" "}
                  <span className="text-[13px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Despesas pendente...
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray4-bg flex flex-1 items-center gap-4 py-2 px-4 hover:bg-gray2-bg  transition-colors rounded-lg"
            >
              <RiChat3Line className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Novo comentario</span>{" "}
                  <span className="text-[13px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Otimo desenpenho...
                </p>
              </div>
            </Link>
          </MenuItem>
          
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link
              to="/"
              className="text-gray-600 text-[18px] hover:text-secondary transition-colors"
            >
              Todas as Notificaçoes
            </Link>
          </MenuItem>

        </Menu>

        {/*menu user */}
        <Menu 
        menuButton={
        <MenuButton className='flex items-center gap-x-2 hover:bg-gray2-bg py-2 px-4 rounded-lg transition-colors'>
          <img src={avatar} alt="user" className='w-8 h-8 object-cover rounded-full' />
          <span>jobson</span>
          <RiArrowDownSLine />
        </MenuButton> }
         align="end"
         arrow
         arrowClassName="bg-gray2-bg"
         transition
         menuClassName="bg-gray2-bg p-4"
        >
        <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/profile"
              className="rounded-lg transition-colors text-black hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img src={avatar} alt="user" className='w-8 h-8 object-cover rounded-full' />
              <div className="flex flex-col text-xs">
                <span className="text-sm">Jorge Luis Trejo</span>
                <span className="text-xs text-gray-700">jorge@gmail.com</span>
              </div>
            </Link>
          </MenuItem>

          <hr className="my-4 border-gray-700" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/settings"
              className="rounded-lg transition-colors text-black hover:bg-gray2-bg flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line /> Comfiguração
            </Link>
          </MenuItem>

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="rounded-lg transition-colors text-black hover:bg-gray2-bg flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine /> Encerrar seção
            </Link>
          </MenuItem>

        </Menu>

      </nav>
    </header>
  )
}

export default Header