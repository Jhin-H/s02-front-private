import React from 'react';
import Input from '../../common/elements/Input';
import Textarea from '../../common/elements/Textarea';
import PrimaryBtn from "../../common/elements/PrimaryBtn"
import SecondaryBtn from "../../common/elements/SecondaryBtn"
import "../../common/css/modal.css";
import styled from 'styled-components';



const EvtRegModalWrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;

    .date-input-wrapper {
        display:flex;
        align-items:baseline;
    }
    .event-input-wrapper {
        display:flex;
        align-items:baseline;
    }
    .email-input-wrapper {
        display:flex;
        align-items:baseline;
    }
`;

function EvtRegModal({closeModal})   {
    

    return (

        <div className="modalBg">
    
            <div className='modalBox'>

            <EvtRegModalWrapper>

                        <div className="inner">
                            <h1>안녕하세요.</h1>
                            <p className="subTitle">이곳에서 행사를 새로 등록하거나 수정할 수 있습니다.</p>

                            <div className='closeBtn' onClick={closeModal}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                    
                        

                        <div className="form">
                            
                            <Input
                                label="행사명"
                                placeholder="행사명"
                            />

                            <div className="date-input-wrapper">

                                <Input
                                    label="행사일자"
                                    type="date"
                                    data-placeholder="행사일자"
                                    required aria-required="true"
                                />
                                <div className='wave'>~</div>
                                <Input
                                    
                                    type="date"
                                    data-placeholder="행사일자"
                                    required aria-required="true"
                                />

                            </div>

                            
                            <div className='event-input-wrapper'>

                              
                                <Input
                                    label="행사장소"
                                    placeholder="행사장소"
                                />
                                    
                                    
                                <Input
                                    label="운영자"
                                    placeholder="운영자"
                                
                                />
                            
                            </div>

                            {/* <Textarea/> */}
                        
                            

                        </div>  

                            <div className="btnWrap">
                                <div>
                                    <PrimaryBtn/>
                                </div>
                                
                                <div onClick={() =>closeModal(false)}>
                                    <SecondaryBtn/>
                                </div>
                    
                            </div>
                    


                    </div>
                    
                

                    
                </EvtRegModalWrapper>
            </div>
        </div>
    );
}

export default EvtRegModal;