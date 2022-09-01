import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import styled from 'styled-components';

const Container = styled.div`
    table {
        margin-top: 30px;
        border: 2px solid #333;
        border-left: none;
        border-right: none;
        width: 100%;
        height: 40%;
        text-align: center;
        border-collapse: collapse;
    }
    .tableHead {
        font-weight: 500;
        font-size: 16pt;
        padding: 10px 0;
        border-bottom: 1.5px solid #333;
    }
    .tableData {
        font-size: 16px;
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
    .selectBox{
        color: #333;
    }
`;

const AttListView = (props) => {

    const { attStore } = props;
    const [checkedList, setCheckedList] = useState(new Set());
    const [checkedListProps, setCheckedListProps] = useState(new Set());
    const [eventId, setEventId] = useState();

    // 체크리스트 핸들러
    const checkedHandler = ({ target }) => {
        checkedItemHandler(target.checked, target.value);
        target.checked = checkedList.has(target.value) ? true : false;
    }
    const checkedItemHandler = (checked, value) => {
        let checkedListVal = {eventId: eventId, memberId: value};
        if (checked) {
            checkedList.add(value);
            checkedListProps.add(checkedListVal);
            attStore.setCheckedMemId(Array.from(checkedListProps));
        } else if (!checked && checkedList.has(value)) {
            checkedList.delete(value);
            checkedListProps.forEach((v) => {
                if (v.memberId === value) {
                    checkedListProps.delete(v);
                }
            });
            attStore.setCheckedMemId(Array.from(checkedListProps));
        }
    };

    useEffect(() => { // 리스트가 렌더링되면 선택 초기화
        for (let i=0; i<attStore.resultAttendList.length; i++) {
            document.getElementById(i+"box").checked = false;
        }
        checkedList.clear();
        checkedListProps.clear();
        setCheckedList(checkedList);
        setCheckedListProps(checkedListProps);
        attStore.setCheckedMemId(Array.from(checkedListProps));
    }, [attStore.resultAttendList, attStore, checkedList, checkedListProps])

    useEffect(() => {
        if (attStore.resultAttendList.length > 0) {
            setEventId(attStore.resultAttendList[0].eventId);
        }
    }, [eventId, attStore.resultAttendList])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="tableHead">선택</th>
                        <th className="tableHead">번호</th>
                        <th className="tableHead">행사명</th>
                        <th className="tableHead">이름</th>
                        <th className="tableHead">핸드폰 번호</th>
                        <th className="tableHead">참석일시</th>
                        <th className="tableHead">출석여부</th>
                    </tr>
                </thead>
                <tbody>
                    {attStore.resultAttendList.map((value, key) => (
                        <tr key={key}>
                            <td className="tableData">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    id={Number(key)+'box'}
                                    value={value.memberId}
                                    onChange={(e) => {checkedHandler(e)}}
                                    >
                                </input>
                            </td>
                            <td className="tableData">{key+1}</td>
                            <td className="tableData">{value.eventNm}</td>
                            <td className="tableData">{value.memberName}</td>
                            <td className="tableData">{value.hpNo.substring(0, 3)+'-'+value.hpNo.substring(3, 7)+'-'+value.hpNo.substring(7)}</td>
                            <td className="tableData">{value.enterDate}</td>
                            <td className="tableData">{value.enterDate ? 'Y' : 'N'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

export default inject('attStore')(observer(AttListView));