
import {MutationTree} from "vuex";
import {RootState, RootMutation} from "@/store/types";

const mutations: MutationTree<RootState> = {
    [RootMutation.LOGIN]: (state: RootState, payload: any) => {
        state.accountId = payload.accountId;
        state.accountName = payload.accountName;
        state.accountRole = payload.accountRole;
        state.accountJWT = payload.accountJWT;
    },
}

export default mutations;
