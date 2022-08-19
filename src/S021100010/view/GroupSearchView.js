import React,{useState} from "react";
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn";
import OrgRegModal from "../../S021100020/view/OrgRegModal";
import "../../common/css/searchBox.css";
import useModal from "../../common/hooks/useModal";

function GroupSearchView (props) {
    const {classes} = props ;
    const { ModalPortal, closeModal, openModal } = useModal();
    const onSubmitModal = (callBackData) => {
        alert(callBackData);
    };
    return (
        <div className="searchBox">
            <div className="layer1">
                <Input placeholder="단체명"/>
                <Input placeholder="대표자"/>
                <ImgSecondaryBtn/>
            </div>
            <div className="layer2-icon">
                <div className="iconWrap-left">
                    <ImgPrimaryBtn iconText={'등록'} onClick={openModal}/>
                    <ImgPrimaryBtn iconText={"수정"}/>
                    <ImgPrimaryBtn iconText={"삭제"}/>
                </div>
                <div className="iconWrap-right">
                    <ImgPrimaryBtn iconText={"다운로드"}/>
                </div>
            </div>
            <ModalPortal>
                <OrgRegModal onSubmitModal={onSubmitModal} closeModal={closeModal}/>
            </ModalPortal>
        </div>
    );
}

export default GroupSearchView;