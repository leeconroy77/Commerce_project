import React, { Fragment } from 'react'
import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import { CategoriesContext} from '../../context/Categories.context';
import ProductCard from '../../components/product-card/ProductCard';


import styles from './category.styles.module.css'
const Category = () => {

  const {category } = useParams();
  const { categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {

    setProducts(categoriesMap[category])
  }, [category, categoriesMap]);
  
  return (
    <Fragment>
      <h2 className={styles.categoryTitle} >{category.toUpperCase()}</h2>
      <div className={styles.categoryContainer} >
        {
        products && 
          products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
      </div>
    </Fragment>
  )

}

export default Category