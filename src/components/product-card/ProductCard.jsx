import React from 'react'

import Button from '../button/Button'
import './productCard.styles.scss'

const ProductCard = ({product}) => {
  const {name, price, imageUrl } = product;

  const selectedItems = []

 const handleSectedItems = () => {
   selectedItems.push(name)
  }

  console.log(selectedItems);
  

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType='inverted' onClick={handleSectedItems}>Add to card</Button>
    </div>
  )
}



export default ProductCard