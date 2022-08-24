import axios from 'axios';

// 단체 리스트 출력
const getGroupList = async (org, mem)=> {
    const res = await axios.get('/rest/v1/s021100010/org-list', {params: {
        orgName: org,
        memberName: mem
    }});
    return res.data.data;
}
// 특정 단체 정보 조회
const checkGroup = async (checkedOrgId) => {
    const res = await axios.get('/rest/v1/s021100020/org', {params: {
        orgId: checkedOrgId
    }});
    return res.data.data
}
// 단체 등록
const resistGroup = async (resistData) => {
    const res = await axios.post('/rest/v1/s021100020/org', resistData);
    return res.status;
}
// 단체 수정
const updateGroup = async (updateData) => {
    const res = await axios.post('/rest/v1/s021100020/patch-org', updateData);
    return res.status;
}
// 단체 삭제
const deleteGroup = async (orgIdList) => {
    const res = await axios.post('/rest/v1/s021100010/org-list', orgIdList);
    return res.status;
}

export { getGroupList, checkGroup, resistGroup, updateGroup, deleteGroup };