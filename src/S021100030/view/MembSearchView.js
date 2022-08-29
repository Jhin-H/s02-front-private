import React from "react";
import { observer, inject } from "mobx-react";
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn"
import MemRegModal from "../../S021100040/view/MemRegModal";
import useModal from "../../common/hooks/useModal";
import "../../common/css/searchBox.css";

const MembSearchView = (props) => {
    
    const { memberStore } = props;
    const { ModalPortal, closeModal, openModal } = useModal();

    const clickRegist = async () => {
        openModal();
    }
    const clickUpdate = async () => {
        openModal();
    }
    const clickDelete = async () => {
    }

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
                <Input placeholder="회원명"/>
                <SelectBox placeholder="회원구분"/>
                <ImgSecondaryBtn/>
            </div>
            <div className="layer3-icon">
                <div className="iconWrap-left">
                    <ImgPrimaryBtn iconText={'등록'} onClick={clickRegist}/>
                    <ImgPrimaryBtn iconText={"수정"} onClick={clickUpdate}/>
                    <ImgPrimaryBtn iconText={"삭제"} onClick={clickDelete}/>
                    <ImgPrimaryBtn iconText={"운영자등록"}/>
                    <ImgPrimaryBtn iconText={"운영자삭제"}/>
                </div>
                <div className="iconWrap-right">
                    <ImgPrimaryBtn iconText={"다운로드"}/>
                    <ImgPrimaryBtn iconText={"업로드"}/>
                </div>
            </div>
            <ModalPortal>
                <MemRegModal store={memberStore} closeModal={closeModal}/>
            </ModalPortal>
        </div>
    );
}

export default inject('memberStore')(observer(MembSearchView));