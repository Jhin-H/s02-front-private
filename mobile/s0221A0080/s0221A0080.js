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
    width: 100%;
    height: 60px;
    position: absolute;
    top: 96px;
    overflow: hidden;
    border-bottom: 3px solid #bcbcbc;
  }


  .amount-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
   
  }
  .amount{

    font-family: Apple SD Gothic Neo;
    font-weight: 700;
    font-size: 33px;
    
  }


  .status{
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    font-size: 16px;
    color: #00878D;

  }

  .date{
    font-family: Apple SD Gothic Neo;
    font-weight: 200;
    font-size: 10px;
    color: #707070;

  }


  .contents-wrap{
    width: 100%;
    position: absolute;
    top: 180px;
  }

  .contents{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5%;

  }

  .label{
    font-family: Apple SD Gothic Neo;
    color: #707070 ;
    font-weight: 200;
    font-size: 14px;
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


  textarea{

    width: 100%;
    height: 70px;
    border-radius: 20px;
    border: 3px solid #707070;
    margin-top: 10px;
    resize: none;
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
    margin-bottom: 10px;
  }

  textarea:focus{
    outline: none;
  }

  .opinion{
    height: 70px;
  }

 
  .confBtn {
    width: 95px;
    height: 40px;
    border-radius: 50px;
    background: rgba(0, 135, 141, 1);
    color: rgba(255, 255, 255, 1);
    font-family: Apple SD Gothic Neo;
    font-weight: 500;
    font-size: 21px;
    text-align: center;
    line-height: 40px;
  }

  .rejBtn {
    width: 95px;
    height: 40px;
    background: rgba(226, 56, 56, 1);
    border-radius: 50px;
    color: rgba(255, 255, 255, 1);
    font-family: Apple SD Gothic Neo;
    font-weight: 500;
    font-size: 21px;
    text-align: center;
    line-height: 40px;
  }
  .canBtn {
    width: 95px;
    height: 40px;
    background: gray;
    border-radius: 50px;
    color: rgba(255, 255, 255, 1);
    font-family: Apple SD Gothic Neo;
    font-weight: 500;
    font-size: 21px;
    text-align: center;
    line-height: 40px;
  }

`



const s0221A0080 = () => {
    return (
        <Container>
  

            <div class="wrap">
                <div class="inner">


                <div class="backBtn">
                    <img src="./images/backBtnIcon.png"></img>
                </div>



                

                <div class="title">

                    <div class="date">사용일자: 2022년 02월 13일 15:21</div>

                    <div class="amount-wrap">

                    <div class="amount">25,000 원</div>
                    <div class="status">결제요청</div>
                    
                    </div>
                </div>

                <div class="contents-wrap">

                    <div class="contents">
                    <div class="label">작성자</div><div>사원A</div>
                    </div>

                    <div class="contents">
                    <div class="label">결제자</div><div>결제자A</div>
                    </div>

                    <div class="contents">
                    <div class="label">부서</div><div>부서A</div>
                    </div>

                    <div class="contents">
                    <div class="label">첨부파일</div><div>파일A</div>
                    </div>

                    <div class="contents-textarea">
                    <div class="label">사용내역</div>
                    <textarea></textarea>
                    </div>

                    <div class="contents-textarea">
                    <div class="label">결제의견</div>
                    <textarea class="opinion"></textarea>
                    </div>

                </div>





                </div>

                <div class="btn-wrap">

                <div class="confBtn">승인</div>

                <div class="rejBtn">반려</div>

                <div class="canBtn">취소</div>

                </div>



            </div>

              
        </Container>
  );
}

export default s0221A0080;

  




         


