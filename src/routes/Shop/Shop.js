import React from 'react';
import { useContext } from 'react';
import ProductCard from '../../components/product-card/ProductCard';

import {ProductsContext} from '../../context//Products.context';
import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  
  
  
  return (
    <div className='products-container'>
      {products.map((product) => (
        <div key={product.id} >
          <ProductCard product={product}/>
        </div>
      ))} 
    </div>
  )
}

export default Shop