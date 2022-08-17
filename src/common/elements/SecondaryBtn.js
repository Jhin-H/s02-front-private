import React from "react";
import styled from 'styled-components';



const Container = styled.div`

    .SecondaryBtn {
        width: 110px;
        height: 45px;
        background: #a2a2a2;
        border-radius: 50px;
        color: white;
        line-height: 45px;
        text-align: center;
        font-size: 22px;
    }
    .SecondaryBtn:hover{

        cursor: pointer;
        background-color: #b1b1b1;
    }

    .SecondaryBtn:active{
        background-color: #747474;
    }


    `;
const SecondaryBtn = () => {

    return (
        <Container>

            <div className="SecondaryBtn">취소</div>

        </Container>
    )
};

export default SecondaryBtn;
