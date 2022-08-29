import React from "react";
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
const MembListView = () => {
    return (
    
    <Container>

        <table>

            <thead>

            <tr>

                <th>선택</th>
                <th>번호</th>
                <th>이름</th>
                <th>회원구분</th>
                <th>등록일자</th>
                <th>연락처</th>
                <th>이메일</th>
                <th>모바일 접속일자</th>
                
            </tr>

            </thead>

            <tbody>
            
                <tr>
                    <td><input className="checkbox" type="checkbox"></input></td>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>대표</td>
                    <td>2022-01-01</td>
                    <td>010-0000-0000</td>
                    <td>randomemail@naver.com</td>
                    <td>2022-01-01</td>
                </tr>
                
            </tbody>

        </table>

    </Container>

    );
}

export default inject('memberStore')(observer(MembListView));