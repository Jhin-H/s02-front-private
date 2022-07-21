import React from "react";
import styled from "styled-components";
import Contact from "./contact";



const Container = styled.div`

width: 50%;
margin:0 auto;

    .inputWrap{
        margin-top:30px;
    }

    .listWrap{
        margin-top:30px;
    }

    input{
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: #333 1.5px solid;
        outline: none;
        width: 150px;
        height: 25px;
        font-size: 15px;
        text-align: center;
        color: black;
        margin-bottom:20px;
        margin-right: 10px;
        
    }


    ::placeholder{

        text-align: center;
        color: #ababab;
        
    }

    button{
        width:50px;
        margin-right:10px;
    }

    h2{

        margin-top: 50px;
        margin-bottom:20px;
    }

    .btnWrap{
        margin-top:30px;
    }

`


const GroupProto = () => {

    
    return (

        <Container>

            <div className="titleWrap">
              <p className="mainTitle">Account Searching</p>
              <p className="subTitle">값을 입력해 회원을 검색하십시오.</p>
            </div>

            <div className="listWrap">

                <Contact/>
                
            </div>

            
        </Container>
    );
}
export default GroupProto;