import React from "react";
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

const AttListView = () => {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="tableHead">선택</th>
                        <th className="tableHead">번호</th>
                        <th className="tableHead">이름</th>
                        <th className="tableHead">행사명</th>
                        <th className="tableHead">핸드폰 번호</th>
                        <th className="tableHead">참석일시</th>
                        <th className="tableHead">출석여부</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tableData">
                            <input className="checkbox" type="checkbox"></input>
                        </td>
                        <td className="tableData">1</td>
                        <td className="tableData">NameA</td>
                        <td className="tableData">행사명A</td>
                        <td className="tableData">010-0000-0000</td>
                        <td className="tableData">2022.01.01</td>
                        <td className="tableData">Y</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
export default AttListView;