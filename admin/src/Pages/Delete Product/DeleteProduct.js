import React from "react";
import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./DeleteProduct.css";

const DeleteProduct =()=>{
    return(
      <Fragment>
      <Navbar></Navbar>
      <section className="container">
        <h3 class="text">Delete Product</h3>
                <form class="form" >
            <div class="form-group">
                <input type="text" placeholder="Product Name" name="name" required />
              </div>

              <div class="form-group">
                <textarea type="text" placeholder="Description" name="name" required ></textarea>
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

          <input type="submit" class="submit" value="Delete Product " />

       
      </form>
      </section>
      </Fragment>
    )
};

export default DeleteProduct;