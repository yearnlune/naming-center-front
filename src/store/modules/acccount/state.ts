import {AccountRole, AccountState} from "@/store/modules/acccount/types";

const state: AccountState = {
    accountId: "",
    accountIdx: -1,
    accountName: "",
    accountRole: AccountRole.GUEST,
    accountJWT: ""
};

export default state
