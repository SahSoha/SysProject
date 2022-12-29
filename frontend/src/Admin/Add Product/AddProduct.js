import React from "react";
import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AddProduct.css";

const AddProduct =()=> {
    return(

      <Fragment>
      <Navbar></Navbar>
      <section className="container">
        <h3 class="text">Add Product</h3>
                <form class="form" >
            <div class="form-group">
                <input type="text" placeholder="Product Name" name="name" required />
              </div>

              <div class="form-group">
                <textarea type="text" placeholder="Description" name="name" required ></textarea>
              </div>

              <div class="form-group">
                 <input type="number" placeholder="Product Price" name="number" min="5" required/>
              </div>

          <div class="form-group">
            <input type="text" placeholder="Category" name="name" required/>
          </div>

          <div class="form-group">
            <label class="D">expire_date</label>
            <input type="date" placeholder="expire_date" name="date" required/>
          </div>

          <div class="form-group">
            <input type="number" placeholder="Units in Stock" name="number" required/>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                <div className="tm-product-img-dummy mx-auto">
                  <i className="fas fa-cloud-upload-alt tm-upload-icon"
                    onclick="document.getElementById('fileInput').click();"></i>
                </div>
                <div className="custom-file mt-3 mb-3">
                  <input id="fileInput" type="file" />
                  <input type="button" className="upload"
                    value="UPLOAD PRODUCT IMAGE"
                    onclick="document.getElementById('fileInput').click();"/>
                </div>
              </div>

          <input type="submit" className="submit" value="Add Product now" />

       
      </form>
      </section>
      </Fragment>
    )
};

export default AddProduct;