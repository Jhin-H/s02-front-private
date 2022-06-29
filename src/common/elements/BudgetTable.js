import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    
    .tableInfo{

        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        }

        .priceInfo{
        font-size: 16px;
        margin-right: 10px;
        color: #ababab;
        }

        .budgetInfo{
        font-size: 24px;
        }

        .budgetInfo>span{
        font-weight: bold;
        }

        table {
        margin-top: 10px;
        border: 1.5px solid #333;
        width: 100%;
        height: 40%;
        text-align: center;
        border-collapse: collapse;
        
        }

        th{
        font-weight: 500;
        font-size: 16pt;
        padding: 10px 0;
        border-left: 1px solid #333 ;
        border-bottom: 1.5px solid #333;
        
        }
        td{

        padding: 15px 0;
        
        border: 1px solid #333;
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

        .filled {
            background-color: #dcdcdc;
        }
`;

const BudgetTable = () => {
    return (


        <Container>

            <div className="tableInfo">

                <p className="budgetInfo">2022년 예산액 : <span>1300만원</span></p>
                <p className="priceInfo">금액단위 : 만원</p>

            </div>
            
            <table>

            <thead>

                <tr>

                    <th className="filled">선택</th>
                    <th className="filled">번호</th>
                    <th className="filled">부서명</th>
                    <th className="filled">팀장</th>
                    <th className="filled">총무</th>
                    <th className="filled">사역명</th>
                    <th className="filled">예산액</th>
                    <th className="filled">예산비율(%)</th>
                    <th className="filled">예산잔액</th>
                    <th className="filled">인원수</th>
                    <th className="filled">비고</th>

                </tr>

            </thead>

            <tbody>

                <tr>
                    <td><input className="checkbox" type="radio"></input></td>
                    <td>1</td>
                    <td rowspan="6" className="link"><a href="../departmentBudget/departmentBudget.html">뉴웨이브공동체</a></td>
                    <td rowspan="6">팀장A</td>
                    <td rowspan="6">총무A</td>
                    <td>총괄운영비</td>
                    <td>100</td>
                    <td>8%</td>
                    <td>20</td>
                    <td>80</td>
                    <td></td>
                </tr>
                


                <tr>
                    <td><input className="checkbox" type="radio"></input></td>
                    <td>2</td>
                    <td>예배비</td>
                    <td>100</td>
                    <td>8%</td>
                    <td>20</td>
                    <td>80</td>
                    <td></td>
                </tr>
                
                <tr>
                    <td><input className="checkbox" type="radio"></input></td>
                    <td>3</td>
                    <td>수련회비</td>
                    <td>100</td>
                    <td>8%</td>
                    <td>20</td>
                    <td>80</td>
                    <td></td>
                </tr>
                
                <tr>
                    <td><input className="checkbox" type="radio"></input></td>
                    <td>4</td>
                    <td>선교비</td>
                    <td>100</td>
                    <td>8%</td>
                    <td>20</td>
                    <td>80</td>
                    <td></td>
                </tr>
                
                <tr>
                    <td><input className="checkbox" type="radio"></input></td>
                    <td>5</td>
                    <td>청년1부</td>
                    <td>100</td>
                    <td>8%</td>
                    <td>20</td>
                    <td>80</td>
                    <td></td>
                </tr>
                
                
                <tr>
                    <td><input className="checkbox" type="radio"></input></td>
                    <td>6</td>
                    <td>청년2부</td>
                    <td>100</td>
                    <td>8%</td>
                    <td>20</td>
                    <td>80</td>
                    <td></td>
                </tr>
                
                
                <tr>
                    <td><input className="checkbox" type="radio"></input></td>
                    <td>7</td>
                    <td colspan="4" className="filled">소개</td>
                    <td className="filled">100</td>
                    <td className="filled">8%</td>
                    <td className="filled">20</td>
                    <td className="filled">80</td>
                    <td></td>
                </tr>
                
            </tbody>
                


            </table>

        </Container>
    )
};

export default BudgetTable;