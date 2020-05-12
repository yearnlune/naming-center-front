import BaseService from "@/service/baseService";

let INSTANCE: AccountService;

export interface LoginRequest {
    id: string;
    password: string;
}

export enum ApiPath {
    LOGIN = 'login',
    REGISTER = 'accounts'
}

export class AccountService extends BaseService {
    constructor() {
        super();
        this.apiOriginPath = '';
    }
}

export default function accountService(): AccountService {
    if (!INSTANCE) {
        INSTANCE = new AccountService();
    }
    return INSTANCE;
}
