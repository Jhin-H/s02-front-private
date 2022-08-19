import React from 'react';
import axios from 'axios';

// const getGroupList = async ()=> {
//     const res = await axios.get('/rest/v1/s021100010/org-list', {params: {
//         orgName: '',
//         memberName: ''
//     }})
//     return res.data.data;
// }

// export default getGroupList;

const getGroupList = async ()=> {
    const res = await axios.get('/rest/v1/s022300080/attend-list', {params: {
        enterFlag: '',
        eventId: 4,
        hpNo: '',
        memberName: ''
    }})
    return res.data.data;
}

export default getGroupList;