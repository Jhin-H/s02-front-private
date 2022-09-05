import { observer, useObserver } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { API_SIGN_IN } from '../repository/SignInRepository';
import LoginInput from '../../common/elements/LoginInput';
import {ReactComponent as PwInputIcon} from '../../common/lib/img/VisibleEyeIcon.svg';


const SignInContainer = styled.div`

.wrap{
    position : absolute;
    top: 0;
    z-index:0;
    width: 100%;
    height: 100vh;
    background: url(/img/login-bg.svg) center no-repeat;
    background-size: 100%;
}

.topLogo {
    width: 200px;
    margin: 0 auto;
    padding-top: 30px;
}
.topLogo>img {
    width: 100%;
    
}

.loginBox{
    position: fixed; left: 38%; top: 22%;
    margin: 0 auto;
    width: 24%;
    height: 60%;
}

h1{
    font-size: 3vw;
    font-family: "Apple SD Gothic Neo","NotoSansKR", "NanumMyeongjo" ;
    font-weight: 200;
    color: rgb(255, 255, 255);
    text-align: center;
    z-index: 7;
    margin-top: 10px;
    margin-bottom: 30%;
}

.form{
    width: 90%;
    margin: 0 auto;
    text-align: center;
}

.loginBtn{
    background: #32bea6;
    border: none;
    border-radius: 50px;
    width: 100%;
    height: 70px;
    color: white;
    font-size: 2em;
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);
    line-height: 70px;
    margin-top : 10%;
    
}

.loginBtn:hover{
    cursor: pointer;
}
.loginBtn:active{
    background: #106658;
}

.img-wrap>img:hover{
    opacity: 0.8;
    
}

`;

const SignIn = observer(() => {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const onChangeEmail = (e) => { setEmail(e.target.value) };
    const onChangePassword = (e) => { setPwd(e.target.value)};

    const onClickSignIn = async() => {
        const params = {
            email: email,
            pwd: pwd,
        };
        const isSuccess = await API_SIGN_IN(params);
        if(isSuccess) navigate('/');
    }

    return useObserver(() => (
        <SignInContainer>
            <div className="wrap">
                <div className="topLogo">
                    <img src="/img/logo3-w.png" alt="로고"></img>
                </div>

                <div className="loginBox">

                    <h1>환영합니다</h1>

                    <form className="form">

                    <LoginInput className="idForm"
                    placeholder="이메일을 입력해주세요"
                    onChange={onChangeEmail}/>
                    
                    <LoginInput className="pwForm"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={onChangePassword}
                    icon={<PwInputIcon/>}
                    />
                
                    <div className="loginBtn" onClick={onClickSignIn}>
                        시작하기
                    </div>

                    </form>
                </div>
            </div>
        </SignInContainer>
    ));
})
export default SignIn;