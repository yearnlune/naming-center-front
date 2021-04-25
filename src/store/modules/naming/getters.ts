import {GetterTree} from "vuex";
import {RootState} from "@/store";
import {NamingState} from "@/store/modules/naming/types";

const getters: GetterTree<NamingState, RootState> = {
    getNamingList: (state: NamingState) => state.namingList,
}

export default getters;
