import React,{useState} from "react";
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn";
import EvtRegModal from "../../S022300050/view/EvtRegModal";
import "../../common/css/searchBox.css"

import useModal from "../../common/hooks/useModal";

function EventSearchView (props) {
    const {classes} = props ;

    const { ModalPortal, closeModal, openModal } = useModal();

    const onSubmitModal = (callBackData) => {
        alert(callBackData);
    };



    return (
       
            <div className="searchBox">
                <div className="layer1">
                    <Input
                        placeholder="행사명"
                    />
                    <Input
                        placeholder="운영자"
                    />
                    <SelectBox/><ImgSecondaryBtn/>
                </div>
                <div className="layer2">
                   
                        <ImgPrimaryBtn iconText={'등록'}  onClick={openModal}/>
                        <ImgPrimaryBtn iconText={"수정"}/>
                        <ImgPrimaryBtn iconText={"삭제"}/>
                        <ImgPrimaryBtn iconText={"비용등록"}/>
                    
                </div>
                <ModalPortal>
                    <EvtRegModal
                        onSubmitModal={onSubmitModal}
                        closeModal={closeModal}
                    />
                </ModalPortal>
            </div>
    );
}

export default EventSearchView;