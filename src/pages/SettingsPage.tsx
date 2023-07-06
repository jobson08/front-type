import Modal from 'components/Modal'
import Tabs from 'components/Tabs'
import React, { useState } from 'react'

function SettingsPage() {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div>
      {/* Button*/}
      <div className='flex justify-end'>
        <button onClick={() => setShowModal(true)}
          className=' bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'>
          Nova Despesa
        </button>
      </div>
      {/* Form modal lançamento*/}
      <Modal show={showModal} setShow={setShowModal}>
        <div className=' w-50 bg-gray-300 p-2 rounded-xl mb-2'>
       
        {/*}  <div className='items-center'>
            <h1 className='text-xl text-black '>Nova Despesas</h1>
        </div>

          <hr className='my-4 border-gree1-bg' />
        */}
          <Tabs panels={[
            {
              name: "Receita",
              content: (() => {
                return <div>
            {/*Tab Entrada de Receitas*/}
            <h1 className=" text-blue-500 font-extrabold ">Receitas</h1>
                  <div>
                    <form>
                      <div className=' gap-y-2 md:flex-row md:items-center mb-4'>
                        <div className='w-full md:w-1/4'>
                          <p className="text-blue-500">
                            Valor
                            <span className='text-red-500'>*</span>
                          </p>
                        </div>
                        <div className='flex-1 flex items-center gap-4'>
                          <div className='w-full'>
                            <input type="number" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                              placeholder='R$:' />
                          </div>
                        </div>

                        <div className=' md:flex-row md:items-center gap-y-2 mb-4'>
                          <div className='w-full md:w-1/4'>
                            <p className="text-blue-500">
                              Data
                              <span className='text-red-500'>*</span>
                            </p>
                          </div>
                          <div className='flex-1'>
                            <input type="date" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                              placeholder='Data' />
                          </div>

                          <div className=' md:flex-row md:items-center gap-y-2 mb-4'>
                            <div className='w-full md:w-1/4'>
                              <p className="text-blue-500">
                                Descrição
                                <span className='text-red-500'>*</span>
                              </p>
                            </div>
                            <div className='flex-1'>
                              <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                                placeholder='Descrição' />
                            </div>
                          </div>

                          <div className='w-full md:w-1/4'>
                            <p className="text-blue-500">
                              Categoria
                              <span className='text-red-500'>*</span>
                            </p>
                          </div>
                          <div className='flex-1 flex items-center gap-4'>
                            <select name="category" id="category" className='w-full py-2  px-4 outline-none rounded-lg bg-slate-100'>
                              <option value="Fabrica">Fabrica</option>
                              <option value="Padaria">Padaria</option>
                              <option value="Despesas">Despesas</option>
                            </select>
                          </div>

                          <div className='w-full md:w-1/4'>
                            <p className="text-blue-500">
                              Conta
                              <span className='text-red-500'>*</span>
                            </p>
                          </div>
                          <div className='flex-1 flex items-center gap-4'>
                            <select name="conta" id="conta" className='w-full py-2  px-4 outline-none rounded-lg bg-slate-100'>
                              <option value="Fabrica">Carteira</option>
                              <option value="Padaria">Popança</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              })()
            },


            {
              
              name: "Despesas",
              content: (() => {
                return <div>
                {/*Tab Entrada de Despesas */}
                <h1 className=" text-red-500 font-extrabold ">Despesas</h1>
                  <div>
                    <form>
                      <div className=' gap-y-2 md:flex-row md:items-center mb-4'>
                        <div className='w-full md:w-1/4'>
                          <p className="text-red-500">
                            Valor
                            <span className='text-red-500'>*</span>
                          </p>
                        </div>
                        <div className='flex-1 flex items-center gap-4'>
                          <div className='w-full'>
                            <input type="number" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                              placeholder='R$:' />
                          </div>
                        </div>

                        <div className=' md:flex-row md:items-center gap-y-2 mb-4'>
                          <div className='w-full md:w-1/4'>
                            <p className="text-red-500">
                              Data
                              <span className='text-red-500'>*</span>
                            </p>
                          </div>
                          <div className='flex-1'>
                            <input type="date" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                              placeholder='Data' />
                          </div>

                          <div className=' md:flex-row md:items-center gap-y-2 mb-4'>
                            <div className='w-full md:w-1/4'>
                              <p className="text-red-500">
                                Descrição
                                <span className='text-red-500'>*</span>
                              </p>
                            </div>
                            <div className='flex-1'>
                              <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-slate-100'
                                placeholder='Descrição' />
                            </div>
                          </div>

                          <div className='w-full md:w-1/4'>
                            <p className="text-red-500">
                              Categoria
                              <span className='text-red-500'>*</span>
                            </p>
                          </div>
                          <div className='flex-1 flex items-center gap-4'>
                            <select name="category" id="category" className='w-full py-2  px-4 outline-none rounded-lg bg-slate-100'>
                              <option value="Fabrica">Fabrica</option>
                              <option value="Padaria">Padaria</option>
                              <option value="Despesas">Despesas</option>
                            </select>
                          </div>

                          <div className='w-full md:w-1/4'>
                            <p className="text-red-500">
                              Conta
                              <span className='text-red-500'>*</span>
                            </p>
                          </div>
                          <div className='flex-1 flex items-center gap-4'>
                            <select name="conta" id="conta" className='w-full py-2  px-4 outline-none rounded-lg bg-slate-100'>
                              <option value="Fabrica">Carteira</option>
                              <option value="Padaria">Popança</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              })()
            },
          ]} />
          
          <hr className='my-4 border-gree1-bg' />
          <div className='flex justify-center space-x-2 pt-2'>
            <button onClick={() => setShowModal(false)}
              className='bg-red-600 text-white font-bold py-2 px-4 ml-2 rounded-lg hover:bg-red-400 transition-colors'>
              Cancelar
            </button>
            <button className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'>
              Salvar
            </button>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default SettingsPage