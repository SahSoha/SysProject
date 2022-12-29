import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import HomePage from './Pages/HomePage/Homebage';
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  
  return (

    <div className="App">
       <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
        <Route path="/"element={<ProductScreen/>}/>
        <Route path="/"element={<HomeScreen/>}/>
        <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    
      </main>
      </div>
 
  );
}

export default App;
