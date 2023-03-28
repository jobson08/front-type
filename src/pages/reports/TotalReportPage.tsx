import Modal from 'components/Modal'
import React, { useState } from 'react'


const TotalReportPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div>
    <button className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'
        onClick={() => setShowModal(true)}>
        criar
      </button>

      <Modal show={showModal} setShow={setShowModal}>
        <h1 className="pb-5 text-2xl font-medium text-blue-400">Cadastro </h1>
        <form>
        <div className=' gap-y-2 md:flex-row md:items-center mb-4'>
          <div className='w-full md:w-1/4'>
            <p>
              Nome
              <span className='text-red-500'>*</span>
            </p>
          </div>
          <div className='flex-1 flex items-center gap-4'>
            <div className='w-full'>
              <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='Nome' />
            </div>
          </div>

          <div className=' md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
              <p>
                Icone
                <span className='text-red-500'>*</span>
              </p>
            </div>
            <div className='flex-1'>
              <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                placeholder='icone' />
            </div>
          </div>
          
          <div className='flex space-x-2 items-center'>
            <input type="radio" name="category" id="iExpense" value="iExpense" checked 
            className='rounded-lg'/> 
            <label htmlFor="iExpense" className='text-1xl'>Despesa</label>
          </div>

        <div className='flex space-x-2 items-center'>
          <input type="radio" name="category" id="iIncome" value="iIncome"
          className='rounded-lg'/> 
          <label htmlFor="iIncome" className='text-1xl'>Receita</label>
        </div>

        </div>
        </form>
        <hr className='mt-5 mb-2 border-gree1-bg' />
        <div className='flex justify-end space-x-2 pt-2'>
         <button onClick={() => setShowModal(false)}
         className='bg-red-600 text-white font-bold py-2 px-4 ml-2 rounded-lg hover:bg-red-400 transition-colors'>
            Cancelar
          </button>
          <button className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'>
            Salvar
          </button>
        </div>
      
      </Modal>
    </div>
  )
}

export default TotalReportPage