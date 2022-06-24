import React from "react";
import styled from 'styled-components';

const Container = styled.div`

  .titleWrap{
    display:flex;
    align-items:baseline;
    margin-top:30px;

  }

    
  .mainTitle{
    font-size: 3vw;
    font-weight: 600;
  }
  .subTitle{
    font-size: 1vw;
    font-weight: 400;
    color: #ababab;
    margin-left: 20px;
    
  }
  
`;

const Title = () => {
    return (
        <Container>
            <div className="titleWrap">
              <p class="mainTitle">타이틀</p>
              <p class="subTitle">서브타이틀을 입력해주세요</p>
            </div>
        </Container>
    )
};

export default Title;