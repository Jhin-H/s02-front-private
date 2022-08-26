import React from "react";
import { observer, inject } from "mobx-react";
import styled from 'styled-components';
import Table from   "../../common/elements/Table";

const Container = styled.div`
`;

const MembListView = (props) => {

    const { memberStore } = props;
    
    return (
        <Container>
            {/* 리스트 출력부분 항목 수정 */}
            <Table/>
        </Container>
    );
}

export default inject('memberStore')(observer(MembListView));