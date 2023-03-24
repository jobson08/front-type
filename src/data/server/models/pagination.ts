import { Account } from "data/server/models/Account";
export type PaginationType = {
    length: number;
    size: number;
    lastPage: number;
    page: number;
    startIndex: number;
    endIndex: number;
  };