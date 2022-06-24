import React from "react";
import styled from 'styled-components';


const Container = styled.div`

select{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: #333 1.5px solid;
  outline: none;
  width: 200px;
  height: 25px;
  font-size: 15px;
  text-align: center;
  margin-right: 20px;
  color: #ababab;
  
}


`;


const SelectBox = () => {

    return (
        <Container>

            <select type="select">

                <option>옵션을 선택하세요</option>
                <option>옵션1</option>
                <option>옵션2</option>
                <option>옵션3</option>
                <option>옵션4</option>

            </select>

        </Container>
    )
};

export default SelectBox
