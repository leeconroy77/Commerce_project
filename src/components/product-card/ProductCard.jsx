import React from 'react'

import { useContext } from 'react';
import { CartContext} from '../../context/Cart.context';

import Button from '../button/Button'
import styles from './productCard.styles.module.css'


const ProductCard = ({product}) => {
  const {name, price, imageUrl } = product;
  const {addItemsToCart} = useContext(CartContext)

  const addProductToCart = () => addItemsToCart(product)
  

  return (
    <div className={styles.productCardContainer} >
      <img className={styles.image}  src={imageUrl} alt={`${name}`} />
      <div className={styles.footer} >
        <span className={styles.name} >{name}</span>
        <span className={styles.price} >{price}</span>
      </div>
      <Button className={styles.button}  buttonType='inverted' onClick={addProductToCart} >Add to card</Button>
    </div>
  )
}



export default ProductCard