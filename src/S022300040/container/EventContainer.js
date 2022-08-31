import React from "react";
import Header from "../../common/Header";
import Pagination from "../../common/elements/Pagination";
import EventListView from "../view/EventListView";
import EventSearchView from "../view/EventSearchView";
import styled from 'styled-components';
import "../../common/css/title.css"


const Container = styled.div`

`

const EventContainer = () => {
    return (

        
        <div className="Wrap">
        <div className="inner">

            <Header/>

            <Container>
                <div className="titleWrap">
                    <p className="mainTitle">행사현황</p>
                    <p className="subTitle">이곳에서 행사들을 관리하고 현황을 볼 수 있습니다.</p>
                </div>
                <EventSearchView/>
                <EventListView/>
            </Container>
            
            <div className="pagination">
                <Pagination/>
            </div>

        </div>

    </div>
        
    );
}
export default EventContainer;