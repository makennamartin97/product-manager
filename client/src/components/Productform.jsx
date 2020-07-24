import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';


const Productform = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const [errors, setErrors] = useState({});

    const onSubmit = e => {
        e.preventDefault();
        const newproduct = {title, price, desc};
        axios.post('http://localhost:8000/api/products', newproduct)
            .then(res => {
                console.log("Response:", res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                    
                }
                
            }).catch(err => console.log("Error:", err));
            
    }
    return(
        <div>
        <div className="jumbotron bg-info text-light text-center lead ">
            <h2>products.com</h2>
            <a className="btn btn-sm btn-light text-info"href="/">Home</a><a href="/new"className="btn btn-sm btn-light text-info">New</a>
        </div>
        <form onSubmit={onSubmit}>
            <div className="col d-flex justify-content-center ">
                <div className="card" style={{width: "18rem", margin: "11px"}}>
                    <div className="card-header bg-info text-light text-center">New Product</div>
                    <div className="card-body">
                        <div className="text-dark">
                            <label htmlFor="title">Product:</label>
                            <br />
                            <input className="input-group mb-2"type="text"id="title" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                            <br />
                            <label htmlFor="price">Price:</label>
                            <br />
                            <input className="input-group mb-2" type="number"id="price" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
                            <br />
                            <label htmlFor="desc">Description:</label>
                            <br />
                            <input className="input-group " type="text"id="desc" value={desc} onChange = {(e)=>setDesc(e.target.value)}/>
                        </div>
                        
                    </div>
                    <div className="text-center mb-3 ">
                        <input type="submit" className="btn btn-outline-info "/>
                    </div>
                    
                </div>
 
            </div>

        </form>
        </div>
    )


}

export default Productform;

