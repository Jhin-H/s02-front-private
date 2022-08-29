import React from "react";
import styled from 'styled-components';

const Icon = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 100%;
    border: 1.5px solid #333;
    margin-right: 10px;
    color: #333;
    font-size: 10px;
    position: relative;


    img {
      display:block;
      width: 45%;
      margin:0 auto;
      margin-top:5px;
    }

    p {
      margin:0 auto;
      margin-top:4px;
      text-align:center;
    }
    :hover{
    border: rgb(50, 190, 166) 1.5px solid;
    background-color: rgb(50, 190, 166);
    color: white;
  }
  
    :hover img{
    filter: invert(99%) sepia(6%) saturate(377%) hue-rotate(64deg) brightness(116%) contrast(100%);
  }
  
    :active{
    background-color: rgb(25, 128, 111);
    border: 1px solid rgb(25, 128, 111);
  }

`;

const ImgPrimaryBtn = ({ iconText, ...props}) => {

    let imgSrc = '' ;
    if(iconText === '등록'){
      imgSrc = '../img/registIcon.svg' ;
    }else if(iconText === '수정'){
      imgSrc = '../img/editIcon.svg' ;
    }else if(iconText === '삭제'){
      imgSrc = '../img/deleteIcon.svg' ;
    }else if(iconText === '운영자등록'){
      imgSrc = '../img/adminPlus.svg' ;
    }else if(iconText === '운영자삭제'){
      imgSrc = '../img/adminDelete.svg' ;
    }else if(iconText === '다운로드'){
      imgSrc = '../img/downloadIcon.svg' ;
    }else if(iconText === '업로드'){
      imgSrc = '../img/uploadIcon.svg' ;
    }else if(iconText === '예산등록'){
      imgSrc = '../img/costIcon.svg' ;
    }
    else if(iconText === '비용등록'){
      imgSrc = '../img/costIcon.svg' ;
    }
    

    return (
        <Icon {...props}>           
            <img src={imgSrc}></img>
            <p>{iconText}</p>
        </Icon>
    )
};

export default ImgPrimaryBtn;