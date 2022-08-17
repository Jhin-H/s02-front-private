import React from 'react';
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import PrimaryBtn from "../../common/elements/PrimaryBtn"
import SecondaryBtn from "../../common/elements/SecondaryBtn"
import "../../common/css/modal.css"
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from "../../common/lib/img/magnifierIcon.svg";

const MemRegModalWrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;

    .address-input-wrapper, .email-input-wrapper, .hp-input-wrapper, .name-input-wrapper, .birth-input-wrapper {
        display:flex;
        align-items:baseline;
    }
`;

function MemRegModal({ onSubmitModal, closeModal })   {

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
        <MemRegModalWrapper>
            <div class="inner">
                <h1>안녕하세요.</h1>
                <p class="modalSubTitle">이곳에서 새로운 회원정보를 기입하여 단체를 새로 등록할 수 있습니다.</p>

                <div className='closeBtn' onClick={closeModal}>
                    <i class="fa-solid fa-xmark"></i>
                </div>

                <div className="form">
                    
                    <div className='name-input-wrapper'>

                        <Input
                            label="이름"
                            placeholder="이름"
                        />
                        <SelectBox
                            label="회원구분"
                        
                        />

                    </div>

                    <div className='birth-input-wrapper'>
                        <Input
                            label="생년월일"
                            placeholder="생년월일"
                        />
                        <SelectBox
                            label="부서"
                           
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

                    <div className='email-input-wrapper'>

                        <Input
                            label="E-mail"
                            placeholder="이메일"
                        />
                        <SelectBox
                           
                        />
                    </div>


                    <div className='email-input-wrapper'>
                        <Input
                            label="소속교구"
                            placeholder="소속교구"
                        />
                        <Input
                            label="차량번호"
                            placeholder="차량번호"
                           
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
            
            </MemRegModalWrapper>
        </div>
        </div>
    );
}

export default MemRegModal;