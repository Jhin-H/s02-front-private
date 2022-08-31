import { action, observable, makeObservable, runInAction } from 'mobx';
import { attendList, registerAttend, deleteAttend } from '../repository/AttRepository'
import { toJS } from 'mobx';

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
    // 출석 현황 검색 결과
    @observable
    _resultAttendList = []
    get resultAttendList() {
        return this._resultAttendList;
    }
    // 체크된 멤버 memberId
    @observable
    _checkedMemId = []
    get checkedMemId() {
        return this._checkedMemId;
    }
    // 출석 현황 등록/삭제
    @observable
    _attendUpdate = {
        eventId: 6,
        memberId: null
    }
    get attendUpdate() {
        return this._attendUpdate;
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
        console.log(toJS(this.checkedMemId));
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
            this._resultAttendList = res;
        });
    }
    // 출석 현황 등록
    @action
    async regAttend() {
        const res = await registerAttend(this.attendUpdate);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('수정되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
    // 출석 현황 삭제
    @action
    async delAttend() {
        const res = await deleteAttend(this.attendUpdate);
        runInAction(() => {
            this._requestResult = res;
            if (this.requestResult === 200) {
                alert('수정되었습니다.');
            } else {
                alert('잠시 후 다시 시도해주세요.\n같은 문제가 반복해서 발생할 경우 문의 부탁드립니다.');
            }
        })
    }
}

export default new AttStore();