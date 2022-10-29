import React from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';

import styles from './checkout.styles.module.css'


const Checkout = () => {

  const {cartItems, cartTotal } = useContext(CartContext);
  console.log(cartItems);
  
  const handleDelete = () => {
    cartItems.filter((item, id) => item.id === id)
    console.log(cartItems);
  }

  
  
  


  return (
    <div className={styles.checkoutContainer } >
      <div className='checkout-header'>
        <h4 className={styles.checkoutHeader} >product</h4>
        <h4 className={styles.headerBlock} >quantity</h4>
        <h4 className={styles.headerBlock}>description</h4>
        <h4 className={styles.headerBlock}>price</h4>
        <h4 className={styles.headerBlock}>remove</h4>        
      </div>
      {cartItems.map((cardItem) => (
        <CheckoutItem key={cardItem.id} cartItem={cardItem} handleDelete={handleDelete}/>
      ))}
      <div className={styles.total} >£{cartTotal}</div>
    </div>
    
  )
}

export default Checkout