import { action, observable, makeObservable, runInAction } from 'mobx';
import { attendList, registerAttend, deleteAttend } from '../repository/AttRepository'

class AttStore {

    constructor() {
        makeObservable(this);
    }

    // 출석 현황 검색 조건
    @observable
    _searchProps = {
        enterFlag: '',
        eventId: 6,
        hpNo : '',
        memberName: ''
    }
    get searchProps() {
        return this._searchProps;
    }
    @observable
    _attendBool = 'all'
    get attendBool() {
        return this._attendBool;
    }
    // 출석 현황 검색 결과
    @observable
    _resultAttendList = []
    get resultAttendList() {
        return this._resultAttendList;
    }
    // 체크된 멤버 memberId, eventId
    @observable
    _checkedMemId = []
    get checkedMemId() {
        return this._checkedMemId;
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
    // 출석 Y/N 판별
    @action
    setAttendBool(bool) {
        this._attendBool = bool;
    }

    // 출석 현황 검색
    @action
    async getAttendList() {
        const res = await attendList(
            this.searchProps.enterFlag,
            this.searchProps.eventId,
            this.searchProps.hpNo,
            this.searchProps.memberName
            );
        runInAction(() => {
            if (this.attendBool === 'all') {
                this._resultAttendList = res;
            } else if (this.attendBool === 'y') {
                let array = [];
                for (let i=0; i<res.length; i++) {
                    if (res[i].enterDate) {
                        array.push(res[i])
                    }
                }
                this._resultAttendList = array;
            } else if (this.attendBool === 'n') {
                let array = [];
                for (let i=0; i<res.length; i++) {
                    if (!res[i].enterDate) {
                        array.push(res[i])
                    }
                }
                this._resultAttendList = array;
            }
        });
    }
    // 출석 현황 등록
    @action
    async regAttend() {
        const res = await registerAttend(this.checkedMemId);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('등록되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
    // 출석 현황 삭제
    @action
    async delAttend() {
        const res = await deleteAttend(this.checkedMemId);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('취소되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
}

export default new AttStore();