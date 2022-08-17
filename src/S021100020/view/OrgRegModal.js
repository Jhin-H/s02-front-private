import React from 'react';
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import PrimaryBtn from "../../common/elements/PrimaryBtn"
import SecondaryBtn from "../../common/elements/SecondaryBtn"
import "../../common/css/modal.css"
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from "../../common/lib/img/magnifierIcon.svg";

const OrgRegModalWrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;

    .address-input-wrapper {
        display:flex;
        align-items:baseline;
    }
    .hp-input-wrapper {
        display:flex;
        align-items:baseline;
    }
    .email-input-wrapper {
        display:flex;
        align-items:baseline;
    }
`;

function OrgRegModal({ onSubmitModal, closeModal })   {

    const onClickSubmit = () => {
        const orgName = "ggg";
        onSubmitModal(orgName);
        closeModal();
    }

    const openPostCodeModal = () => {
        alert("주소찾기");
    }


    return (

        <div className="modalBg">
    
        <div className='modalBox'>
        <OrgRegModalWrapper>
            <div class="inner">
                <h1>안녕하세요.</h1>
                <p class="modalSubTitle">이곳에서 단체 정보와 대표자 정보를 기입하여 단체를 새로 등록할 수 있습니다.</p>

                <div className='closeBtn' onClick={closeModal}>
                    <i class="fa-solid fa-xmark"></i>
                </div>

                <div className="form">
                    <Input
                        label="단체명"
                        placeholder="단체명"
                    />
                    <Input
                        label="이름"
                        placeholder="이름"
                    />
                    <div className='email-input-wrapper'>
                        <Input
                            label="이메일"
                            placeholder="이메일"
                            type="text"
                        />
                        <SelectBox
                           
                        />
                    </div>
                    <div className="hp-input-wrapper">
                        <SelectBox 
                            label="핸드폰"
                           
                        />
                        <Input
                            type="text"
                        />
                        <Input
                            type="text"
                        />
                    </div>
                    <div className="address-input-wrapper">
                        <Input
                            label="주소" 
                            placeholder="우편번호"
                            icon={<SearchIcon onClick={openPostCodeModal}/>}
                        />
                        <Input
                            placeholder="주소"
                        />
                        <Input
                            
                            placeholder="상세주소"
                        />
                    </div>

                </div> 

                    <div class="btnWrap">
                        <div onClick={onClickSubmit}>
                            <PrimaryBtn/>
                        </div>
                        
                        <div onClick={closeModal}>
                            <SecondaryBtn/>
                        </div>
            
                    </div>
            </div>
            
            </OrgRegModalWrapper>
        </div>
        </div>
    );
}

export default OrgRegModal;