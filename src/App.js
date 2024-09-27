import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home'
import CreateProject from './pages/CreateProject'
import ManageProject from './pages/ManageProject'
import AddFriend from './components/AddFriend';
import Opacator from './components/Opacator';
import AddBill from './components/AddBill';
import { useState } from 'react';

function App() {
  
  const [logged, setLogged] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>

        {/* <Landing></Landing> */}
        {/* <Login></Login> */}
        {/* <Home></Home> */}
        {/* <CreateProject></CreateProject> */}
        {/* <ManageProject></ManageProject> */}
        
        <Routes>
          <Route path='/' element={<Landing></Landing>} />
          <Route path='login' element={<Login></Login>} />
          <Route path='home' element={<Home></Home>} />
          <Route path='createProject' element={<CreateProject></CreateProject>} />
          <Route path='manageProject' element={<ManageProject></ManageProject>} />
        </Routes>
        
        {/* <AddFriend></AddFriend> */}
        {/* <AddBill></AddBill> */}
        {/* <Opacator></Opacator> */}

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;