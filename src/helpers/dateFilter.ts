/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Item } from "types/Item";

//função pegar o mes atual e formta yyyy-mm
export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

//função filtrar lista por mes atual
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = []; // cria uma lista vasia
    let [year, month] = date.split('-'); //gera um arei com 2 intam e formata data yyyy-mm

    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) && // verifica se ano é ingal passa o ano
            (list[i].date.getMonth() /*+1*/ ) === parseInt(month) // mes é imgual do nao filtrado 
        ) {
            newList.push(list[i]); // retorna item para lista nova
        }
    }

    return newList; // nova lista atualizado
}

//formatação da data padrão brasileiro
export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() /* + 1 */;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

//função zero a esqueda data 
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;
/*
ou asim
{
   if(n < 10) {
    return `0${n}`;
   } else {                 
    return `${n}`;
   }
}
*/

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
  return`${months[parseInt(month) -1]} de ${year}`;
}

/*export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let date = new Date(parseInt(year), parseInt(month)-1);
    const options = {
      year: "numeric",
      month: "long",
    };
  
    let dateFormated = date.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric",
    });
  
    return `${dateFormated}`;
  };*/

export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }

  export const convertAmericanFromBrazil = (value: string | number) => {
    if (
      value == '0' ||
      value == '0,00' ||
      value == '0,0' ||
      value == '0.00' ||
      value == '0.0' ||
      value == null ||
      value == undefined
    ) {
      return '';
    } else {
      return Number(value).toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  };
