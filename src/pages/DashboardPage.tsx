/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import CardTicket from "../components/CardInfor";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { Item } from "types/Item";
import { items } from "data/items";
import { filterListByMonth, getCurrentMonth} from "helpers/dateFilter";
import ItemsListe from "components/ItemsListe";
import InfoArea from "components/InfoArea";
import { categories } from "data/categories";

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
        
        <CardTicket
          ticket="receita"
          value= {income}
          text="Total Receitas"
        />
        <CardTicket
          ticket="despesa"
          value={expense}
          text="Total despesas"
        />
        <CardTicket
          ticket="balanco"
          value={income - expense}
          text="Total do Mes"
        />
        {/* <CardTicket
          ticket="inProcess"
          value="130,000"
          text="Tickets en proceso"
        />*/} 
      </div>

        {/* Lista tranzaçôes recentes*/}
      <div className="bg-secondary2-bg p-2 rounded-xl mt-5 shadow-xl">
        <div>
          <h1 className="text-2xl text-blue tex-bold my-2">Transação más recientes</h1>
        </div>
        < ItemsListe list={filteredList} />
      </div>

    </div>
  )
};

export default DashboardPage