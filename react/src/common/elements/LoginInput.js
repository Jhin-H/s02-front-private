import React from "react";
import styled from 'styled-components';

const Container = styled.div`

     
.LoginInput {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid white;
    margin-bottom: 10px;
    background-color:transparent;
    color: white;
    width: 100%;
    height: 30px;
    margin-bottom: 10%;
    outline: none;
    font-size: 24px;

}

::placeholder{

font-size:12px;

}

    
`;

const LoginInput = () => {
    return (
        <Container>
            <input className="LoginInput">
            </input>
        </Container>
    )
};

export default LoginInput;