import { action, observable, makeObservable, runInAction } from 'mobx';
import { getGroupList, deleteGroup, resistGroup, checkGroup, updateGroup } from '../repository/GroupRepository';

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
    // 단체 조회 데이터
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
        memberTp: null
    }
    get selectGroup() {
        return this._selectGroup;
    }
    // 단체 등록 데이터
    @observable
    _resistGroup = {
        address: "",
        detailAddress: "",
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
    get resistGroup() {
        return this._resistGroup
    }
    // 단체 수정 데이터
    @observable
    _updateGroup = {
        address: "",
        detailAddress: "",
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
    // 단체 등록 데이터 할당
    @action
    setResistProps(name, value) {
        this._resistGroup = {
            ...this._resistGroup,
            [name]: value
        }
    }
    // 단체 수정 데이터 할당
    @action
    setUpdateProps(name, value) {
        this._updateGroup = {
            ...this._updateGroup,
            [name]: value
        }
    }
    // 조회된 단체 데이터를 수정할 단체 변수에 할당
    @action
    setSelectGroupOnUpdate() {
        this._updateGroup = {
            address: this.selectGroup.address,
            detailAddress: this.selectGroup.detailAddress,
            firstHpNo: this.selectGroup.hpNo.split('-')[0],
            firstTelNo: "None",
            lastHpNo: this.selectGroup.hpNo.split('-')[2],
            lastTelNo: "None",
            memberName: "",
            middleHpNo: this.selectGroup.hpNo.split('-')[1],
            middleTelNo: "None",
            orgId: this.selectGroup.orgId,
            orgName: this.selectGroup.orgName,
            zipCode: this.selectGroup.zipCode
        }
    }

    // 검색 조건 초기화
    @action
    initSearchProps() {
        this._search = {orgName: '', memberName: ''}
    }
    // 선택된 단체 초기화
    @action
    initCheckedOrgId() {
        this._checkedOrgIdList = []
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
            memberTp: null
        }
    }
    // 단체 등록 데이터 초기화
    @action
    initResistProps() {
        this._resistGroup = {
            address: "",
            detailAddress: "",
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
    // 단체 수정 데이터 초기화
    @action
    initUpdateProps() {
        this._updateGroup = {
            address: "",
            detailAddress: "",
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
    }
    
    // 단체 리스트 출력하기
    @action
    async onSetGroupList() {
        const res = await getGroupList(this.search.orgName, this.search.memberName);
        runInAction(() => {
            this._groupList = res;
        });
    }
    // 선택한 단체 조회
    async checkSelectGroup() {
        const res = await checkGroup(this.checkedOrgIdList[0]);
        this._selectGroup = res;
    }
    // 단체 등록 요청 (작업중)
    async resistGroupList() {
        const res = await resistGroup(this.resistGroup);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                this.initResistProps();
                alert('등록되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
    // 선택한 단체 수정
    async updateSelectGroup() {
        const res = await updateGroup(this.updateGroup);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                this.initUpdateProps();
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
                // this.initSearchProps(); // store에 저장된 검색조건 초기화
                this.onSetGroupList();
                alert('삭제되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        });
    }
}

export default new GroupStore();