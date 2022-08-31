import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import styled from 'styled-components';

const Container = styled.div`
    table {
        margin-top: 30px;
        border: 1.5px solid #333;
        border-left: none;
        border-right: none;
        width: 100%;
        height: 40%;
        text-align: center;
        border-collapse: collapse;
    }
    th{
        font-weight: 500;
        font-size: 16pt;
        padding: 10px 0;
    border-bottom: 1.5px solid #333;
    }
    td{
        padding: 15px 0;
    }
    tr:hover:not(thead>tr){
        background-color: #dcdcdc;
    }
    .checkbox{
        -webkit-appearance: none;
        position: relative;
        width: 16px;
        height: 16px;
        cursor: pointer;
        outline: none !important;
        border: 1px solid rgb(50, 190, 166);
        border-radius: 100%;
        background: #fbfbfb;
    }
    .checkbox:checked{
        background-color: rgb(50, 190, 166);
    }
`;

function GroupListView (props) {

    const { groupStore } = props;
    const [checkedList, setCheckedList] = useState(new Set());
    
    // 체크리스트 핸들러
    const checkedHandler = ({ target }) => {
        checkedItemHandler(target.checked, target.value);
        target.checked = checkedList.has(target.value) ? true : false;
    }
    const checkedItemHandler = (checked, value) => {
        if (checked) {
            checkedList.add(value);
            setCheckedList(checkedList);
            groupStore.setCheckedOrgId(Array.from(checkedList));
        } else if (!checked && checkedList.has(value)) {
            checkedList.delete(value);
            setCheckedList(checkedList);
            groupStore.setCheckedOrgId(Array.from(checkedList));
        }
    };

    useEffect(() => { // 리스트가 렌더링되면 선택 초기화
        for (let i=0; i<groupStore.groupList.length; i++) {
            document.getElementById(i+"box").checked = false;
        }
        checkedList.clear();
        setCheckedList(checkedList);
        groupStore.setCheckedOrgId(Array.from(checkedList));
    }, [groupStore.groupList, groupStore, checkedList])
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>번호</th>
                        <th>단체명</th>
                        <th>대표자</th>
                        <th>연락처</th>
                        <th>대표자 메일</th>
                        <th>회원수</th>
                    </tr>
                </thead>
                <tbody>
                    {groupStore.groupList.map((value, key) => (
                        <tr key={key}>
                            <td>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    id={Number(key)+'box'}
                                    value={value.orgId}
                                    onChange={(e) => {checkedHandler(e)}}
                                    >
                                </input>
                            </td>
                            <td>{value.orgId}</td>
                            <td>{value.orgName}</td>
                            <td>{value.memberName}</td>
                            <td>{value.hpNo}</td>
                            <td>{value.email}</td>
                            <td>{value.memberCnt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default inject('groupStore')(observer(GroupListView));