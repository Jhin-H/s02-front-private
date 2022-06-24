import React from "react";
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

tr:hover:not(:first-child){
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

const SignTable = () => {
    return (
        <Container>

            <table>
                <th>선택</th>
                <th>번호</th>
                <th>등록일자</th>
                <th>사용일자</th>
                <th>부서명</th>
                <th>등록자</th>
                <th>결재자</th>
                <th>진행상태</th>
                <th>제목</th>
                <th>사용금액</th>
                
                    <tr>
                        <td><input class="checkbox" type="radio"></input></td>
                        <td>1</td>
                        <td>2022.01.01</td>
                        <td>2022.01.01</td>
                        <td>부서명A</td>
                        <td>등록자A</td>
                        <td>결제자A</td>
                        <td>결재요청</td>
                        <td>부서식대</td>
                        <td>50,000원</td>
                    </tr>
                    
                
                    <tr>
                        <td><input class="checkbox" type="radio"></input></td>
                        <td>2</td>
                        <td>2022.01.01</td>
                        <td>2022.01.01</td>
                        <td>부서명B</td>
                        <td>등록자B</td>
                        <td>결제자B</td>
                        <td>결재요청</td>
                        <td>부서식대</td>
                        <td>50,000원</td>
                    </tr>
                    
                
                    <tr>
                        <td><input class="checkbox" type="radio"></input></td>
                        <td>3</td>
                        <td>2022.01.01</td>
                        <td>2022.01.01</td>
                        <td>부서명C</td>
                        <td>등록자C</td>
                        <td>결제자C</td>
                        <td>결재요청</td>
                        <td>부서식대</td>
                        <td>50,000원</td>
                    </tr>
                    
                
                    <tr>
                        <td><input class="checkbox" type="radio"></input></td>
                        <td>4</td>
                        <td>2022.01.01</td>
                        <td>2022.01.01</td>
                        <td>부서명D</td>
                        <td>등록자D</td>
                        <td>결제자D</td>
                        <td>결재요청</td>
                        <td>부서식대</td>
                        <td>50,000원</td>
                    </tr>
                    
                
                    <tr>
                        <td><input class="checkbox" type="radio"></input></td>
                        <td>5</td>
                        <td>2022.01.01</td>
                        <td>2022.01.01</td>
                        <td>부서명E</td>
                        <td>등록자E</td>
                        <td>결제자E</td>
                        <td>결재요청</td>
                        <td>부서식대</td>
                        <td>50,000원</td>
                    </tr>
                    
                  

            </table>

        </Container>
    )
};

export default SignTable;