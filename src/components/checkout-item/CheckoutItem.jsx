import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import './checkout-item.scss'


const CheckoutItem = ({cartItem, handleDelete}) => {

  const {addItemsToCart, removeItemsFromCart,decrimentCartItem } = useContext(CartContext);
  const {name ,quantity, imageUrl, price} = cartItem;

 

  


const itemPrice = quantity * price

  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
          <img src={imageUrl} alt={`${name}`} />  
        </div>    
        <span className='name'>{name}</span>
        <span className='quantity'>
          <AiFillCaretLeft onClick={() => decrimentCartItem(cartItem)} className='arrow'/>
          {quantity} 
          <AiFillCaretRight onClick={() => addItemsToCart(cartItem)} className='arrow'/>
         </span>
        <span className='price'>
        £{itemPrice}
        </span>
        <span><AiOutlineClose onClick={() => removeItemsFromCart(cartItem)} className='remove-button'/></span>

    </div>
  )
}

export default CheckoutItem