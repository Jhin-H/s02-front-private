import React from "react";
import "../../common/css/searchBox.css"
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import styled from 'styled-components';

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

const SelectBox = ({ ...props }) => {
    return (
        <SelectBoxContainer>
            <select className="selectBox">
                <option key='All'>출석여부</option>
                <option key='Y' value='Y'>Y</option>
                <option key='N' value='N'>N</option>
            </select>
            
        </SelectBoxContainer>
    )
};

const AttSearchView = () => {

    return (
            <div className="searchBox">
                <div className="layer1">
                <Input
                    type="date"
                    data-placeholder="출입일시(From)"
                    required aria-required="true"
                />
                <div className="wave">~</div>
                <Input
                    type="date"
                    data-placeholder="출입일시(To)"
                    required aria-required="true"
                />
                <Input
                    placeholder="행사명"
                />
                <Input
                    placeholder="회원명"
                />
                <SelectBox
                    placeholder="출석여부"
                />
                <ImgSecondaryBtn/>
                </div>
            </div>
    );
}
export default AttSearchView;