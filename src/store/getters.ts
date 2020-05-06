import {AccountRole, RootState} from "@/store/types";

const getters: any = {
    getAccountId: (state: RootState) => state.accountId,
    getAccountName: (state: RootState) => state.accountName,
    getAccountRole: (state: RootState) => state.accountRole,
    getAccountJWT: (state: RootState) => state.accountJWT,
    isUser: (state: RootState) => {
        return state.accountRole === AccountRole.USER;
    },
    isAdmin: (state: RootState) => {
        return state.accountRole === AccountRole.ADMIN;
    }
}

export default getters;
