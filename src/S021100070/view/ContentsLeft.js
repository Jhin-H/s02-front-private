import React from "react";
import styled from 'styled-components';

const Container = styled.div`

width : 40%;
height : 80vh;
    .upperIconsWrap{
        display : flex;

    }

    .button{
        margin-right: 20px;
        margin-bottom: 10px;
        font-size: 18px;
    }
    .button:hover{
        cursor: pointer;
    }

    .hierarchyBox{

        border: 2px solid #333;
        width : 100%;
        height : 95.5%;
    }

    .tree{
        color:#333;
        font-size: 26px;
        margin:50px;
    }
    .tree, .tree ul{
        list-style: none;
        padding-left:25px;
        padding-top: 10px;
    }
    .tree *:before{
        width:30px;
        height:30px;
        display:inline-block;
    }
    .tree label{
        cursor: pointer;
    }
    .tree label:before{
       //체크박스 아이콘
    }
    .tree input[type="checkbox"] {
        display: none;
    }
    .tree input[type="checkbox"]:checked~ul {
        display: none;
    }
    .tree input[type="checkbox"]:checked+label:before{
        //체크박스 아이콘
    }
    .depth2{
        margin-left: 25px;
    }

    i{
        color: rgb(50, 190, 166)
    }

    
`;

const ContentsLeft = () => {
    return (
        <Container>

            <div className="upperIconsWrap">
                <div className="openAllBtn button">
                    <i className="fa-regular fa-folder-open"></i>
                    &nbsp;모두열기
                </div>
                <div className="closeAllBtn button">
                    <i className="fa-regular fa-folder-closed"></i>
                    &nbsp;모두닫기
                </div>
                <div className="depAddBtn button">
                    <i class="fa-solid fa-folder-tree"></i>
                    &nbsp;부서추가
                </div>
                <div className="openAllBtn button">
                    <i className="fa-solid fa-calendar-plus"></i>
                    &nbsp;사역추가
                </div>
            </div>

            <div className="hierarchyBox">
                <ul className="tree">
                    <li>
                        <input type="checkbox" id="root"></input>
                        <label for="root">
                        <i class="fa-solid fa-people-roof"></i>
                            에스원테크
                        </label>
                        <ul>
                            <li>
                            <input type="checkbox" id="depth1"></input>
                            <label for="depth1">개발1부</label>
                                <ul class="depth2">
                                    <li>
                                    <i class="fa-solid fa-calendar-exclamation"></i>
                                    행사1
                                    </li>
                                    <li>행사2</li>
                                    <li>행사3</li>
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