import {AccountRole, RootState} from "@/store/types";

const state: RootState = {
    accountId: "",
    accountName: "",
    accountRole: AccountRole.GUEST,
    accountJWT: ""
};

export default state
