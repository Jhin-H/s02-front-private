import React from 'react';
import styled from 'styled-components';
import palette from '../style/palette'; 
import DaumPostcode from 'react-daum-postcode';

const PostCodeModalWrapper = styled.div`

`;

//* Daum PostCode 디자인 스타일 
const daumPostCodeStyle = {
    //display: "block",
    //position: "absolute",
    width: "600px",
    height: "500px",
    padding: "32px",
};

const PostCodeModal = ({ submitPostCode, closeModal }) => {
    const onCompleteHandler = (data) => {
        submitPostCode(data);
        closeModal();
    };
    return (
        <DaumPostcode style={daumPostCodeStyle} onComplete={onCompleteHandler}/>
    )
}

export default PostCodeModal;