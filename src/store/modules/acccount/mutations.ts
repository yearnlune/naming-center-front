import {MutationTree} from "vuex";
import {AccountState, AccountMutation, LoginResponse} from "@/store/modules/acccount/types";

const mutations: MutationTree<AccountState> = {
    [AccountMutation.LOGIN]: (state: AccountState, payload: LoginResponse) => {
        state.accountId = payload.id;
        state.accountIdx = payload.idx;
        state.accountName = payload.name;
        state.accountRole = payload.role;
        state.accountJWT = payload.jwt;
    },
}

export default mutations;
