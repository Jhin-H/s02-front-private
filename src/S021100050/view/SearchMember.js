import React from 'react';
import Input from '../../common/elements/Input';
import ImgSecondaryBtn from '../../common/elements/ImgSecondaryBtn';
import styled from 'styled-components';

const SearchMemberContainer = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    position: relative;


    .closeBtn{
        position:absolute;
        top:30px;
        right: 0;
        font-size: 30px;
        color: #747474;
    }
    .searchLayer{
        margin-top:50px;
        display:flex;
    }
    table {
        margin-top: 30px;
        border: 2px solid #333;
        border-left: none;
        border-right: none;
        width: 100%;
        height: 40%;
        text-align: center;
        border-collapse: collapse;
        }
    .tableHead {
        font-weight: 500;
        font-size: 16pt;
        padding: 10px 0;
        border-bottom: 1.5px solid #333;
    }
    .tableData {
        font-size: 16px;
        padding: 15px 0;

    }
    tr:hover:not(thead>tr){
        background-color: #dcdcdc;
    }
    .checkbox{
        -webkit-appearance: none;
        position: relative;
        width: 16px;
        height: 16px;
        cursor: pointer;
        outline: none !important;
        border: 1px solid rgb(50, 190, 166);
        border-radius: 100%;
        background: #fbfbfb;
    }
    .checkbox:checked{
        background-color: rgb(50, 190, 166);
    }
    
    h1{
        font-size: 41px;
        font-weight: 200;
    }




`;

function SearchMemModal()   {
    return (
        <div className="modalBg">
            <div className='searchMemModal'>
                <SearchMemberContainer>
                    <div className="inner">
                        <h1>단체A</h1>
                        <div className='closeBtn'>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                            <div className='searchLayer'>
                                <Input
                                    label='회원명'
                                    placeholder='회원명'
                                    />
                                <ImgSecondaryBtn/>
                            </div>
                        <div className='listWrap'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='tableHead'>선택</th>
                                    <th className="tableHead">번호</th>
                                    <th className="tableHead">이름</th>
                                    <th className="tableHead">핸드폰 번호</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='tableData'>
                                        <input className="checkbox" type="checkbox"></input>
                                    </td>
                                    <td className="tableData">1</td>
                                    <td className="tableData">대표자</td>
                                    <td className="tableData">010-0000-0000</td>
                                </tr>
                                <tr>
                                    <td className='tableData'>
                                        <input className="checkbox" type="checkbox"></input>
                                    </td>
                                    <td className="tableData">2</td>
                                    <td className="tableData">대표자</td>
                                    <td className="tableData">010-0000-0000</td>
                                </tr>
                                <tr>
                                    <td className='tableData'>
                                        <input className="checkbox" type="checkbox"></input>
                                    </td>
                                    <td className="tableData">3</td>
                                    <td className="tableData">대표자</td>
                                    <td className="tableData">010-0000-0000</td>
                                </tr>
                                <tr>
                                    <td className='tableData'>
                                        <input className="checkbox" type="checkbox"></input>
                                    </td>
                                    <td className="tableData">4</td>
                                    <td className="tableData">대표자</td>
                                    <td className="tableData">010-0000-0000</td>
                                </tr>
                                <tr>
                                    <td className='tableData'>
                                        <input className="checkbox" type="checkbox"></input>
                                    </td>
                                    <td className="tableData">5</td>
                                    <td className="tableData">대표자</td>
                                    <td className="tableData">010-0000-0000</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </SearchMemberContainer>
            </div>
        </div>
    );
}

export default SearchMemModal;