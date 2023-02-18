import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardTicket from "../components/CardInfor";
import { RiArrowLeftSLine, RiArrowRightSLine, RiDeleteBin7Fill, RiEdit2Fill } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { Item } from "types/Item";
import { Category } from "types/Category";
import { items } from "data/items";
import { filterListByMonth, getCurrentMonth } from "helpers/dateFilter";

const DashboardPage = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth))
  },[list,currentMonth]);
  
  return (
    <div>
        {/*TEMPORIZADOR */}
  <div className='bg-secondary2-bg p-2 rounded-xl mt-5'>

      <div className='flex flex-wrap xl:flex-nowrap m-3 justify-center '>
        <button
          type="button"
          className="text-2xl  hover:drop-shadow-xl rounded-full bg-blue-bg hover:bg-blue-500  p-3">
          <RiArrowLeftSLine className="hover:cursor-pointer text-white" />
        </button>

        <h1 className='text-1xl font-extrabold dark:text-gray-200 text-center m-2'> Fevereiro de 2023</h1>

        <button
          type="button"
          className="text-2xl hover:drop-shadow-xl rounded-full bg-blue-bg hover:bg-blue-500 p-3">
          <RiArrowRightSLine className="hover:cursor-pointer text-white " />
        </button>
      </div>
</div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
        {/* Card */}
        <CardTicket
          ticket="total"
          totalTickets="145,000"
          text="Tickets totales"
        />
        <CardTicket
          ticket="pending"
          totalTickets="5,000"
          text="Tickets pendientes"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="130,000"
          text="Tickets en proceso"
        />
        <CardTicket
          ticket="close"
          totalTickets="10,000"
          text="Tickets cerrados"
        />
      </div>

      <div className="bg-secondary2-bg p-2 rounded-xl mt-10">
        <div>
          <h1 className="text-2xl text-blue tex-bold my-5">Transação más recientes</h1>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-5 p-4">
          <h5>ID</h5>
          <h5>Titulo</h5>
          <h5>Categoria</h5>
          <h5>Valor</h5>
          <h5>Data</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-gray-200 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Estatus</h5>
            <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
              Abierto
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Fecha</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary2-bg p-2 rounded-lg transition-colors">
                  Acciones
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

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-gray-200 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Estatus</h5>
            <span className="py-1 px-2 bg-blue-500/10 text-blue-500 rounded-lg">
              En proceso
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Fecha</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary2-bg p-2 rounded-lg transition-colors">
                  Acciones
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

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-gray-200 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Estatus</h5>
            <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
              Cerrado
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Fecha</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary2-bg p-2 rounded-lg transition-colors">
                  Acciones
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
  )
};

export default DashboardPage