import React, { useEffect, useState } from "react";
import { observer, inject } from "mobx-react";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn"
import MemRegModal from "../../S021100040/view/MemRegModal";
import useModal from "../../common/hooks/useModal";
import styled from 'styled-components';
import * as XLSX from "xlsx";
import FileSaver from "file-saver";
import { toJS } from "mobx";

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
const SelectBoxContainer = styled.div`
    position:relative;
    select{
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: #333 1.5px solid;
        outline: none;
        width: 200px;
        height: 26.5px;
        font-size: 15px;
        text-align: center;
        color: #333;
        margin-right:10px;
        margin-bottom:0;
    }
`;

const ImgSecondaryBtn = ( {...props} ) => {
    return (
        <Container>
            <div className="ImgSecondaryBtn" {...props}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </ Container>
    )
};
const SelectBox = ( {store, ...props} ) => {
    return (
        <SelectBoxContainer>
            <select {...props}>
                <option key='all'>회원 구분</option>
                {store.resCode.map((v) => (
                    <option key={v.cdV} value={v.cdV}>{v.cdVMeaning}</option>
                ))}
            </select>
        </SelectBoxContainer>
    )
};
const Input = ( {label, icon, ...props} ) => {
    return (
        <Container iconExist={!!icon}>
            <label>{label}</label>
            <input {...props}/>
            <div className="icon-wrapper">{icon}</div>
        </Container>
    )
};

