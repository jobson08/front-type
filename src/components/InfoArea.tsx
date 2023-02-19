import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import { formatCurrentMonth } from 'helpers/dateFilter';

type Props ={
    currentMonth: string
    onmonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

const InfoArea = ({currentMonth, onmonthChange, income, expense}: Props) => {

    const handlePrevMonth = () =>{
       let [yaer, month] = currentMonth.split('-');
       let currentDate = new Date(parseInt(yaer), parseInt(month) - 1, 1);
       currentDate.setMonth(currentDate.getMonth() -1); 
       onmonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }


    const handleNextMonth = () =>{
        let [yaer, month] = currentMonth.split('-');
       let currentDate = new Date(parseInt(yaer), parseInt(month) -1, 1);
       currentDate.setMonth(currentDate.getMonth() + 1); 
       onmonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }
  return (
    <div>
         <div className='flex flex-wrap xl:flex-nowrap m-3 justify-center '>
          <button
            type="button"
            onClick={handlePrevMonth}
            className="text-2xl  hover:drop-shadow-xl rounded-full bg-blue-bg hover:bg-blue-500  p-3">
            <RiArrowLeftSLine className="hover:cursor-pointer text-white" />
          </button>

          <h1 className='text-1xl font-extrabold dark:text-gray-200 text-center m-2'> 
           {formatCurrentMonth(currentMonth)}
          </h1>

          <button
            type="button"
            onClick={handleNextMonth}
            className="text-2xl hover:drop-shadow-xl rounded-full bg-blue-bg hover:bg-blue-500 p-3">
            <RiArrowRightSLine className="hover:cursor-pointer text-white " />
          </button>
        </div>
    </div>
  )
}

export default InfoArea