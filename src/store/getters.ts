import {AccountRole, RootState} from "@/store/types";

const getters = {
    getAccountId: (state: RootState) => state.accountId,
    getAccountIdx: (state: RootState) => state.accountIdx,
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
