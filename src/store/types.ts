export interface RootState {
    accountId: string;
    accountIdx: number;
    accountName: string;
    accountRole: AccountRole;
    accountJWT: string;
}

export enum AccountRole {
    GUEST = "ROLE_GUEST",
    USER = "ROLE_USER",
    ADMIN = "ROLE_ADMIN"
}

export enum RootMutation {
    LOGIN = "LOGIN"
}

export interface LoginResponse {
    id: string;
    idx: number;
    name: string;
    role: AccountRole;
    jwt: string;
}
