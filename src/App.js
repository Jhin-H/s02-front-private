import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom' ;
import Navbar from './common/Navbar';
import Home from './page/Home';
import Attend from './page/Attend';
import Member from './page/Member';
import Sign from './page/Sign';
import Budget from './page/Budget';
import Group from './page/Group';
import Event from './page/Event';




 function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/Attend' element={<Attend />} />
            <Route path='/Member' element={<Member />} />
            <Route path='/Sign' element={<Sign />} />
            <Route path='/Budget' element={<Budget />} />
            <Route path='/Group' element={<Group />} />
            <Route path='/Event' element={<Event />} />
           
          </Routes>
        </BrowserRouter>
    </div>

    
  );
}


export default App;
