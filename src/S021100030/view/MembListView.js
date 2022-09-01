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
        font-size : 14px
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

const MembListView = (props) => {

    const { memberStore } = props;
    const [checkedList, setCheckedList] = useState(new Set());
    const [checkedListProps, setCheckedListProps] = useState(new Set());

    // 체크리스트 핸들러
    const checkedHandler = ({ target }) => {
        checkedItemHandler(target.checked, target.value);
        target.checked = checkedList.has(target.value) ? true : false;
    }
    const checkedItemHandler = (checked, value) => {
        let checkedListVal = {memberTp: 'memberTp', memberId: value};
        if (checked) {
            checkedList.add(value);
            checkedListProps.add(checkedListVal);
            memberStore.setCheckedMemId(Array.from(checkedListProps));
        } else if (!checked && checkedList.has(value)) {
            checkedList.delete(value);
            checkedListProps.forEach((v) => {
                if (v.memberId === value) {
                    checkedListProps.delete(v);
                }
            });
            memberStore.setCheckedMemId(Array.from(checkedListProps));
        }
    };

    useEffect(() => { // 리스트가 렌더링되면 선택 초기화
        for (let i=0; i<memberStore.resultRetrieveMem.length; i++) {
            document.getElementById(i+"box").checked = false;
        }
        checkedList.clear();
        checkedListProps.clear();
        setCheckedList(checkedList);
        setCheckedListProps(checkedListProps);
        memberStore.setCheckedMemId(Array.from(checkedListProps));
    }, [memberStore.resultRetrieveMem, memberStore, checkedList, checkedListProps])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="tableData">선택</th>
                        <th className="tableData">번호</th>
                        <th className="tableData">이름</th>
                        <th className="tableData">회원구분</th>
                        <th className="tableData">등록일자</th>
                        <th className="tableData">연락처</th>
                        <th className="tableData">이메일</th>
                        <th className="tableData">모바일 접속일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tableData">
                            <input
                                type="checkbox"
                                className="checkbox"
                                // id={Number(key)+'box'}
                                // value={value.memberId}
                                onChange={(e) => {checkedHandler(e)}}
                                >
                            </input>
                        </td>
                        <td className="tableData">1</td>
                        <td className="tableData">John Doe</td>
                        <td className="tableData">대표</td>
                        <td className="tableData">2022-01-01</td>
                        <td className="tableData">010-0000-0000</td>
                        <td className="tableData">randomemail@naver.com</td>
                        <td className="tableData">2022-01-01</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}

export default inject('memberStore')(observer(MembListView));