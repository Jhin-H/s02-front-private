import { API_GET, API_POST } from '../../common/api';

// 출석 리스트 검색
const attendList = async (params) => {
    const res = await API_GET('/s022300080/attend-list', params);
    return res.data.data;
}
// 출석 등록
const registerAttend = async (registData) => {
    const res = await API_POST('/s022300080/register-attend', registData);
    return res.status;
}
// 출석 삭제
const deleteAttend = async (deleteData) => {
    const res = await API_POST('/s022300080/delete-attend', deleteData);
    return res.status;
}

export { attendList, registerAttend, deleteAttend };