import React, {useEffect, useState} from 'react';
import './App.css';
import Productform from './components/Productform';
import { Link, Router } from '@reach/router';
//import {Router} from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Display from "./components/Display";
import Update from './views/Update';

function App() {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[]);
    const removeFromDom = _id => {
      setProducts(products.filter(product => product._id != _id));
    }
  
    
  return (
    <div>
      <Router className="my-5">
        <Display path="/" />
        <Productform path="/new" />
        <Details path="/:_id"/>
        <Update path="/:_id/edit"/>
        {loaded && <Display products={products} removeFromDom={removeFromDom}/>}

  
    
      </Router>


        
    </div>
    
  );
}

export default App;
