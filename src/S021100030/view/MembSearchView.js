import React from "react";
import { observer, inject } from "mobx-react";
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn"
import MemRegModal from "../../S021100040/view/MemRegModal";
import useModal from "../../common/hooks/useModal";


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

                    <Input
                        placeholder="회원명"
                    />

                    <SelectBox/>
                    <ImgSecondaryBtn/>
                </div>
                <div className="layer2-icon">

                    <div className="iconWrap-left">
                        <ImgPrimaryBtn iconText={'등록'} onClick={openModal}/>
                        <ImgPrimaryBtn iconText={"수정"}/>
                        <ImgPrimaryBtn iconText={"삭제"}/>
                        <ImgPrimaryBtn iconText={"운영자등록"}/>
                        <ImgPrimaryBtn iconText={"운영자삭제"}/>
                    </div>

                    <div className="iconWrap-right">

                        <ImgPrimaryBtn iconText={"다운로드"}/>
                        <ImgPrimaryBtn iconText={"업로드"}/>
                    </div>

                </div>
               
                <ModalPortal>
                    <MemRegModal
                        onSubmitModal={onSubmitModal}
                        closeModal={closeModal}
                    />
                </ModalPortal>

            </div>


  
    );
}

export default inject('memberStore')(observer(MembSearchView));