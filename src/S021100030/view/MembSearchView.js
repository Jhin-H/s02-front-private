import React from "react";
import "../../common/css/searchBox.css"
import ImgSecondaryBtn from "../../common/elements/ImgSecondaryBtn";
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import ImgPrimaryBtn from  "../../common/elements/ImgPrimaryBtn"
import MemRegModal from "../../S021100040/view/MemRegModal";
import useModal from "../../common/hooks/useModal";






const MembSearchView = (props) => {

    const {classes} = props ;

    const { ModalPortal, closeModal, openModal } = useModal();

    const onSubmitModal = (callBackData) => {
        alert(callBackData);
    };

    

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
                        placeholder="회원명"
                    />
                    <Input
                        placeholder="부서명"
                    />
                    <SelectBox/>
                    <ImgSecondaryBtn/>
                </div>
                <div className="layer3-icon">

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
export default MembSearchView;