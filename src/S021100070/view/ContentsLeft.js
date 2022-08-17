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
        color:#333;
    }
    .button:hover{
        cursor: pointer;
    }

    .hierarchyBox{

        border: 2px solid #707070;
        width : 450px;
        height : 100%;
    }

    .tree{
        color:#333;
        font-size: 22px;
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
    .tree input[type="checkbox"] {
        display: none;
    }
    .tree input[type="checkbox"]:checked~ul {
        display: none;
    }

    i{
        color: rgb(50, 190, 166)
    }

    .treeImg{
        width :25px;
        height :25px;
        margin-right:10px;
        margin-top:-5px;

    }

    .depth1{
        margin-bottom:10px;
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
                            <img src="../../img/officeBuilding.png" className="treeImg"></img>
                            에스원테크
                        </label>
                        <ul>
                            <li className="depth1">
                                <input type="checkbox" id="depth1"></input>
                                <img src="../../img/briefCase.png" className="treeImg">
                                </img>
                                <label for="depth1">개발1부</label>
                                    <ul class="depth2">
                                        <li>
                                            <img src="../../img/calendarCheck.png" className="treeImg">
                                            </img>
                                            행사1
                                        </li>
                                        <li>
                                            <img src="../../img/calendarCheck.png" className="treeImg">
                                            </img>
                                            행사2
                                        </li>
                                        <li>
                                            <img src="../../img/calendarCheck.png" className="treeImg">
                                            </img>
                                            행사3
                                        </li>
                                    </ul>
                            </li>

                            <li className="depth1">
                                <input type="checkbox" id="depth1"></input>
                                <img src="../../img/briefCase.png" className="treeImg">
                                </img>
                                <label for="depth1">개발2부</label>
                                    <ul class="depth2">
                                        <li>
                                            <img src="../../img/calendarCheck.png" className="treeImg">
                                            </img>
                                            행사1
                                        </li>
                                        <li>
                                            <img src="../../img/calendarCheck.png" className="treeImg">
                                            </img>
                                            행사2
                                        </li>
                                        <li>
                                            <img src="../../img/calendarCheck.png" className="treeImg">
                                            </img>
                                            행사3
                                        </li>
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