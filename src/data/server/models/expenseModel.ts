export type ExpenseModel = {
id? : number | null;
title : string;
value : number | string;
description : string;
categoryId : number;
subCategoryId: number
accountId:    number;
expenseDate : Date | string;
} 
