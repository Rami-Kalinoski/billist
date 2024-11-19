import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoggedLayout from './layouts/LoggedLayout';
import Landing from './views/Landing';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';

function App() {
  if (localStorage.getItem('isLogged') === null) {
    localStorage.setItem('isLogged', false)
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoggedLayout />}>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;