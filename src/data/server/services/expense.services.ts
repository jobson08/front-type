/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosResponse } from "axios";
import { httpClient } from "data/server/httpClient";
import { ExpenseModel } from "data/server/models";
import { PaginationType } from "data/server/models/Pagination";

type ResultType = {
    results: ExpenseModel[];
    pagination: PaginationType;
  };
  
  const appUrl = "/expense";
  const serverUrl= "http://localhost:3002"
  export const useExpenseService = () => {
    const loadPageExpense = async (
      page = 0,
      size = 25,
      search = "",
      order = "asc",
      sort = "name"
    ) => {
      const url = `${
        serverUrl + appUrl
      }/pages?page=${page}&size=${size}&order=${order}&sort=${sort}&search=${search}`;
  
      const response: ResultType = await httpClient.get(url);
  
      return response;
    };
  
    const loadExpenseById = async (id: number | string) => {
      const url = serverUrl + appUrl + "/" + id;
      const response: AxiosResponse<ExpenseModel> = await httpClient.get(url);
  
      return response.data;
    };
  
    const create = async (expense: ExpenseModel) => {
      const url = serverUrl + appUrl;
  
      const response: AxiosResponse<ExpenseModel> = await httpClient.post<ExpenseModel>(
        url,
        expense
      );
  
      return response.data;
    };
    const update = async (expense: ExpenseModel) => {
      const url = serverUrl + appUrl + "/" + expense.id;
  
      const response: AxiosResponse<ExpenseModel> = await httpClient.patch<ExpenseModel>(
        url,
        expense
      );
  
      return response.data;
    };
    const remove = async (id: number) => {
      const url = serverUrl + appUrl + "/" + id;
  
      const response: AxiosResponse<ExpenseModel> = await httpClient.delete<ExpenseModel>(url);
  
      return response.data;
    };
  
    return {
      loadPageExpense,
      loadExpenseById,
      create,
      update,
      remove,
    };
  };