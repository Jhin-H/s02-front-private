import React from "react";
import MembListView from "../view/MembListView";
import MembSearchView from "../view/MembSearchView";
import styled from 'styled-components';
import "../../common/css/title.css"

const Container = styled.div`

`

const MemberContainer = () => {
    return (
        <Container>
             <div className="titleWrap">
              <p className="mainTitle">회원관리</p>
              <p className="subTitle">이곳에서 회원정보를 관리할 수 있습니다.</p>
            </div>
            <MembSearchView/>
            <MembListView/>
        </Container>
    );
}
export default MemberContainer;