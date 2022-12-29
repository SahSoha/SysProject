import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Pages/Products/Products';
import AddProduct from "./Pages/Add Product/AddProduct";
import UpdateProduct from "./Pages/Update Product/UpdateProduct";
import DeleteProduct from "./Pages/Delete Product/DeleteProduct";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/AddProduct" element={<AddProduct/>} />
          <Route path="/UpdateProduct" element={<UpdateProduct/>} />
          <Route path="/DeleteProduct" element={<DeleteProduct/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
