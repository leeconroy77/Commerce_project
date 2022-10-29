import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import styles from './checkout-item.module.css'

const CheckoutItem = ({cartItem, handleDelete}) => {

  const {addItemsToCart, removeItemsFromCart,decrimentCartItem } = useContext(CartContext);
  const {name ,quantity, imageUrl, price} = cartItem;

 

  


const itemPrice = quantity * price

  return (
    <div className={styles.checkoutItemContainer} >
        <div className={styles.imageContainer} >
          <img className={styles.image}  src={imageUrl} alt={`${name}`} />  
        </div>    
        <span className={styles.name} >{name}</span>
        <span className={styles.quantity} >
          <AiFillCaretLeft onClick={() => decrimentCartItem(cartItem)} className={styles.arrow} />
          {quantity} 
          <AiFillCaretRight onClick={() => addItemsToCart(cartItem)} className={styles.arrow} />
         </span>
        <span className={styles.price} >
        £{itemPrice}
        </span>
        <span><AiOutlineClose onClick={() => removeItemsFromCart(cartItem)} className={styles.removeButton} /></span>

    </div>
  )
}

export default CheckoutItem