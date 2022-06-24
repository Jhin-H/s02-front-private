import React from "react";
import MembListView from "../view/MembListView";
import MembSearchView from "../view/MembSearchView";
import styled from 'styled-components';


const Container = styled.div`

`

const MemberContainer = () => {
    return (
        <Container>
            <MembSearchView/>
            <MembListView/>
        </Container>
    );
}
export default MemberContainer;