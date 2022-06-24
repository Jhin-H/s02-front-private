import React from "react";
import SignSearchView from "../view/SignSearchView";
import SignListView from "../view/SignListView";
import styled from 'styled-components';


const Container = styled.div`

`

const SignContainer = () => {
    return (
        <Container>
            <SignSearchView/>
            <SignListView/>
        </Container>
    );
}
export default SignContainer;