import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loader from './loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, featchProduct } from '../store/action/product';
import Navigation from './navigation/Navigation';



const Product = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const items = useSelector(state=>state.product.products)
    const totalitems = useSelector(state=>state.product.totalCartsItem)
    useEffect(() => {
       dispatch(featchProduct(() =>{
           setLoading(false)
       },() => {
        setLoading(false)
       }))
    }, [])
    
    const addToCarts = (id, product) => {
        dispatch(addToCart(id, product,() =>{
            //setLoading(false)
        },() => {
         //setLoading(false)
        }))
    }

    if(loading){
        return <Loader/>
    }

    return (
        <div>
            <Navigation />
            {/* ------------menu end--------- */}
           <div className="container mt-5">
            <div className="row d-flex justify-content-center g-1">
                {
                    items.map((i,key)=>(
                        <div className="col-md-4" key={key}>
                            <div className="product text-center"> 
                              <Link className="gocart" to={"/Productdetail/"+i.id}>
                                <div className="prod-img"> <img loading="lazy" src={i.image} width="250" /></div>
                                <div className="about text-left px-3">
                                    <h4>{i.category}</h4> 
                                    <span className="text-muted">Home decor</span>
                                    <h3>${i.price}</h3>
                                </div> 
                                {/* <span className="dot">
                                <span className="inner-dot"><i className="fa fa-plus"></i></span>
                                </span> */}
                                </Link>
                                <div className="text-center">
                                   <button className="btn" onClick={()=>addToCarts(i.id, i)}>Add to cart</button>
                                </div>
                             </div>
                        </div>
                    ))
                }
                
               
                </div>
            </div>
        </div>
    )
}
export default Product