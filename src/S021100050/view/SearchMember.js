import React from 'react';
import Input from '../../common/elements/Input';
import ImgSecondaryBtn from '../../common/elements/ImgSecondaryBtn';
import "../../common/css/modal.css"
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from "../../common/lib/img/magnifierIcon.svg";

const SearchMemberContainer = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;

.upperContents{
    margin-top:50px;
}

.searchLayer{
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


`;

function SearchMemModal()   {



    return (

        <div className="modalBg">
    
        <div className='modalBox'>
        <SearchMemberContainer>

            <div className="inner">
                <h1>안녕하세요.</h1>
                <p className="modalSubTitle">이곳에서 단체 정보와 회원 정보를 기입하여 회원을 검색할 수 있습니다.</p>

                <div className='closeBtn'>
                    <i className="fa-solid fa-xmark"></i>
                </div>

                <div className='upperContents'>

                    <div className='groupShowLayer'>
                    <Input
                        label='단체명'
                        placeholder='회원명'
                        />
                    </div>

                    <div className='searchLayer'>

                        <Input
                            label='회원명'
                            placeholder='회원명'
                            />
                        <ImgSecondaryBtn/>

                    </div>

                </div>

                
                <div className='listWrap'>

                <table>

                    <thead>

                        <tr>
                            <th className='tableHead'>선택</th>
                            <th className="tableHead">번호</th>
                            <th className="tableHead">행사명</th>
                            <th className="tableHead">이름</th>
                            <th className="tableHead">핸드폰 번호</th>
                            <th className="tableHead">부서명</th>
                        </tr>

                    </thead>

                    <tbody>
                        <tr>
                            <td className='tableData'>
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="tableData">1</td>
                            <td className="tableData">A행사</td>
                            <td className="tableData">대표자</td>
                            <td className="tableData">010-0000-0000</td>
                            <td className="tableData">부서명A</td>
                            
                        </tr>
                        
                        <tr>
                            <td className='tableData'>
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="tableData">2</td>
                            <td className="tableData">B행사</td>
                            <td className="tableData">대표자</td>
                            <td className="tableData">010-0000-0000</td>
                            <td className="tableData">부서명A</td>
                        </tr>
                        
                        <tr>
                            <td className='tableData'>
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="tableData">3</td>
                            <td className="tableData">C행사</td>
                            <td className="tableData">대표자</td>
                            <td className="tableData">010-0000-0000</td>
                            <td className="tableData">부서명A</td>
                        </tr>
                        
                        <tr>
                            <td className='tableData'>
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="tableData">4</td>
                            <td className="tableData">D행사</td>
                            <td className="tableData">대표자</td>
                            <td className="tableData">010-0000-0000</td>
                            <td className="tableData">부서명A</td>
                        </tr>
                        
                        <tr>
                            <td className='tableData'>
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="tableData">5</td>
                            <td className="tableData">E행사</td>
                            <td className="tableData">대표자</td>
                            <td className="tableData">010-0000-0000</td>
                            <td className="tableData">부서명A</td>
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