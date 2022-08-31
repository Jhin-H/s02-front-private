import React from "react";
import Header from "../../common/Header";
import Pagination from "../../common/elements/Pagination";
import ListView from "../view/AttListView";
import SearchView from "../view/AttSearchView";
import styled from 'styled-components';
import "../../common/css/title.css"


const Container = styled.div`

`

const AttendContainer = () => {
    return (
        <div className="Wrap">
                <div className="inner">

                    <Header></Header>
                
                    <Container>
                        <div className="titleWrap">
                        <p className="mainTitle">개별참석현황</p>
                        <p className="subTitle">이곳에서 개별참석현황을 확인하고 관리할 수 있습니다.</p>
                        </div>
                        <SearchView/>
                        <ListView/>
                    </Container>
                    <div className="pagination">
                        <Pagination/>
                    </div>

                </div>

            </div>
       
    );
}
export default AttendContainer;