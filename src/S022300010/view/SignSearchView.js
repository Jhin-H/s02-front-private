import React from "react";
import "../../common/css/searchBox.css";
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn"


const SignSearchView = () => {
    

    return (

            <div className="searchBox">

                <div className="layer1">
                    <Input
                        type="date"
                        data-placeholder="등록일자"
                        required aria-required="true"
                    />
                    <div className="wave">~</div>
                    <Input
                        type="date"
                        data-placeholder="등록일자"
                        required aria-required="true"
                    />
                </div>
                <div className="layer2">
                    <Input
                        placeholder="제목"
                    />
                    <Input
                        placeholder="등록자"
                    />
                    <Input
                        placeholder="결제자"
                    />
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