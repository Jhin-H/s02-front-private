import React from "react";
import { observer, inject } from "mobx-react";
import "../../common/css/searchBox.css"
import Input from '../../common/elements/Input';
import styled from 'styled-components';
import SelectBox from '../../common/elements/SelectBox'
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

const AttSelectBox = ( { ...props } ) => {
    return (
        <SelectBoxContainer>
            <select className="selectBox" {...props}>
                <option key='All'>출석여부</option>
                <option key='Y' value='Y'>Y</option>
                <option key='N' value='N'>N</option>
            </select>
        </SelectBoxContainer>
    )
};

const AttSearchView = (props) => {

    const { attStore } = props;

    // 검색 조건에 따른 결과 조회
    const clickImgSecondaryBtn = async () => {
        await attStore.getAttendList();
    }

    return (
        <div className="searchBox">
            <div className="layer1">
                <Input
                    placeholder="이름"
                />
                <Input
                    placeholder="핸드폰 번호"
                />
                <SelectBox
                    placeholder="행사명"
                />
                <AttSelectBox
                    placeholder="출석여부"
                />
                <ImgSecondaryBtn onClick={clickImgSecondaryBtn}/>
            </div>
            <div className="layer2">
                <ImgPrimaryBtn iconText={'출석등록'}/>
                <ImgPrimaryBtn iconText={'출석취소'}/>
            </div>
        </div>
    );
}

export default inject('attStore')(observer(AttSearchView));