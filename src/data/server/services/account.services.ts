/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosResponse } from "axios";
import { httpClient } from "data/server/httpClient";
import { AccountModel } from "data/server/models";
import { PaginationType } from "data/server/models/Pagination";

type ResultType = {
    results: AccountModel[];
    pagination: PaginationType;
};
const appUrl = '/account'

export const useAccountService = () => {
    const loadPageAccount = async (
        page = 0,
        size = 25,
        search = "",
        order = "asc",
        sort = "name"
    ) => {
        const url = `${process.env.BASEURL + appUrl
            }/pages?page=${page}&size=${size}&order=${order}&sort=${sort}&search=${search}`;
           
            const response: AxiosResponse<ResultType> = await httpClient.get(url);
            return response
    };

    const loadPageAccontById = async (id: number | string) => {
        const url = process.env.BASEURL + "/" + id;
        const response: ResultType = await httpClient.get(url);  
    }
    
    const create = async (account: AccountModel) => {
        const url = process.env.BASEURL + appUrl;

        const response: AxiosResponse<AccountModel> = await httpClient.post<AccountModel>(
            url,
            account
        );
        return response.data
    };

    const update = async (account: AccountModel) => {
        const url = process.env.BASEURL + appUrl + "/" + account.id;

        const response: AxiosResponse<AccountModel> = await httpClient.patch<AccountModel>(
            url,
            account
        );
        return response.data
    };

    const remove = async (id: number) => {
        const url = process.env.BASEURL + appUrl + "/" + id;

        const response: AxiosResponse<AccountModel> = await httpClient.delete<AccountModel>(url,);
        return response.data
    };

    return {
        loadPageAccount,
        loadPageAccontById,
        create,
        update,
        remove 
    };
}