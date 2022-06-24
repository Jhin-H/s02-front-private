import React from 'react';
import Input from '../../common/elements/Input';
import SelectBox from "../../common/elements/SelectBox";
import PrimaryBtn from "../../common/elements/PrimaryBtn"
import SecondaryBtn from "../../common/elements/SecondaryBtn"
import "../../common/css/modal.css"


function OrgRegModal({closeModal})   {
    

    return (

        <div className="modalBg">
    
        <div className='modalBox'>
        <div class="wrap">
                <div class="inner">
                    <h1>안녕하세요.</h1>
                    <p class="subTitle">이곳에서 단체 정보와 대표자 정보를 기입하여 단체를 새로 등록할 수 있습니다.</p>

                    <div className='closeBtn' onClick={closeModal}>
                        X
                    </div>
            
                 

                <div className="form">
                    
                    <label>단체명</label>
                    <Input/>

                    <label>주소</label>
                    <div className="inputWrap"><Input/><Input/><Input/></div>

                    <label>연락처</label>
                    <Input/>

                    <label>이름</label>
                    <Input/>
                    <lable>핸드폰</lable>
                    <div className="inputWrap"><Input/><Input/><Input/></div>
                    <label>E-mail</label>
                    <div className="inputWrap"><Input/><div className="at">@</div><SelectBox/></div>

                </div> 

                    <div class="btnWrap">
                        <div>
                            <PrimaryBtn/>
                        </div>
                        
                        <div onClick={() =>closeModal(false)}>
                            <SecondaryBtn/>
                        </div>
            
                    </div>
            


            </div>
            
        </div>
        </div>
        </div>
    );
}

export default OrgRegModal;