import React from "react";
import "../../common/css/searchBox.css"
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';


const AttSearchView = () => {
    

    return (
        
            <div className="searchBox">
                
                <div className="layer1">
                <Input
                    type="date"
                    data-placeholder="출입일시"
                    required aria-required="true"
                />
                <div className="wave">~</div>
                <Input
                    type="date"
                    data-placeholder="출입일시"
                    required aria-required="true"
                />
                <Input
                    placeholder="행사명"
                />
                <Input
                    placeholder="회원명"
                />
                <ImgSecondaryBtn/>
                </div>


            </div>

    );
}
export default AttSearchView;