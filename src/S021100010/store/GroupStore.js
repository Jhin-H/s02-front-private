import { action, observable, makeObservable, runInAction } from 'mobx';
import { getGroupList, deleteGroup, registGroup, checkGroup, updateGroup, dupEmailCheck } from '../repository/GroupRepository';

class GroupStore {

    constructor() {
        makeObservable(this);
    }
    
    // 검색 조건
    @observable
    _search = {
        orgName: '',
        memberName: ''
    }
    get search() {
        return this._search;
    }
    // 단체 리스트
    @observable
    _groupList = []
    get groupList() {
        return this._groupList;
    }
    // 체크된 단체 orgId
    @observable
    _checkedOrgIdList = []
    get checkedOrgIdList() {
        return this._checkedOrgIdList;
    }
    // 단체 조회 결과
    @observable
    _selectGroup = {
        orgId: null,
        orgName: null,
        zipCode: null,
        address: null,
        detailAddress: null,
        telNo: null,
        hpNo: null,
        email: null,
        memberTp: null,
        memberName: null
    }
    get selectGroup() {
        return this._selectGroup;
    }
    // 단체 등록 데이터
    @observable
    _registGroup = {
        address: "",
        detailAddress: "",
        email: "",
        emailId: "",
        emailDomain: "",
        firstHpNo: "",
        firstTelNo: "None",
        lastHpNo: "",
        lastTelNo: "None",
        memberName: "",
        middleHpNo: "",
        middleTelNo: "None",
        orgName: "",
        zipCode: ""
    }
    get registGroup() {
        return this._registGroup
    }
    // 단체 수정 데이터
    @observable
    _updateGroup = {
        address: "",
        detailAddress: "",
        email: "",
        emailId: "",
        emailDomain: "",
        firstHpNo: "",
        firstTelNo: "None",
        lastHpNo: "",
        lastTelNo: "None",
        memberName: "",
        middleHpNo: "",
        middleTelNo: "None",
        orgId: null,
        orgName: "",
        zipCode: ""
    }
    get updateGroup() {
        return this._updateGroup
    }
    // 요청 후 반환되는 status
    @observable
    _requestResult
    get requestResult() {
        return this._requestResult
    }
    // 이메일 중복체크 결과
    @observable
    _checkEmailRes
    get checkEmailRes() {
        return this._checkEmailRes
    }
    
    // 입력된 검색 조건 변수에 할당
    @action
    setSearchProps(name, value) {
        this._search = {
            ...this._search,
            [name]: value
        }
    }
    // 체크된 단체 리스트를 변수에 할당
    @action
    setCheckedOrgId(orgIdList) {
        this._checkedOrgIdList = orgIdList     
    }
    // 단체 등록 데이터 할당, 이메일 중복체크
    @action
    async setRegistProps(name, value) {
        this._registGroup = {
            ...this._registGroup,
            [name]: value
        }
        if (name === 'emailId' || name === 'emailDomain') {
            this._registGroup = {
                ...this._registGroup,
                'email': this.registGroup.emailId + '@' + this.registGroup.emailDomain
            }
            console.log(this.registGroup.email);
            await this.emailCheck(this.registGroup.email);
        }
    }
    // 단체 수정 데이터 할당, 이메일 중복체크 할 때 조회된 이메일과 수정 폼의 이메일이 같으면 중복체크X
    @action
    async setUpdateProps(name, value) {
        this._updateGroup = {
            ...this._updateGroup,
            [name]: value
        }
        if (name === 'emailId') {
            this._updateGroup = {
                ...this._updateGroup,
                'email': this.updateGroup.emailId + '@' + this.updateGroup.emailDomain
            }
            if(this.updateGroup.email === this.selectGroup.email) {
                this._checkEmailRes = true;
            } else {
                await this.emailCheck(this.updateGroup.email);
            }
        } else if (name === 'emailDomain') {
            this._updateGroup = {
                ...this._updateGroup,
                'email': this.updateGroup.emailId + '@' + this.updateGroup.emailDomain
            }
            if(this.updateGroup.email === this.selectGroup.email) {
                this._checkEmailRes = true;
            } else {
                await this.emailCheck(this.updateGroup.email);
            }
        }
    }
    // 조회된 단체 데이터를 수정할 단체 변수에 할당
    @action
    setSelectGroupOnUpdate() {
        this._updateGroup = {
            address: this.selectGroup.address,
            detailAddress: this.selectGroup.detailAddress,
            email: this.selectGroup.email,
            emailId: this.selectGroup.email.split('@')[0],
            emailDomain: this.selectGroup.email.split('@')[1],
            firstHpNo: this.selectGroup.hpNo.split('-')[0],
            firstTelNo: "None",
            lastHpNo: this.selectGroup.hpNo.split('-')[2],
            lastTelNo: "None",
            memberName: this.selectGroup.memberName,
            middleHpNo: this.selectGroup.hpNo.split('-')[1],
            middleTelNo: "None",
            orgId: this.selectGroup.orgId,
            orgName: this.selectGroup.orgName,
            zipCode: this.selectGroup.zipCode
        }
    }

    // 선택된 단체 조회 정보 초기화
    @action
    initSelectGroup() {
        this._selectGroup = {
            orgId: null,
            orgName: null,
            zipCode: null,
            address: null,
            detailAddress: null,
            telNo: null,
            hpNo: null,
            email: null,
            memberTp: null,
            memberName: null
        }
    }
    // 단체 등록 데이터 초기화
    @action
    initRegistProps() {
        this._registGroup = {
            address: "",
            detailAddress: "",
            email: "",
            firstHpNo: "",
            firstTelNo: "None",
            lastHpNo: "",
            lastTelNo: "None",
            memberName: "",
            middleHpNo: "",
            middleTelNo: "None",
            orgName: "",
            zipCode: ""
        }
    }
    
    // 검색 조건에 따른 단체 리스트 출력
    @action
    async onSetGroupList() {
        const res = await getGroupList(this.search);
        runInAction(() => {
            this._groupList = res;
        });
    }
    // 단체 등록 요청
    async registGroupList() {
        const res = await registGroup(this.registGroup);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                this.onSetGroupList();
                alert('등록되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
    // 선택한 단체 조회
    async checkSelectGroup() {
        const res = await checkGroup(this.checkedOrgIdList[0]);
        this._selectGroup = res;
    }
    // 선택한 단체 수정
    async updateSelectGroup() {
        const res = await updateGroup(this.updateGroup);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('수정되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
    // 선택한 단체 삭제
    async deleteGroupList() {
        const res = await deleteGroup(this.checkedOrgIdList);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                this.onSetGroupList();
                alert('삭제되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        });
    }
    // 이메일 중복 체크
    async emailCheck(emailProps) {
        const res = await dupEmailCheck(emailProps);
        runInAction(() => {
            this._checkEmailRes = res;
        })
    }

}

export default new GroupStore();