import { expenseItem } from "data/test/expenseItem";
import { incomeItem } from "data/test/incomeItem";


export const historyRecent = ()=>{
const history = [...expenseItem, ...incomeItem]
{/*history.sort((a, b) =>{
    return new Date(b,createdAt) - new Date(a.createdAt)
})*/}

return history.slice(0, 3)
}