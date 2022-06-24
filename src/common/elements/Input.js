import React from "react";
import styled from 'styled-components';

const Container = styled.div`

    input {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: #333 1.5px solid;
        outline: none;
        width: 200px;
        height: 25px;
        font-size: 15px;
        text-align: center;
        color: black;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    ::placeholder{

        font-size:12px;
        text-align: center;
        color: #ababab;
        
    }

    
`;

const Input = () => {
    return (
        <Container>
            <input className="input" placeholder="값을 입력하세요">
            </input>
        </Container>
    )
};

export default Input;