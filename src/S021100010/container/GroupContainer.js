import React from "react";
import ListView from "../view/GroupListView";
import SearchView from "../view/GroupSearchView";
import styled from 'styled-components';
import "../../common/css/title.css";


const Container = styled.div``;

const GroupContainer = () => {
    return (
        <Container>
            <div className="titleWrap">
              <p className="mainTitle">단체관리</p>
              <p className="subTitle">이곳에서 새로 단체를 등록하거나 관리할 수 있습니다.</p>
            </div>
            <SearchView/>
            <ListView/>
        </Container>
    );
}

export default GroupContainer;