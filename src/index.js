import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import GroupStore from './S021100010/store/GroupStore';
import MemberStore from './S021100030/store/MemberStore';
import AttStore from './S022300080/store/AttStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider
    groupStore = { GroupStore }
    memberStore = { MemberStore }
    attStore = { AttStore }
  >
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
