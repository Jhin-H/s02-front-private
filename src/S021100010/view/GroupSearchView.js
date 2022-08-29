import React from "react";
import { observer, inject } from "mobx-react";
import OrgRegModal from "../../S021100020/view/OrgRegModal";
import useModal from "../../common/hooks/useModal";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn";
import "../../common/css/searchBox.css";
import styled from 'styled-components';

const Container = styled.div`  
    position:relative;
    display: flex;
    flex-direction:column;
    margin-right: 10px;
    margin-bottom: 10px;

    .ImgSecondaryBtn {
        display: inline-block;
        background-color: rgb(50, 190, 166);
        width: 30px;
        height: 30px;
        border-radius: 100%;
        color: white;
        text-align: center;
        line-height: 30px;
        margin-left: 10px;
    }
    input {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: #333 1.5px solid;
        outline: none;
        width: 200px;
        height: 25px;
        font-size: 15px;
        text-align: center;
        color: black;
        margin-bottom:20px; 
    }
    input[type="date"]{
        color:#ababab;
        font-size:15px;
    }
    input[type="date"]::before {
        content:attr(data-placeholder);
        width:100%;
        color:#ababab;
    }
    input[type="date"]:focus:before,
    input[type="date"]:valid:before{
        display: none;
    }
    ::placeholder{
        text-align: center;
        color: #ababab;
    }
    label{
        position:absolute;
        top:-35px;
    }
    .icon-wrapper {
        width:18px;
        position:absolute;
        top:4px;
        right:0px;
        filter:opacity(0.35);
        cursor: pointer;
    }
`;

const Input = ({...props}) => {
    return (
        <Container>
            <input {...props}/>
        </Container>
    )
};
const ImgSecondaryBtn = (props) => {
    return (
        <Container>
            <div className="ImgSecondaryBtn" onClick={props.onClick}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </ Container>
    )
};

function GroupSearchView (props) {

    const { groupStore } = props;
    const { ModalPortal, closeModal, openModal } = useModal();

    // 검색 조건의 입력값을 store에 저장
    const onSetSearchProps = (e) => {
        groupStore.setSearchProps(e.target.name, e.target.value);
    }
    // 조건에 따른 검색 결과 출력 (체크박스 초기화)
    const clickImgSecondaryBtn = () => {
        groupStore.onSetGroupList();
    }
    // 선택된 항목 삭제 (체크박스 초기화)
    const clickDelete = async () => {
        try {
            if(groupStore.checkedOrgIdList.length > 0) {
                if(window.confirm(groupStore.checkedOrgIdList.length+'개의 항목을 삭제하시겠습니까?')) {
                    await groupStore.deleteGroupList();
                } else {
                    return;
                }
            } else {
                alert('삭제할 항목을 선택해주세요.');
            }
        } catch (error) {
            alert('삭제할 항목을 선택해주세요.');
        }
    }
    // 선택된 항목이 하나일 경우에 모달창 오픈
    const clickUpdate = async () => {
        try {
            if(groupStore.checkedOrgIdList.length === 1) {
                groupStore.initSelectGroup(); // 이전에 조회된 단체 정보 초기화
                await groupStore.checkSelectGroup(); // 조회
                groupStore.setSelectGroupOnUpdate(); // 조회 데이터를 updateGroup에 할당
                openModal();
            } else if(groupStore.checkedOrgIdList.length === 0) {
                alert('수정할 항목을 선택해주세요.');
            } else {
                alert('수정할 항목은 하나만 선택할 수 있습니다.');
            }
        } catch (error) {
            alert('다시 시도해 주세요.');
        }
    }
    // 등록 모달창 오픈
    const clickRegist = async () => {
        groupStore.initSelectGroup(); // 이전에 조회된 단체 정보 초기화
        groupStore.initRegistProps(); // 이전 등록창에 작성되었던 데이터 초기화
        openModal();
    }

    groupStore.onSetGroupList();

    return (
        <div className="searchBox">
            <div className="layer1">
                <Input placeholder="단체명" name='orgName' onChange={onSetSearchProps}/>
                <Input placeholder="대표자" name='memberName' onChange={onSetSearchProps}/>
                <ImgSecondaryBtn onClick={clickImgSecondaryBtn}/>
            </div>
            <div className="layer2-icon">
                <div className="iconWrap-left">
                    <ImgPrimaryBtn iconText={'등록'} onClick={clickRegist}/>
                    <ImgPrimaryBtn iconText={"수정"} onClick={clickUpdate}/>
                    <ImgPrimaryBtn iconText={"삭제"} onClick={clickDelete}/>
                </div>
                <div className="iconWrap-right">
                    <ImgPrimaryBtn iconText={"다운로드"}/>
                </div>
            </div>
            <ModalPortal>
                <OrgRegModal store={groupStore} closeModal={closeModal}/>
            </ModalPortal>
        </div>
    );
}

export default inject('groupStore')(observer(GroupSearchView));