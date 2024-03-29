import { action, observable, makeObservable, runInAction } from 'mobx';
import { retrieveMemberList, registerMember, updateMemberInfo, updateMemberTp, deleteMember, retrieveCode } from '../repository/MemberRepository';

class MemberStore {

    constructor() {
        makeObservable(this);
    }

    // 멤버리스트 검색 조건
    @observable
    _searchProps = {
        fromDt: '',
        memberName: '',
        memberTp: '',
        orgId : 39,
        toDt: ''
    }
    get searchProps() {
        return this._searchProps;
    }
    // 멤버리스트 검색 결과  
    @observable
    _resultRetrieveMem = []
    get resultRetrieveMem() {
        return this._resultRetrieveMem;
    }
    // 체크된 멤버 memberId, memberTp
    @observable
    _checkedMemId = []
    get checkedMemId() {
        return this._checkedMemId;
    }
    // 멤버 등록 데이터
    @observable
    _registMember = {
        accountNo: "", // 계좌번호
        address: "", // 주소
        bankNm: "", // 거래은행
        birth: "", // 생년월일
        detailAddress: "", // 상세주소
        email: "", // 이메일
        hpNo: "", // 핸드폰
        memberName: "", // 이름
        orgId: 39, // 세션에서 받아옴
        pwd: "1234", // 1234 하드코딩
        zipCode: "", // 우편번호
        firstHpNo: "",
        middleHpNo: "",
        lastHpNo: "",
        emailId: "",
        emailDomain: ""
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
    // 회원 구분 수정 데이터
    @observable
    _updateTp = {
        memberId: "",
        memberTp: ""
    }
    get updateTp() {
        return this._updateTp;
    }
    // 코드 조회 결과
    @observable
    _resCode = []
    get resCode() {
        return this._resCode;
    }
    // 요청 후 반환되는 status
    @observable
    _requestResult
    get requestResult() {
        return this._requestResult
    }

    // 입력된 검색 조건 변수에 할당
    @action
    setSearchProps(name, value) {
        this._searchProps = {
            ...this._searchProps,
            [name]: value
        }
    }
    // 체크된 멤버를 변수에 할당
    setCheckedMemId(listProps) {
        this._checkedMemId = listProps;
    }
    // 등록 폼에 입력된 데이터 할당
    @action
    setRegistProps(name, value) {
        this._registMember = {
            ...this._registMember,
            [name]: value
        }
        if (name === 'emailId' || name === 'emailDomain') {
            this._registMember = {
                ...this._registMember,
                'email': this.registMember.emailId + '@' + this.registMember.emailDomain
            }
        } else if(name === 'firstHpNo' || name === 'middleHpNo' || name === 'lastHpNo') {
            this._registMember = {
                ...this._registMember,
                'hpNo': this.registMember.firstHpNo+this.registMember.middleHpNo+this.registMember.lastHpNo
            }
        }
    }
    // 등록 데이터 초기화
    @action
    initRegistProps() {
        this._registMember = {
            accountNo: "",
            address: "",
            bankNm: "",
            birth: "",
            detailAddress: "",
            email: "",
            hpNo: "",
            memberName: "",
            orgId: 39,
            pwd: "1234",
            zipCode: "",
            firstHpNo: "",
            middleHpNo: "",
            lastHpNo: "",
            emailId: "",
            emailDomain: ""
        }
    }

    // 멤버리스트 검색
    @action
    async getRetrieveMemList() {
        const res = await retrieveMemberList();
        // const res = await retrieveMemberList(this.searchProps);
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
        // 선택한 항목의 memberId, 변경할 구분 코드 매개변수로 넣기
        const res = await updateMemberTp(this.updateTp);
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
        const props = {'memberId': this.checkedMemId[0].memberId}
        const res = await deleteMember(props);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('삭제되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
    // 코드 조회
    @action
    async retrieveCd() {
        // 나중에 orgId 매개변수로 넣기
        const res = await retrieveCode();
        runInAction(() => {
            this._resCode = res;
        })
    }
} 

export default new MemberStore();