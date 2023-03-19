import React, { useState } from 'react';
import { PaginationType } from 'types/PaginationType';
import {AiOutlineLeft, AiOutlineRight, AiOutlineDoubleRight, AiOutlineDoubleLeft} from 'react-icons/ai';

type Props = {
    pagination:PaginationType;
    onClickPaginator: (page:number) => void
};
const PaginationT = ({pagination, onClickPaginator}: Props) => {

    //let [num, setNum] = useState(1)
    let [cur, setCur] = useState(1)

   /* function Next(){
        setNum(++num)
    }

    function Back(){
        num>1 && setNum(--num)
    }
*/
  return (
    <div className="flex bg-white rounded-lg" >
         <button onClick={() =>onClickPaginator(0)}  className="h-10 border-2 border-r-0 border-primary px-4 rounded-l-lg hover:bg-primary hover:text-white">
        <AiOutlineDoubleLeft  className="w-6 h-6 fill-current"/>
        </button>

        <button onClick={() =>onClickPaginator(pagination.page - 1)}  className="h-10 border-2 border-r-0 border-primary px-4  hover:bg-primary hover:text-white">
        <AiOutlineLeft  className="w-6 h-6 fill-current"/>
        </button>

        <div>
        <button className={`h-10 border-2 border-r-0 border-primary w-10 ${cur === pagination.page  && "bg-indigo-600 text-white"}`}>
        {`${pagination.page + 1} `}
        </button> 
        </div>

        <button onClick={() =>onClickPaginator(pagination.page + 1)} className="h-10 border-2 border-r-0 border-primary px-4  hover:bg-primary hover:text-white">
        <AiOutlineRight className="w-6 h-6 fill-current"/>
        </button>

        <button onClick={() =>onClickPaginator(pagination.lastPage)}  className="h-10 border-2  border-primary px-4 rounded-r-lg hover:bg-primary hover:text-white">
        <AiOutlineDoubleRight  className="w-6 h-6 fill-current"/>
        </button>
    </div>
  )
}

export default PaginationT