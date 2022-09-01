import React from "react";
import { observer, inject } from "mobx-react";
import "../../common/css/searchBox.css"
import Input from '../../common/elements/Input';
import styled from 'styled-components';
import ImgPrimaryBtn from "../../common/elements/ImgPrimaryBtn";

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
    label {
        position:absolute;
        top:-35px;
    }
`;
const Container = styled.div`
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

  :active .ImgSecondaryBtn{
    background-color: rgb(25, 128, 111);
  }
`;

const ImgSecondaryBtn = ( { ...props } ) => {
    return (
        <Container>
            <div className="ImgSecondaryBtn" {...props}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </ Container>
    )
};
const AttSelectBox = ( { options = [], ...props } ) => {
    return (
        <SelectBoxContainer>
            <select className="selectBox" {...props}>
                {options.map((v, k) => (
                    <option key={k} value={v.value}>{v.name}</option>
                ))}
            </select>
        </SelectBoxContainer>
    )
};
const SelectBox = ( { options = [], ...props } ) => {
    return (
        <SelectBoxContainer>
            <select className="selectBox" {...props}>
                {options.map((v, k) => (
                    <option key={k} value={v.value}>{v.name}</option>
                ))}
            </select>
        </SelectBoxContainer>
    )
};

const selectEventOp = [{name:'행사명', value:''}, {name:'행사명_Test_4444', value:6}];
const selectAttendOp = [{name:'출석 현황', value:'all'}, {name:'참석', value:'y'}, {name:'불참', value:'n'}];

const AttSearchView = (props) => {

    const { attStore } = props;

    // 검색 조건의 입력값을 store에 저장
    const onSetSearchProps = (e) => {
        attStore.setSearchProps(e.target.name, e.target.value);
    }
    const onSetAttendBool = (e) => {
        attStore.setAttendBool(e.target.value);
    }
    // 검색 조건에 따른 결과 조회
    const clickImgSecondaryBtn = async () => {
        await attStore.getAttendList();
    }
    // 참석 등록
    const clickRegist = async () => {
        console.log('등록 클릭')
        if (attStore.checkedMemId.length > 0) {
            for (let i=0; i<attStore.checkedMemId.length; i++) {
                for (let j=0; j<attStore.resultAttendList.length; j++) {
                    if (Number(attStore.resultAttendList[j].memberId) === Number(attStore.checkedMemId[i].memberId) && attStore.resultAttendList[j].enterDate) {
                        alert('이미 등록된 회원이 존재합니다.');
                        return;
                    }
                }
            }
            await attStore.regAttend();
            await attStore.getAttendList();
        } else {
            alert('회원을 선택해 주세요');
        }
    }
    // 참석 취소
    const clickDelete = async () => {
        if (attStore.checkedMemId.length > 0) {
            await attStore.delAttend();
            await attStore.getAttendList();
        } else {
            alert('회원을 선택해 주세요');
        }
    }

    return (
        <div className="searchBox">
            <div className="layer1">
                <Input
                    placeholder="이름"
                    name="memberName"
                    onChange={onSetSearchProps}
                />
                <Input
                    placeholder="핸드폰 번호"
                    name="hpNo"
                    onChange={onSetSearchProps}
                />
                <SelectBox
                    placeholder="행사명"
                    name="eventId"
                    options={selectEventOp}
                    onChange={onSetSearchProps}
                />
                <AttSelectBox
                    options={selectAttendOp}
                    onChange={onSetAttendBool}
                />
                <ImgSecondaryBtn onClick={clickImgSecondaryBtn}/>
            </div>
            <div className="layer2">
                <ImgPrimaryBtn iconText={'출석등록'} onClick={clickRegist}/>
                <ImgPrimaryBtn iconText={'출석취소'} onClick={clickDelete}/>
            </div>
        </div>
    );
}

export default inject('attStore')(observer(AttSearchView));