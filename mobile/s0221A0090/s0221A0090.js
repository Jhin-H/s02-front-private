
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


 
  .regBtn {

    width: 85%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 auto;
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
    top: 210px;
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

 


  input[type="date"]{
        width: 70%;
        color:#ababab;
        font-size:15px;
        text-align: center;
        border: none;
        background-color: transparent;
    }

    input[type="date"]::before {

        content:attr(data-placeholder);
        width:100%;
        color:#ababab;
    }


    input[type="date"]:focus:before,
    input[type="date"]:valid:before{
        display: none;
        
    }

    input:focus{
      outline: none;
    }


    .cell-wrap{
      width: 100%;
      position: absolute;
      top: 280px;
    }

    .cell{
      width: 100%;
      height: 70px;
      margin-bottom: 10px;
      border: 2px solid  #00878d;
      border-radius: 10px;
    
    }
    .cell-inner{
      width: 90%;
      margin: 0 auto;
      position: relative;
    }

    .cell-title{
      font-family: Apple SD Gothic Neo;
      font-size: 21px;
      font-weight: 700 ;
      padding-top: 15px;
    }

    .cell-date{

      font-size: 11px;
      line-height: 13.2px;
      font-weight: 500;
      color: #707070;
      margin-top: 5px;

    }

    .cell-date>span{
      font-size: 14px;
      font-weight: 700;
    }

    .cell-amount{
      position: absolute;
      right: 0;
      top: 22.5px;
      color: #00878d;
      font-size: 21px;
      font-weight: 800;
      line-height: 25.2px;
    }

`


const s0221A0090 = () => {
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

              <div class="cell-wrap">

                <div class="cell">
                  
                  <div class="cell-inner">

                    <div class="cell-title">A 행사 저녁식대</div>
                    <div class="cell-date"><span>직원A</span> / 22.02.01</div>
                    <div class="cell-amount">2,5000 원</div>

                  </div>

                </div>
                <div class="cell">

                  <div class="cell-inner">

                    <div class="cell-title">B 행사 저녁식대</div>
                    <div class="cell-date"><span>직원B</span> / 22.02.01</div>
                    <div class="cell-amount">40,000 원</div>

                  </div>

                </div>

                <div class="cell">

                  <div class="cell-inner">

                    <div class="cell-title">C 행사 저녁식대</div>
                    <div class="cell-date"><span>직원C</span> / 22.02.01</div>
                    <div class="cell-amount">30,000 원</div>

                </div>

                </div>
              </div>

            


          </div>

            <div class="regBtn">등록</div>
      </div>

  </Container>
  );
}

export default s0221A0090;




