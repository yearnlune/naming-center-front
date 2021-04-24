import {AccountRole, AccountState} from "@/store/modules/acccount/types";
import {GetterTree} from "vuex";
import {RootState} from "@/store";

const getters: GetterTree<AccountState, RootState> = {
    getAccountId: (state: AccountState) => state.accountId,
    getAccountIdx: (state: AccountState) => state.accountIdx,
    getAccountName: (state: AccountState) => state.accountName,
    getAccountRole: (state: AccountState) => state.accountRole,
    getAccountJWT: (state: AccountState) => state.accountJWT,
    isUser: (state: AccountState) => {
        return state.accountRole === AccountRole.USER;
    },
    isAdmin: (state: AccountState) => {
        return state.accountRole === AccountRole.ADMIN;
    },
    hasAccount: (state: AccountState) => state.accountIdx > 0
}

export default getters;
