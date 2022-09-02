import { observer, useObserver } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { authStore } from '../common/store/commonStore';
import { API_GET } from './api';
import storage from './lib/unit/storage';

const HeaderContainer = styled.div`
  .headerWrap {
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    background-color:rgb(50, 190, 166);
    z-index:1;
  }

  .headerInner {
    display: flex;
    align-items: center;
    justify-content: center;
    width:92%;
    margin: 0 auto;
    margin-top:10px;
  }

  .topLogo {
    width:200px;
  }

  .topLogo > img {
    width:100%;
  }

  .user-wrap {
    margin-left: auto;
    display: flex;
    align-items: center;
    color:white;
    font-size: 18px;
  }

  .userProfile{
    width: 30px;
    height: 30px;
    background-color: #ababab;
    border-radius: 100%;
    display: flex;
    margin-right: 10px;
  }

  .userProfile > img{
    justify-content: center;
    align-items: center;
  }

  .userName{
    display: inline-block;
    margin-right: 2px;
  }


  .user-wrap > div {
    margin-left: 20px;
  }

  .user-wrap > div > i {
    margin-right: 10px;
  }
`;

const Header = observer(() => {
  const onClickLogout = async() => {
    const params = {
      'email': authStore.email,
    }
    try {
      const { data } = await API_GET("/auth/logout", params);
      const status = data.status;
      if(status === 200) {
        authStore.logout();
        storage.remove('access_token');
        storage.remove('refresh_token');
        storage.remove('user_info');
      }
      navigator('/');
    } catch(e) {
      console.log(e);  
    }
  }

  return useObserver(() => (
      <HeaderContainer>
        <div className="headerWrap">
          <div className="headerInner">
            <div className="topLogo">
              <img src="/img/logo3-w.png" alt="로고"></img>
            </div>
            <div className="user-wrap">
              {!authStore.authenticated 
                ? <Link to="/SignIn"><div className="login"><i className="fa-solid fa-user"></i>로그인</div></Link>
                : <>
                    <div className="userProfile"></div>
                    <p className="userName">{authStore.memberName}</p>
                    <div className="logout" onClick={onClickLogout}><i className="fa-solid fa-power-off"></i>로그아웃</div>
                  </>
              }
            </div>
          </div>
        </div>
      </HeaderContainer>
  ))
});

export default Header;