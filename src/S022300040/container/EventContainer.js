import React from "react";
import EventListView from "../view/EventListView";
import EventSearchView from "../view/EventSearchView";
import styled from 'styled-components';


const Container = styled.div`

`

const EventContainer = () => {
    return (
        <Container>
            <EventSearchView/>
            <EventListView/>
        </Container>
    );
}
export default EventContainer;