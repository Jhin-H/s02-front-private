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
`;

const Table = () => {
    return (
        <Container>

            <table>

                <thead>

                    <tr>

                        <th className="tableHead">번호</th>
                        <th className="tableHead">행사명</th>
                        <th className="tableHead">이름</th>
                        <th className="tableHead">핸드폰 번호</th>
                        <th className="tableHead">출입일시</th>
                    
                    </tr>

                </thead>
                
                <tbody>
                    <tr>
                        <td className="tableData">1</td>
                        <td className="tableData">A행사</td>
                        <td className="tableData">대표자</td>
                        <td className="tableData">010-0000-0000</td>
                        <td className="tableData">2022.01.01 ~ 2022.02.01</td>
                        
                    </tr>
                    
                    <tr>
                        <td className="tableData">2</td>
                        <td className="tableData">B행사</td>
                        <td className="tableData">대표자</td>
                        <td className="tableData">010-0000-0000</td>
                        <td className="tableData">2022.01.01 ~ 2022.02.01</td>
                    </tr>
                    
                    <tr>
                        <td className="tableData">3</td>
                        <td className="tableData">C행사</td>
                        <td className="tableData">대표자</td>
                        <td className="tableData">010-0000-0000</td>
                        <td className="tableData">2022.01.01 ~ 2022.02.01</td>
                    </tr>
                    
                    <tr>
                        <td className="tableData">4</td>
                        <td className="tableData">D행사</td>
                        <td className="tableData">대표자</td>
                        <td className="tableData">010-0000-0000</td>
                        <td className="tableData">2022.01.01 ~ 2022.02.01</td>
                    </tr>
                    
                    <tr>
                        <td className="tableData">5</td>
                        <td className="tableData">E행사</td>
                        <td className="tableData">대표자</td>
                        <td className="tableData">010-0000-0000</td>
                        <td className="tableData">2022.01.01 ~ 2022.02.01</td>
                    </tr>

                </tbody>
                    
                   
            </table>

        </Container>
    )
};

export default Table;