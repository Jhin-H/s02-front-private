import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import OrgRegModal from "../../S021100020/view/OrgRegModal";
import useModal from "../../common/hooks/useModal";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn";
import "../../common/css/searchBox.css";
import styled from 'styled-components';
import * as XLSX from "xlsx";
import FileSaver from "file-saver";

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
    const excelFileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const excelFileExtension = '.xlsx';
    const excelFileName = '단체 리스트 조회 결과';

    // 검색 조건의 입력값을 store에 저장
    const onSetSearchProps = (e) => {
        groupStore.setSearchProps(e.target.name, e.target.value);
    }
    // 조건에 따른 검색 결과 출력
    const clickImgSecondaryBtn = () => {
        groupStore.onSetGroupList();
    }
    // 단체 등록
    const clickRegist = async () => {
        groupStore.initSelectGroup(); // 이전에 조회된 단체 정보 초기화
        groupStore.initRegistProps(); // 이전 등록창에 작성되었던 데이터 초기화
        openModal();
    }
    // 단체 수정
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
    // 단체 삭제
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
    // 조회 리스트 엑셀 다운로드
    const clickDown = () => {
        let groupData = [];
        for(let i=0;i<groupStore.groupList.length;i++) {
            groupData.push(
                {'번호': groupStore.groupList[i].orgId,
                '단체명': groupStore.groupList[i].orgName,
                '대표자': groupStore.groupList[i].memberName,
                '연락처': groupStore.groupList[i].hpNo,
                '대표자 메일': groupStore.groupList[i].email,
                '회원 수': groupStore.groupList[i].memberCnt});
        }
        const workSheet = XLSX.utils.json_to_sheet([
            {'번호': '', '단체명': '', '대표자': '', '연락처': '', '대표자 메일': '', '회원 수': ''}
        ]);
        workSheet["!cols"] = [{wpx: 50}, {wpx: 100}, {wpx: 75}, {wpx: 100}, {wpx: 150}, {wpx: 50}]
        XLSX.utils.sheet_add_json(
            workSheet,
            groupData,
            {origin: 0}
        ); // workSheet에서 한 줄 아래(origin:-1)에 데이터 추가
        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, 'memberData');
        const excelButter = XLSX.write(workBook, { bookType: 'xlsx', type: 'array'});
        const excelFile = new Blob([excelButter], { type: excelFileType });
        FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
    }

    useEffect(() => {
        groupStore.onSetGroupList();
    });

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
                    <ImgPrimaryBtn iconText={"다운로드"} onClick={clickDown}/>
                </div>
            </div>
            <ModalPortal>
                <OrgRegModal store={groupStore} closeModal={closeModal}/>
            </ModalPortal>
        </div>
    );
}

export default inject('groupStore')(observer(GroupSearchView));