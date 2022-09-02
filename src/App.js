import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom' ;
import Navbar from './common/Navbar';
import Home from './page/Home';
import Attend from './S022300080/container/AttContainer';
import Member from './page/Member';
import Sign from './page/Sign';
import Budget from './page/Budget';
import Group from './page/Group';
import Event from './S022300040/container/EventContainer';
import DepartReg from './S021100070/container/DepartRegContainer';
import Popup from './S021100050/view/SearchMember';
import { authStore } from './common/store/commonStore';
import storage from './common/lib/unit/storage';
import SignIn from './S021200010/container/SignIn';




 function App() {
  const initializeStore = () => {
    const userInfo = storage.get('user_info');
    authStore.setAuthenticated(userInfo);
  }

  React.useEffect(() => {
    initializeStore();
  }, []);


  return (
    <>
      <div className="App">
        
          <BrowserRouter>

            <Navbar />

            <Routes>
              
              <Route path='/' element={<Home />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path='/Attend' element={<Attend />} />
              <Route path='/Member' element={<Member />} />
              <Route path='/Sign' element={<Sign />} />
              <Route path='/Budget' element={<Budget />} />
              <Route path='/Group' element={<Group />} />
              <Route path='/Event' element={<Event />} />
              <Route path='/DepartReg' element={<DepartReg />} />
              <Route path='/Popup' element={<Popup />} />
              
            
            </Routes>
          </BrowserRouter>
      </div>
      <div id="root-modal" />
    </>

    
  );
}


export default App;
