import './assets/styles/App.css';
import './components/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import React from 'react';
import Usuarios from './components/Usuarios';


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Usuarios' element={<Usuarios />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;