import React from 'react'
import {AiOutlineLeft, AiOutlineRight, AiOutlineDoubleRight, AiOutlineDoubleLeft} from 'react-icons/ai';

type Props = { page: number; onClickPaginator: (page: number)=> void};

const PaginationPrimary = ( { page, onClickPaginator }: Props) => {

  return (
    <div className="flex bg-white rounded-lg" >
         <button  className="h-10 border-2 border-r-0 border-primary px-4 rounded-l-lg hover:bg-primary hover:text-white">
        <AiOutlineDoubleLeft  className="w-6 h-6 fill-current"/>
        </button>

        <button onClick={() =>onClickPaginator(page - 1)}  className="h-10 border-2 border-r-0 border-primary px-4  hover:bg-primary hover:text-white">
        <AiOutlineLeft  className="w-6 h-6 fill-current"/>
        </button>

        <div>
        <button className={`h-10 border-2 border-r-0 border-primary w-10 ${page  && "bg-indigo-600 text-white"}`}>
        {`${page + 1} `}
        </button> 
        </div>

        <button onClick={() =>onClickPaginator(page + 1)} className="h-10 border-2 border-r-0 border-primary px-4  hover:bg-primary hover:text-white">
        <AiOutlineRight className="w-6 h-6 fill-current"/>
        </button>

        <button  className="h-10 border-2  border-primary px-4 rounded-r-lg hover:bg-primary hover:text-white">
        <AiOutlineDoubleRight  className="w-6 h-6 fill-current"/>
        </button>
    </div>
  )
}

export default PaginationPrimary