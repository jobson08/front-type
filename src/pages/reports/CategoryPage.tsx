import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'
import { BsFillCalculatorFill } from 'react-icons/bs'
import { RiDeleteBin7Fill, RiEdit2Fill, RiLineChartLine, RiSearch2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Modal from 'components/Modal'
import { CategoryModel, useCategoryService } from 'data/server'

const CategoryPage = () => {

  const categoryService = useCategoryService();
  
  const [showModal, setShowModal] = useState<boolean>(false)
  const [categoryList, setCategorytyList] = useState<CategoryModel[]>();

  useEffect(() => {
    categoryService.loadPageCategory().then((res) => {
      console.log(res);
    });
  }, [])
/* const [radioValue, setRadioValue]=useState("iCategory")
   const isRadioSelected = (value:string) : boolean => true
 
   const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void
 useEffect(()=> {
   const dbResult = getRadioFromDb();
   setRadioValue(dbResult);
  }, [])*/

  return (

    <div>
      <div className='flex justify-end'>
        <button onClick={() => setShowModal(true)}
          className='bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors'>
          Cadastrar
        </button>
      </div>
      {/* Form modal lançamento*/}
      <Modal show={showModal} setShow={setShowModal}>
        <div className=' w-30 bg-secondary2-bg p-4 rounded-xl mb-5'>
          <h1 className='text-xl text-black'>Cadastrar Categoria</h1>
          <hr className='my-4 border-gree1-bg' />
          <form>
            {/*Entrada de informação */}
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
                <input type="radio" name="category" id="iCategory" value="iCategory" checked
                  className='rounded-lg' />
                <label htmlFor="iCategory" className='text-1xl'>Despesa</label>
              </div>

              <div className='flex space-x-2 items-center'>
                <input type="radio" name="category" id="iIncome" value="iIncome"
                  className='rounded-lg' />
                <label htmlFor="iIncome" className='text-1xl'>Receita</label>
              </div>

            </div>
          </form>
          <hr className='my-4 border-gree1-bg' />
          <div className='flex justify-end space-x-2 pt-2'>
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

      {/*body */}
  <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-5 gap-4">
        {/* Card 1 */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div className="bg-white p-8 rounded-xl shadow-2xl">
          <div className='flex justify-end items-center justify-betwee gap-10'>
            <h1 className="text-2xl text-blue tex-bold ">Categorias</h1>
            <div className="relative m-2">
              <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="bg-gray-200 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-30"
                placeholder="Pequisar"
              />
            </div>
          </div>
          <hr className='my-4 border-gree1-bg' />
            <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 mb-5 p-4">
              {/*<h5>ID</h5>*/}
              <h5>Nome</h5>
              <h5>icone</h5>
              <h5>Tipo</h5>
              <h5>Açoes</h5>
            </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center mb-2 shadow bg-slate-200 p-2 rounded-xl">
              {/*  <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
            <span>1</span>
             </div>*/}
              <div>
                <h5 className="md:hidden text-gray-600 font-bold mb-2">Nome</h5>
                <p>Despesa pessoal</p>
              </div>
              <div>
                <h5 className="md:hidden text-gray-600 font-bold mb-2">icone</h5>
                <BsFillCalculatorFill className='w-8 h-8 text-red-500' />
              </div>
              <div>
                <h5 className="md:hidden font-bold text-gray-600 mb-2">Tipo</h5>
                <p className='text-red-500'>Despesa</p>
              </div>
              <div>
                <h5 className="md:hidden text-gray-600 font-bold mb-2">Ações</h5>
                {/* Menu Editar Deletar*/}
                <div>
                  <Menu
                    menuButton={
                      <MenuButton className="flex items-center gap-x-2 bg-blue-200 p-2 rounded-lg transition-colors">
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
            </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center mb-2 shadow bg-slate-200 p-2 rounded-xl">
              {/*  <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
            <span>1</span>
             </div>*/}
              <div>
                <h5 className="md:hidden text-gray-600 font-bold mb-2">Nome</h5>
                <p>Despesa pessoal</p>
              </div>
              <div>
                <h5 className="md:hidden text-gray-600 font-bold mb-2">icone</h5>
                <BsFillCalculatorFill className='w-8 h-8 text-red-500' />
              </div>
              <div>
                <h5 className="md:hidden font-bold text-gray-600 mb-2">Tipo</h5>
                <p className='text-blue-500'>Receita</p>
              </div>
              <div>
                <h5 className="md:hidden text-gray-600 font-bold mb-2">Ações</h5>
                {/* Menu Editar Deletar*/}
                <div>
                  <Menu
                    menuButton={
                      <MenuButton className="flex items-center gap-x-2 bg-blue-200 p-2 rounded-lg transition-colors">
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
            </div>        

          </div>
        </div>

             {/* Card 2 */}
             <div className="bg-indigo-600 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
          <RiLineChartLine className="text-5xl" />
          <h4 className="text-2xl">Earnings</h4>
          <span className="text-5xl text-white">&euro; 8,350</span>
          <span className="py-1 px-3 bg-indigo-700/80 rounded-full">
            + 10% since last month
          </span>
        </div>
        {/* Card 3*/}
        <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
          <div className="flex items-center gap-4 bg-indigo-900/10 rounded-xl p-4">
            <span className="bg-indigo-700 text-gray-300 text-2xl font-bold p-4 rounded-xl">
              98
            </span>
            <div>
              <h3 className="font-bold">Rank</h3>
              <p className="text-gray-500">In top 30%</p>
            </div>
          </div>
          <div className="bg-indigo-700/10 rounded-xl p-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-indigo-700 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                32
              </span>
              <div>
                <h3 className="font-bold">Projects</h3>
                <p className="text-gray-500">8 this month</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="bg-indigo-500/20 py-1 px-4 rounded-full">
                Mobile app
              </span>
              <span className="bg-indigo-500/20 py-1 px-4 rounded-full">
                Branding
              </span>
            </div>
          </div>
        </div>
      </section>
 <div>
  {/*  <div className="bg-secondary2-bg p-4 mt-5 rounded-xl mb-2 ">
       
        <form >
          <div className='flex justify-end items-center justify-betwee gap-10'>
            <h1 className="text-2xl text-blue tex-bold ">Categorias</h1>
            <div className="relative m-2">
              <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="bg-gray-200 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-40"
                placeholder="Pequisar"
              />
            </div>
          </div>
        </form>
        <hr className="border border-dashed border-gray-500/50 my-2" />

        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 mb-5 p-4">

          <h5>Nome</h5>
          <h5>icone</h5>
          <h5>Tipo</h5>
          <h5>Açoes</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center mb-2 shadow bg-slate-200 p-2 rounded-xl">
          {/*  <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
            <span>1</span>
             </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Nome</h5>
            <p>Despesa pessoal</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">icone</h5>
            <BsFillCalculatorFill className='w-8 h-8 text-red-500' />
          </div>
          <div>
            <h5 className="md:hidden font-bold text-gray-600 mb-2">Tipo</h5>
            <p className='text-red-500'>Despesa</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Ações</h5>

            <div>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 bg-blue-200 p-2 rounded-lg transition-colors">
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
        </div>
    </div> */}
 </div>

    </div>
  )
}

export default CategoryPage