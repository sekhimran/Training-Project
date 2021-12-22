import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Loader from './loader';
import { useDispatch, useSelector } from 'react-redux';
import { featchProductDetails,addToCart, removeFromCart } from '../store/action/product';
import Navigation from './navigation/Navigation';


const Productdetail = (props) => {

const pid = props.match.params.id

const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();
    const itemDetails = useSelector(state=>state.product.productDetails)
    let cartDetails = useSelector(state=>state.product.carts.find(i => i.id == pid))
    const carts = useSelector(state=>state.product.carts)
    const [cartvalue, setCartValue] =  React.useState(cartDetails !=null && cartDetails.qty?cartDetails.qty:0);
    console.log('hello',cartDetails)

    React.useEffect(() => {
       dispatch(featchProductDetails(pid,() =>{
           setLoading(false)
       },() => {
        setLoading(false)
       }))
    }, [])


    const addToCarts = (e) => {
        e.preventDefault()
        dispatch(addToCart(pid, itemDetails,() =>{
            //setLoading(false)
            setCartValue(cartvalue+1)
        },() => {
         //setLoading(false)
        }))
    }


    const removeFromCarts = (e) => {
        e.preventDefault()
        dispatch(removeFromCart(pid, itemDetails,() =>{
            //setLoading(false)           
            if(cartvalue==1){
                setCartValue(0)                
            }
            else{
                setCartValue(cartvalue-1)
            }
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
        <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="images p-3">
                                <div class="text-center p-4">
                                    {itemDetails !='' && itemDetails.image && 
                                    <img id="main-image" src={itemDetails.image} width="250" />
                                    }
                                    </div>
                                {/* <div class="thumbnail text-center"> 
                                    <img onclick="change_image(this)" src="https://i.imgur.com/Rx7uKd0.jpg" width="70"/> 
                                    <img onclick="change_image(this)" src="https://i.imgur.com/Dhebu4F.jpg" width="70"/> 
                                </div> */}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="product2 p-4">
                                
                                <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">Orianz</span>
                                    {itemDetails !='' && itemDetails.category && 
                                    <h5 class="text-uppercase">{itemDetails.category}</h5>
                                    }
                                    
                                    <div class="price d-flex flex-row align-items-center"> 
                                        <div class="ml-2"> 
                                        {itemDetails !='' && itemDetails.price && 
                                        (
                                        <>
                                         {/* <span class="act-price">$20</span> */}
                                        <small class="act-price">${itemDetails.price}</small> <span>40% OFF</span>
                                        </>)
                                        }
                                         
                                        </div>
                                    </div>
                                </div>
                                <p class="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                                <div class="sizes mt-5">
                                    <h6 class="text-uppercase">Size</h6> <label class="radio"> 
                                    <input type="radio" name="size" value="S" checked /> <span>S</span> </label> 
                                    <label class="radio"> <input type="radio" name="size" value="M" /> <span>M</span> </label> 
                                    <label class="radio"> <input type="radio" name="size" value="L"/> <span>L</span> </label> 
                                    <label class="radio"> <input type="radio" name="size" value="XL"/> <span>XL</span> </label>
                                     <label class="radio"> <input type="radio" name="size" value="XXL"/> <span>XXL</span> </label>
                                </div>
                                 <div class="d-flex col-md-4 mt-4">
                                    <span class="input-group-btn">
                                        <button onClick={removeFromCarts} type="button" class="btn-default btn-number"  data-type="minus" data-field="quant[1]">
                                        <i className="fa fa-minus"></i>
                                        </button>
                                    </span>
                                    <input type="text" name="quant[1]" class="form-control input-number" value={cartvalue} min="1" max="10"/>
                                    <span class="input-group-btn">
                                        <button onClick={addToCarts} type="button" class="btn-default btn-number" data-type="plus" data-field="quant[1]">
                                        <i className="fa fa-plus"></i>
                                        </button>
                                    </span>
                                 </div> 
                                <div class="cart mt-4 align-items-center"> 
                                <button onClick={addToCarts} class="btn btn-danger text-uppercase">Add to cart</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    )
}
export default Productdetail