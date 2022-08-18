import React from "react";
import styled from 'styled-components';
import ContentsLeft from '../view/ContentsLeft';
import ContentsRight from '../view/ContentsRight';



const Container = styled.div`

width: 1130px;
height: 900px;
display:flex;
align-items : center;
justify-content : space-around;
margin:0 auto;
position:relative;
background-color:white;

.closeBtn{
    position:absolute;
    right:20px;
    top: 70px;
}

.modalBg{
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}

`

const DepartRegContainer = () => {
    return (
        <div className='modalBg'>
            <Container>
                <div className='closeBtn'>
                        <i class="fa-solid fa-xmark"></i>
                </div>
                <ContentsLeft/>
                <ContentsRight/>
            </Container>
        </div>
    );
}
export default DepartRegContainer;