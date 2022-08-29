import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import Input from '../../common/elements/Input';
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn"
import MemRegModal from "../../S021100040/view/MemRegModal";
import useModal from "../../common/hooks/useModal";
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
        margin-right:10px;
        margin-bottom:0;
        color: #ababab;
    }
    label {
        position:absolute;
        top:-35px;
    }

    
`;

const SelectBox = (props) => {
    useEffect(() => {
        props.store.retrieveCd();
    });
    console.log(props.store.resCode);
    return (
        <SelectBoxContainer>
            <select>
                <option key='all' value=''>전체 보기</option>
                {props.store.resCode.map((v) => (
                    <option key={v.cdV} value={v.cdV}>{v.cdVMeaning}</option>
                ))}
            </select>
        </SelectBoxContainer>
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

const MembSearchView = (props) => {
    
    const { memberStore } = props;
    const { ModalPortal, closeModal, openModal } = useModal();
    const excelFileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const excelFileExtension = '.xlsx';
    const excelFileName = '회원관리 양식';
    
    const clickImgSecondaryBtn = () => {
        console.log('clickSearch');
        memberStore.getRetrieveMemList();
    }
    const clickRegist = async () => {
        openModal();
    }
    const clickUpdate = async () => {
        openModal();
    }
    const clickDelete = async () => {
    }
    const clickRegistR = async () => {
    }
    const clickDeleteR = async () => {
    }
    const clickDown = () => {
        const workSheet = XLSX.utils.json_to_sheet([
            {'': '* Start', '회원명': '', 'e-mail': '', '핸드폰 번호': '', '생년월일': '', '우편번호': '', '주소': '', '상세주소': '', '계좌번호': '', '거래은행': ''},
            {'': '', '회원명': '', 'e-mail': '', '핸드폰 번호': '', '생년월일': '', '우편번호': '', '주소': '', '상세주소': '', '계좌번호': '', '거래은행': ''},
            {'': '', '회원명': '', 'e-mail': '', '핸드폰 번호': '', '생년월일': '', '우편번호': '', '주소': '', '상세주소': '', '계좌번호': '', '거래은행': ''},
            {'': '* End', '회원명': '', 'e-mail': '', '핸드폰 번호': '', '생년월일': '', '우편번호': '', '주소': '', '상세주소': '', '계좌번호': '', '거래은행': ''}
        ]);
        XLSX.utils.sheet_add_aoa(
            workSheet,
            [
                [''],
                ['* 입력 방법 가이드'],
                ['- 필수입력 항목: 회원명, e-mail, 핸드폰번호'],
                ['- 핸드폰번호: 11자리 숫자만 입력(01012341234)'],
                ['- 생년월일: 8자리 숫자만 입력(19901231)'],
                ['- e-mail: \'@\'를 포함해서 입력(email@naver.com)'],
                ['- *Start가 있는 2행 B열부터 입력'],
                ['- *End가 있는 행으로 마무리, 필요한 데이터는 중간에 행 삽입으로 추가해주세요']
            ],
            {origin: -1}
        ); // workSheet에서 한 줄 아래(origin:-1)에 데이터 추가
        const workBook = {Sheets: { memberData: workSheet }, SheetNames: ['memberData']};
        const excelButter = XLSX.write(workBook, { bookType: 'xlsx', type: 'array'});
        const excelFile = new Blob([excelButter], { type: excelFileType });
        FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
    }
    const clickUp = (e) => {
        console.log('upload');
        let input = e.target;
        let reader = new FileReader();
        reader.onload = () => {
            let fileData = reader.result;
            let wb = XLSX.read(fileData, {type : 'binary'});
            wb.SheetNames.forEach((sheetName) => {
                let rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
                console.log(JSON.stringify(rowObj));
                // 여기서 rowObj를 이용해서 데이터를 등록
            });
        };
        reader.readAsBinaryString(input.files[0]);
    }
    
    memberStore.getRetrieveMemList();

    return (
            <div className="searchBox">
                <div className="layer1">
                    <Input
                        type="date"
                        data-placeholder="등록일자"
                        required aria-required="true"
                    />
                    <div className="wave">~</div>
                    <Input
                        type="date"
                        data-placeholder="등록일자"
                        required aria-required="true"
                    />
                    <Input
                        placeholder="회원명"
                    />
                    <SelectBox store={memberStore}/>
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
                        <ImgPrimaryBtn iconText={"다운로드"} onClick={clickDown}/>
                        <div className="uploadIcon">
                            <label for="inputFile">
                                <ImgPrimaryBtn iconText={"업로드"} onClick={clickUp}/>
                            </label>
                            <input type='file'
                            id='inputFile' 
                            style={{display:"none"}}
                            onChange={(e) => clickUp(e)}/>
                        </div>
                        <Input/>
                           
                    </div>
                </div>
                <ModalPortal>
                    <MemRegModal closeModal={closeModal}/>
                </ModalPortal>
            </div>
    );
}

export default inject('memberStore')(observer(MembSearchView));