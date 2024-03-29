import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'
import React from 'react'
import { RiDeleteBin7Fill, RiEdit2Fill, RiSearch2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
      {/* Form lançamento*/}
      <div className=' w-30 bg-secondary2-bg p-4 rounded-xl mb-5'>
        <h1 className='text-xl text-black'>Cadastrar conta</h1>
        <hr className='my-4 border-gree1-bg' />
        <form>
          {/*Entrada de informação */}
          <div className=' gap-y-2 md:flex-row md:items-center mb-4'>
            <div className='w-full md:w-1/4'>
              <p>
                Nome
                <span className='text-red-500'>*</span>
              </p>
            </div>
            <div className='flex-1 flex items-center gap-4'>
              <div className='w-full'>
                <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                  placeholder='Nome' />
              </div>
            </div>

            <div className=' md:flex-row md:items-center gap-y-2 mb-4'>
              <div className='w-full md:w-1/4'>
                <p>
                  R$ Saldo Inicial
                  <span className='text-red-500'>*</span>
                </p>
              </div>
              <div className='flex-1'>
                <input type="number" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                  placeholder='R$' />
              </div>
            </div>
          </div>
        </form>
        <hr className='my-4 border-gree1-bg' />
        <div className='flex justify-end'>
          <button className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'>
            Salvar
          </button>
        </div>
      </div>

      <div className="bg-secondary2-bg p-4 rounded-xl mb-2 ">
        <div>

          {/* search*/}
          <form >
            <div className='flex justify-end items-center justify-betwee gap-10'>
              <h1 className="text-2xl text-blue tex-bold ">Contas</h1>
              <div className="relative m-2">
                <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
                <input
                  type="text"
                  className="bg-gray-200 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-40"
                  placeholder="Pequisar"
                />
              </div>
            </div>
          </form>
          <hr className="border border-dashed border-gray-500/50 my-2" />

          <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 mb-5 p-4">
            <h5>ID</h5>
            <h5>Nome</h5>
            <h5>Valor</h5>
            <h5>Açoes</h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center mb-2 bg-blue-200 p-2 rounded-xl">
            <div>
              <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
              <span>1</span>
            </div>
            <div>
              <h5 className="md:hidden text-gray-600 font-bold mb-2">Nome</h5>
              <p>Carteira</p>
            </div>
            <div>
              <h5 className="md:hidden text-gray-600 font-bold mb-2">Valor</h5>
              <span className="py-1 px-2 rounded-lg">
                300,00
              </span>
            </div>

            <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Ações</h5>
            {/* Menu Editar Deletar*/}
            <div>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 bg-secondary2-bg p-2 rounded-lg transition-colors">
                    Açoes
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-gray-300"
                transition
                menuClassName="bg-gray-300 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-green-700 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
                  >
                    <RiEdit2Fill />
                    Editar
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-red-700 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
                  >
                    <RiDeleteBin7Fill />
                    Excluir
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Account