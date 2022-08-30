import axios from 'axios';

// 멤버 리스트 검색
const retrieveMemberList = async (fDt, name, tp, id, tDt) => {
    const res = await axios.get('/rest/v1/s021100030/retrieve-member-list', {params: {
        fromDt: fDt,
        memberName: name,
        memberTp: tp,
        orgId : id,
        toDt: tDt
    }});
    return res.data.data;
}
// 멤버 등록
const registerMember = async (registData) => {
    const res = await axios.post('/rest/v1/s021100040/register-member', registData);
    return res.status;
}
// 멤버 수정
const updateMemberInfo = async (updateData) => {
    const res = await axios.post('/rest/v1/s021100040/update-member-info', updateData);
    return res.status;
}
// 멤버 회원구분 수정
const updateMemberTp = async (memberIdTp) => {
    const res = await axios.post('/rest/v1/s021100030/update-member-tp', memberIdTp);
    return res.status
}
// 멤버 삭제
const deleteMember = async (memberId) => {
    const res = await axios.post('rest/v1/s021100030/delete-member', memberId);
    return res.status;
}
// 코드 조회
const retrieveCode = async () => {
    const res = await axios.get('/rest/v1/common/retrieve-code', {params: {
        category: '001',
        cdTp: 'Member_Tp',
        orgId: 39
    }});
    return res.data.data
}

export { retrieveMemberList, registerMember, updateMemberInfo, updateMemberTp, deleteMember, retrieveCode };