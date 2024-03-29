import React from "react";
import styled from 'styled-components';
import Input from '../../common/elements/Input';
import PrimaryBtn from '../../common/elements/PrimaryBtn';
import { ReactComponent as SearchIcon } from "../../common/lib/img/magnifierIcon.svg";
import { Checkbox } from "@mui/material";
import {cyan } from "@mui/material/colors";
import TransferList from "./TransferList";


const Container = styled.div`

    width : 442px;
  
.contentsWrap{
    width: 100%;

}
.contentsHeader{
    font-size : 30px;
    font-weight : 600;
    margin-bottom: 15px;
}
.layer{
    display:flex;
    align-items :center;
}

.layer1{
    margin-top: 25px;
}

.layer1, .layer2, .layer3{
    margin-left:10px;
}

.layer2_1, .layer2_2, .layer3_1{
    display:flex;
}

.layer1_2{
    margin-left:10px;
}

.layer2_2{
    position: relative;
    margin-left : 10px;
}

.layer2_2>p{
    position: absolute;
    right: 10px;
    bottom: 35px;
}

.layer3{
    margin-top : 0px;
}

.layer3_1{
    align-items :center;
    justify-content :space-between;
}
.layer3_1>p{
    font-size:19px;
    margin-left:-5px;
    margin-right: 6px;
}

.checkboxWrap{
    position: relative;
    display:flex;
    align-items:center;
    margin-right : 10px;
}

.layer5{
    margin-top:-20px;
    margin-left:10px;
    margin-bottom:3px;
    
}

.layer5_inner{
    margin:0 auto;
    display :flex;
}

.layer6{
    margin-bottom:20px;
    margin-left:10px;
}


textarea {
    width: 420px;
    height: 35px;
    margin-top: 5px;
    outline: none;
    resize:none;
}

.layer7{
    margin-top:-20px;
    margin-bottom : 15px;
}

.cell{
    display:flex;
    align-items:center;
    margin-bottom:-40px;
}

.cell:last-child{
    margin-bottom: -20px;
}

.inputWrap{
    padding-top:18px;
    margin-left:10px;
}
.shortInput{
    width:110px;
}

.bottomBtnWrap{
    width : 270px;
    display:flex;
    justify-content:space-between;
    margin-top: 20px;
    margin-left: 80px;

}

.saveBtn {
    width: 110px;
    height: 45px;
    background: rgb(50, 190, 166);
    border-radius: 50px;
    color: white;
    line-height: 45px;
    text-align: center;
    font-size: 22px;
}

.saveBtn:hover{

    cursor: pointer;
    background-color: #24ac91;

}

.saveBtn:active{
background-color: rgb(25, 128, 111);
}


.delBtn {
    width: 110px;
    height: 45px;
    background: #E23838;
    border-radius: 50px;
    color: white;
    line-height: 45px;
    text-align: center;
    font-size: 22px;
    }
.delBtn:hover{

    cursor: pointer;
    background-color: #b1b1b1;
}

.delBtn:active{
    background-color: #747474;
}

.betweenWave{
    margin-top:-10px;

}


    
`;

const ContentsRight = () => {
    return (
        <Container>
            <div className="contentsWrap">

                <div className="contentsHeader">
                    부서정보
                </div>

                <div className="layer layer1">
                    <div className="layer1_1">
                        <Input
                            label="부서명"
                            placeholder="부서명"
                        />
                    </div>
                    <div className="layer1_2">
                        <Input
                            label='행사장소'
                            placeholder='행사장소'
                        />
                    </div>
                </div>

                <div className="layer layer2">
                    <div className="layer2_1">
                        
                        <Input
                            label='책임자'
                            placeholder='책임자'
                            icon={<SearchIcon />}
                        />
                    </div>
                    <div className="layer2_2">
                        <Input
                            label='예산금액'
                            placeholder='예산금액'
                        />
                        <p>(원)</p>
                    </div>
                </div>

                <div className="layer layer3">
                    <div className="layer3_1">
                        <Input
                            label='사용일자'
                            type='date'
                        />
                        <p className="betweenWave">~</p>
                        <Input
                            type='date'
                        />
                    </div>
                </div>

                <div className="layer layer4">
                    
                </div>


                <div className="layer layer5">
                    <div className="layer5_inner">
                        <div className="checkboxWrap">
                            <div className="label">결제여부</div>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: '#32bea6',
                                    '&.Mui-checked': {
                                    color: '#32bea6',
                                    },
                                }}
                            />
                            
                        </div>
                        <div className="checkboxWrap">
                            <div className="label">공개여부</div>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: '#32bea6',
                                    '&.Mui-checked': {
                                    color: '#32bea6',
                                    },
                                }}
                            />
                        </div>
                        <div className="checkboxWrap">
                            <div className="label">기본사역여부</div>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: '#32bea6',
                                    '&.Mui-checked': {
                                    color: '#32bea6',
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="layer6">
                    <div className="label">비고</div>
                    <textarea placeholder="비고"/>
                </div>


                <div className="contentsHeader">
                    결제정보
                </div>

                <div className="layer7">
            
                    <div className="cell">
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: '#32bea6',
                                '&.Mui-checked': {
                                color: '#32bea6',
                                },
                            }}
                        />
                        <p>1차 결제자</p>
                        <div className="inputWrap">
                            <Input
                            placeholder='결제자 검색'
                            icon={<SearchIcon />}/>

                            <Input className='shortInput'
                            placeholder='직책'
                            />
                        </div>
                    
                    </div>
                
                    <div className="cell">
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: '#32bea6',
                                '&.Mui-checked': {
                                color: '#32bea6',
                                },
                            }}
                        />
                        <p>2차 결제자</p>
                        <div className="inputWrap">
                            <Input
                            placeholder='결제자 검색'
                            icon={<SearchIcon />}/>
                            <Input className='shortInput'
                            placeholder='직책'
                            />
                        </div>
                    </div>
                
                    <div className="cell">
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: '#32bea6',
                                '&.Mui-checked': {
                                color: '#32bea6',
                                },
                            }}
                        />
                        <p>3차 결제자</p>
                        <div className="inputWrap">
                            <Input
                            placeholder='결제자 검색'
                            icon={<SearchIcon />}/>
                            <Input className='shortInput'
                            placeholder='직책'
                            />
                        </div>
                    </div>
                
                    <div className="cell">
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: '#32bea6',
                                '&.Mui-checked': {
                                color: '#32bea6',
                                },
                            }}
                        />
                        <p>4차 결제자</p>
                        <div className="inputWrap">
                            <Input
                            placeholder='결제자 검색'
                            icon={<SearchIcon />}/>
                            <Input className='shortInput'
                            placeholder='직책'
                            />
                        </div>
                    </div>
             
                </div>


                <div className="contentsHeader">
                    사용자정보
                </div>

                <div className="layer layer8">

                    <TransferList/>
            
                </div>

                <div className="bottomBtnWrap">
                    <div className="saveBtn">저장</div>
                    <div className="delBtn">삭제</div>
                </div>

            </div>
        </Container>
    );
}
export default ContentsRight;