import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link, Router } from '@reach/router';

export default props => {
    const { _id } = props;
    const [title, settitle] = useState('');
    const [price, setprice] = useState();
    const [desc, setdesc] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + _id)
            .then(res => {
                settitle(res.data.title);
                setprice(res.data.price);
                setdesc(res.data.desc);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + _id, {
            title,
            price,
            desc
        })
            .then(res => console.log(res));
            navigate("/");
    }
    
    return (
        <>
            <div className="jumbotron bg-info text-light text-center lead ">
                <h2>products.com</h2>
                <a className="btn btn-sm btn-light text-info"href="/">Home</a><a href="/new"className="btn btn-sm btn-light text-info">New</a>
            </div>
            <div className="col d-flex justify-content-center ">
                <div className="card border-info"style={{width:"350px"}}>
                    <div className="card-header text-center bg-info text-light lead">Update Product</div>
                    <form onSubmit={updateProduct}>
                        <div className="card-body">
                            <p>
                                <label>Product:</label><br />
                                <input type="text" 
                                    className="input-group mb-3"
                                    name="title" 
                                    value={title} 
                                    onChange={(e) => { settitle(e.target.value) }} />
                            </p>
                            <p>
                                <label>Price:</label><br />
                                <input type="number"
                                className="input-group mb-3"
                                name="price" 
                                value={price} 
                                onChange={(e) => { setprice(e.target.value) }} />
                            </p>
                            <p>
                                <label>Description:</label><br />
                                <input type="text"
                                className="input-group"
                                name="desc" 
                                value={desc} 
                                onChange={(e) => { setdesc(e.target.value) }} />
                            </p>
                        </div>
                        <div className="text-center mb-3">
                            <input type="submit" className="btn btn-outline-info "/>
                        </div>
                    </form>

                </div>
            </div>
           
        </>
    )
}