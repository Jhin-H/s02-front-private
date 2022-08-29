import React from "react";
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
        margin-right:10px;
        margin-bottom:0;
    }
    label {
        position:absolute;
        top:-35px;
    }
`;

const SelectBox = (props) => {
    return (
        <SelectBoxContainer>
            <label>{props.label}</label>
            <select>
                {props.options.map((v) => (
                    <option key={v.value} value={v.value}>{v.name}</option>
                ))}
            </select>
        </SelectBoxContainer>
    )
};

export default SelectBox;