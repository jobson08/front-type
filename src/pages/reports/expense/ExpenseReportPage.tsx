import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {  RiDeleteBin7Fill, RiEdit2Fill, RiHashtag, RiSearch2Line } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { formatDate, convertAmericanFromBrazil } from 'helpers/dateFilter';
import { expenseItem } from 'data/test/expenseItem';
//import PaginationT from 'components/PaginationT';
import avatar2 from '../../../data/image/avatar2.jpg'
import avatar3 from '../../../data/image/avatar3.png'
import avatar4 from '../../../data/image/avatar4.jpg'
import Modal from 'components/Modal';
import { useExpenseService, ExpenseModel } from 'data/server';
//import PaginationPrimary from 'components/PaginationPrimary';

function ExpenseReportPage() {
  const expenseService = useExpenseService();
  const [expenseList, setExpensetyList] = useState<ExpenseModel[]>();
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    expenseService.loadPageExpense().then((res) => {
      console.log(res);
    });
  }, [])
  
  /*const [ pagination, setPagination] = useState<PaginationType>()
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(15);
  const [page, setPage] = useState(0);
  const [orderValue, setOrderValue] = useState("asc");
  const [fieldValue, setFildValue] = useState("id");
  */

 /* const loadPageExpense = async (
    page: number,
    size: number,
    search: string,
    order: string,
    sort: string
  ) => {
    await expenseService
      .loadPageUnity(page, size, search, order, sort)
      .then((res) => {
        setExpensetyList(res.results);
        setPagination(res.pagination);
      });
  };


  const onClickPaginator = (page: number) =>{
    if (page > 0){
      setPage(page);
    }
  }*/
 
 
  return (
   
  <div>
    <div>
       <div className='flex justify-end'>
        <button onClick={() => setShowModal(true)}
          className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'>
          Nova Despesa
        </button>
    </div>
      {/* Form modal lançamento*/}
    <Modal show={showModal} setShow={setShowModal}>
    <div className=' w-30 bg-red-300 p-2 rounded-xl mb-5'>
    <div className='items-center'>
      <h1 className='text-xl text-black '>Nova Despesas</h1>
    </div>  
    
    <hr className='my-4 border-gree1-bg' />
    <form>
            {/*Entrada de informação */}
            <div className=' gap-y-2 md:flex-row md:items-center mb-4'>
              <div className='w-full md:w-1/4'>
                <p>
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
                  <p>
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
                  <p>
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
                  <p>
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
                  <p>
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

     <section className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          <div>
            <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Card 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                   src={avatar3} alt="user3"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Alexander Williams</h3>
                    <p className="text-gray-500">JQ Holdings</p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Paid
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 1,200.87</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={avatar4} alt="user4"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Jhon Philips</h3>
                    <p className="text-gray-500">Inchor Techs</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 12,998.88</span>
                </div>
              </div>
            </div>
            <div className="bg-indigo-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl -rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-indigo-500 py-2 px-6 rounded-xl text-white w-full">
                  Join now
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div>
            <h1 className="text-2xl font-bold mb-8">Recommended project</h1>
           
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                   src={avatar2} alt="user2"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Thomas Martin</h3>
                    <p className="text-gray-500">Updated 10m ago</p>
                  </div>
                </div>
                <div>
                  <span className="bg-indigo-500 py-2 px-4 rounded-full text-white">
                    Design
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-bold">
                  Need a designer to form branding essentials for my business.
                </h5>
                <p className="text-gray-500">
                  Looking for a talented brand designer to create all the
                  branding materials my new startup.
                </p>
              </div>
              <div className="bg-indigo-300/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                <div>
                  <sup className="text-sm text-gray-500">&euro;</sup>{" "}
                  <span className="text-2xl font-bold mr-2">8,700</span>
                  <span className="text-sm text-gray-500">/ month</span>
                </div>
                <div>
                  <span className="border border-indigo-500 text-indigo-500 py-2 px-4 rounded-full">
                    Full time
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </section>
 
 
         {/* Lista tranzaçôes recentes*/}
         <div className="bg-secondary2-bg p-6 rounded-xl mt-5 shadow-xl">
         <div>
           <h1 className="text-2xl text-blue tex-bold ">Transação recentes</h1>
           <form className='flex justify-end' >
            <div className="relative">
              <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="bg-gray-200 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Pequisar"
              />
            </div>
          </form>
           <hr className="border border-dashed border-gray-500/50 my-2" />
         </div>
         <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 mb-5 p-4">
           <h5>ID</h5>
           <h5>Titulo</h5>
           <h5>Categoria</h5>
           <h5>Valor</h5>
           <h5>Data</h5>
           <h5>Ações</h5>
     </div>
         {expenseItem.map((item) =>(
         <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-2 bg-red-200 p-2 rounded-xl">
           <div>
             <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
             <span>{item.id}</span>
           </div>
           <div>
             <h5 className="md:hidden text-gray-600 font-bold mb-2">Descrição</h5>
             <p>{item.title}</p>
           </div>
           <div>
             <h5 className="md:hidden text-gray-600 font-bold mb-2">Categoria</h5>
             <span className="py-1 px-2 rounded-lg">
             {item.category}
             </span>
           </div>
           <div>
             <h5 className="md:hidden text-gray-600 font-bold mb-2">Valor</h5>
             <span className='text-red-600'>R$: {convertAmericanFromBrazil(item.value)}</span>
           </div>
           <div>
             <h5 className="md:hidden text-gray-600 font-bold mb-2">Data</h5>
             <span>{formatDate(item.date)}</span>
           </div>
           <div>
             <h5 className="md:hidden text-gray-600 font-bold mb-2">Ações</h5>
             <Menu
               menuButton={
                 <MenuButton className="flex items-center gap-x-2 bg-secondary2-bg p-2 rounded-lg transition-colors">
                   Açoes
                 </MenuButton>
               }
               align="end"
               arrow
               arrowClassName="bg-gray-300"
               transition
               menuClassName="bg-gray-300 p-4"
             >
               <MenuItem className="p-0 hover:bg-transparent">
                 <Link
                   to="/perfil"
                   className="rounded-lg transition-colors text-green-700 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
                 >
                   <RiEdit2Fill />
                   Editar
                 </Link>
               </MenuItem>
               <MenuItem className="p-0 hover:bg-transparent">
                 <Link
                   to="/perfil"
                   className="rounded-lg transition-colors text-red-700 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
                 >
                   <RiDeleteBin7Fill />
                   Excluir
                 </Link>
               </MenuItem>
             </Menu>
           </div>  
         </div>
         ))}
         {/*<div className='flex justify-end'>
          <PaginationPrimary 
          page={pagination?.page}
          onClickPaginator={onClickPaginator}
          />
              </div> */}  
       </div>
       </div>
 </div>
 )
}

export default ExpenseReportPage