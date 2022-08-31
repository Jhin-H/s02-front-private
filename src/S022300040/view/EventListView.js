import React from "react";
import GroupTable from   "../../common/elements/GroupTable";
import styled from "styled-components";

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

const EventListView = () => {
    return (
      <Container>

        <table>
                <thead>
                    <tr>
                        <th className="tableHead">선택</th>
                        <th className="tableHead">번호</th>
                        <th className="tableHead">운영자</th>
                        <th className="tableHead">행사명</th>
                        <th className="tableHead">행사기간</th>
                        <th className="tableHead">예약자 수</th>
                        <th className="tableHead">참석자</th>
                        <th className="tableHead">진행상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tableData">
                            <input className="checkbox" type="checkbox"></input>
                        </td>
                        <td className="tableData">1</td>
                        <td className="tableData">운영자A</td>
                        <td className="tableData">행사명A</td>
                        <td className="tableData">2022.01.01 ~ 2022.01.01</td>
                        <td className="tableData">50</td>
                        <td className="tableData">50</td>
                        <td className="tableData">진행</td>
                    </tr>
                </tbody>
            </table>
        </Container>

    );
}
export default EventListView;