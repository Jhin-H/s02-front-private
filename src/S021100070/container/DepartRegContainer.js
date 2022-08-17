import React from "react";
import styled from 'styled-components';
import ContentsLeft from '../view/ContentsLeft';
import ContentsRight from '../view/ContentsRight';



const Container = styled.div`

width: 100vw;
height : 100%;

display:flex;
align-items : center;
justify-content : space-between;

`

const BudgetContainer = () => {
    return (
        <Container>
            <ContentsLeft/>
            <ContentsRight/>
        </Container>
    );
}
export default BudgetContainer;