import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
    margin-right: 10px;
    margin-bottom: 10px;
    
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
        margin-bottom:20px;
        
    }

    input[type="date"]{
        color:#ababab;
        font-size:15px;
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


    ::placeholder{

        text-align: center;
        color: #ababab;
        
    }

    label{
        position:absolute;
        top:-35px;
    }

    .icon-wrapper {
        width:18px;
        position:absolute;
        top:4px;
        right:0px;
        filter:opacity(0.35);
        cursor: pointer;
    }
`;



const Input = ( {label, icon, ...props} ) => {
    return (
        <Container iconExist={!!icon}>
            <label>{label}</label>
            <input {...props} />
            <div className="icon-wrapper">{icon}</div>

        </Container>
    )
};



export default Input;