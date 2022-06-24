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
        height: 24px;
        font-size: 15px;
        text-align: center;
        margin-right: 10px;
        margin-bottom: 10px; 


    }

    ::placeholder{

        font-size:12px;
        text-align: center;
        font-size: 12px;
        
    }


    input[type="date"]::before {content:attr(data-placeholder); width: 100%; color: #ababab}
    input[type="date"]:focus::before,
    input[type="date"]:valid::before{display: none;}

    
`;

const InputDate = () => {
    return (
        <Container>
             <input class="dateSelect" type="date" data-placeholder="출입일시" required aria-required="true"></input>
        </Container>
    )
};

export default InputDate;