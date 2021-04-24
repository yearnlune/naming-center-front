import Vue from "vue";
import Vuex from "vuex";
import {AccountState} from "@/store/modules/acccount/types";
import {StoreOptions} from "vuex";
import {AccountModule} from "@/store/modules/acccount";
import {NamingState} from "@/store/modules/naming/types";
import {NamingModule} from "@/store/modules/naming";

Vue.use(Vuex)

export interface RootState {
    account?: AccountState
    naming?: NamingState;
}

const storeOptions: StoreOptions<RootState> = {
    state: {},
    getters: {
        account(state) {
            return state.account || "";
        },
        naming(state) {
            return state.naming || "";
        }
    },
    mutations: {},
    actions: {},
    modules: {
        account: AccountModule,
        naming: NamingModule
    },
}

export default new Vuex.Store(storeOptions);
