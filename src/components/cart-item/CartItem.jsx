import React from 'react'
import styles from './cart-item.style.module.css'

const CartItem = ({cartItem}) => {
  const {name ,quantity, imageUrl, price} = cartItem;
  return (
    <div className={styles.cartItemContainer} >
      <img className={styles.image}  src={imageUrl} alt={`${name}`} />
      <div className={styles.itemDetails} >
        <span className={styles.name} >{name}</span>
        <span className={styles.price} >
        {quantity} * £{price}
        </span>
      </div>
      
    </div>
  )
}

export default CartItem