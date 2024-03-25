import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './files/login';
import Signup from './files/signup';
import Home from './files/home';
import WelcomePage from './files/welcomePage';
// import Nav from './files/nav';

function App() {
  
  return (
        <div className='App'>
          <BrowserRouter>     
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />                
                <Route path='/welcome' element={<WelcomePage/>} />                
            </Routes>
          </BrowserRouter>
        </div>
    
  );
}

export default App;
