import React from "react";
import styled from 'styled-components';

const Container = styled.div`


.pagination{
  float: right;
  margin-top: 50px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 21px;
  font-weight: 200;
  right: 0;
  bottom: 0;

}

.pgNumber{

  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  text-align: center;
  line-height: 35px;
  color:#333
}
.pgNumber>a{
  color: #333;
}

.pgNumber:hover{
  background-color: #333;
}

.pgNumber:hover a{
  color: white;
}





`;

const Pagination = () => {
    return (
        <Container>
            <div className="pagination">
                <i className="fa-solid fa-angle-left"></i>

                    <div className="pgNumber"><a href="">1</a></div>
                    <div className="pgNumber"><a href="">2</a></div>
                    <div className="pgNumber"><a href="">3</a></div>
                    <div className="pgNumber"><a href="">4</a></div>
                    <div><i className="fa-solid fa-ellipsis"></i></div>
                    <div className="pgNumber"><a href="">10</a></div>
                    <i className="fa-solid fa-angle-right"></i>

            </div>
        </Container>
    )
};

export default Pagination;