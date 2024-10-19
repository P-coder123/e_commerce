import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { items } from "./Data";

import Product from "./Product";


const ProductDetail=()=>{
    const {id}=useParams();
    const [product,setProduct]=useState({});
    const [releatedProduct , setReleatedProduct]=useState([]);


    useEffect(()=>{
        const fillterProduct = items.filter((product)=>product.id==id)
        
        setProduct(fillterProduct[0])
        console.log(fillterProduct[0])

        const filterRelPrd = items.filter((p)=>p.category === product.category)
        //console.log(filterRelPrd)
        setReleatedProduct(filterRelPrd)

    },[id ,product.category])




    return(

        <>

        <div className="container">
            <div className="img">

                <img src={product.imgSrc} alt=""/>

                <div>
                <h1 className="card-title">{product.title}</h1>
                      <p className='card-text'>{product.description}</p>
                      <button className="btn btn-primary   mx-3" >{product.price}₹</button>
                      <button className="btn btn-warning">Add to cart</button>
                </div>
               

            </div>
        </div>

        <div className="container">
        <Product items={releatedProduct} style={{display:'flex'}}/>

        </div>
        </>
    )
}

export default ProductDetail