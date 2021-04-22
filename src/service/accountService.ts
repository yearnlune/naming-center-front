import BaseService from "@/service/baseService";

export interface LoginRequest {
    id: string;
    password: string;
}

export interface TokenValidationRequest {
    jwt: string;
}

export enum ApiPath {
    LOGIN = 'login',
    REGISTER = 'account',
    VALIDATE = 'validate'
}

export class AccountService extends BaseService {
    constructor() {
        super();
    }

    logout() {
        localStorage.removeItem("jwt");
        location.href = `/signin`;
    }
}

export const accountService: AccountService = new AccountService();
