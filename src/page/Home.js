import React from "react";
import styled from "styled-components";
import Header from "../common/Header";

const Container = styled.div`

.wrap {
    
    position:absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background: url(/img/desk.png) no-repeat center;
    background-size: 100%;
    z-index: 0;
 
}

.inner{
  width: 90%;
  margin: 0 auto;
  padding-top: 37px;
  position: relative;
}

.headerWrap{
    background:none;
}

.mainTitle, .subTitle{
    display:none;
}


.titleWrap{
    width: 750px;
    margin: 15% auto 0 auto;
   
}


h1{
  font-size: 100pt;
  font-weight: 400;
  color: white;
  text-align: center;
  margin: 20px 0 10px 0;
  border: 3px solid white;
  border-top: none;
  border-bottom: none;
  

}

.subTitle-top{
  font-size: 1vw;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  letter-spacing: 2em;


}


.subTitle-bottom{
  font-size: 1vw;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
}



`

const Home = () =>{
    return (
        
       

        <Container>

            <Header></Header>
            

            <div className="wrap">

                <div className="inner">
                    

                    <div className="titleWrap">

                        <p className="subTitle-top">Welcome</p>

                            <h1>환영합니다</h1>

                        <p className="subTitle-bottom">왼쪽의 메뉴에서 이동할 페이지를 선택하세요</p>

                    </div>


                </div>
            </div>
        </Container>
        
        
    )
}

export default Home ;
