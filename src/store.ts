import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import state from "@/store/modules/acccount/state"
import getters from "@/store/modules/acccount/getters"
import mutations from "@/store/modules/acccount/mutations"
import actions from "@/store/modules/acccount/actions"
import {RootState} from "@/store/modules/types";
import {AccountModule} from "@/store/modules/acccount";

Vue.use(Vuex)

const storeOptions: StoreOptions<RootState> = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    account: AccountModule
  },
  strict: process.env.NODE_ENV !== 'production'
}

const store = new Vuex.Store(storeOptions);

export default store;
