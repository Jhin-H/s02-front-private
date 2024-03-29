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
const registGroup = async (registData) => {
    const res = await axios.post('/rest/v1/s021100020/org', registData);
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
// 이메일 중복 체크
const dupEmailCheck = async (emailProps) => {
    const res = await axios.get('/rest/v1/s021100020/dup-check-email', {params: {
        email: emailProps
    }});
    return res.data.data;
}

export { getGroupList, checkGroup, registGroup, updateGroup, deleteGroup, dupEmailCheck };