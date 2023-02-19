import React, { useState, useEffect } from "react";
import CardTicket from "../components/CardInfor";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { Item } from "types/Item";
import { items } from "data/items";
import { filterListByMonth, getCurrentMonth } from "helpers/dateFilter";
import ItemsListe from "components/ItemsListe";
import InfoArea from "components/InfoArea";

const DashboardPage = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIcome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  }

  return (
    <div>
      {/*TEMPORIZADOR */}
      <div className='bg-secondary2-bg p-2 rounded-xl mt-5'>
        <InfoArea
         currentMonth={currentMonth} 
         onmonthChange={handleMonthChange}
         income={income}
         expense={expense}
         />
      </div>
      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-4">
        
        <CardTicket
          ticket="receita"
          totalTickets="145,000"
          text="Total Receitas"
        />
        <CardTicket
          ticket="despesa"
          totalTickets="5,000"
          text="Total despesas"
        />
        <CardTicket
          ticket="balanco"
          totalTickets="10,000"
          text="Total do Mes"
        />
        {/* <CardTicket
          ticket="inProcess"
          totalTickets="130,000"
          text="Tickets en proceso"
        />*/} 
      </div>

        {/* Lista tranzaçôes recentes*/}
      <div className="bg-secondary2-bg p-2 rounded-xl mt-10">
        <div>
          <h1 className="text-2xl text-blue tex-bold my-5">Transação más recientes</h1>
        </div>
        < ItemsListe list={filteredList} />
      </div>

    </div>
  )
};

export default DashboardPage