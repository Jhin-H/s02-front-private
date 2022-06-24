import React from 'react';
import Input from '../../common/elements/Input';
import InputDate from "../../common/elements/InputDate"
import SelectBox from "../../common/elements/SelectBox";
import PrimaryBtn from "../../common/elements/PrimaryBtn"
import SecondaryBtn from "../../common/elements/SecondaryBtn"
import "../../common/css/modal.css";

function EvtRegModal({closeModal})   {
    

    return (

        <div className="modalBg">
    
            <div className='modalBox'>

                <div class="wrap">
                        <div class="inner">
                            <h1>안녕하세요.</h1>
                            <p class="subTitle">이곳에서 행사를 새로 등록하거나 수정할 수 있습니다.</p>

                            <div className='closeBtn' onClick={closeModal}>
                                X
                            </div>
                    
                        

                        <div className="form">
                            
                            <label>행사명</label>
                            <Input/>

                            <label>행사일자</label>

                            <div className="inputWrap">

                                <InputDate/>
                                <div className='wave'>~</div>
                                <InputDate/>

                            </div>

                            
                            <div className='inputWrap'>

                                <div className='inputWrap'>
                                    <label>행사장소</label>
                                    <Input/>
                                </div>
                                    <label>운영자</label>
                                <Input/>
                            
                            </div>

                            
                        
                            <label>이름</label>
                            <Input/>
                            <lable>핸드폰</lable>
                            <div className="inputWrap"><InputDate/><InputDate/></div>
                            <label>E-mail</label>
                            <div className="inputWrap"><Input/></div><SelectBox/>

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

export default EvtRegModal;