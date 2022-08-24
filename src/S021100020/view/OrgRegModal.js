import React, { useState } from 'react';
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import PrimaryBtn from "../../common/elements/PrimaryBtn"
import SecondaryBtn from "../../common/elements/SecondaryBtn"
import { ReactComponent as SearchIcon } from "../../common/lib/img/magnifierIcon.svg";
import "../../common/css/modal.css"
import styled from 'styled-components';

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

function OrgRegModal({ closeModal, store }) {

    const groupStore = store;

    // 수정: 번호 3분할 반환, 등록: 빈 데이터 반환
    let hpNum1 = ''
    let hpNum2 = ''
    let hpNum3 = ''
    // let email1 = ''
    // let email2 = ''
    if(groupStore.selectGroup.orgId) {
        hpNum1 = groupStore.selectGroup.hpNo.split('-')[0]
        hpNum2 = groupStore.selectGroup.hpNo.split('-')[1]
        hpNum3 = groupStore.selectGroup.hpNo.split('-')[2]
        // email1 = groupStore.selectGroup.email.split('@')[0]
        // email2 = groupStore.selectGroup.email.split('@')[1]
    } else {}

    const [orgName, setOrgName] = useState(groupStore.selectGroup.orgName || '');
    const [memberName, setMemberName] = useState(groupStore.selectGroup.memberName || '');
    const [email, setEmail] = useState(groupStore.selectGroup.email || ''); // 이메일 나중에 수정할 것
    // const [email, setEmail] = useState('');
    // const [emailId, setEmailId] = useState(email1 || '');
    // const [emailDomain, setEmailDomain] = useState(email2 || '');
    const [firstHpNo, setFirstHpNo] = useState(hpNum1 || '');
    const [middleHpNo, setMiddleHpNo] = useState(hpNum2 || '');
    const [lastHpNo, setLastHpNo] = useState(hpNum3 || '');
    const [zipCode, setZipCode] = useState(groupStore.selectGroup.zipCode || '');
    const [address, setAddress] = useState(groupStore.selectGroup.address || '');
    const [detailAddress, setDetailAddress] = useState(groupStore.selectGroup.detailAddress || '');

    const typingText = (e) => {
        if(e.target.name === 'orgName') {
            setOrgName(e.target.value);
        } else if(e.target.name === 'memberName') {
            setMemberName(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } // 이메일 나중에 수정할 것
        // else if(e.target.name === 'emailId') {
        //     setEmailId(e.target.value);
        //     setEmail(emailId+'@'+emailDomain);
        // } else if(e.target.name === 'emailDomain') {
        //     setEmailDomain(e.target.value);
        //     setEmail(emailId+'@'+emailDomain);
        // }
        else if(e.target.name === 'firstHpNo') {
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
        }
    }

    const onSetResistProps = (e) => {
        if(groupStore.selectGroup.orgId) {
            typingText(e);
            groupStore.setUpdateProps(e.target.name, e.target.value);
        } else {
            typingText(e);
            groupStore.setResistProps(e.target.name, e.target.value);
        }
    }

    const onClickSubmit = async () => {
        // 항목 비어있으면 채우라는 경고창 출력, 이메일 중복체크, 항목마다 조건 주기, 조건 만족하면 등록/수정 실행
        if(groupStore.selectGroup.orgId) {
            await groupStore.updateSelectGroup();
        } else {
            await groupStore.resistGroupList();
        }
        closeModal();
    }
    const openPostCodeModal = () => {
        // 카카오 주소찾기 API 적용
        alert("주소찾기");
    }

    return (
        <div className="modalBg">
            <div className='modalBox'>
                <OrgRegModalWrapper>
                    <div className="inner">
                        <h1>안녕하세요.</h1>
                        <p className="modalSubTitle">이곳에서 단체 정보와 대표자 정보를 기입하여 단체를 새로 등록할 수 있습니다.</p>
                        <div className='closeBtn' onClick={closeModal}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className="form">
                            <Input
                                label="단체명"
                                placeholder="단체명"
                                name='orgName'
                                value={orgName}
                                onChange={onSetResistProps}
                            />
                            <Input
                                label="이름"
                                placeholder="이름"
                                name='memberName'
                                value={memberName}
                                onChange={onSetResistProps}
                            />
                            <div className='email-input-wrapper'>
                                <Input
                                    label="이메일"
                                    placeholder="이메일"
                                    type="text"
                                    name='email'
                                    value={email}
                                    onChange={onSetResistProps}
                                />
                                {/* <Input
                                    label="이메일"
                                    placeholder="이메일"
                                    type="text"
                                    name='emailId'
                                    value={emailId}
                                    onChange={onSetResistProps}
                                /> */}
                                {/* <div className='at'>@</div> */}
                                <Input
                                    type="text"
                                    name='emailDomain'
                                    // value={emailDomain}
                                    onChange={onSetResistProps}
                                />
                                <SelectBox/>
                            </div>
                            <div className="hp-input-wrapper">
                                {/* <SelectBox label="핸드폰" name='firstHpNo'/> */}
                                <Input
                                    label="핸드폰"
                                    type="text"
                                    name='firstHpNo'
                                    value={firstHpNo}
                                    onChange={onSetResistProps}
                                />
                                <Input
                                    type="text"
                                    name='middleHpNo'
                                    value={middleHpNo}
                                    onChange={onSetResistProps}
                                />
                                <Input
                                    type="text"
                                    name='lastHpNo'
                                    value={lastHpNo}
                                    onChange={onSetResistProps}
                                />
                            </div>
                            {/* 우편번호 아이콘 클릭시 카카오API 주소찾기 */}
                            <div className="address-input-wrapper">
                                <Input
                                    label="주소" 
                                    placeholder="우편번호"
                                    name='zipCode'
                                    value={zipCode}
                                    onChange={onSetResistProps}
                                    icon={<SearchIcon onClick={openPostCodeModal}/>}
                                />
                                <Input
                                    placeholder="주소"
                                    name='address'
                                    value={address}
                                    onChange={onSetResistProps}
                                />
                                <Input
                                    placeholder="상세주소"
                                    name='detailAddress'
                                    value={detailAddress}
                                    onChange={onSetResistProps}
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
                </OrgRegModalWrapper>
            </div>
        </div>
    );
}

export default OrgRegModal;