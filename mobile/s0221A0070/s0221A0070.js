
import React from "react";
import styled from 'styled-components';

<link href="https://fonts.googleapis.com/css?family=Apple+SD+Gothic+Neo&display=swap" rel="stylesheet"/>



const Container = styled.div`


  .wrap {

    width: 100%;
    height: 100%;

  }
  
  .inner{

    width: 85%;
    margin: 0 auto;
    position: relative;

  }


  .backBtn {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 37px;
    overflow: hidden;
  }

  .backBtn>img {
    width: 100%;
  }

  .title {
    width: 172px;
    height: 40px;
    position: absolute;
    top: 96px;
    overflow: hidden;
  }


  .hightlight {
    width: 113px;
    height: 19px;
    background: rgba(252, 242, 0, 0.9599999785423279);
    opacity: 1;
    position: absolute;
    top: 21px;
  }

  .title>span {
    width: 172px;
    color: rgba(29, 29, 29, 1);
    position: absolute;
    top: 0px;
    left: 0px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    font-size: 33px;
   
  }

  .btn-wrap{

    width: 85%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

 
    
  }

 
  .regBtn {
    width: 140px;
    height: 50px;
    border-radius: 50px;
    background: rgba(0, 135, 141, 1);
    color: rgba(255, 255, 255, 1);
    font-family: Apple SD Gothic Neo;
    font-weight: 500;
    font-size: 21px;
    text-align: center;
    line-height: 50px;
  }

  .delBtn {
    width: 140px;
    height: 50px;
    background: rgba(226, 56, 56, 1);
    border-radius: 50px;
    color: rgba(255, 255, 255, 1);
    font-family: Apple SD Gothic Neo;
    font-weight: 500;
    font-size: 21px;
    text-align: center;
    line-height: 50px;
  }



  .layer1{
    display: flex;
    justify-content: start;
    align-items: center;
    position: absolute;
    top: 160px;

  }
 

  .searchInput{
    width: 126px;
    height: 38px;
    border: 2px solid #707070 ;
    border-radius: 50px;
    color: #707070;
    text-align: center;
    line-height: 38px;
    font-family: Apple SD Gothic Neo;
    font-size: 16px;
    font-weight: 700;
    margin-right: 30px;
    -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
  }


  .searchBtn {
    width: 37px;
    height: 37px;
    border-radius: 50px;
    background: rgba(0, 135, 141);
  }
  .searchBtn>div{
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .searchBtn>div>img{
    width: 100%;
    margin-top: 5px;
  }

  .layer2{
  
    position: absolute;
    top: 220px;
    width: 100%;

  }

  .searchDate{

   
    width: 100%;
    height: 38px;
    border: 2px solid #707070 ;
    border-radius: 50px;
    color: #707070;
    text-align: center;
    line-height: 38px;
    display: flex;
    justify-content: space-evenly;
    
    

  }

  table{
    width: 100%;
    position: absolute;
    top: 280px;
    text-align: center;
    border-collapse: collapse;
    border-bottom: 2px solid #707070;
  }

  th{

    font-weight: 500;
    font-size: 14px;
    border-bottom: 2px solid #707070;
    padding: 5px 0;

  }

  td{

    font-weight: 200;
    font-size: 12px;
    padding: 3% 0;
  }


  .checkbox{
    -webkit-appearance: none;
          position: relative;
          width: 16px;
          height: 16px;
          cursor: pointer;
          outline: none !important;
          border: 1px solid #707070;
          border-radius: 100%;
          background: #fbfbfb;
  }
  .checkbox:checked{
    background:url(./images/checkedIcon.png) center no-repeat;
    background-size: 100%;
    border: none;
  
  }







`


const s0221A0070 = () => {
  return (
      <Container>




  <div class="wrap">
    <div class="inner">


      <div class="backBtn">
        <img src="./images/backBtnIcon.png"></img>
      </div>
      

      <div class="title">
        <div class="hightlight"></div><span>비용처리현황</span>
      </div>




        <div class="layer1">

          <select class="searchInput">
            <option>구분</option>
            <option>구분</option>
            <option>구분</option>
            <option>구분</option>
          </select>
          
          
          <div class="searchBtn">
            <div><img src="./images/searchIcon.png"></img></div>
          </div>

        </div>


        <div class="layer2">

          

          <div class="searchDate">

            <input
              type="date"
              data-placeholder="날짜선택"
              required aria-required="true"></input>
            <div class="wave">~</div>
            <input
              type="date"
              data-placeholder="날짜선택"
              required aria-required="true"></input>
              

          </div>
            
            
          
        </div>

        <div class="list-wrap">

          <table>

            <thead>

              <tr>

                <th>선택</th>
                <th>No</th>
                <th>등록일</th>
                <th>결제자</th>
                <th>상태</th>
                <th>사용금액</th>
                
              </tr>

            </thead>

            <tbody>
              
                  <tr>
                      <td><input class="checkbox" type="checkbox"></input></td>
                      <td>1</td>
                      <td>22.01.01</td>
                      <td>결제자A</td>
                      <td>요청</td>
                      <td>15,000</td>
                  </tr>

                  <tr>
                      <td><input class="checkbox" type="checkbox"></input></td>
                      <td>2</td>
                      <td>22.01.01</td>
                      <td>결제자A</td>
                      <td>요청</td>
                      <td>15,000</td>
                  </tr>
                  <tr>
                      <td><input class="checkbox" type="checkbox"></input></td>
                      <td>3</td>
                      <td>22.01.01</td>
                      <td>결제자A</td>
                      <td>요청</td>
                      <td>15,000</td>
                  </tr>
                  <tr>
                      <td><input class="checkbox" type="checkbox"></input></td>
                      <td>4</td>
                      <td>22.01.01</td>
                      <td>결제자A</td>
                      <td>요청</td>
                      <td>15,000</td>
                  </tr>
                  <tr>
                      <td><input class="checkbox" type="checkbox"></input></td>
                      <td>5</td>
                      <td>22.01.01</td>
                      <td>결제자A</td>
                      <td>요청</td>
                      <td>15,000</td>
                  </tr>
                  
                
              </tbody>

          </table>
        </div>



    </div>

    <div class="btn-wrap">

      <div class="regBtn">등록</div>

      <div class="delBtn">삭제</div>

    </div>



  </div>

         
  </Container>
  );
}

export default s0221A0070;




