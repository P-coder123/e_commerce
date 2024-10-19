import React from "react";
//import { items } from "./Data";

import { Link } from "react-router-dom";

const Product = ({item}) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {item.map((product, id) => {
            return (
              <>
                <div key={id} className="col-lg-4 my-3">
                  <div className='card' style= {{width: '18rem'}} >
                    <Link to={`/product/${product.id}`} >
                    
                    
                    <img className="card-img-top" src={product.imgSrc} />

                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className='card-text'>{product.description}</p>
                      <button className="btn btn-primary   mx-3" >{product.price}₹</button>
                      <button className="btn btn-warning">Add to cart</button>
                    </div>
                  </div>
                </div>
              </> 
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
