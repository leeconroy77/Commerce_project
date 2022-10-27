import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import './cart-dropdown.scss'



const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate();

  console.log(cartItems);

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>{
        cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}/>
        ))
      }
      </div>
        <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>   
    </div>
  )
}

export default CartDropdown