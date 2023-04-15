/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import avatar3 from '../data/image/avatar3.png'
import avatar4 from '../data/image/avatar4.jpg'
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { convertAmericanFromBrazil } from '../helpers/dateFilter'
import { Item } from "types/Item";
import { items } from "../data/test/items";
import { filterListByMonth, getCurrentMonth } from "helpers/dateFilter";
import ItemsListe from "components/ItemsListe";
import InfoArea from "components/InfoArea";
import { categories } from "data/test/categories";
import { Link } from "react-router-dom";
import { RiAddLine, RiBarChart2Fill, RiDownload2Fill, RiExternalLinkFill} from "react-icons/ri";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import Goal from "components/Goal";
import { Progress } from "@material-tailwind/react";

const DashboardPage = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  //monitora a mudança da lista e o mes atual
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth)) // seta lista filtrada adicionando lista e data
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  useEffect(() => {
    let incomeCount = 0; // quando o filterLista for modificao zera receita e despesa
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value; // se categoria for despesa  soma com o valor
      } else {
        incomeCount += filteredList[i].value; //se não categoria for reseita soma com o valor
      }
    }

    setIncome(incomeCount); // seta o valor receita 
    setExpense(expenseCount); //seta valor despesa
  }, [filteredList]);

  const valueTotal = (income - expense)
  return (
    <div>
      {/*TEMPORIZADOR */}
      <div className='bg-secondary2-bg p-2 rounded-xl mt-1 shadow-xl'>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
      </div>
      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-3">
        {/* Card 1 */}
        <div className="bg-secondary2-bg p-4 shadow-xl rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div>
              <RiExternalLinkFill
                className={`text-4xl text-white bg-blue-500 p-2 box-content rounded-xl`}
              />
            </div>
     <div>
          {/*
            <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <RiMore2Fill />
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary2-bg"
                transition
                menuClassName="bg-secondary2-bg p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-800 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Detalhes
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-800 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Informação
                  </Link>
                </MenuItem>
              </Menu>*/}
            </div>
          </div>
          {/* Number of tickets */}
          <div >
            <h1 className='text-4xl font-bold mb-4 '>R$: {convertAmericanFromBrazil(income)}</h1>
            <p className="text-2xl text-blue-500 font-bold">Total Receitas</p>
          </div>
          <hr className="border border-dashed border-gray-500/50 my-4" />
          <div>
            <Link
              to="/relaEntrada"
              className="flex items-center gap-2 text-text-gray-800 font-bold hover:underline"
            >
              <RiAddLine /> Detalhes
            </Link>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-secondary2-bg p-4 shadow-xl rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div>
              <RiDownload2Fill
                className={`text-4xl text-white bg-red-500 p-2 box-content rounded-xl`}
              />
            </div>

            <div>
        {/*          
          <Menu
           menuButton={
             <MenuButton className="flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-colors">
               <RiMore2Fill />
             </MenuButton>
           }
           align="end"
           arrow
           arrowClassName="bg-secondary2-bg"
           transition
           menuClassName="bg-secondary2-bg p-4"
         >
           <MenuItem className="p-0 hover:bg-transparent">
             <Link
               to="/perfil"
               className="rounded-lg transition-colors text-gray-800 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
             >
               Detalhes
             </Link>
           </MenuItem>
           <MenuItem className="p-0 hover:bg-transparent">
             <Link
               to="/perfil"
               className="rounded-lg transition-colors text-gray-800 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
             >
               Informação
             </Link>
           </MenuItem>
         </Menu>*/}
            </div>
          </div>
          {/* Number of tickets */}
          <div>
            <h1 className='text-4xl font-bold mb-4 '>R$: {convertAmericanFromBrazil(expense)}</h1>
            <p className="text-2xl text-red-500 font-bold">Total Despesas</p>
          </div>
          <hr className="border border-dashed border-gray-500/50 my-4" />
          <div>
            <Link
              to="/relaDespesa"
              className="flex items-center gap-2 text-text-gray-800 font-bold hover:underline"
            >
              <RiAddLine /> Detalhes
            </Link>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-secondary2-bg p-4 shadow-xl rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div>
              <RiBarChart2Fill
                className={`text-4xl text-white bg-green-500 p-2 box-content rounded-xl`}
              />
            </div>

            <div>
              {/*             <Menu
           menuButton={
             <MenuButton className="flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-colors">
               <RiMore2Fill />
             </MenuButton>
           }
           align="end"
           arrow
           arrowClassName="bg-secondary2-bg"
           transition
           menuClassName="bg-secondary2-bg p-4"
         >
           <MenuItem className="p-0 hover:bg-transparent">
             <Link
               to="/perfil"
               className="rounded-lg transition-colors text-gray-800 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
             >
               Detalhes
             </Link>
           </MenuItem>
           <MenuItem className="p-0 hover:bg-transparent">
             <Link
               to="/perfil"
               className="rounded-lg transition-colors text-gray-800 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
             >
               Informação
             </Link>
           </MenuItem>
         </Menu>*/}
            </div>
          </div>
          {/* Number of tickets */}
          <div>
            <h1 className={`text-4xl font-bold mb-4 ${valueTotal >= 0 ? 'text-red' : 'text-green'}`}>R$: {convertAmericanFromBrazil(valueTotal)}</h1>
            <p className="text-2xl text-green-500 font-bold">Total Mes</p>
          </div>
          <hr className="border border-dashed border-gray-500/50 my-4" />
          <div>
            <Link
              to="/totalReport"
              className="flex items-center gap-2 text-text-gray-800 font-bold hover:underline"
            >
              <RiAddLine /> Detalhes
            </Link>
          </div>
        </div>
      </div>
         {/*section 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          <div>   
            <div className="bg-white  p-4 rounded-xl shadow-2xl mb-4 flex flex-col gap-4">
              {/* Card 1 */}
               <h1 className="text-2xl font-bold mb-4">Recent invoices</h1>
               {/*avatra 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center bg-slate-200  p-4 rounded-xl shadow-1xl gap-2 mb-2">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                   src={avatar3} alt="user3"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Alexander Williams</h3>
                    <p className="text-gray-500">JQ Holdings</p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Paid
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 1,200.87</span>
                </div>
              </div>
              {/*avatra 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center bg-slate-200  p-4 rounded-xl shadow-1xl gap-2 mb-2">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={avatar4} alt="user4"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Jhon Philips</h3>
                    <p className="text-gray-500">Inchor Techs</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 12,998.88</span>
                </div>
              </div>
              {/*avatra 3 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center bg-slate-200  p-4 rounded-xl shadow-1xl gap-2 mb-2">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={avatar4} alt="user4"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Jhon Philips</h3>
                    <p className="text-gray-500">Inchor Techs</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 12,998.88</span>
                </div>
              </div>
              {/*avatra 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center bg-slate-200  p-4 rounded-xl shadow-1xl gap-2 mb-2">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={avatar4} alt="user4"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Jhon Philips</h3>
                    <p className="text-gray-500">Inchor Techs</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 12,998.88</span>
                </div>
              </div>
            </div>
            {/* Card 3 
            <div className="bg-indigo-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl -rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-indigo-500 py-2 px-6 rounded-xl text-white w-full">
                  Join now
                </button>
              </div>
            </div>*/}
          </div>
           {/* Card 4 */}
          <div>
        <div className="bg-white p-4 rounded-xl shadow-2xl mb-4 flex flex-col gap-4">
            {/* Lista tranzaçôes recentes*/}
            <div className="flex flex-col">
              <h1 className="text-2xl text-blue font-bold my-2 ">Transação recentes</h1>
              <div className="flex justify-end">
                <Menu
                  menuButton={
                    <MenuButton className="flex items-center gap-x-2 bg-primary text-red-50 font-bold p-2 rounded-lg transition-colors">
                      Nova Transacões
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
                      to="/relaEntrada"
                      className="rounded-lg transition-colors text-blue-700 font-bold hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
                    >
                      <RiExternalLinkFill />
                      Receita
                    </Link>
                  </MenuItem>
                  <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                      to="/relaDespesa"
                      className="rounded-lg transition-colors text-red-700 font-bold hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
                    >
                      <RiDownload2Fill />
                      Despesa
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
              <hr className="border border-dashed border-gray-500/50 mt-5 " />
            </div>
            < ItemsListe list={filteredList} />
            </div>
          </div>
        </section>
        <Goal />
    </div>
  )
};

export default DashboardPage