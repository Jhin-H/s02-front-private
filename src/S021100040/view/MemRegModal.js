import React from 'react';
import Input from '../../common/elements/Input';
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
const SelectBoxContainer = styled.div`
    position:relative;
    select{
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: #333 1.5px solid;
        outline: none;
        width: 200px;
        height: 26.5px;
        font-size: 15px;
        text-align: center;
        margin-right:10px;
        margin-bottom:0;
        color: #ababab;
    }
    label {
        position:absolute;
        top:-35px;
    }
`;

const emailOptions = [
    { value: "", name: "직접 입력" },
	{ value: "naver.com", name: "naver.com" },
	{ value: "daum.net", name: "daum.net" },
	{ value: "google.com", name: "google.com" }
];
const SelectBox = ({label, options=[], store, ...props}) => {
    if(label === '회원구분') {
        return (
            <SelectBoxContainer>
                <label>{label}</label>
                <select {...props}>
                    {store.resCode.map((v) => (
                        <option key={v.cdV} value={v.cdV}>{v.cdVMeaning}</option>
                    ))}
                </select>
            </SelectBoxContainer>
        )
    } else {
        return (
            <SelectBoxContainer>
                <label>{label}</label>
                <select {...props}>
                    {options.map((v) => (
                        <option key={v.value} value={v.value}>{v.name}</option>
                    ))}
                </select>
            </SelectBoxContainer>
        )
    }
};

function MemRegModal({ closeModal, store }) {

    const memberStore = store;

    const onClickSubmit = async () => {
        closeModal();
    }
    const openPostCodeModal = () => {
        alert("주소찾기");
    }

    return (
        <div className="modalBg">
        <div className='modalBox'>
            <MemRegModalWrapper>
                <div className="inner">
                    <h1>안녕하세요.</h1>
                    <p className="modalSubTitle">이곳에서 새로운 회원정보를 기입하여 단체를 새로 등록할 수 있습니다.</p>
                    <div className='closeBtn' onClick={closeModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="form">
                        <div className='name-input-wrapper'>
                            <Input
                                label="이름"
                                placeholder="이름"
                            />
                            <SelectBox label="회원구분" store={memberStore}/>
                        </div>
                        <div className='birth-input-wrapper'>
                            <Input
                                label="생년월일"
                                placeholder="생년월일"
                            />
                            <SelectBox label="부서"/>
                        </div>
                        <div className="hp-input-wrapper">
                            <Input type="text" label="핸드폰"/>
                            <Input type="text"/>
                            <Input type="text"/>
                        </div>
                        <div className="address-input-wrapper">
                            <Input
                                label="주소" 
                                placeholder="우편번호"
                                icon={<SearchIcon onClick={openPostCodeModal}/>}
                            />
                            <Input placeholder="주소"/>
                            <Input placeholder="상세주소"/>
                        </div>
                        <div className='email-input-wrapper'>
                            <Input
                                label="E-mail"
                                placeholder="이메일"
                            />
                            <div className='at'>@</div>
                            <Input
                                type="text"
                                name='emailDomain'
                            />
                            <SelectBox
                                name='emailDomainBox'
                                options={emailOptions}
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
                    <div className="btnWrap">
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