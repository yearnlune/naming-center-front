import {AccountMutation, AccountState} from "@/store/modules/acccount/types";
import {RootState} from "@/store";
import {ActionTree} from "vuex";

const actions: ActionTree<AccountState, RootState> = {
    loginAccount({ commit }: any, account: any) {
        commit(AccountMutation.LOGIN, account);
    }
}

export default actions;
