import React from "react";
import styled from 'styled-components';

const Container = styled.div`

input{
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

.icon-wrapper {
    width:18px;
    position:absolute;
    top:4px;
    right:0px;
    filter:opacity(0.35);
    cursor: pointer;
}

input::placeholder{
        color: rgba(255, 255, 255, 0.5);
        font-size: 24px;
        font-weight: 400;
    }

    
`;

const LoginInput = ( {icon, ...props} ) => {
    return (
        <Container iconExist={!!icon}>
            <input {...props}/>
            <div className="icon-wrapper">{icon}</div>
        </Container>
    )
};

export default LoginInput;