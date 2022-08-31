import React, { useState } from 'react';
import Input from '../../common/elements/Input';
import PrimaryBtn from "../../common/elements/PrimaryBtn"
import SecondaryBtn from "../../common/elements/SecondaryBtn"
import "../../common/css/modal.css"
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from "../../common/lib/img/magnifierIcon.svg";
import { toJS } from 'mobx';

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

    const [memberName, setMemberName] = useState('');
    const [birth, setBirth] = useState('');
    const [firstHpNo, setFirstHpNo] = useState('');
    const [middleHpNo, setMiddleHpNo] = useState('');
    const [lastHpNo, setLastHpNo] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [emailId, setEmailId] = useState('');
    const [emailDomain, setEmailDomain] = useState('');
    const [accountNo, setAccountNo] = useState('');
    const [backNm, setBackNm] = useState('');

    // 입력 할 때, State에 파라미터 저장
    const typingText = (e) => {
        if(e.target.name === 'memberName') {
            setMemberName(e.target.value);
        } else if(e.target.name === 'birth') {
            setBirth(e.target.value);
        } else if(e.target.name === 'emailId') {
            setEmailId(e.target.value);
        } else if(e.target.name === 'emailDomain') {
            setEmailDomain(e.target.value);
        } else if(e.target.name === 'firstHpNo') {
            setFirstHpNo(e.target.value);
        }else if(e.target.name === 'middleHpNo') {
            setMiddleHpNo(e.target.value);
        } else if(e.target.name === 'lastHpNo') {
            setLastHpNo(e.target.value);
        } else if(e.target.name === 'zipCode') {
            setZipCode(e.target.value);
        } else if(e.target.name === 'address') {
            setAddress(e.target.value);
        } else if(e.target.name === 'detailAddress') {
            setDetailAddress(e.target.value);
        } else if(e.target.name === 'accountNo') {
            setAccountNo(e.target.value);
        } else if(e.target.name === 'backNm') {
            setBackNm(e.target.value);
        }
    }
    // 직접 입력할 때, State에 저장된 데이터 Store로 보내기
    const onSetRegistProps = async (e) => {
        typingText(e);
        await memberStore.setRegistProps(e.target.name, e.target.value);
        console.log(toJS(memberStore.registMember));
    }
    // SelectBox에서 도매인 변경할 때, 파라미터 반영
    const domainChange = async (e) => {
        setEmailDomain(e.target.value);
        await memberStore.setRegistProps('emailDomain', e.target.value);
    }

    const onClickSubmit = async () => {
        await memberStore.registerMem();
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
                                name="memberName"
                                value={memberName}
                                onChange={onSetRegistProps}
                            />
                            <SelectBox label="회원구분" store={memberStore}/>
                        </div>
                        <div className='birth-input-wrapper'>
                            <Input
                                label="생년월일"
                                placeholder="생년월일"
                                name="birth"
                                value={birth}
                                onChange={onSetRegistProps}
                            />
                        </div>
                        <div className="hp-input-wrapper">
                            <Input type="text" label="핸드폰" name="firstHpNo" value={firstHpNo} onChange={onSetRegistProps}/>
                            <Input type="text" name="middleHpNo" value={middleHpNo} onChange={onSetRegistProps}/>
                            <Input type="text" name="lastHpNo" value={lastHpNo} onChange={onSetRegistProps}/>
                        </div>
                        <div className="address-input-wrapper">
                            <Input
                                label="주소" 
                                placeholder="우편번호"
                                name="zipCode"
                                value={zipCode}
                                onChange={onSetRegistProps}
                                icon={<SearchIcon onClick={openPostCodeModal}/>}
                            />
                            <Input
                                placeholder="주소"
                                name="address"
                                value={address}
                                onChange={onSetRegistProps}
                            />
                            <Input
                                placeholder="상세주소"
                                name="detailAddress"
                                value={detailAddress}
                                onChange={onSetRegistProps}
                            />
                        </div>
                        <div className='email-input-wrapper'>
                            <Input
                                label="E-mail"
                                placeholder="이메일"
                                name="emailId"
                                value={emailId}
                                onChange={onSetRegistProps}
                            />
                            <div className='at'>@</div>
                            <Input
                                type="text"
                                name='emailDomain'
                                value={emailDomain}
                                onChange={onSetRegistProps}
                            />
                            <SelectBox
                                name='emailDomainBox'
                                options={emailOptions}
                                onChange={domainChange}
                            />
                        </div>
                        <div className='email-input-wrapper'>
                            <Input
                                label="계좌번호"
                                placeholder="계좌번호"
                                name="accountNo"
                                value={accountNo}
                                onChange={onSetRegistProps}
                            />
                            <Input
                                label="거래은행"
                                placeholder="거래은행"
                                name="backNm"
                                value={backNm}
                                onChange={onSetRegistProps}
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