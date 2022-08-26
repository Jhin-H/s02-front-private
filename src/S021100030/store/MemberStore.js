import { action, observable, makeObservable, runInAction } from 'mobx';
import { retrieveMemberList, registerMember, updateMemberInfo, updateMemberTp, deleteMember } from '../repository/MemberRepository';

class MemberStore {

    constructor() {
        makeObservable(this);
    }

    // 멤버리스트 검색 조건
    @observable
    _retrieveMemList = {
        fromDt: '',
        memberName: '',
        memberTp: '',
        orgId : '',
        toDt: ''
    }
    get retrieveMemList() {
        return this._retrieveMemList;
    }
    // 멤버리스트 검색 결과  
    @observable
    _resultRetrieveMem = []
    get resultRetrieveMem() {
        return this._resultRetrieveMem;
    }
    // 멤버 등록 데이터
    @observable
    _registMember = { // 회원구분, 부서, 소속교구, 차량번호
        accountNo: "",
        address: "", // 주소
        backNm: "",
        birth: "", // 생년월일
        detailAddress: "", // 상세주소
        email: "", // 이메일
        hpNo: "", // 핸드폰
        memberName: "", // 이름
        orgId: null,
        pwd: "", // 1234 하드코딩
        zipCode: "" // 우편번호
    }
    get registMember() {
        return this._registMember;
    }
    // 멤버 수정 데이터
    @observable
    _updateMember = {
        accountNo: "",
        address: "",
        bankNm: "",
        birth: "",
        detailAddress: "",
        email: "",
        hpNo: "",
        memberId: null,
        memberName: "",
        zipCode: ""
    }
    get updateMember() {
        return this._updateMember;
    }
    // 요청 후 반환되는 status
    @observable
    _requestResult
    get requestResult() {
        return this._requestResult
    }

    // 멤버리스트 검색 결과
    @action
    async getRetrieveMemList() {
        const res = await retrieveMemberList(
            this._retrieveMemList.fromDt,
            this._retrieveMemList.memberName,
            this._retrieveMemList.memberTp,
            this._retrieveMemList.orgId,
            this._retrieveMemList.toDt
            );
        runInAction(() => {
            this._resultRetrieveMem = res;
        });
    }
    // 멤버 등록
    @action
    async registerMem() {
        const res = await registerMember(this.registMember);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('등록되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
    // 멤버 수정
    @action
    async updateMem() {
        const res = await updateMemberInfo(this.updateMember);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('수정되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
    // 멤버 회원구분 수정
    @action
    async updateMemTp() {
        // 선택한 항목의 memberId 매개변수로 넣기
        const res = await updateMemberTp();
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('수정되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
    // 멤버 삭제
    @action
    async deleteMem() {
        // 선택한 항목의 memberId 매개변수로 넣기
        const res = await deleteMember();
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('삭제되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
} 

export default new MemberStore();