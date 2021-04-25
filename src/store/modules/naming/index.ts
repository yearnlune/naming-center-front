import state from "@/store/modules/naming/state"
import getters from "@/store/modules/naming/getters"
import mutations from "@/store/modules/naming/mutations"
import actions from "@/store/modules/naming/actions"
import {Module} from "vuex";
import {RootState} from "@/store";
import {NamingState} from "@/store/modules/naming/types";

export const NamingModule: Module<NamingState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
