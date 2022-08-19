import { computed, action, observable } from 'mobx';
import getUserDate from '../repository/GroupRepository';

// observable: 관측되는 스테이트
class GroupStore {

    @observable
    _group = '';

    @action
    get group() {
        return this._group;
    }

}

// 자바스크립트 클래스이기 때문에 new로 객체생성 후 export
export default new GroupStore();