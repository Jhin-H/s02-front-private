import { observable } from "mobx";

export const authStore = observable({
    authenticated: false,
    email: "",
    memberName: "",
    memberTp: "",
    memberId: 0,
    orgId: 0,
    accessToken: "",
    refreshToken: "",

    /** Action */
    setAuthenticated(memberInfo) {
        if(!memberInfo) return null;
        this.authenticated = true;
        this.email = memberInfo.email;
        this.memberName = memberInfo.memberName;
        this.memberTp = memberInfo.memberTp;
        this.memberId = memberInfo.memberId;
        this.orgId = memberInfo.orgId;
        this.accessToken = memberInfo.accessToken;
        this.refreshToken = memberInfo.refreshToken;
    },

    logout() {
        this.authenticated = false;
        this.email = '';
        this.memberName = '';
        this.memberTp = '';
        this.memberId = 0;
        this.orgId = 0;
        this.accessToken = '';
        this.refreshToken = '';
    }
});


