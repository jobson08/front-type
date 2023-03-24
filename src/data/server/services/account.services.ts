import { Account } from "data/server/models";
import { AxiosResponse } from "axios";
import { httpClient } from "data/server/http";
import { PaginationType } from "data/server/models/pagination";

type ResultType = {
    results: Account[];
    pagination: PaginationType;
};
const appUrl = '/account'

export const useAccountService = () => {
    const loadPageUnity = async (
        page = 0,
        size = 25,
        search = "",
        order = "asc",
        sort = "name"
    ) => {
        const url = `${process.env.BASEURL + appUrl
            }/pages?page=${page}&size=${size}&order=${order}&sort=${sort}&search=${search}`;
    }
    
    const create = async (account: Account) => {
        const url = process.env.BASEURL + appUrl;

        const response: AxiosResponse<Account> = await httpClient.post<Account>(
            url,
            account
        );
        return response.data
    };

    const update = async (account: Account) => {
        const url = process.env.BASEURL + appUrl + "/" + account.id;

        const response: AxiosResponse<Account> = await httpClient.patch<Account>(
            url,
            account
        );
        return response.data
    };

    const remove = async (id: number) => {
        const url = process.env.BASEURL + appUrl + "/" + id;

        const response: AxiosResponse<Account> = await httpClient.delete<Account>(url,);
        return response.data
    };
}