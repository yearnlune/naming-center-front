
import {MutationTree} from "vuex";
import {RootState, RootMutation, LoginResponse} from "@/store/types";

const mutations: MutationTree<RootState> = {
    [RootMutation.LOGIN]: (state: RootState, payload: LoginResponse) => {
        state.accountId = payload.id;
        state.accountIdx = payload.idx;
        state.accountName = payload.name;
        state.accountRole = payload.role;
        state.accountJWT = payload.jwt;
    },
}

export default mutations;
