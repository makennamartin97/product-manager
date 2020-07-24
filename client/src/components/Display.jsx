import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const Display = props => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/allproducts")
            .then( res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    const { removeFromDom } = props;
    const deleteProduct = (_id) => {
        console.log(_id);
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                //removeFromDom(_id);
                //navigate("/");
                console.log(res);
                axios.get("http://localhost:8000/api/allproducts")
                .then( res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    return(
        <div className=" justify-content-center">
            <div className="jumbotron bg-info text-light text-center lead ">
                <h2>products.com</h2>
                <a className="btn btn-sm btn-light text-info"href="/">Home</a><a href="/new"className="btn btn-sm btn-light text-info">New</a>
            </div>
            {products.map((prod, i)=> 
            <div className="justify-content-center" style={{ display: "inline-block"}}>
                <div className="card border-info " style={{width:"18rem",margin:"22px"}} key={prod._id}>
                    <div className="card-header bg-muted text-info text-center lead"style={{margin:"0px"}}>{prod.title}</div>
                    <div className="card-body text-dark">
                        <p>Price: ${prod.price}</p>
                        <p>Description: {prod.desc}</p>
                        <div className="col text-center">
                            <Link className="btn btn-info" to={`/${prod._id}`}>See Details</Link>
                            <button className="btn btn-sm btn-danger m-1" onClick={(e)=>{deleteProduct(prod._id)}}>Delete</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        
 
            
        )}
   
        <div className="text-center mt-4">
            <Link className="btn btn-outline-info" to={'/new'}>Add Product</Link>


        </div>
        
        
        </div>
    )
}
export default Display;
