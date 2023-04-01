/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import CardTicket from "../components/CardInfor";
import avatar2 from '../data/image/avatar2.jpg'
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
import { RiAddLine, RiBarChart2Fill, RiDownload2Fill, RiExternalLinkFill, RiHashtag, RiLineChartLine } from "react-icons/ri";

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
          <div >
            <h1 className='text-4xl font-bold mb-4 '>R$: {convertAmericanFromBrazil(income)}</h1>
            <p className=" text-blue-500">Total Receitas</p>
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
            <h1 className='text-4xl font-bold mb-4 '>R$: {convertAmericanFromBrazil(expense)}</h1>
            <p className=" text-red-500">Total Despesas</p>
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
            <p className=" text-green-500">Total Mes</p>
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
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-5 gap-4">
        {/* Card 1 */}
        <div className="bg-indigo-600 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
          <RiLineChartLine className="text-5xl" />
          <h4 className="text-2xl">Earnings</h4>
          <span className="text-5xl text-white">&euro; 8,350</span>
          <span className="py-1 px-3 bg-indigo-700/80 rounded-full">
            + 10% since last month
          </span>
        </div>
        {/* Card 3*/}
        <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
          <div className="flex items-center gap-4 bg-indigo-900/10 rounded-xl p-4">
            <span className="bg-indigo-700 text-gray-300 text-2xl font-bold p-4 rounded-xl">
              98
            </span>
            <div>
              <h3 className="font-bold">Rank</h3>
              <p className="text-gray-500">In top 30%</p>
            </div>
          </div>
          <div className="bg-indigo-700/10 rounded-xl p-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-indigo-700 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                32
              </span>
              <div>
                <h3 className="font-bold">Projects</h3>
                <p className="text-gray-500">8 this month</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="bg-indigo-500/20 py-1 px-4 rounded-full">
                Mobile app
              </span>
              <span className="bg-indigo-500/20 py-1 px-4 rounded-full">
                Branding
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            {/* Lista tranzaçôes recentes*/}
            <div>
              <h1 className="text-2xl text-blue tex-bold my-2">Transação recentes</h1>
              <hr className="border border-dashed border-gray-500/50 my-2" />
            </div>
            < ItemsListe list={filteredList} />
          </div>
        </div>
      </section>

         {/*section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          <div>   
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Card 1 */}
               <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
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
              {/* Card 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
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
            </div>
          </div>
           {/* Card 3 */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
             <h1 className="text-2xl font-bold mb-8">Recommended project</h1>
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                   src={avatar2} alt="user2"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Thomas Martin</h3>
                    <p className="text-gray-500">Updated 10m ago</p>
                  </div>
                </div>
                <div>
                  <span className="bg-indigo-500 py-2 px-4 rounded-full text-white">
                    Design
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-bold">
                  Need a designer to form branding essentials for my business.
                </h5>
                <p className="text-gray-500">
                  Looking for a talented brand designer to create all the
                  branding materials my new startup.
                </p>
              </div>
              <div className="bg-indigo-300/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                <div>
                  <sup className="text-sm text-gray-500">&euro;</sup>{" "}
                  <span className="text-2xl font-bold mr-2">8,700</span>
                  <span className="text-sm text-gray-500">/ month</span>
                </div>
                <div>
                  <span className="border border-indigo-500 text-indigo-500 py-2 px-4 rounded-full">
                    Full time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
};

export default DashboardPage