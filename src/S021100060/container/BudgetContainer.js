import React from "react";
import ListView from "../view/ListView";
import SearchView from "../view/SearchView";
import styled from 'styled-components';


const Container = styled.div`

`

const BudgetContainer = () => {
    return (
        <Container>
            <SearchView/>
            <ListView/>
        </Container>
    );
}
export default BudgetContainer;