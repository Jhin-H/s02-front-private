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

const GroupTable = () => {
    return (
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
                
                    <tr>
                        <td><input className="checkbox" type="radio"></input></td>
                        <td>1</td>
                        <td>A교회</td>
                        <td>대표자A</td>
                        <td>010-0000-0000</td>
                        <td>qwerty123@naver.com</td>
                        <td>100명</td>
                    </tr>
                    
                    <tr>
                        <td><input className="checkbox" type="radio"></input></td>
                        <td>2</td>
                        <td>B교회</td>
                        <td>대표자B</td>
                        <td>010-0000-0000</td>
                        <td>qwerty123@naver.com</td>
                        <td>100명</td>
                    </tr>
                    
                    <tr>
                        <td><input className="checkbox" type="radio"></input></td>
                        <td>3</td>
                        <td>C교회</td>
                        <td>대표자C</td>
                        <td>010-0000-0000</td>
                        <td>qwerty123@naver.com</td>
                        <td>100명</td>
                    </tr>
                    
                    <tr>
                        <td><input className="checkbox" type="radio"></input></td>
                        <td>4</td>
                        <td>D교회</td>
                        <td>대표자D</td>
                        <td>010-0000-0000</td>
                        <td>qwerty123@naver.com</td>
                        <td>100명</td>
                    </tr>
                    
                    <tr>
                        <td><input className="checkbox" type="radio"></input></td>
                        <td>5</td>
                        <td>E교회</td>
                        <td>대표자E</td>
                        <td>010-0000-0000</td>
                        <td>qwerty123@naver.com</td>
                        <td>100명</td>
                    </tr>
                </tbody>

            </table>

        </Container>
    )
};

export default GroupTable;