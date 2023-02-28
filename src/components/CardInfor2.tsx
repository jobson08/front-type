/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiAddLine, RiMore2Fill, RiTicketLine } from "react-icons/ri";
import{convertAmericanFromBrazil} from'../helpers/dateFilter'
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";


import { Item } from "types/Item";
import { items } from "data/items";
import { filterListByMonth, getCurrentMonth} from "helpers/dateFilter";
import ItemsListe from "components/ItemsListe";
import InfoArea from "components/InfoArea";
import { categories } from "data/categories";

const CardInfor2 =() => {

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

  return (
    <div>
    <div className="bg-secondary2-bg p-4 shadow-xl rounded-xl">
    <div className="flex items-center justify-between mb-3">
        <div>
         <RiTicketLine
           className={`text-4xl bg-blue-600 p-2 box-content rounded-xl`}
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
       <p className=" text-blue-600">Total Receitas</p>
     </div>
     <hr className="border border-dashed border-gray-500/50 my-4" />
     <div>
       <Link
         to="/"
         className="flex items-center gap-2 text-text-gray-800 hover:underline"
       >
         <RiAddLine /> Detalhes
       </Link>
     </div>
   </div>
    {/* Card 2 */}
   <div className="bg-secondary2-bg p-4 shadow-xl rounded-xl">
    <div className="flex items-center justify-between mb-3">
        <div>
         <RiTicketLine
           className={`text-4xl bg-red-500 p-2 box-content rounded-xl`}
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
       <p className=" text-red-500">Total Receitas</p>
     </div>
     <hr className="border border-dashed border-gray-500/50 my-4" />
     <div>
       <Link
         to="/"
         className="flex items-center gap-2 text-text-gray-800 hover:underline"
       >
         <RiAddLine /> Detalhes
       </Link>
     </div>
   </div>
    {/* Card 3 */}
   <div className="bg-secondary2-bg p-4 shadow-xl rounded-xl">
    <div className="flex items-center justify-between mb-3">
        <div>
         <RiTicketLine
           className={`text-4xl bg-green-500 p-2 box-content rounded-xl`}
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
       <h1 className= 'text-4xl font-bold mb-4 '>R$: {convertAmericanFromBrazil(income - expense)}</h1>
       <p className=" text-green-500">Total Receitas</p>
     </div>
     <hr className="border border-dashed border-gray-500/50 my-4" />
     <div>
       <Link
         to="/"
         className="flex items-center gap-2 text-text-gray-800 hover:underline"
       >
         <RiAddLine /> Detalhes
       </Link>
     </div>
   </div>
  </div>
  );
};


export default CardInfor2