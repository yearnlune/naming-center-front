import BaseService from "@/service/baseService";

let INSTANCE: AccountService;

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
}

export default function accountService(): AccountService {
    if (!INSTANCE) {
        INSTANCE = new AccountService();
    }
    return INSTANCE;
}
