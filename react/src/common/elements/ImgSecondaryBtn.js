import React from "react";
import styled from 'styled-components';

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

const ImgSecondaryBtn = () => {

    return (
        <Container>

            <div className="ImgSecondaryBtn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

        </ Container>
    )
};

export default ImgSecondaryBtn;