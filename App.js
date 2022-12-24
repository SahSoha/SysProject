import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/Homebage';
import Login from './pages/Login';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Router><title>test</title>
        <Routes>
          <Route path='/' element={<HomePage>dd</HomePage>} />
          <Route  path ='/login' element={<Login/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;