import state from "@/store/modules/acccount/state"
import getters from "@/store/modules/acccount/getters"
import mutations from "@/store/modules/acccount/mutations"
import actions from "@/store/modules/acccount/actions"
import {AccountState} from "@/store/modules/acccount/types";
import {Module} from "vuex";
import {RootState} from "@/store/modules/types";

export const AccountModule: Module<AccountState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
