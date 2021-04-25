import {ActionTree} from "vuex";
import {RootState} from "@/store";
import {NamingMutation, NamingState} from "@/store/modules/naming/types";

const actions: ActionTree<NamingState, RootState> = {
    saveNamingList({commit}: any, namingList: any) {
        commit(NamingMutation.SAVE, namingList);
    }
}

export default actions;
