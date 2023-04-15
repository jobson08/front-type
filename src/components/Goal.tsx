import React from 'react'
import { Progress } from "@material-tailwind/react";

const Goal = () => {
    return (
<div className="bg-secondary2-bg p-2 rounded-xl mt-1 shadow-xl">
    <div className="flex w-full flex-col gap-4">
    <div className="flex justify-center">
          <p className="font-semibold text-xl">Metas do Mês</p>
    </div>    
     <div className='mb-5'>
     <div className='flex justify-between '>
            <p className="text-md font-semibold ">Receitas</p>
            <p className="text-md font-semibold ">R$5.800,00 / 9.00,00</p>
          </div>
        <Progress value={50} color="blue" label="Do Mês" />
        <p className="text-sm font-normal text-gray-500 flex justify-end ">Resta R$ 3.200,00</p>
     </div>
      
     <div className='mb-5'>
     <div className='flex justify-between '>
            <p className="text-md font-semibold ">Despesas</p>
            <p className="text-md font-semibold ">R$ 2.300,00 / 5.500,00</p>
          </div>
        <Progress value={70} color="red" label="Do Mês" />
        <p className="text-sm font-normal text-gray-500 flex justify-end ">Resta R$ 3.200,00</p>
     </div>
    </div>
</div>
    )
}

export default Goal