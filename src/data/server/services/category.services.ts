/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosResponse } from "axios";
import { httpClient } from "data/server/httpClient";
import { CategoryModel } from "data/server/models";
import { PaginationType } from "data/server/models/Pagination";

type ResultType = {
    results: CategoryModel[];
    pagination: PaginationType;
  };
  
  const appUrl = "/category";

  const serverUrl= "http://localhost:3002";

  export const useCategoryService = () => {
    const loadPageCategory = async (
      page = 0,
      size = 25,
      search = "",
      order = "asc",
      sort = "name"
    ) => {
      const url = `${
        serverUrl+ appUrl
      }/pages?page=${page}&size=${size}&order=${order}&sort=${sort}&search=${search}`;
  
      const response: AxiosResponse<ResultType> = await httpClient.get(url);
  
      return response.data;
    };
  
    const loadCategoryById = async (id: number | string) => {
      const url = serverUrl + appUrl + "/" + id;
      const response: AxiosResponse<CategoryModel> = await httpClient.get(url);
  
      return response.data;
    };
  
    const create = async (category: CategoryModel) => {
      const url = serverUrl + appUrl;
  
      const response: AxiosResponse<CategoryModel> = await httpClient.post<CategoryModel>(
        url,
        category
      );
  
      return response.data;
    };
    const update = async (category: CategoryModel) => {
      const url = serverUrl + appUrl + "/" + category.id;
  
      const response: AxiosResponse<CategoryModel> = await httpClient.patch<CategoryModel>(
        url,
        category
      );
  
      return response.data;
    };
    const remove = async (id: number) => {
      const url = serverUrl + appUrl + "/" + id;
  
      const response: AxiosResponse<CategoryModel> = await httpClient.delete<CategoryModel>(url);
  
      return response.data;
    };
  
    return {
      loadPageCategory,
      loadCategoryById,
      create,
      update,
      remove,
    };
  };