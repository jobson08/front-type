import React from 'react'
import { RiArrowDownSLine, RiNotification3Line } from 'react-icons/ri';
import avatar from '../data/avatar.jpg'
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

function Header() {
  return (
    <header className="h-[9vh] border-b p-5 border-gray-300 flex items-center justify-end ">
      <nav className='flex items-center gap-x-4'>
        <Menu menuButton={
        <MenuButton className='relative hover:bg-gray2-bg p-1 rounded-lg transition-colors'>
          <RiNotification3Line className='w-5 h-5 ' />
          <span className='absolute -top-2 -right-1 bg-secondary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold'>
            3
          </span>
        </MenuButton> }>
        <MenuItem>mensagen 1</MenuItem>
          <MenuDivider />
          <MenuItem>mensagen 2</MenuItem>
          <MenuDivider />
          <MenuItem>mensagen 3</MenuItem>
        </Menu>
        
        <Menu 
        menuButton={
        <MenuButton className='flex items-center gap-x-2 hover:bg-gray2-bg py-2 px-4 rounded-lg transition-colors'>
          <img src={avatar} alt="user" className='w-8 h-8 object-cover rounded-full' />
          <span>jobson</span>
          <RiArrowDownSLine />
        </MenuButton> }>
        <MenuItem>Adiministrador</MenuItem>
          <MenuItem>Jobson</MenuItem>
          <MenuDivider />
          <MenuItem>Proficional</MenuItem>
        </Menu>
      </nav>
    </header>
  )
}

export default Header