import React from "react";
import "../../common/css/searchBox.css";
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import InputDate from "../../common/elements/InputDate";
import SelectBox from "../../common/elements/SelectBox";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn"


const SignSearchView = () => {
    

    return (

            <div className="searchBox">

                <div className="layer1">
                    <InputDate/><div className="wave">~</div>
                    <InputDate/>
                </div>
                <div className="layer2">
                    <Input/>
                    <Input/>
                    <Input/>
                    <SelectBox/>
                    <ImgSecondaryBtn/>
                </div>
                <div className="layer3">

                    <ImgPrimaryBtn iconText={"등록"}/>
                    <ImgPrimaryBtn iconText={"수정"}/>
                    <ImgPrimaryBtn iconText={"삭제"}/>
                
                </div>
               

            </div>

    );
}
export default SignSearchView;