import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
    margin-right: 10px;
    margin-bottom: 10px;
    
textarea {
    width: 300px;
    height: 50px;
    margin: 10px 0;
    outline: none;
}
`;

const Textarea = ( {label, icon, ...props} ) => {
    return (
        <Container iconExist={!!icon}>
            <label>{label}</label>
            <textarea style="resize: none;" placeholder="행사내용을 입력해주세요" {...props} />
            <div className="icon-wrapper">{icon}</div>
        </Container>
    )
};

export default Textarea;
