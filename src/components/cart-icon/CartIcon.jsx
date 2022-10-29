import React from 'react'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react'

import { CartContext } from '../../context/Cart.context'

import styles from './cart-icon.styles.module.css'


const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCounter} = useContext(CartContext);
  

  const handleClick = () => 
    setIsCartOpen(!isCartOpen);

  

  return (
    <div className={styles.cartIconContainer}  onClick={handleClick}>
      <ShoppingIcon className={styles.shoppingIcon} />
        <span className={styles.itemCount} >{cartCounter}</span>
    </div>
  )
}




export default CartIcon;