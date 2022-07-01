import React from "react";
import SignSearchView from "../view/SignSearchView";
import SignListView from "../view/SignListView";
import styled from 'styled-components';
import "../../common/css/title.css"



const Container = styled.div`

`

const SignContainer = () => {
    return (
        <Container>

            <div className="titleWrap">
              <p className="mainTitle">결제관리</p>
              <p className="subTitle">이곳에서 결제 진행상태를 확인하고 관리할 수 있습니다.</p>
            </div>
            <SignSearchView/>
            <SignListView/>
        </Container>
    );
}
export default SignContainer;