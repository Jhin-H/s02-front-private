import React, { useState } from 'react';
import Input from '../../common/elements/Input';
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
const SelectBox = ({label, options=[], ...props}) => {
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
};

function OrgRegModal({ closeModal, store }) {

    const groupStore = store;

    // 이메일, 핸드폰 번호 쪼개어 넣기
    let hpNum1 = ''
    let hpNum2 = ''
    let hpNum3 = ''
    let email1 = ''
    let email2 = ''
    if(groupStore.selectGroup.orgId) {
        if (groupStore.selectGroup.hpNo) {
            hpNum1 = groupStore.selectGroup.hpNo.split('-')[0]
            hpNum2 = groupStore.selectGroup.hpNo.split('-')[1]
            hpNum3 = groupStore.selectGroup.hpNo.split('-')[2]
        }
        if (groupStore.selectGroup.email) {
            email1 = groupStore.selectGroup.email.split('@')[0]
            email2 = groupStore.selectGroup.email.split('@')[1]
        }
    } else {}

    const [orgName, setOrgName] = useState(groupStore.selectGroup.orgName || '');
    const [memberName, setMemberName] = useState(groupStore.selectGroup.memberName || '');
    const [emailId, setEmailId] = useState(email1 || '');
    const [emailDomain, setEmailDomain] = useState(email2 || '');
    const [firstHpNo, setFirstHpNo] = useState(hpNum1 || '');
    const [middleHpNo, setMiddleHpNo] = useState(hpNum2 || '');
    const [lastHpNo, setLastHpNo] = useState(hpNum3 || '');
    const [zipCode, setZipCode] = useState(groupStore.selectGroup.zipCode || '');
    const [address, setAddress] = useState(groupStore.selectGroup.address || '');
    const [detailAddress, setDetailAddress] = useState(groupStore.selectGroup.detailAddress || '');
    const [emailMs, setEmailMs] = useState('');

    // 입력 할 때, State에 파라미터 저장
    const typingText = (e) => {
        if(e.target.name === 'orgName') {
            setOrgName(e.target.value);
        } else if(e.target.name === 'memberName') {
            setMemberName(e.target.value);
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
        }
    }
    // 직접 입력할 때, State에 저장된 데이터 Store로 보내기
    const onSetRegistProps = async (e) => {
        typingText(e);
        if(groupStore.selectGroup.orgId) {
            await groupStore.setUpdateProps(e.target.name, e.target.value);
            if (e.target.name === 'emailId' || e.target.name === 'emailDomain') {
                if (groupStore.checkEmailRes) {
                    setEmailMs('사용 가능');
                } else {
                    setEmailMs('사용 불가능');
                }
            }
        } else {
            await groupStore.setRegistProps(e.target.name, e.target.value);
            if (e.target.name === 'emailId' || e.target.name === 'emailDomain') {
                if (groupStore.checkEmailRes) {
                    setEmailMs('사용 가능');
                } else {
                    setEmailMs('사용 불가능');
                }
            }
        }
    }
    // SelectBox에서 도매인 변경할 때, 파라미터 반영, 이메일 체크
    const domainChange = async (e) => {
        setEmailDomain(e.target.value);
        if(groupStore.selectGroup.orgId) {
            await groupStore.setUpdateProps('emailDomain', e.target.value);
            if (groupStore.checkEmailRes) {
                setEmailMs('사용 가능');
            } else {
                setEmailMs('사용 불가능');
            }
        } else {
            await groupStore.setRegistProps('emailDomain', e.target.value);
            if (groupStore.checkEmailRes) {
                setEmailMs('사용 가능');
            } else {
                setEmailMs('사용 불가능');
            }
        }
    }
    // 등록 실행
    const onClickSubmit = async () => {
        // 항목 비어있으면 채우라는 경고창 출력, 항목마다 조건 주기, 조건 만족하면 등록/수정 실행
        if(groupStore.selectGroup.orgId) {
            if (groupStore.checkEmailRes) {
                await groupStore.updateSelectGroup();
            } else {
                alert('이메일이 중복됩니다.\n이메일을 다시 작성해주세요.');
                return;
            }
        } else {
            if (groupStore.checkEmailRes) {
                await groupStore.registGroupList();
            } else {
                alert('이메일이 중복됩니다.\n이메일을 다시 작성해주세요.');
                return;
            }
        }
        closeModal();
    }
    // 카카오 주소찾기 API 적용
    const openPostCodeModal = () => {
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
                                onChange={onSetRegistProps}
                            />
                            <Input
                                label="이름"
                                placeholder="이름"
                                name='memberName'
                                value={memberName}
                                onChange={onSetRegistProps}
                            />
                            <div className='email-input-wrapper'>
                                <Input
                                    label="이메일"
                                    placeholder="이메일"
                                    type="text"
                                    name='emailId'
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
                                    label={emailMs}
                                    options={emailOptions}
                                    onChange={domainChange}
                                />
                            </div>
                            <div className="hp-input-wrapper">
                                <Input
                                    label="핸드폰"
                                    placeholder="핸드폰"
                                    type="text"
                                    name='firstHpNo'
                                    value={firstHpNo}
                                    onChange={onSetRegistProps}
                                />
                                <Input
                                    type="text"
                                    name='middleHpNo'
                                    value={middleHpNo}
                                    onChange={onSetRegistProps}
                                />
                                <Input
                                    type="text"
                                    name='lastHpNo'
                                    value={lastHpNo}
                                    onChange={onSetRegistProps}
                                />
                            </div>
                            {/* 우편번호 아이콘 클릭시 카카오API 주소찾기 */}
                            <div className="address-input-wrapper">
                                <Input
                                    label="주소" 
                                    placeholder="우편번호"
                                    name='zipCode'
                                    value={zipCode}
                                    onChange={onSetRegistProps}
                                    icon={<SearchIcon onClick={openPostCodeModal}/>}
                                />
                                <Input
                                    placeholder="주소"
                                    name='address'
                                    value={address}
                                    onChange={onSetRegistProps}
                                />
                                <Input
                                    placeholder="상세주소"
                                    name='detailAddress'
                                    value={detailAddress}
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
                </OrgRegModalWrapper>
            </div>
        </div>
    );
}

export default OrgRegModal;