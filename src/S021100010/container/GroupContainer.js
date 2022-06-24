import React from "react";
import ListView from "../view/GroupListView";
import SearchView from "../view/GroupSearchView";
import styled from 'styled-components';


const Container = styled.div`

`

const GroupContainer = () => {
    return (
        <Container>
            <SearchView/>
            <ListView/>
        </Container>
    );
}
export default GroupContainer;