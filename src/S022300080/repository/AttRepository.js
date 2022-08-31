import axios from 'axios';

// 출석 리스트 검색
const attendList = async (flag, id, hp, name) => {
    const res = await axios.get('/rest/v1/s022300080/attend-list', {params: {
        enterFlag: flag,
        eventId: id,
        hpNo : hp,
        memberName: name
    }});
    return res.data.data;
}
// 출석 등록
const registerAttend = async (registData) => {
    const res = await axios.post('/rest/v1/s022300080/register-attend', registData);
    return res.status;
}
// 출석 삭제
const deleteAttend = async (deleteData) => {
    const res = await axios.post('/rest/v1/s022300080/register-attend', deleteData);
    return res.status;
}

export { attendList, registerAttend, deleteAttend };