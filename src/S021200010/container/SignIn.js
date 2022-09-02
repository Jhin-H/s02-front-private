import { observer, useObserver } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { API_SIGN_IN } from '../repository/SignInRepository';

const SignInContainer = styled.div`

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
            <input placeholder='이메일' onChange={onChangeEmail}></input>
            <input placeholder='패스워드' onChange={onChangePassword}></input>
            <button type="button" onClick={onClickSignIn}>로그인</button>
        </SignInContainer>
    ));
})
export default SignIn;