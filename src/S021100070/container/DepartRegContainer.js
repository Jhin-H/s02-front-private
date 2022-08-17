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

.closeBtn{
    position:absolute;
    right:20px;
    top: 70px;
}

`

const DepartRegContainer = () => {
    return (
        <Container>
             <div className='closeBtn'>
                    <i class="fa-solid fa-xmark"></i>
            </div>
            <ContentsLeft/>
            <ContentsRight/>
        </Container>
    );
}
export default DepartRegContainer;