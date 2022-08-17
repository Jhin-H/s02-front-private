import React from "react";
import styled from 'styled-components';



const Container = styled.div`

    .PrimaryBtn {
        width: 110px;
        height: 45px;
        background: #32bea6;
        border-radius: 50px;
        color: white;
        line-height: 45px;
        text-align: center;
        font-size: 22px;
    }

    .PrimaryBtn:hover{

        cursor: pointer;
        background-color: #24ac91;

    }

    .PrimaryBtn:active{
        background-color: rgb(25, 128, 111);
    }


    `;
const primaryBtn = () => {

    return (
        <Container>

            <div className="PrimaryBtn">저장</div>

        </Container>
    )
};

export default primaryBtn;
