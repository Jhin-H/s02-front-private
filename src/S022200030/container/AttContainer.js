import React from "react";
import ListView from "../view/AttListView";
import SearchView from "../view/AttSearchView";
import styled from 'styled-components';


const Container = styled.div`

`

const AttendContainer = () => {
    return (
        <Container>
            <SearchView/>
            <ListView/>
        </Container>
    );
}
export default AttendContainer;