import React from "react";
import Weather from "./Weather";
import styled from 'styled-components';


const Container = styled.div`
.weather{
    width: 20%;
    margin :0 auto;
    margin-top: 30px;
}

input{
    display: block;
    border:none;
    border-bottom : 2px solid #707070;
    font-size: 22px;
    margin : 0 auto;
    text-align : center;
}

.result {
    width:100px;
    height:100px;
    margin : 0 auto;
    border : 2px solid lavender;
    border-radius : 20px;
    padding:20px;
    margin-top:20px;
}

.city{
    font-size: 18px;
    font-weight : bold;
}

.temp{
    font-size: 35px;
    font-weight : bolder;
    color: red;
    margin-top: 5px;
}

.sky{

    font-size : 16px;

}

    input::placeholder{

        text-align: center;
        color: #ababab;
        
    }


    input:focus{
        outline:none;
    }



`


const Test = () => {
    return (

        <Container>
            <div>
                <Weather/>
            </div>

        </Container>
    );
}
export default Test;