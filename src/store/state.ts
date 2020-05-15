import {AccountRole, RootState} from "@/store/types";

const state: RootState = {
    accountId: "",
    accountIdx: -1,
    accountName: "",
    accountRole: AccountRole.GUEST,
    accountJWT: ""
};

export default state
