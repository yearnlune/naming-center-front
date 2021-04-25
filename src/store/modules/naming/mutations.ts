import {MutationTree} from "vuex";
import {Naming, NamingMutation, NamingState} from "@/store/modules/naming/types";

const mutations: MutationTree<NamingState> = {
    [NamingMutation.SAVE]: (state: NamingState, payload: Naming[]) => {
        state.namingList = payload;
    },
}

export default mutations;
