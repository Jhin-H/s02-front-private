import React from "react";
import styled from 'styled-components';

const Container = styled.div`

width : 50%;
height : 80vh;
background-color: beige;

    .upperIconsWrap{
        display : flex;

    }

    
`;

const ContentsLeft = () => {
    return (
        <Container>

            <div className="upperIconsWrap">
                <div className="openAllBtn">
                    <i className="fa-regular fa-folder-open"></i> 
                </div>
                <div className="closeAllBtn">
                    <i className="fa-regular fa-folder-closed"></i>
                </div>
                <div className="depAddBtn">
                    <i class="fa-solid fa-folder-tree"></i>
                </div>
                <div className="openAllBtn">
                    <i className="fa-solid fa-calendar-plus"></i>
                </div>
            </div>

            <div className="hierarchyBox">
           

                <ul class="tree">
                    <li>
                        <input type="checkbox" id="root"></input>
                        <label for="root">뉴웨이브공동체</label>
                        <ul>
                            <li>
                            <input type="checkbox" id="depth1"></input>
                            <label for="depth1">총괄운영비</label>
                                <ul class="depth2">
                                    <li>수련회비</li>
                                    <li>선교비</li>
                                    <li>청년1부</li>
                                </ul>
                            </li>
                            
                        </ul>
                    </li>
                </ul>

            </div>


        </Container>
    );
}
export default ContentsLeft;