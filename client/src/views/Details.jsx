import React, { useEffect, useState } from 'react';
import { navigate, Link, Router } from '@reach/router';
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props._id)
            .then(res => setProduct(res.data))
    }, [])
    
   
    return (
        <>
            <div className="jumbotron bg-info text-light text-center lead ">
                <h2>products.com</h2>
                <a className="btn btn-sm btn-light text-info"href="/">Home</a><a href="/new"className="btn btn-sm btn-light text-info">New</a>
            </div>
            <div className="col d-flex justify-content-center ">
            <div className="card border-info">
                <div className="card-header text-center text-info lead">{product.title}</div>
                <div className="card-body">
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.desc}</p>
                    <p>Product ID: {product._id}</p>
                </div>
                <div className="text-center mb-3">
                    <Link className="btn btn-info" to={"/" + product._id + "/edit"}>Update</Link>
                </div>

            </div>
            </div>
        </>
    )
}
