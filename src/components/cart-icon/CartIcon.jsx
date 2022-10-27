import React from 'react'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react'

import { CartContext } from '../../context/Cart.context'

import './cart-icon.styles.scss'


const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCounter} = useContext(CartContext);
  

  const handleClick = () => 
    setIsCartOpen(!isCartOpen);

  

  return (
    <div className='cart-icon-container' onClick={handleClick}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartCounter}</span>
    </div>
  )
}




export default CartIcon;