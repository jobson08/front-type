/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import CardTicket from "../components/CardInfor";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import{convertAmericanFromBrazil} from'../helpers/dateFilter'

import { Item } from "types/Item";
import { items } from "../data/test/items";
import { filterListByMonth, getCurrentMonth} from "helpers/dateFilter";
import ItemsListe from "components/ItemsListe";
import InfoArea from "components/InfoArea";
import { categories } from "data/test/categories";
import { Link } from "react-router-dom";
import { RiAddLine, RiBarChart2Fill, RiDownload2Fill, RiExternalLinkFill} from "react-icons/ri";

const DashboardPage = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);
  
  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  }

 useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome (incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

   const valueTotal=(income-expense)
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
       <h1 className= 'text-4xl font-bold mb-4 '>R$: {convertAmericanFromBrazil(income)}</h1>
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
       <h1 className= 'text-4xl font-bold mb-4 '>R$: {convertAmericanFromBrazil(expense)}</h1>
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
       <h1 className= {`text-4xl font-bold mb-4 ${valueTotal >= 0 ? 'text-red' : 'text-green'}`}>R$: {convertAmericanFromBrazil(valueTotal)}</h1>
       <p className=" text-green-500">Total Mess</p>
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

        {/* Lista tranzaçôes recentes*/}
      <div className="bg-secondary2-bg p-2 rounded-xl mt-5 shadow-xl">
        <div>
          <h1 className="text-2xl text-blue tex-bold my-2">Transação recentes</h1>
          <hr className="border border-dashed border-gray-500/50 my-2" />
        </div>
        < ItemsListe list={filteredList}  />
      </div>

</div>
  )
};

export default DashboardPage