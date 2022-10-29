import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import styles from  './cart-dropdown.module.css'



const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate();

  console.log(cartItems);

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  };

  return (
    <div className={styles.cartDropdownContainer} >
      <div className={styles.cartItems} >
        {
          cartItems.length ? (
       
        cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}/>
        ))) : (
          <span className={styles.emptyMessage}  >Your cart is empty!</span>
        )
      }
      </div>
        <Button className={styles.button}  onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>   
    </div>
  )
}

export default CartDropdown