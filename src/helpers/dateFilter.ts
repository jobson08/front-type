import { Item } from "types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

//função verificar ano mes da lista
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&  //verificar se ano é ingual do intem
            (list[i].date.getMonth() + 1) === parseInt(month) //verificar se mes é ingual do intem
        ) {
            newList.push(list[i]);
        }
    }
    return newList;
}
//formatação da data padrão brasileiro
export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
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
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month) - 1]} de ${year}`;
}