
import React from 'react'
import { Link } from "react-router-dom";
import {  RiDeleteBin7Fill, RiEdit2Fill } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { formatDate, convertAmericanFromBrazil } from 'helpers/dateFilter';
import { entryitem } from 'data/entryItem';

function EntryReportPage() {
  return (

<div>
   <div className='bg-blue-200 p-4 rounded-xl mb-2'>
      <h1 className='text-xl text-black'>Lamçamento Entrada</h1>
      <hr className='my-4 border-gree1-bg' />
      <form>
        {/*Entrada de informação */}
        <div className='flex flex-col gap-y-2 md:flex-row md:items-center mb-4'>
          <div className='w-full md:w-1/4'>
            <p>
              Valor
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1 flex items-center gap-4'>
            <div className='w-full'>
              <input type="number" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Valor' />
            </div>
            <div className='w-full'>
              <input type="date" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Data' />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Descrição
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1'>
          <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Descrição' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
           <p>
              Categoria
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1 flex items-center gap-4'>
          <select name="category" id="category" className='w-full py-2  px-4 outline-none rounded-lg bg-slate-100'>
            <option value="Fabrica">Fabrica</option>
            <option value="Padaria">Padaria</option>
            <option value="Despesas">Despesas</option>
          </select>
          </div>
          <div className='w-full m-4  md:w-1'>
           <p>
             Conta
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1 flex items-center ml-8 gap-4'>
          <select name="category" id="category" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'>
            <option value="Fabrica">Carteira</option>
            <option value="Padaria">Popança</option>
          </select>
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


        {/* Lista tranzaçôes recentes*/}
        <div className="bg-secondary2-bg p-2 rounded-xl mt-5 shadow-xl">
        <div>
          <h1 className="text-2xl text-blue tex-bold my-2">Transação recentes</h1>
          <hr className="border border-dashed border-gray-500/50 my-2" />
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 mb-5 p-4">
          <h5>ID</h5>
          <h5>Titulo</h5>
          <h5>Categoria</h5>
          <h5>Valor</h5>
          <h5>Data</h5>
          <h5>Ações</h5>
    </div>
        {entryitem.map((item) =>(
        <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-2 bg-blue-200 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
            <span>{item.id}</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Descrição</h5>
            <p>{item.title}</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Categoria</h5>
            <span className="py-1 px-2 rounded-lg">
            {item.category}
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Valor</h5>
            <span className='text-blue-600'>R$: {convertAmericanFromBrazil(item.value)}</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Data</h5>
            <span>{formatDate(item.date)}</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Ações</h5>
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
        ))}
      </div>
</div>
  )
}

export default EntryReportPage