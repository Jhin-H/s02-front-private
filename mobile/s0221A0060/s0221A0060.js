
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

  .requestBtn{

    width: 288px;
    height: 80px;
    background-color: #00878d;
    margin: 0 auto;
    border-radius: 50px;
    text-align: center;
    color: white;
    font-size: 40px;
    font-weight: 800;
    line-height: 80px;
    font-family: Apple SD Gothic Neo;
  }

  .form{
    width: 100%;
    position: absolute;
    top: 170px;
  }

  .inputWrap{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 7%;
    position: relative;
  }

  .label{
    font-family: Apple SD Gothic Neo;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }

  input{
    width: 70%;
    border: none;
    border-bottom: 3px solid #707070;
  }

  select{

    width: 70%;
    border: none;
    border-bottom: 3px solid #707070;
  }

  textarea{

    width: 100%;
    height: 70px;
    border-radius: 20px;
    border: 3px solid #707070;
    margin-top: 10px;
    resize: none;
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
  }

  .won, .searchBtn, .addBtn{
    position: absolute;
    right: 0;
  }

  .won{
    font-family: Apple SD Gothic Neo;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }

  .searchBtn{
    width: 22px;
    height: 22px;
    margin-top: -5px;
  }

  .searchBtn>img{
    width: 100%;
  }

  .addBtn{
    width: 22px;
    height: 22px;
    background-color: #00878d;
    border-radius: 50px;
    margin-top: -5px;
  }
  .addBtn>img{
    width: 80%;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5px;
   
  }

  input:focus{
    outline:none;
  }

  textarea:focus{
    outline:none;
  }
 

  



`


const s0221A0060 = () => {
  return (
      <Container>

        <div class="wrap">
        <div class="inner">


          <div class="backBtn">
            <img src="./images/backBtnIcon.png"></img>
          </div>
          

          <div class="title">
            <div class="hightlight"></div><span>비용작성</span>
          </div>

          <div class="form">

            <div class="inputWrap">

              <div class="label">제목</div>

              <input></input>

            </div>

            <div class="inputWrap">

              <div class="label">구분</div>

              <select></select>

            </div>

            <div class="inputWrap">

              <div class="label">사용일자</div>
              <div class="searchBtn"><img src="./images/magnifying-glass.png"></img></div>

              <input></input>

            </div>

            <div class="inputWrap">

              <div class="label">사용금액</div>
              
              <input></input>
              <div class="won">원</div>

            </div>

            <div class="inputWrap">

              <div class="label">첨부파일</div>
              <div class="addBtn"><img src="./images/plus.png"></img></div>

              <input></input>

            </div>

            <div class="textfieldWrap">
              <div class="label">사용내역</div>
              <textarea></textarea>
            </div>

          </div>





        </div>

        <div class="btn-wrap">

          <div class="requestBtn">비용요청</div>

        </div>



        </div>

  </Container>
  );
}

export default s0221A0060;




