import React from "react";
import styled from 'styled-components';
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import ImgPrimaryBtn from "../../common/elements/ImgPrimaryBtn";

const ListViewContainer = styled.div`


.searchBox{
margin-top: 100px;
width:100%;
}

input{
width:200px;
}

.layer1{
    display:flex;
    width:100%;
    
}

.layer2{
    width:100%;
    display:flex;
    margin-top: 20px;
}
`

const SearchView = () => {
    

    return (

            <div className="searchBox">

                <div className="layer1">
                    <Input/>
                    <Input/>
                    <ImgSecondaryBtn/>
                </div>

                <div className="layer2">
                    <ImgPrimaryBtn iconText={"예산등록"}/>
                </div>

            </div>

    );
}
export default SearchView;