import React from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';

import './checkout.styles.scss'

const Checkout = () => {

  const {cartItems, cartTotal } = useContext(CartContext);
  console.log(cartItems);
  
  const handleDelete = () => {
    cartItems.filter((item, id) => item.id === id)
    console.log(cartItems);
  }

  
  
  


  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <h4 className='header-block'>product</h4>
        <h4 className='header-block'>description</h4>
        <h4 className='header-block'>quantity</h4>
        <h4 className='header-block'>price</h4>
        <h4 className='header-block'>remove</h4>        
      </div>
      {cartItems.map((cardItem) => (
        <CheckoutItem key={cardItem.id} cartItem={cardItem} handleDelete={handleDelete}/>
      ))}
      <div className='total'>£{cartTotal}</div>
    </div>
    
  )
}

export default Checkout