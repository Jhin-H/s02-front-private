import React from "react";
import styled from 'styled-components';
import ContentsLeft from '../view/ContentsLeft';
import ContentsRight from '../view/ContentsRight';



const Container = styled.div`

display:flex;


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