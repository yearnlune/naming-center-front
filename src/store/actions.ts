import {RootMutation} from "@/store/types";

const actions = {
    loginAccount: ({ commit }: any, account: any) => {
        commit(RootMutation.LOGIN, account);
    }
}

export default actions;