const MembSearchView = (props) => {
    
    const { memberStore } = props;
    const { ModalPortal, closeModal, openModal } = useModal();
    const [excelData, setExcelData] = useState([]);
    const excelFileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const excelFileExtension = '.xlsx';
    const excelFileName = '회원관리 양식';

    // 검색 조건의 입력값을 store에 저장
    const onSetSearchProps = (e) => {
        memberStore.setSearchProps(e.target.name, e.target.value);
        console.log(e.target.name+":"+e.target.value);
        console.log(toJS(memberStore.searchProps));
    }
    // 검색 조건에 따른 리스트 조회
    const clickImgSecondaryBtn = () => {
        memberStore.getRetrieveMemList();
    }
    // 회원 등록
    const clickRegist = async () => {
        // 이전에 조회된 정보 초기화(수정때문에 하는 것)
        memberStore.initRegistProps();
        openModal();
    }
    // 회원 수정
    const clickUpdate = async () => {
        // List에서 체크된 정보 확인 후 이전에 조회된 정보 초기화, 조회 > 조회데이터 할당
        openModal();
    }
    // 회원 삭제
    const clickDelete = async () => {
    }
    // 운영자 등록
    const clickRegistR = async () => {
    }
    // 운영자 삭제
    const clickDeleteR = async () => {
    }
    // 회원 등록 양식 업로드
    const clickUp = (e) => {
        let input = e.target;
        let reader = new FileReader();
        reader.onload = () => {
            let fileData = reader.result;
            let wb = XLSX.read(fileData, {type : 'binary'});
            wb.SheetNames.forEach((sheetName) => {
                let rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
                for(let i=0; i<rowObj.length; i++) {
                    if (rowObj[i].회원명 && rowObj[i].Email && rowObj[i].핸드폰) {
                        setExcelData(excelData.push(rowObj[i]));
                    }
                }
                console.log(rowObj);
                console.log(excelData);
            });
        };
        try {
            reader.readAsBinaryString(input.files[0]);
        } catch (error) {
            console.log(error);
        }
    }
    // 조회 리스트 엑셀 다운로드
    const clickDownList = () => {
        console.log('조회된 리스트 다운로드');
    }
    // 회원 등록 양식 다운로드
    const clickDownForm = () => {
        const workSheet = XLSX.utils.json_to_sheet([
            {'': '* Start', '회원명': '', 'Email': '', '핸드폰': '', '생년월일': '', '우편번호': '', '주소': '', '상세주소': '', '계좌번호': '', '거래은행': ''},
            {'': '', '회원명': '', 'Email': '', '핸드폰': '', '생년월일': '', '우편번호': '', '주소': '', '상세주소': '', '계좌번호': '', '거래은행': ''},
            {'': '', '회원명': '', 'Email': '', '핸드폰': '', '생년월일': '', '우편번호': '', '주소': '', '상세주소': '', '계좌번호': '', '거래은행': ''},
            {'': '', '회원명': '', 'Email': '', '핸드폰': '', '생년월일': '', '우편번호': '', '주소': '', '상세주소': '', '계좌번호': '', '거래은행': ''},
            {'': '* End', '회원명': '', 'Email': '', '핸드폰': '', '생년월일': '', '우편번호': '', '주소': '', '상세주소': '', '계좌번호': '', '거래은행': ''}
        ]);
        workSheet["!cols"] = [{wpx: 50}, {wpx: 75}, {wpx: 150}, {wpx: 100}, {wpx: 75}, {wpx: 75}, {wpx: 150}, {wpx: 150}, {wpx: 150}, {wpx: 75}]
        XLSX.utils.sheet_add_aoa(
            workSheet,
            [
                [''],
                ['* 입력 방법 가이드'],
                ['- 필수입력 항목: 회원명, Email, 핸드폰'],
                ['- 추가입력 항목: 생년월일, 우편번호, 주소, 상세주소, 계죄번호, 거래은행'],
                ['- 핸드폰: 11자리 숫자만 입력 (01012341234)'],
                ['- 생년월일: 8자리 숫자만 입력 (19901231)'],
                ['- Email: \'@\'를 포함해서 입력 (email@naver.com)'],
                ['- * Start가 있는 2행 B열부터 입력'],
                ['- * End가 있는 행으로 마무리, 필요한 데이터는 중간에 행 삽입으로 추가해주세요']
            ],
            {origin: -1}
        ); // workSheet에서 한 줄 아래(origin:-1)에 데이터 추가
        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, 'memberData');
        const excelButter = XLSX.write(workBook, { bookType: 'xlsx', type: 'array'});
        const excelFile = new Blob([excelButter], { type: excelFileType });
        FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
    }

    useEffect(() => {
        memberStore.getRetrieveMemList();
        memberStore.retrieveCd();
    },[memberStore]);

    useEffect(() => {}, [memberStore.resCode]); // useEffect 실행 후, 한 번 더 렌더링

    return (
        <div className="searchBox">
            <div className="layer1">
                <Input
                    type="date"
                    name="fromDt"
                    data-placeholder="등록일자(From)"
                    required aria-required="true"
                    onChange={onSetSearchProps}
                />
                <div className="wave">~</div>
                <Input
                    type="date"
                    name="toDt"
                    data-placeholder="등록일자(To)"
                    required aria-required="true"
                    onChange={onSetSearchProps}
                />
                <Input placeholder="회원명" name="memberName" onChange={onSetSearchProps}/>
                <SelectBox store={memberStore} name="memberTp" onChange={onSetSearchProps}/>
                <ImgSecondaryBtn onClick={clickImgSecondaryBtn}/>
            </div>
            <div className="layer2-icon">
                <div className="iconWrap-left">
                    <ImgPrimaryBtn iconText={'등록'} onClick={clickRegist}/>
                    <ImgPrimaryBtn iconText={"수정"} onClick={clickUpdate}/>
                    <ImgPrimaryBtn iconText={"삭제"} onClick={clickDelete}/>
                    <ImgPrimaryBtn iconText={"운영자등록"} onClick={clickRegistR}/>
                    <ImgPrimaryBtn iconText={"운영자삭제"} onClick={clickDeleteR}/>
                </div>
                <div className="iconWrap-right">
                    <div className="uploadIcon">
                        <label htmlFor="inputFile">
                            <ImgPrimaryBtn iconText={"업로드"}/>
                        </label>
                        <input type='file'
                        id='inputFile' 
                        style={{display:"none"}}
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        onChange={(e) => clickUp(e)}/>
                    </div>
                    <ImgPrimaryBtn iconText={"다운로드"} onClick={clickDownList}/>
                    <ImgPrimaryBtn iconText={"다운로드"} onClick={clickDownForm}/>
                </div>
            </div>
            <ModalPortal>
                <MemRegModal store={memberStore} closeModal={closeModal}/>
            </ModalPortal>
        </div>
    );
}

export default inject('memberStore')(observer(MembSearchView));