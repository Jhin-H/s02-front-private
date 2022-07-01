import React from "react";
import ListView from "../view/ListView";
import SearchView from "../view/SearchView";
import styled from 'styled-components';
import "../../common/css/title.css"



const Container = styled.div`

`

const BudgetContainer = () => {
    return (
        <Container>
            <div className="titleWrap">
              <p className="mainTitle">부서관리</p>
              <p className="subTitle">이곳에서 부서를 관리하고 예산현황을 볼 수 있습니다.</p>
            </div>
            <SearchView/>
            <ListView/>
        </Container>
    );
}
export default BudgetContainer;