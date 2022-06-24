import React from "react";
import "../../common/css/searchBox.css"
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import InputDate from "../../common/elements/InputDate";


const AttSearchView = () => {
    

    return (
        
            <div className="searchBox">
                
                <div className="layer1">
                <InputDate/><div className="wave">~</div>
                <InputDate/>
                <Input/>
                <Input/>
                <ImgSecondaryBtn/>
                </div>


            </div>

    );
}
export default AttSearchView;