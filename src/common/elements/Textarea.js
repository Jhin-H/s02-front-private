import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
    margin-right: 10px;
    margin-bottom: 10px;
        
    textarea {
        width: 430px;
        height: 50px;
        margin: 10px 0;
        outline: none;
        resize:none;
    }
`;

const Textarea = () => {
    return (
        <Container>
            <label>행사내용</label>
            <textarea placeholder="행사내용을 입력해주세요" />
        </Container>
    )
};

export default Textarea;
