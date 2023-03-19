/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

type Props = {
	totalItems: number;
	pageSize: number;
	currentPage?: number;
	handlePageChange: (pageNumber: number) => void;
}
const Paginatior = () => {
    let [num, setNum] = useState(1)
    let [cur, setCur] = useState(1)

    const pages =[
        {page: num},
        {page: num + 1},
        {page: num + 2},
        {page: num + 3},
    ]

    function Next(){
        setNum(++num)
    }

    function Back(){
        num>1 && setNum(--num)
    }

  return (
    <div className="flex bg-white rounded-lg" >
        <button onClick={Back} className="h-10 border-2 border-r-0 border-primary px-4 rounded-l-lg hover:bg-primary hover:text-white">
        <AiOutlineLeft  className="w-6 h-6 fill-current"/>
        </button>

        {
            pages.map((pg, i) =>(
                <button key={i} onClick={() => setCur(pg.page)} className={`h-10 border-2 border-r-0 border-primary w-10
                ${cur === pg.page && "bg-primary text-white"}`}>
                    {pg.page}
                </button>
            ))
        }

        <button onClick={Next} className="h-10 border-2  border-primary px-4 rounded-r-lg hover:bg-primary hover:text-white">
        <AiOutlineRight className="w-6 h-6 fill-current"/>
        </button>
    </div>
  )
}

export default Paginatior