/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { RiAddLine, RiCheckboxCircleFill, RiTicketLine } from "react-icons/ri";
import{convertAmericanFromBrazil} from'../helpers/dateFilter'
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

type Props ={
  ticket: string;
  value: number;
  text: string;
}

const CardInfor = ({ticket, value, text}: Props) => {

  let status = "";
  let textColor = ""
  switch (ticket) {
    case "receita":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      break;
    case "despesa":
      status = "bg-red-500/10 text-red-500";
      textColor = "text-red-500";
      break;
    case "balanco":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      break;
    /*case "total":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500";
      break;*/
  }

  //const textvalue = ( value >=0 ? "text-red" : "text-blue")

  return (
    <div className="bg-secondary2-bg p-4 shadow-xl rounded-xl">
     <div className="flex items-center justify-between mb-3">
         <div>
          <RiTicketLine
            className={`text-4xl ${status} p-2 box-content rounded-xl`}
          />
        </div>
  
        <div>
    {/*             <Menu
            menuButton={
              <MenuButton className="flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-colors">
                <RiMore2Fill />
              </MenuButton>
            }
            align="end"
            arrow
            arrowClassName="bg-secondary2-bg"
            transition
            menuClassName="bg-secondary2-bg p-4"
          >
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="rounded-lg transition-colors text-gray-800 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
              >
                Detalhes
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="rounded-lg transition-colors text-gray-800 hover:bg-gray-100 flex items-center gap-x-4 p-2 flex-1"
              >
                Informação
              </Link>
            </MenuItem>
          </Menu>*/}
        </div>
      </div>
      {/* Number of tickets */}
      <div>
        <h1 className= {`text-4xl font-bold mb-4 ${value >= 0 ? 'text-red' : 'text-green'}`}>R$: {convertAmericanFromBrazil(value)}</h1>
        <p className={textColor}>{text}</p>
      </div>
      <hr className="border border-dashed border-gray-500/50 my-4" />
      <div>
        <Link
          to="/"
          className="flex items-center gap-2 text-text-gray-800 hover:underline"
        >
          <RiAddLine /> Detalhes
        </Link>
      </div>
    </div>
  );
};


export default CardInfor