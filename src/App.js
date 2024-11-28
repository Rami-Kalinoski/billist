import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoggedLayout from './layouts/LoggedLayout';
import Landing from './views/Landing';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import CreateProject from './views/CreateProject';
import Project from './views/Project';

function App() {
  // if (localStorage.getItem('isLogged') === null) {
  //   localStorage.setItem('isLogged', false)
  // };
  localStorage.setItem('isLogged', false)
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoggedLayout />}>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/createProject' element={<CreateProject />} />
            <Route path="/project/:id" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;