import React, {useEffect, useState} from 'react';
import Productform from '../components/Productform';
import Display from '../components/Display';
import axios from 'axios';

export default () => {
    const [prod, setProd] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProd(res.data);
                setLoaded(true);
            });
    },[]);
    const removeFromDom = _id => {
        setProd(prod.filter(product => product._id != _id));
    }
    
    //const [message, setMessage] = useState("Loading...");

    //useEffect(()=> {
     //   axios.get("http://localhost:8000/api")
     //       .then(res => {
    //            setMessage(res.data.message)
    //        })
    //}, []);

    return(
        <>
        <Productform />
    
        {loaded && <Display prod={prod} removeFromDom={removeFromDom}/>}
      
        </>
    
    )
}