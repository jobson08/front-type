import React from 'react'
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Item } from 'types/Item';
import { formatDate, convertAmericanFromBrazil } from 'helpers/dateFilter';

type Props = {
    list: Item[]
}

const ItemsListe = ({list}:Props) => {
  return (
 <div>
     <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-2 mb-2 p-2">
         {/*  <h5>ID</h5>*/}
          <h5>Titulo</h5>
         {/*<h5>Categoria</h5>*/}
          <h5>Valor</h5>
          <h5>Data</h5>
          {/*  <h5>Ações</h5>*/}
    </div>
        {list.map((item) =>(
        <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center mb-2 bg-gray-200 p-4 rounded-xl">
           {/* <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">ID</h5>
            <span>{item.id}</span>
          </div>*/}
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Descrição</h5>
            <p>{item.title}</p>
          </div>
          {/*  <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Categoria</h5>
            <span className="py-1 px-2 rounded-lg">
            {item.category}
            </span>
          </div>*/}
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Valor</h5>
            <span>R$: {convertAmericanFromBrazil(item.value)}</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-600 font-bold mb-2">Data</h5>
            <span>{formatDate(item.date)}</span>
          </div>
          {/*  <div>
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
          </div>  */}
        </div>
        ))}
    </div>
  )
}

export default ItemsListe